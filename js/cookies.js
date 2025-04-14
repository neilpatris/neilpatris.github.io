document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
    const rejectBtn = document.getElementById("reject-cookies");

    if (banner) {
        if (localStorage.getItem("cookieConsent") === "accepted" || localStorage.getItem("cookieConsent") === "rejected") {
            banner.style.display = "none"; // Cache la bannière si le choix a été fait
        } else {
            banner.style.display = "flex"; // Affiche la bannière si aucun choix
        }

        if (acceptBtn) {
            acceptBtn.addEventListener("click", function () {
                localStorage.setItem("cookieConsent", "accepted");
                banner.style.display = "none";
                enableTracking();
            });
        }

        if (rejectBtn) {
            rejectBtn.addEventListener("click", function () {
                localStorage.setItem("cookieConsent", "rejected");
                banner.style.display = "none";
                disableTracking();
            });
        }
    }

    function enableTracking() {
        var script = document.createElement("script");
        script.src = "https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXX-X";
        document.head.appendChild(script);
    
        script.onload = function () {
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'UA-XXXXXXX-X');
        };
    }

    function disableTracking() {
        document.cookie.split(";").forEach(function (c) {
            document.cookie = c
                .replace(/^ +/, "")
                .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const resetBtn = document.getElementById("reset-cookies");

    // Vérifie si le bouton "Réinitialiser les cookies" existe avant d'ajouter un écouteur
    if (resetBtn) {
        resetBtn.addEventListener("click", function () {
            localStorage.removeItem("cookieConsent");
            alert("Your cookie preferences have been reset.");
            location.reload();
        });
    }
});

