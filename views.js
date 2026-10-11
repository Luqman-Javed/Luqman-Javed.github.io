// views.js - Content Templates & UI Architectures

const viewHome = () => `
<section class="py-20 md:py-32 px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
    <!-- Hero Hooks -->
    <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 text-emerald-400 text-xs font-mono mb-8">
        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        Systems Online • DVM to AI Architect
    </div>
    
    <h1 class="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
        Engineering Deterministic AI Workflows & <span class="text-amber-500">Resilient Search Architectures.</span>
    </h1>
    <h2 class="text-xl md:text-2xl text-slate-300 font-medium mb-4">Commanding Algorithmic Trust in the Era of Generative Search.</h2>
    <p class="max-w-3xl text-slate-400 text-lg mb-10 leading-relaxed">
        Applying the diagnostic rigor of clinical science to enterprise LLM orchestration. I build indestructible XML state-machines that translate raw API data into enterprise revenue engines.
    </p>

    <!-- KPI Grid -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mt-8">
        <div class="bg-slate-900 border border-slate-800 p-6 rounded-xl flex flex-col items-center">
            <span class="text-3xl font-bold text-emerald-500 mb-1">$500k+</span>
            <span class="text-xs text-slate-400 uppercase tracking-widest font-mono">Ad Spend Managed</span>
        </div>
        <div class="bg-slate-900 border border-slate-800 p-6 rounded-xl flex flex-col items-center">
            <span class="text-3xl font-bold text-amber-500 mb-1">6x</span>
            <span class="text-xs text-slate-400 uppercase tracking-widest font-mono">Peak ROAS</span>
        </div>
        <div class="bg-slate-900 border border-slate-800 p-6 rounded-xl flex flex-col items-center">
            <span class="text-3xl font-bold text-sky-500 mb-1">23+</span>
            <span class="text-xs text-slate-400 uppercase tracking-widest font-mono">AI Apps Built</span>
        </div>
        <div class="bg-slate-900 border border-slate-800 p-6 rounded-xl flex flex-col items-center">
            <span class="text-3xl font-bold text-purple-500 mb-1">90% ↓</span>
            <span class="text-xs text-slate-400 uppercase tracking-widest font-mono">API Error Drop</span>
        </div>
    </div>
</section>
`;

const viewAIArchitecture = () => `
<section class="py-20 px-6 max-w-6xl mx-auto">
    <div class="mb-12">
        <h2 class="text-3xl font-bold text-white mb-4">AI Systems & Automation Architectures</h2>
        <p class="text-slate-400 max-w-3xl">Standard conversational AI frequently collapses in production. Deploying clinical diagnostic logic, I engineer constrained finite-state machines to enforce perfect schema compliance.</p>
    </div>

    <!-- UI Metaphor: n8n Node Workflow -->
    <div class="bg-slate-900 p-8 rounded-xl border border-slate-800 mb-12 relative overflow-hidden">
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
            
            <div class="bg-slate-800 border border-slate-700 p-4 rounded-lg shadow-xl w-64">
                <div class="text-xs text-amber-400 font-mono mb-2 uppercase">Node 1: Extraction</div>
                <div class="font-bold text-white">Raw Data Ingestion</div>
            </div>
            
            <div class="hidden md:block text-slate-600 font-mono">--------&gt;</div>

            <div class="bg-slate-800 border border-emerald-500/50 p-4 rounded-lg shadow-xl w-64 shadow-emerald-900/20">
                <div class="text-xs text-emerald-400 font-mono mb-2 uppercase">Node 2: FSM Constraint</div>
                <div class="font-bold text-white">XML State-Machine</div>
            </div>

            <div class="hidden md:block text-slate-600 font-mono">--------&gt;</div>

            <div class="bg-slate-800 border border-slate-700 p-4 rounded-lg shadow-xl w-64">
                <div class="text-xs text-sky-400 font-mono mb-2 uppercase">Node 3: Injection</div>
                <div class="font-bold text-white">Production CMS Env</div>
            </div>
            
        </div>
    </div>

    <!-- Mock Terminal UI -->
    <div class="bg-black rounded-xl border border-slate-800 overflow-hidden shadow-2xl">
        <div class="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center gap-2">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-amber-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
            <span class="ml-4 text-xs font-mono text-slate-400">State_Transfer_Payload.xml</span>
        </div>
        <div class="p-6 font-mono text-sm text-slate-300 overflow-x-auto">
<pre><code><span class="text-slate-500">&lt;!-- Zero-hallucination structured output payload --&gt;</span>
<span class="text-sky-400">&lt;handoff_payload&gt;</span>
  <span class="text-emerald-400">&lt;diagnostic_intervention&gt;</span>
    Deployed Earley parser token masking to enforce strict JSON schemas.
    Resulted in a 90% drop in API transfer errors.
  <span class="text-emerald-400">&lt;/diagnostic_intervention&gt;</span>
  <span class="text-amber-400">&lt;status&gt;</span>100% Schema Compliant<span class="text-amber-400">&lt;/status&gt;</span>
<span class="text-sky-400">&lt;/handoff_payload&gt;</span></code></pre>
        </div>
    </div>
</section>
`;

