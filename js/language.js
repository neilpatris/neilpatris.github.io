(function () {
  const getBrowserLang = () => {
    const stored = localStorage.getItem("langChoice");
    if (stored) return stored;
    const navLang = navigator.language || navigator.userLanguage;
    return navLang.startsWith("fr") ? "fr" : "en";
  };

  const setLanguage = (lang) => {
    localStorage.setItem("langChoice", lang);
    location.reload();
  };

  const currentLang = getBrowserLang();
  window.projectLang = currentLang;
  window.getLangFile = () => (currentLang === "fr" ? "js/fr_projects.json" : "js/en_projects.json");
  window.setLang = setLanguage;

  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector("#lang-toggle");
    if (toggle) {
      toggle.textContent = currentLang === "fr" ? "🇬🇧 English" : "🇫🇷 Français";
      toggle.addEventListener("click", () => {
        setLanguage(currentLang === "fr" ? "en" : "fr");
      });
    }
    
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const value = window.translations?.[currentLang]?.[key];
      if (value) el.innerHTML = value;
    });
  });

})();