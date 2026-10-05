/*
 * Mobile navigation menu.
 * On phones and tablets, the normal links collapse into a hamburger button.
 */
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".site-nav");
    const links = document.querySelector(".nav-links");

    if (!nav || !links) {
        return;
    }

    // Mobile-only Home button. It uses the same home URL as the site title,
    // so it works correctly from the root, terminology, practice, and indication pages.
    const homeButton = document.createElement("a");
    homeButton.className = "mobile-home";
    homeButton.href = nav.querySelector(".site-brand")?.getAttribute("href") || "index.html";
    homeButton.innerHTML = `
        <svg class="home-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M3 11.5 12 4l9 7.5"></path>
            <path d="M5.5 10.5V20h5v-5.5h3V20h5v-9.5"></path>
        </svg>`;
    homeButton.setAttribute("aria-label", "Return to medication quizzes");
    nav.insertBefore(homeButton, nav.firstChild);

    const menuButton = document.createElement("button");
    menuButton.className = "nav-toggle";
    menuButton.type = "button";
    menuButton.setAttribute("aria-label", "Open navigation menu");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.innerHTML = "<span></span><span></span><span></span>";

    nav.insertBefore(menuButton, links);

    function closeMenu() {
        links.classList.remove("nav-open");
        menuButton.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
    }

    menuButton.addEventListener("click", () => {
        const isOpen = links.classList.toggle("nav-open");
        menuButton.classList.toggle("is-open", isOpen);
        menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    links.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", event => {
        if (!nav.contains(event.target)) {
            closeMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 850) {
            closeMenu();
        }
    });
});