const viewGEO = () => `
<section class="py-20 px-6 max-w-4xl mx-auto">
    <div class="mb-12">
        <h2 class="text-3xl font-bold text-white mb-4">Generative Engine Optimization (GEO)</h2>
        <p class="text-slate-400">Structuring data natively for agentic extraction and Knowledge Graph reconciliation.</p>
    </div>

    <div class="space-y-12">
        <article class="bg-slate-900 p-8 rounded-xl border border-slate-800">
            <h3 class="text-xl font-bold text-emerald-400 mb-2">Atomic Answers & RAG Architecture</h3>
            <!-- Atomic Answer BLUF Format -->
            <p class="font-medium text-white mb-6 p-4 bg-slate-800 border-l-4 border-emerald-500 rounded-r">
                Atomic Answers are structurally dense, 40-to-60 word paragraphs placed strategically beneath H-tags to force Knowledge Graph parsing. This exact passage length is optimized for RAG pipelines to extract during the retrieval phase, securing citations in AI Overviews.
            </p>
            <p class="text-slate-400 text-sm">
                As demonstrated by empirical KDD 2024 research, deploying expert credentialing alongside precise statistical attribution results in a +40.9% citation lift via expert attribution. 
            </p>
        </article>

        <article class="bg-slate-900 p-8 rounded-xl border border-slate-800">
            <h3 class="text-xl font-bold text-amber-400 mb-2">JSON-LD & @graph Reconciliation</h3>
            <p class="font-medium text-white mb-6 p-4 bg-slate-800 border-l-4 border-amber-500 rounded-r">
                By deploying unified Global Power Blocks utilizing JSON-LD @graph arrays, I programmatically eradicate duplicate entity generation across enterprise ecosystems. This structural enforcement drove a 156% non-branded impression lift by stabilizing the Knowledge Graph.
            </p>
        </article>
    </div>
</section>
`;

const viewYMYL = () => `
<section class="py-20 px-6 max-w-5xl mx-auto">
    <div class="mb-12 text-center">
        <h2 class="text-3xl font-bold text-white mb-4">Clinical Trust in YMYL Sectors</h2>
        <p class="text-slate-400 max-w-2xl mx-auto">Google actively suppresses unverified authors in highly regulated spaces. My clinical DVM background provides an unassailable algorithmic advantage.</p>
    </div>

    <div class="grid md:grid-cols-3 gap-6 mb-12">
        <a href="https://www.catster.com/author/dr-luqman-javed-dvm-veterinarian/" target="_blank" class="bg-slate-900 p-8 rounded-xl border border-slate-800 hover:border-emerald-500 transition-colors flex flex-col items-center text-center">
            <span class="text-4xl mb-4">🐱</span>
            <h4 class="font-bold text-white mb-1">Catster Network</h4>
            <span class="text-xs text-emerald-500 font-mono uppercase tracking-widest bg-emerald-500/10 px-2 py-1 rounded">E-E-A-T Verified</span>
        </a>
        <a href="https://www.dogster.com/author/dr-luqman-javed" target="_blank" class="bg-slate-900 p-8 rounded-xl border border-slate-800 hover:border-emerald-500 transition-colors flex flex-col items-center text-center">
            <span class="text-4xl mb-4">🐶</span>
            <h4 class="font-bold text-white mb-1">Dogster Network</h4>
            <span class="text-xs text-emerald-500 font-mono uppercase tracking-widest bg-emerald-500/10 px-2 py-1 rounded">E-E-A-T Verified</span>
        </a>
        <a href="https://articles.hepper.com/author/dr-luqman-javed-veterinarian-dvm/" target="_blank" class="bg-slate-900 p-8 rounded-xl border border-slate-800 hover:border-emerald-500 transition-colors flex flex-col items-center text-center">
            <span class="text-4xl mb-4">🧬</span>
            <h4 class="font-bold text-white mb-1">Hepper Clinical</h4>
            <span class="text-xs text-emerald-500 font-mono uppercase tracking-widest bg-emerald-500/10 px-2 py-1 rounded">E-E-A-T Verified</span>
        </a>
    </div>
    
    <div class="bg-slate-900 p-8 rounded-xl border border-slate-800 text-slate-300 text-sm leading-relaxed max-w-3xl mx-auto">
        <p>A verified medical degree allows for the engineering of authoritative Knowledge Graph entities that successfully bypass strict semantic filters. By cryptographically linking these robust profiles via `+ "`sameAs`" + ` markup, the algorithm is forced to merge my technical SEO portfolio with deep medical trust signals.</p>
    </div>
</section>
`;

