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

            let projectHTML = `
                <div class="skewed" data-categories='${JSON.stringify(project.categories)}'>
                    <div class="text">
                        <h1>${project.title}</h1>
                        <p>${project.about_project[0].substring(0, 150)}...</p>
                        <div>${categoriesHTML}</div>
                        <a href="project.html?id=${project.id}">Read More &rarr;</a>
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