// app.js - Vanilla JS Router, Dynamic Metadata & Interactive State Manager

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

    // 3. Per-Route SEO Title & <= 155 Character Meta Descriptions
    const routeMeta = {
        '/': {
            title: 'Dr. Luqman "Lucky" Javed, DVM | AI Systems Architect, SEO Strategist & Veterinarian',
            description: 'Dr. Luqman (Lucky) Javed, DVM: AI Systems Architect, Technical and Local SEO Lead, Creative Strategist, and Veterinarian in Porto, Portugal.'
        },
        '/ai-systems': {
            title: 'AI Systems Architecture & Zero Drift Workflows | Dr. Luqman "Lucky" Javed, DVM',
            description: 'Explore multi application Claude ecosystems, model routing across Claude, GPT, and Gemini, and n8n, Zapier, and Quickwork pipelines by Dr. Luqman Javed.'
        },
        '/seo-geo': {
            title: 'Technical SEO, Local Search & GEO Strategy | Dr. Luqman "Lucky" Javed, DVM',
            description: 'Clinical Screaming Frog site audits, unified JSON LD schema graphs, Core 30 GBP architectures, and Atomic Answers for AI search by Dr. Luqman Javed.'
        },
        '/creative-strategy': {
            title: 'Scientific Creative Strategy & Paid Acquisition | Dr. Luqman "Lucky" Javed, DVM',
            description: 'Voice of Customer research, awareness stage routing, and single variable ad testing ($500k scaled at 6.0x ROAS). View waitlist status for Lucky Javed.'
        },
        '/vet-authorship': {
            title: 'Veterinary Medicine, Animal Nutrition & Authorship | Dr. Luqman "Lucky" Javed, DVM',
            description: 'Doctor of Veterinary Medicine and CIVT certified animal nutritionist published across Catster, Dogster, Hepper, and Discover Magazine.'
        },
        '/blog': {
            title: 'Essays on AI Systems, Search & Creative Strategy | Dr. Luqman "Lucky" Javed, DVM',
            description: 'Essays by Dr. Luqman (Lucky) Javed on constraint driven AI architecture, model routing, creative strategy psychology, and multidisciplinary careers.'
        },
        '/contact': {
            title: 'Contact Dr. Luqman "Lucky" Javed, DVM | AI, SEO, Creative & Nutrition Consulting',
            description: 'Reach Dr. Luqman (Lucky) Javed in Porto, Portugal at admin@luqmanjaved.com for custom AI systems, technical SEO audits, creative waitlist, or media.'
        }
    };

    const appRoot = document.getElementById('app-root');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenuIcon = document.getElementById('mobile-menu-icon');
    const mobileNavDrawer = document.getElementById('mobile-nav-drawer');

    // 4. Mobile Drawer Helpers
    const closeMobileMenu = () => {
        if (!mobileNavDrawer || !mobileMenuBtn) return;
        mobileNavDrawer.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        if (mobileMenuIcon) mobileMenuIcon.textContent = '☰';
    };

    if (mobileMenuBtn && mobileNavDrawer) {
        mobileMenuBtn.addEventListener('click', () => {
            const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
            if (isExpanded) {
                closeMobileMenu();
            } else {
                mobileNavDrawer.classList.remove('hidden');
                mobileMenuBtn.setAttribute('aria-expanded', 'true');
                if (mobileMenuIcon) mobileMenuIcon.textContent = '✕';
            }
        });
    }

    // 5. Update Dynamic Document Title, Meta Description & Canonical Tag
    const updateDocumentMeta = (currentPath, articleSlug) => {
        const metaDescTag = document.querySelector('meta[name="description"]');
        const canonicalTag = document.getElementById('canonical-link');

        if (currentPath === '/blog' && articleSlug && typeof blogArticlesData !== 'undefined' && blogArticlesData[articleSlug]) {
            const article = blogArticlesData[articleSlug];
            document.title = `${article.title} | Dr. Luqman "Lucky" Javed, DVM`;
            if (metaDescTag) {
                const clippedSummary = article.metaDescription || article.summary.slice(0, 152);
                metaDescTag.setAttribute('content', clippedSummary);
            }
            if (canonicalTag) {
                canonicalTag.setAttribute('href', `https://luqmanjaved.com/blog?article=${articleSlug}`);
            }
            return;
        }

        const activeMeta = routeMeta[currentPath] || routeMeta['/'];
        document.title = activeMeta.title;
        if (metaDescTag) {
            metaDescTag.setAttribute('content', activeMeta.description);
        }
        if (canonicalTag) {
            const cleanCanonical = currentPath === '/' ? 'https://luqmanjaved.com/' : `https://luqmanjaved.com${currentPath}`;
            canonicalTag.setAttribute('href', cleanCanonical);
        }
    };

    // 6. Highlight Active Nav Link
    const updateActiveNav = (currentPath) => {
        document.querySelectorAll('header a[data-link]').forEach(link => {
            const href = link.getAttribute('href');
            if (href === '/contact') return;

            if (href === currentPath) {
                link.classList.add('text-emerald-400', 'font-semibold');
            } else {
                link.classList.remove('text-emerald-400', 'font-semibold');
            }
        });
    };

    // 7. Router Function
    const router = () => {
        let path = window.location.pathname;
        if (path.length > 1 && path.endsWith('/')) {
            path = path.slice(0, -1);
        }

        const urlParams = new URLSearchParams(window.location.search);
        const articleSlug = urlParams.get('article');

        if ((path === '/blog' || path === '/field-notes') && articleSlug) {
            appRoot.innerHTML = viewBlog(articleSlug);
            updateDocumentMeta('/blog', articleSlug);
            updateActiveNav('/blog');
        } else {
            const renderFunction = routes[path] || viewHome;
            appRoot.innerHTML = renderFunction();
            updateDocumentMeta(routes[path] ? path : '/', null);
            updateActiveNav(routes[path] ? path : '/');
        }

        closeMobileMenu();
        window.scrollTo(0, 0);
    };

    // 8. Intercept internal SPA link clicks and blog reader triggers
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

    // 9. Listen to browser back and forward buttons
    window.addEventListener("popstate", router);

    // Initial render
    router();
});