const viewLegacyGrowth = () => `
<section class="py-20 px-6 max-w-4xl mx-auto">
    <div class="mb-12">
        <h2 class="text-3xl font-bold text-white mb-4">Commercial Acumen & Revenue Architecture</h2>
        <p class="text-slate-400">Technical wizardry is obsolete if it fails to drive commercial outcomes. I engineer systems built entirely for macroeconomic conversion psychology.</p>
    </div>
    
    <div class="bg-slate-900 p-8 rounded-xl border border-slate-800 flex flex-col md:flex-row gap-8 items-center justify-between">
        <div class="max-w-lg">
            <h3 class="text-2xl font-bold text-amber-500 mb-4">Meta Ads & Paid Acquisition</h3>
            <p class="text-slate-300 text-sm leading-relaxed mb-4">
                Managing over $500,000 in direct-response ad spend proved the commercial viability of my automated funnels. By orchestrating zero-touch automation frameworks (n8n, Zapier) layered beneath aggressive media buying, I stabilized conversion rates and maximized pipeline efficiency.
            </p>
            <ul class="text-slate-400 font-mono text-xs space-y-2">
                <li>[+] Scaled 6.0x Return on Ad Spend (ROAS)</li>
                <li>[+] Full-stack growth methodology applied to architecture</li>
                <li>[+] Focus shifted exclusively to backend systemic scaling</li>
            </ul>
        </div>
        <div class="bg-black/50 border border-slate-800 p-8 rounded-full h-48 w-48 flex flex-col items-center justify-center flex-shrink-0">
            <span class="text-4xl font-bold text-amber-500">6.0x</span>
            <span class="text-xs text-slate-500 mt-2 tracking-widest uppercase">Peak ROAS</span>
        </div>
    </div>
</section>
`;

const viewFieldNotes = () => `
<section class="py-20 px-6 max-w-4xl mx-auto">
    <div class="mb-12">
        <h2 class="text-3xl font-bold text-white mb-4">Field Notes & Structured Authenticity</h2>
        <p class="text-slate-400">A rotating matrix of technical breakdowns, diagnostic clinical realities, and operational notes from Portugal.</p>
    </div>

    <div class="grid gap-6">
        <div class="bg-slate-900 p-6 rounded-xl border border-slate-800 border-l-4 border-l-sky-500 cursor-pointer hover:bg-slate-800 transition-colors">
            <div class="text-xs text-slate-500 font-mono mb-2">Technical Ephemera // Week 42</div>
            <h3 class="text-xl font-bold text-white mb-2">Debugging Webhook Misfires in n8n Production</h3>
            <p class="text-slate-400 text-sm">Analyzing why asynchronous concurrent requests from Gemini were overriding state constraints, and how implementing rate-limited queueing resolved the collision...</p>
        </div>

        <div class="bg-slate-900 p-6 rounded-xl border border-slate-800 border-l-4 border-l-emerald-500 cursor-pointer hover:bg-slate-800 transition-colors">
            <div class="text-xs text-slate-500 font-mono mb-2">Clinical Realities // Week 40</div>
            <h3 class="text-xl font-bold text-white mb-2">Systems Biology & XML Validation</h3>
            <p class="text-slate-400 text-sm">How the diagnostic reasoning required to analyze multi-variable biological systems under strict constraints maps 1:1 to resolving context drift in LLM output generation...</p>
        </div>

        <div class="bg-slate-900 p-6 rounded-xl border border-slate-800 border-l-4 border-l-amber-500 cursor-pointer hover:bg-slate-800 transition-colors">
            <div class="text-xs text-slate-500 font-mono mb-2">Personal Ethos // Week 38</div>
            <h3 class="text-xl font-bold text-white mb-2">Synchronous Overlap: Engineering from Porto</h3>
            <p class="text-slate-400 text-sm">The distinct geographic and temporal advantages of structuring global enterprise architecture from Vila Nova de Gaia, bridging European and East Coast operations...</p>
        </div>
    </div>
</section>
`;
