// app.js - Vanilla JS Router & State Manager

document.addEventListener("DOMContentLoaded", () => {
    // 1. Check for redirection payload from 404.html
    const redirectPath = sessionStorage.getItem('redirectPath');
    if (redirectPath) {
        sessionStorage.removeItem('redirectPath');
        // Restore the intended URL into the browser without triggering a reload
        window.history.replaceState(null, null, redirectPath);
    }

    // 2. Define the Routing Table
    const routes = {
        '/': viewHome,
        '/ai-architecture': viewAIArchitecture,
        '/geo-seo': viewGEO,
        '/ymyl-trust': viewYMYL,
        '/legacy-growth': viewLegacyGrowth,
        '/field-notes': viewFieldNotes
    };

    const appRoot = document.getElementById('app-root');

    // 3. Router Function
    const router = () => {
        // Parse current path, default to '/' if not found in routes
        const path = window.location.pathname;
        const renderFunction = routes[path] || viewHome; 
        
        // Inject the returned HTML string into the DOM
        appRoot.innerHTML = renderFunction();
        window.scrollTo(0, 0); // Reset scroll on route change
    };

    // 4. Intercept all internal link clicks for the SPA
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            const href = e.target.getAttribute("href");
            // Update history and trigger routing
            window.history.pushState(null, null, href);
            router();
        }
    });

    // 5. Listen to browser back/forward buttons
    window.addEventListener("popstate", router);

    // Initial render
    router();
});
