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
        projectContainer.html(""); // On vide le container principal
    
        projects.forEach(project => {
            let categoriesHTML = project.categories.map(cat => `<span class="badge bg-secondary">${cat}</span>`).join(" ");
    
            let gameBuildLink = "";
            if (project.links && project.links.length > 0 && project.links[0].text === "Game Build") {
                gameBuildLink = `<br><a href="${project.links[0].url}" target="_blank">Game Build</a>`;
            }
    
            let projectHTML = `
                <div class="skewed" data-categories='${JSON.stringify(project.categories)}'>
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
                        <a href="project.html?id=${project.id}" class="read-more-text">More details</a>
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
    

    $(".filter-btn").click(function() {
        let selectedCategory = $(this).data("filter");
        $(".main").addClass("loading");
    
        setTimeout(() => {
            $(".filter-btn").removeClass("active");
            $(this).addClass("active");
    
            if (selectedCategory === "all") {
                displayProjects(allProjects);
            } else {
                let filteredProjects = allProjects.filter(project =>
                    project.categories.includes(selectedCategory)
                );
                displayProjects(filteredProjects);
            }
    
            $(".main").removeClass("loading");
        }, 300);
    });    
});