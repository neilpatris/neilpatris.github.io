
$(document).ready(function(){
    let allProjects = [];

    $.getJSON("js/fr_projects.json?t=" + new Date().getTime(), function(data){
        allProjects = data;
        displayProjects(allProjects);
    }).fail(function(){
        console.log("Erreur lors du chargement des projets !");
    });

    function displayProjects(projects) {
        let projectContainer = $(".main");
        projectContainer.html("");

        projects.forEach(project => {
            let categoriesHTML = project.categories.map(cat => `<span class="badge bg-secondary">${cat}</span>`).join(" ");

            let gameBuildLink = "";
            if (project.links && project.links.length > 0 && project.links[0].text === "Game Build") {
                gameBuildLink = `<br><a href="${project.links[0].url}" target="_blank">Game Build</a>`;
            }

            let projectHTML = `
                <div class="skewed" data-id="${project.id}">
                    <div class="text">
                        <h1>${project.title}</h1>
                        <div class="project-categories">${categoriesHTML}</div>
                        <div class="project-identity">
                            ${project.project_info ? `
                                <div class="info-box">
                                    <span class="label-info">Team</span>
                                    <span class="info-value">${project.project_info.team_size}</span>
                                </div>
                                <div class="info-box">
                                    <span class="label-info">Time</span>
                                    <span class="info-value">${project.project_info.development_time}</span>
                                </div>
                                <div class="info-box">
                                    <span class="label-info">Engine</span>
                                    <span class="info-value">${project.project_info.engine}</span>
                                </div>
                                <div class="info-box">
                                    <span class="label-info">Role</span>
                                    <span class="info-value">${project.project_info.role}</span>
                                </div>
                            ` : ""}
                            ${gameBuildLink ? `
                                <div class="info-box">
                                    <span class="label-info">Build</span>
                                    <a href="${project.links[0].url}" target="_blank" class="game-build-link">itch.io</a>
                                </div>
                            ` : ""}                                               
                        </div>
                        <a href="#" data-id="${project.id}" class="read-more-text">More details</a>
                    </div>
                    <div class="image">
                        <div>
                            <img src="${project.images[0]}" alt="${project.title}">
                        </div>
                    </div>
                </div>
            `;
            projectContainer.append(projectHTML);
        });
    }

    // Ouvre la modale au clic
    $(document).on("click", ".read-more-text", function(e) {
        e.preventDefault();
        const projectId = $(this).data("id");
        const project = allProjects.find(p => p.id === projectId);
        if (!project) return;

        $("body").css("overflow", "hidden");

        let modalHTML = `<h2 class="title">${project.title}</h2>`;

        if (project.pitch) {
            modalHTML += `<p><em>${project.pitch}</em></p>`;
        }

        if (project.project_info) {
            modalHTML += `<h3>Project Infos</h3><ul>`;
            for (const [key, value] of Object.entries(project.project_info)) {
                modalHTML += `<li><strong>${key.replace("_", " ")}:</strong> ${value}</li>`;
            }
            modalHTML += `</ul>`;
        }

        if (project.about_project && project.about_project.length > 0) {
            modalHTML += `<h3>About The Project</h3>`;
            project.about_project.forEach(paragraph => {
                modalHTML += `<p>${paragraph}</p>`;
            });
        }

        if (project.development) {
            modalHTML += `<h3>Project Development</h3>`;
            for (const [category, items] of Object.entries(project.development)) {
                modalHTML += `<h4>${category.replace("_", " ")}</h4>`;
                if (items.length > 1) {
                    modalHTML += `<ul>`;
                    items.forEach(item => {
                        modalHTML += `<li>${item}</li>`;
                    });
                    modalHTML += `</ul>`;
                } else if (items.length === 1) {
                    modalHTML += `<p>${items[0]}</p>`;
                }
            }
        }

        if (project.assets_resources && Object.values(project.assets_resources).some(value => value.trim() !== "")) {
            modalHTML += `<h3>Assets & Resources</h3><ul>`;
            for (const [key, value] of Object.entries(project.assets_resources)) {
                if (value.trim() === "") continue;
                const formattedValue = value.replace(
                    /(https?:\/\/[^\s,]+)/g,
                    ' <a href="$1" target="_blank">Lien</a>'
                );
                modalHTML += `<li><strong>${key.replace("_", " ")}:</strong> ${formattedValue}</li>`;
            }
            modalHTML += `</ul>`;
        }

        if (project.links && Array.isArray(project.links)) {
            const validLinks = project.links.filter(link => link && link.url && link.text);
            if (validLinks.length > 0) {
                modalHTML += `<h3>Links</h3>`;
                validLinks.forEach(link => {
                    modalHTML += `<p><a href="${link.url}" target="_blank">${link.text}</a></p>`;
                });
            }
        }

        if (project.images && project.images.length > 1) {
            modalHTML += `<h3>Gallery</h3><div class="project-images">`;
            project.images.forEach((image, index) => {
                if (index !== 0) {
                    modalHTML += `<div><img src="${image}" alt="Project Image" style="width: 100%; margin-bottom: 1rem;"></div>`;
                }
            });
            modalHTML += `</div>`;
        }

        $("#project-modal-body").html(modalHTML);
        $("#project-modal").fadeIn();
        $(".project-modal-content").scrollTop(0);
    });

    // Ferme la modale
    $(document).on("click", ".project-modal-close, .project-modal-backdrop", function() {
        $("body").css("overflow", "");
        $("#project-modal").fadeOut();
    });
});
