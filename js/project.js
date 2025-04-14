$(document).ready(function(){
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get("id");

    $.getJSON("js/fr_projects.json?t=" + new Date().getTime(), function(data){
        let project = data.find(p => p.id === projectId);

        if (project) {
            $(".title").text(project.title);

            if (project.videos && project.videos.length > 0) {
                let firstVideoURL = project.videos[0];

                if (firstVideoURL.includes("watch?v=")) {
                    firstVideoURL = firstVideoURL.replace("watch?v=", "embed/");
                } else if (firstVideoURL.includes("/shorts/")) {
                    let videoID = firstVideoURL.split("/shorts/")[1];
                    firstVideoURL = `https://www.youtube.com/embed/${videoID}`;
                }

                let firstVideoHTML = `<iframe class="embed-responsive-item ratio-16x9" width="560" height="315" src="${firstVideoURL}" title="YouTube Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;

                $("#video-container").html(firstVideoHTML);
            }

            // Pitch
            if (project.pitch) {
                $("#pitch").html(`<p>${project.pitch}</p>`);
            }

            // Project Info
            if (project.project_info) {
                let projectInfoHTML = "";
                for (const [key, value] of Object.entries(project.project_info)) {
                    projectInfoHTML += `<li><strong>${key.replace("_", " ")}:</strong> ${value}</li>`;
                }
                $("#project-info").html(projectInfoHTML);
            }

            // About The Project
            let contentHTML = "";
            if (project.about_project && project.about_project.length > 0) {
                contentHTML += `<h3>About The Project</h3>`;
                project.about_project.forEach(paragraph => {
                    contentHTML += `<p>${paragraph}</p>`;
                });
            }

            // Development Sections
            if (project.development) {
                contentHTML += `<h3>Project Development</h3>`;
                for (const [category, items] of Object.entries(project.development)) {
                    contentHTML += `<h4>${category.replace("_", " ")}</h4>`;
                    if (items.length > 1) {
                        contentHTML += `<ul>`;
                        items.forEach(item => {
                            contentHTML += `<li>${item}</li>`;
                        });
                        contentHTML += `</ul>`;
                    } else if (items.length === 1) {
                        contentHTML += `<p>${items[0]}</p>`;
                    }
                }
            }

            // Assets & Resources
            if (
                project.assets_resources &&
                Object.values(project.assets_resources).some(value => value.trim() !== "")
            ) {
                contentHTML += `<h3>Assets & Resources</h3><ul>`;

                for (const [key, value] of Object.entries(project.assets_resources)) {
                    if (value.trim() === "") continue;

                    const formattedValue = value.replace(
                        /(https?:\/\/[^\s,]+)/g,
                        ' <a href="$1" target="_blank">Lien</a>'
                    );

                    contentHTML += `<li><strong>${key.replace("_", " ")}:</strong> ${formattedValue}</li>`;
                }

                contentHTML += `</ul>`;
}


            $("#project-description").html(contentHTML);


            // Images
            if (project.images && project.images.length > 1) {
                let imagesHTML = `<h3>Gallery</h3><div class="project-images">`;
            
                project.images.forEach((image, index) => {
                    if (index !== 0) {
                        imagesHTML += `<div><img src="${image}" alt="Project Image"></div>`;
                    }
                });
            
                imagesHTML += `</div>`;
                $("#image-container").html(imagesHTML);
            }            

            if (project.videos && project.videos.length > 1) {
                let videosHTML = `<h3>Additional Videos</h3>`;
                
                for (let i = 1; i < project.videos.length; i++) {
                    let extraVideoURL = project.videos[i];

                    if (extraVideoURL.includes("watch?v=")) {
                        extraVideoURL = extraVideoURL.replace("watch?v=", "embed/");
                    } else if (extraVideoURL.includes("/shorts/")) {
                        let videoID = extraVideoURL.split("/shorts/")[1];
                        extraVideoURL = `https://www.youtube.com/embed/${videoID}`;
                    }

                    videosHTML += `<iframe class="embed-responsive-item ratio-16x9" width="560" height="315" src="${extraVideoURL}" title="YouTube Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
                }

                $("#videosup-container").html(videosHTML);
            }

            // Links
            if (project.links && Array.isArray(project.links)) {
                const validLinks = project.links.filter(link => link && link.url && link.text);

                if (validLinks.length > 0) {
                    let linksHTML = ``;
                    validLinks.forEach(link => {
                        linksHTML += `<p><a href="${link.url}" target="_blank">${link.text}</a></p>`;
                    });
                    $("#project-links").html(linksHTML);
                } else {
                    $(".project-links").hide();
                }
            } else {
                $(".project-links").hide();
            }
            
        } else {
            $(".title").text("Project Not Found");
            $("#project-description").text("The project you are looking for does not exist.");
        }
    }).fail(function(){
        console.log("Error loading project data!");
    });
});
