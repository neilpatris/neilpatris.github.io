//////////////////////////////////////////////////////////////////////////
// FIELDS
//////////////////////////////////////////////////////////////////////////
const proProjectsGrid = document.getElementById("pro-projects-grid");
const projectsGrid = document.getElementById("projects-grid");
const gameJamGrid = document.getElementById("game-jam-grid");
const projectModal = document.getElementById("project-modal");
const modalBody = document.getElementById("modal-body");
const mediaViewer = document.getElementById("media-viewer");

const labels = translations[currentLang];

let proProjects = PRO_PROJECTS_EN;
let allProjects = PROJECTS_EN;

if (currentLang === "fr")
{
    proProjects = PRO_PROJECTS_FR;
    allProjects = PROJECTS_FR;
}

const projects = getProjectsWithoutCategory(allProjects, "Game Jam");
const gameJamProjects = getProjectsWithCategory(allProjects, "Game Jam");

const platformLogos = {
    "Steam": "img/steam-logo.png",
    "Meta Quest": "img/meta-logo.png",
    "Pico": "img/pico-logo.png",
    "PC": "img/pc-logo.svg"
};
//////////////////////////////////////////////////////////////////////////
// FUNCTIONS
//////////////////////////////////////////////////////////////////////////
startProjects();
//////////////////////////////////////////////////////////////////////////
function startProjects()
{
    renderCards(proProjects, proProjectsGrid);
    renderCards(projects, projectsGrid);
    renderCards(gameJamProjects, gameJamGrid);

    const filterButtons = document.querySelectorAll(".filter-btn");

    for (const button of filterButtons)
    {
        disableFilterIfEmpty(button);
        button.addEventListener("click", onFilterClicked);
    }

    const closeButtons = projectModal.querySelectorAll("[data-close]");

    for (const button of closeButtons)
    {
        button.addEventListener("click", closeModal);
    }

    mediaViewer.addEventListener("click", closeMediaViewer);
    document.addEventListener("keydown", onKeyPressed);
}
//////////////////////////////////////////////////////////////////////////
function getProjectsWithCategory(list, category)
{
    const result = [];

    for (const project of list)
    {
        if (project.categories.includes(category))
        {
            result.push(project);
        }
    }

    return result;
}
//////////////////////////////////////////////////////////////////////////
function getProjectsWithoutCategory(list, category)
{
    const result = [];

    for (const project of list)
    {
        if (!project.categories.includes(category))
        {
            result.push(project);
        }
    }

    return result;
}
//////////////////////////////////////////////////////////////////////////
function getSectionProjects(section)
{
    if (section === "pro")
    {
        return proProjects;
    }

    if (section === "jam")
    {
        return gameJamProjects;
    }

    return projects;
}
//////////////////////////////////////////////////////////////////////////
function getSectionGrid(section)
{
    if (section === "pro")
    {
        return proProjectsGrid;
    }

    if (section === "jam")
    {
        return gameJamGrid;
    }

    return projectsGrid;
}
//////////////////////////////////////////////////////////////////////////
function disableFilterIfEmpty(button)
{
    // Un filtre sans aucun projet dans sa section est grisé au lieu d'afficher une grille vide
    const filter = button.getAttribute("data-filter");
    const section = button.parentElement.getAttribute("data-section");

    if (filter === "all")
    {
        return;
    }

    const list = getSectionProjects(section);

    if (getProjectsWithCategory(list, filter).length === 0)
    {
        button.disabled = true;
    }
}
//////////////////////////////////////////////////////////////////////////
function renderCards(list, grid)
{
    grid.innerHTML = "";

    for (const project of list)
    {
        grid.appendChild(createCard(project));
    }
}
//////////////////////////////////////////////////////////////////////////
function createCard(project)
{
    const card = document.createElement("article");
    card.className = "project-card";

    let tags = "";

    for (const category of project.categories)
    {
        tags += `<span>${category}</span>`;
    }

    card.innerHTML = `
        <div class="project-thumb">
            <img src="${project.images[0]}" alt="${project.title}" loading="lazy">
        </div>
        <div class="project-info">
            <div class="project-tags">${tags}</div>
            <h3>${project.title}</h3>
            <p class="project-meta">${buildPlatformLogosHtml(project.project_info.platform)}</p>
            <span class="project-more">${labels.projectDetails}</span>
        </div>
    `;

    card.addEventListener("click", function()
    {
        openModal(project);
    });

    return card;
}
//////////////////////////////////////////////////////////////////////////
function buildPlatformLogosHtml(platformText)
{
    let html = "";

    for (const platform of platformText.split(", "))
    {
        html += `<img class="platform-logo" src="${platformLogos[platform]}" alt="${platform}" title="${platform}">`;
    }

    return html;
}
//////////////////////////////////////////////////////////////////////////
function openModal(project)
{
    let html = `<h2>${project.title}</h2>`;
    html += `<p class="modal-pitch">${project.pitch}</p>`;
    html += buildInfosHtml(project.project_info);
    html += buildAboutHtml(project.about_project);
    html += buildDevelopmentHtml(project.development);
    html += buildLinksHtml(project.links);
    html += buildVideosHtml(project.videos);
    html += buildGalleryHtml(project.images);

    modalBody.innerHTML = html;
    projectModal.hidden = false;
    document.body.style.overflow = "hidden";
    projectModal.querySelector(".modal-box").scrollTop = 0;

    const galleryItems = modalBody.querySelectorAll(".gallery-item");

    for (const item of galleryItems)
    {
        item.addEventListener("click", onGalleryItemClicked);
    }
}
//////////////////////////////////////////////////////////////////////////
function closeModal()
{
    projectModal.hidden = true;
    document.body.style.overflow = "";
}
//////////////////////////////////////////////////////////////////////////
function openMediaViewer(file)
{
    mediaViewer.innerHTML = buildMediaHtml(file, "");
    mediaViewer.hidden = false;
}
//////////////////////////////////////////////////////////////////////////
function closeMediaViewer()
{
    mediaViewer.hidden = true;
    mediaViewer.innerHTML = "";
}
//////////////////////////////////////////////////////////////////////////
function isVideo(file)
{
    return file.endsWith(".webm") || file.endsWith(".mp4");
}
//////////////////////////////////////////////////////////////////////////
function buildMediaHtml(file, className)
{
    if (isVideo(file))
    {
        return `<video class="${className}" src="${file}" autoplay loop muted playsinline></video>`;
    }

    return `<img class="${className}" src="${file}" alt="" loading="lazy">`;
}
//////////////////////////////////////////////////////////////////////////
function buildInfosHtml(infos)
{
    let html = "";
    html += buildInfoHtml(labels.infoTeam, infos.team_size);
    html += buildInfoHtml(labels.infoDate, infos.date);
    html += buildInfoHtml(labels.infoEngine, infos.engine);
    html += buildInfoHtml(labels.infoPlatform, infos.platform);

    return `<ul class="modal-infos">${html}</ul>`;
}
//////////////////////////////////////////////////////////////////////////
function buildInfoHtml(label, value)
{
    if (!value)
    {
        return "";
    }

    return `<li><strong>${label}</strong>${value}</li>`;
}
//////////////////////////////////////////////////////////////////////////
function buildAboutHtml(paragraphs)
{
    if (paragraphs.length === 0)
    {
        return "";
    }

    let html = `<h3>${labels.aboutTitle}</h3>`;

    for (const paragraph of paragraphs)
    {
        html += `<p>${paragraph}</p>`;
    }

    return html;
}
//////////////////////////////////////////////////////////////////////////
function buildDevelopmentHtml(development)
{
    let html = "";

    for (const title in development)
    {
        html += `<h3>${title}</h3><ul class="modal-list">`;

        for (const item of development[title])
        {
            html += `<li><strong>${item.title}</strong>${item.text}</li>`;
        }

        html += `</ul>`;
    }

    return html;
}
//////////////////////////////////////////////////////////////////////////
function buildLinksHtml(links)
{
    if (links.length === 0)
    {
        return "";
    }

    let html = `<h3>${labels.linksTitle}</h3><div class="modal-links">`;

    for (const link of links)
    {
        html += `<a href="${link.url}" target="_blank" rel="noopener">${link.text} ↗</a>`;
    }

    html += `</div>`;

    return html;
}
//////////////////////////////////////////////////////////////////////////
function buildVideosHtml(videos)
{
    if (videos.length === 0)
    {
        return "";
    }

    let html = `<h3>${labels.videosTitle}</h3><div class="modal-videos">`;

    for (const video of videos)
    {
        html += `<iframe src="${getYoutubeEmbedUrl(video)}" allowfullscreen></iframe>`;
    }

    html += `</div>`;

    return html;
}
//////////////////////////////////////////////////////////////////////////
function getYoutubeEmbedUrl(url)
{
    let videoId = url.split("v=")[1];

    if (url.includes("shorts/"))
    {
        videoId = url.split("shorts/")[1];
    }

    return "https://www.youtube.com/embed/" + videoId;
}
//////////////////////////////////////////////////////////////////////////
function buildGalleryHtml(images)
{
    let html = `<h3>${labels.galleryTitle}</h3><div class="modal-gallery">`;

    for (const image of images)
    {
        html += buildMediaHtml(image, "gallery-item");
    }

    html += `</div>`;

    return html;
}
//////////////////////////////////////////////////////////////////////////
// EVENT HANDLERS
//////////////////////////////////////////////////////////////////////////
function onFilterClicked(event)
{
    const clickedButton = event.target;
    const filterBar = clickedButton.parentElement;
    const section = filterBar.getAttribute("data-section");
    const filter = clickedButton.getAttribute("data-filter");

    for (const button of filterBar.children)
    {
        button.classList.remove("active");
    }

    clickedButton.classList.add("active");

    const list = getSectionProjects(section);
    const grid = getSectionGrid(section);

    if (filter === "all")
    {
        renderCards(list, grid);
    }
    else
    {
        renderCards(getProjectsWithCategory(list, filter), grid);
    }
}
//////////////////////////////////////////////////////////////////////////
function onGalleryItemClicked(event)
{
    openMediaViewer(event.target.getAttribute("src"));
}
//////////////////////////////////////////////////////////////////////////
function onKeyPressed(event)
{
    if (event.key !== "Escape")
    {
        return;
    }

    if (!mediaViewer.hidden)
    {
        closeMediaViewer();
    }
    else if (!projectModal.hidden)
    {
        closeModal();
    }
}