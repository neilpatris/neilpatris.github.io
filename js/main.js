//////////////////////////////////////////////////////////////////////////
// FIELDS
//////////////////////////////////////////////////////////////////////////
const currentLang = getLang();

const navMenu = document.getElementById("nav-menu");
const navBurger = document.getElementById("nav-burger");
//////////////////////////////////////////////////////////////////////////
// FUNCTIONS
//////////////////////////////////////////////////////////////////////////
startSite();
//////////////////////////////////////////////////////////////////////////
function startSite()
{
    applyTranslations();
    document.documentElement.lang = currentLang;
    document.getElementById("year").textContent = new Date().getFullYear();

    initLangButton();
    initBurgerMenu();
}
//////////////////////////////////////////////////////////////////////////
function getLang()
{
    const savedLang = localStorage.getItem("lang");

    if (savedLang)
    {
        return savedLang;
    }

    if (navigator.language.startsWith("fr"))
    {
        return "fr";
    }

    return "en";
}
//////////////////////////////////////////////////////////////////////////
function applyTranslations()
{
    const texts = translations[currentLang];
    const elements = document.querySelectorAll("[data-i18n]");

    for (const element of elements)
    {
        const key = element.getAttribute("data-i18n");

        if (texts[key])
        {
            element.innerHTML = texts[key];
        }
    }
}
//////////////////////////////////////////////////////////////////////////
function initLangButton()
{
    const langButton = document.getElementById("lang-toggle");

    if (currentLang === "fr")
    {
        langButton.textContent = "English";
    }
    else
    {
        langButton.textContent = "Français";
    }

    langButton.addEventListener("click", onLangButtonClicked);
}
//////////////////////////////////////////////////////////////////////////
function initBurgerMenu()
{
    const menuLinks = navMenu.querySelectorAll("a");

    navBurger.addEventListener("click", onBurgerClicked);

    for (const link of menuLinks)
    {
        link.addEventListener("click", onMenuLinkClicked);
    }
}
//////////////////////////////////////////////////////////////////////////
// EVENT HANDLERS
//////////////////////////////////////////////////////////////////////////
function onLangButtonClicked()
{
    if (currentLang === "fr")
    {
        localStorage.setItem("lang", "en");
    }
    else
    {
        localStorage.setItem("lang", "fr");
    }

    location.reload();
}
//////////////////////////////////////////////////////////////////////////
function onBurgerClicked()
{
    const isOpen = navMenu.classList.toggle("open");
    navBurger.setAttribute("aria-expanded", isOpen);
}
//////////////////////////////////////////////////////////////////////////
function onMenuLinkClicked()
{
    navMenu.classList.remove("open");
    navBurger.setAttribute("aria-expanded", false);
}