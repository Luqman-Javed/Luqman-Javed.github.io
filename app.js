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
        '/enterprise-automation': viewEnterpriseAutomation,
        '/ai-architecture': viewAIArchitecture,
        '/geo-seo': viewGEO,
        '/ymyl-trust': viewYMYL,
        '/field-notes': viewFieldNotes
    };

    const appRoot = document.getElementById('app-root');

    // 3. Router Function
    const router = () => {
        // Parse current path, normalize trailing slash, default to '/' if not found in routes
        let path = window.location.pathname;
        if (path.length > 1 && path.endsWith('/')) {
            path = path.slice(0, -1);
        }
        const renderFunction = routes[path] || viewHome; 
        
        // Inject the returned HTML string into the DOM
        appRoot.innerHTML = renderFunction();
        window.scrollTo(0, 0); // Reset scroll on route change
    };

    // 4. Intercept all internal link clicks for the SPA
    document.body.addEventListener("click", e => {
        const link = e.target.closest("[data-link]");
        if (link) {
            e.preventDefault();
            const href = link.getAttribute("href");
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
