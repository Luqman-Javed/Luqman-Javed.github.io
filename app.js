// app.js - Vanilla JS Router & Interactive State Manager

document.addEventListener("DOMContentLoaded", () => {
    // 1. Check for redirection payload from 404.html
    const redirectPath = sessionStorage.getItem('redirectPath');
    if (redirectPath) {
        sessionStorage.removeItem('redirectPath');
        window.history.replaceState(null, null, redirectPath);
    }

    // 2. Define the Routing Table (Including Legacy Redirect Fallbacks)
    const routes = {
        '/': viewHome,
        '/ai-systems': viewAISystems,
        '/seo-geo': viewSEOGEO,
        '/creative-strategy': viewCreativeStrategy,
        '/vet-authorship': viewVetAuthorship,
        '/blog': viewBlog,
        '/contact': viewContact,
        // Legacy route aliases for backward compatibility
        '/enterprise-automation': viewAISystems,
        '/ai-architecture': viewAISystems,
        '/geo-seo': viewSEOGEO,
        '/ymyl-trust': viewVetAuthorship,
        '/field-notes': viewBlog
    };

    const appRoot = document.getElementById('app-root');

    // 3. Highlight Active Nav Link
    const updateActiveNav = (currentPath) => {
        document.querySelectorAll('header a[data-link]').forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPath && href !== '/contact') {
                link.classList.add('text-emerald-400', 'font-semibold');
            } else if (href !== '/contact') {
                link.classList.remove('text-emerald-400', 'font-semibold');
            }
        });
    };

    // 4. Router Function
    const router = () => {
        let path = window.location.pathname;
        if (path.length > 1 && path.endsWith('/')) {
            path = path.slice(0, -1);
        }

        const urlParams = new URLSearchParams(window.location.search);
        const articleSlug = urlParams.get('article');

        if (path === '/blog' && articleSlug) {
            appRoot.innerHTML = viewBlog(articleSlug);
        } else {
            const renderFunction = routes[path] || viewHome;
            appRoot.innerHTML = renderFunction();
        }

        updateActiveNav(path);
        window.scrollTo(0, 0);
    };

    // 5. Intercept internal SPA link clicks and blog reader triggers
    document.body.addEventListener("click", e => {
        const link = e.target.closest("[data-link]");
        if (link) {
            e.preventDefault();
            const href = link.getAttribute("href");
            window.history.pushState(null, null, href);
            router();
            return;
        }

        const articleBtn = e.target.closest("[data-article]");
        if (articleBtn) {
            e.preventDefault();
            const slug = articleBtn.getAttribute("data-article");
            const nextUrl = slug ? `/blog?article=${slug}` : '/blog';
            window.history.pushState(null, null, nextUrl);
            router();
        }
    });

    // 6. Listen to browser back and forward buttons
    window.addEventListener("popstate", router);

    // Initial render
    router();
});
