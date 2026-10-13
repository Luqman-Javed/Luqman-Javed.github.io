// views.js - Content Templates & UI Architectures

const viewHome = () => `
<section class="py-20 md:py-32 px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
    <!-- Hero Hooks -->
    <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 text-emerald-400 text-xs font-mono mb-8">
        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        Systems Online • DVM Clinical Diagnostics Applied to Code
    </div>
    
    <h1 class="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
        Engineering Deterministic AI Workflows & <span class="text-amber-500">Anti-Fragile Automation Pipelines.</span>
    </h1>
    <h2 class="text-xl md:text-2xl text-slate-300 font-medium mb-4">Eliminating Silent Failures in Enterprise Orchestration & Generative Search.</h2>
    <p class="max-w-3xl text-slate-400 text-lg mb-10 leading-relaxed">
        Applying the diagnostic rigor of veterinary medicine to distributed backend systems. I architect high-availability n8n queue infrastructures, Dead Letter Queues, idempotent PostgreSQL ledgers, and constrained XML state-machines that survive real-world API chaos.
    </p>

    <!-- Primary CTAs -->
    <div class="flex flex-wrap items-center justify-center gap-4 mb-12">
        <a href="/enterprise-automation" data-link class="px-6 py-3 bg-emerald-500 text-slate-950 font-bold rounded-lg text-sm font-mono hover:bg-emerald-400 transition-colors">
            Inspect Automation Architecture →
        </a>
        <a href="https://www.upwork.com/freelancers/~018ea1439c9499bc24" target="_blank" rel="noopener noreferrer" class="px-6 py-3 bg-slate-900 text-slate-200 border border-slate-700 rounded-lg text-sm font-mono hover:border-amber-400 hover:text-amber-400 transition-colors">
            Book Architectural Audit (Upwork) ↗
        </a>
    </div>

    <!-- High-Availability Engineering KPI Grid -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mt-4">
        <div class="bg-slate-900 border border-slate-800 p-6 rounded-xl flex flex-col items-center">
            <span class="text-3xl font-bold text-emerald-500 mb-1">99.9%</span>
            <span class="text-xs text-slate-400 uppercase tracking-widest font-mono">Pipeline Uptime</span>
        </div>
        <div class="bg-slate-900 border border-slate-800 p-6 rounded-xl flex flex-col items-center">
            <span class="text-3xl font-bold text-amber-500 mb-1">10k+</span>
            <span class="text-xs text-slate-400 uppercase tracking-widest font-mono">Daily Executions</span>
        </div>
        <div class="bg-slate-900 border border-slate-800 p-6 rounded-xl flex flex-col items-center">
            <span class="text-3xl font-bold text-sky-500 mb-1">Zero-Loss</span>
            <span class="text-xs text-slate-400 uppercase tracking-widest font-mono">Idempotency</span>
        </div>
        <div class="bg-slate-900 border border-slate-800 p-6 rounded-xl flex flex-col items-center">
            <span class="text-3xl font-bold text-purple-500 mb-1">100%</span>
            <span class="text-xs text-slate-400 uppercase tracking-widest font-mono">Schema Compliance</span>
        </div>
    </div>
</section>
`;

const viewEnterpriseAutomation = () => `
<section class="py-20 px-6 max-w-6xl mx-auto">
    <!-- Section Header -->
    <div class="mb-14">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-4">
            Production Systems Architecture
        </div>
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Enterprise Automation & Resilient Microservices</h2>
        <p class="text-slate-400 max-w-3xl leading-relaxed">
            Linear, point-to-point workflows pass manual "happy-path" tests but collapse in production upon encountering 504 Gateway Timeouts, API rate limits, or malformed webhook payloads. Using clinical variable isolation, I engineer distributed, fault-tolerant automation topologies that guarantee zero data loss.
        </p>
    </div>

    <!-- Three Core Architectural Pillars -->
    <div class="grid md:grid-cols-3 gap-6 mb-16">
        <!-- Pillar 1: DLQ -->
        <div class="bg-slate-900 border border-slate-800 p-8 rounded-xl flex flex-col justify-between">
            <div>
                <div class="text-xs font-mono text-red-400 uppercase tracking-wider mb-2">Pillar 01 // Fault Isolation</div>
                <h3 class="text-xl font-bold text-white mb-3">Dead Letter Queue (DLQ) Architecture</h3>
                <p class="text-slate-400 text-sm leading-relaxed mb-6">
                    Workflows never fail silently. A centralized Global Error Trigger routes all unhandled node exceptions across the ecosystem into an isolated DLQ microservice. The system logs the execution ID, workflow identifier, stack trace, and raw JSON payload into a persistent PostgreSQL <code class="text-emerald-400">failed_jobs</code> ledger.
                </p>
            </div>
            <div class="bg-slate-950 border border-slate-800 p-4 rounded-lg font-mono text-xs text-slate-300 space-y-1">
                <div class="text-amber-400">// Automated Triage Logic</div>
                <div>• <span class="text-emerald-400">429 / 504 Transient:</span> Exponential Backoff + Jitter</div>
                <div>• <span class="text-red-400">400 / 403 Permanent:</span> Isolate in DLQ + Slack Alert</div>
            </div>
        </div>

        <!-- Pillar 2: Idempotency -->
        <div class="bg-slate-900 border border-slate-800 p-8 rounded-xl flex flex-col justify-between">
            <div>
                <div class="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">Pillar 02 // State Determinism</div>
                <h3 class="text-xl font-bold text-white mb-3">Idempotent State Management</h3>
                <p class="text-slate-400 text-sm leading-relaxed mb-6">
                    Eliminating duplicate billing and double-entry database corruption during webhook retries. Every unit of work is assigned a deterministic SHA-256 idempotency key derived directly from business payload parameters rather than volatile runtime execution IDs.
                </p>
            </div>
            <div class="bg-slate-950 border border-slate-800 p-4 rounded-lg font-mono text-xs text-slate-300 overflow-x-auto">
                <div class="text-sky-400">INSERT INTO</div> execution_ledger (idempotency_key, state)<br>
                <span class="text-sky-400">VALUES</span> ($1, 'PROCESSING')<br>
                <span class="text-emerald-400">ON CONFLICT (idempotency_key) DO NOTHING;</span>
            </div>
        </div>

        <!-- Pillar 3: Queue Mode -->
        <div class="bg-slate-900 border border-slate-800 p-8 rounded-xl flex flex-col justify-between">
            <div>
                <div class="text-xs font-mono text-sky-400 uppercase tracking-wider mb-2">Pillar 03 // Horizontal Scale</div>
                <h3 class="text-xl font-bold text-white mb-3">n8n Queue Mode & Worker Fleets</h3>
                <p class="text-slate-400 text-sm leading-relaxed mb-6">
                    Single-process automation instances suffer from Node.js heap exhaustion under heavy concurrency. I deploy containerized n8n clusters via Docker Compose that decouple webhook ingestion from execution using Redis message brokers and stateless worker fleets.
                </p>
            </div>
            <div class="bg-slate-950 border border-slate-800 p-4 rounded-lg font-mono text-xs text-slate-300 space-y-1">
                <div class="text-purple-400">// Distributed Topology</div>
                <div>[Webhook Ingress] → [Redis Broker]</div>
                <div>→ [Stateless Workers 1..N] → [PostgreSQL]</div>
            </div>
        </div>
    </div>

    <!-- 5-Phase RAG & Content Ecosystem Pipeline -->
    <div class="bg-slate-900 border border-slate-800 rounded-xl p-8 md:p-10 mb-12">
        <div class="mb-8">
            <div class="text-xs font-mono text-amber-400 uppercase tracking-widest mb-2">Agentic Content Ecosystems</div>
            <h3 class="text-2xl font-bold text-white mb-3">Five-Phase Programmatic RAG & Quickclaw Orchestration</h3>
            <p class="text-slate-400 text-sm max-w-3xl leading-relaxed">
                Transforming enterprise knowledge bases into high-authority, hallucination-free publishing engines. By combining vector retrieval with Quickclaw and LangChain agent constraints, this pipeline automates technical content production while preserving strict editorial governance.
            </p>
        </div>

        <div class="grid md:grid-cols-5 gap-4">
            <div class="bg-slate-950 border border-slate-800 p-5 rounded-lg">
                <div class="text-xs font-mono text-emerald-400 mb-2">Phase 01</div>
                <div class="font-bold text-white text-sm mb-2">Automated Ingestion</div>
                <p class="text-xs text-slate-400 leading-relaxed">Scheduled cron triggers and HTTP Request nodes ingest competitor sitemaps and long-tail semantic clusters via REST APIs.</p>
            </div>

            <div class="bg-slate-950 border border-slate-800 p-5 rounded-lg">
                <div class="text-xs font-mono text-sky-400 mb-2">Phase 02</div>
                <div class="font-bold text-white text-sm mb-2">Vector Retrieval (RAG)</div>
                <p class="text-xs text-slate-400 leading-relaxed">Queries Pinecone or Qdrant vector stores to inject verified proprietary data directly into the context window, grounding the LLM.</p>
            </div>

            <div class="bg-slate-950 border border-amber-500/40 p-5 rounded-lg">
                <div class="text-xs font-mono text-amber-400 mb-2">Phase 03</div>
                <div class="font-bold text-white text-sm mb-2">Quickclaw Generation</div>
                <p class="text-xs text-slate-400 leading-relaxed">Constrained Quickclaw & LangChain agents enforce strict JSON/Markdown output schemas, semantic HTML, and FAQPage structured data.</p>
            </div>

            <div class="bg-slate-950 border border-slate-800 p-5 rounded-lg">
                <div class="text-xs font-mono text-purple-400 mb-2">Phase 04</div>
                <div class="font-bold text-white text-sm mb-2">HITL Governance</div>
                <p class="text-xs text-slate-400 leading-relaxed">Execution pauses via asynchronous Slack approval webhooks, guaranteeing human-in-the-loop editorial verification before release.</p>
            </div>

            <div class="bg-slate-950 border border-slate-800 p-5 rounded-lg">
                <div class="text-xs font-mono text-emerald-400 mb-2">Phase 05</div>
                <div class="font-bold text-white text-sm mb-2">Headless CMS Injection</div>
                <p class="text-xs text-slate-400 leading-relaxed">Zero-touch REST/GraphQL deployment directly into Webflow, WordPress, or headless enterprise CMS architectures.</p>
            </div>
        </div>
    </div>

    <!-- Production DLQ & Telemetry Terminal -->
    <div class="bg-black rounded-xl border border-slate-800 overflow-hidden shadow-2xl">
        <div class="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
            <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-amber-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                <span class="ml-4 text-xs font-mono text-slate-400">dlq_triage_worker.json // n8n Queue Mode Telemetry</span>
            </div>
            <span class="text-xs font-mono text-emerald-400">WORKER_STATUS: HEALTHY</span>
        </div>
        <div class="p-6 font-mono text-xs md:text-sm text-slate-300 overflow-x-auto">
<pre><code>{
  "orchestrator": "n8n-enterprise-queue-cluster",
  "broker": "redis://prod-queue-broker:6379",
  "idempotency_key": "sha256:9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
  "error_handling_policy": {
    "transient_codes": [408, 429, 502, 503, 504],
    "backoff_strategy": "exponential_with_jitter",
    "max_retries": 5,
    "fallback_destination": "postgres.public.failed_jobs_dlq"
  },
  "agent_runtime": {
    "framework": "Quickclaw-v2",
    "schema_validation": "STRICT_JSON_DRAFT_2020_12",
    "hallucination_rate": 0.0
  }
}</code></pre>
        </div>
    </div>
</section>
`;

const viewAIArchitecture = () => `
<section class="py-20 px-6 max-w-6xl mx-auto">
    <div class="mb-12">
        <h2 class="text-3xl font-bold text-white mb-4">AI Systems & Deterministic State-Machine Architectures</h2>
        <p class="text-slate-400 max-w-3xl">Unconstrained conversational AI frequently hallucinates and collapses in production environments. Deploying clinical diagnostic logic, I engineer finite-state machines (FSMs) that constrain stochastic LLMs into 100% schema-compliant execution nodes.</p>
    </div>

    <!-- UI Metaphor: n8n Node Workflow -->
    <div class="bg-slate-900 p-8 rounded-xl border border-slate-800 mb-12 relative overflow-hidden">
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
            
            <div class="bg-slate-800 border border-slate-700 p-4 rounded-lg shadow-xl w-64">
                <div class="text-xs text-amber-400 font-mono mb-2 uppercase">Node 1: Ingestion</div>
                <div class="font-bold text-white">Idempotent Webhook & Vector RAG</div>
            </div>
            
            <div class="hidden md:block text-slate-600 font-mono">--------&gt;</div>

            <div class="bg-slate-800 border border-emerald-500/50 p-4 rounded-lg shadow-xl w-64 shadow-emerald-900/20">
                <div class="text-xs text-emerald-400 font-mono mb-2 uppercase">Node 2: FSM Constraint</div>
                <div class="font-bold text-white">XML / JSON State-Machine</div>
            </div>

            <div class="hidden md:block text-slate-600 font-mono">--------&gt;</div>

            <div class="bg-slate-800 border border-slate-700 p-4 rounded-lg shadow-xl w-64">
                <div class="text-xs text-sky-400 font-mono mb-2 uppercase">Node 3: Commit</div>
                <div class="font-bold text-white">PostgreSQL & Headless API</div>
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
    Deployed Earley parser token masking and Quickclaw schema guards to enforce strict JSON/XML contracts.
    Eliminated downstream parser failures across 10,000+ daily worker executions.
  <span class="text-emerald-400">&lt;/diagnostic_intervention&gt;</span>
  <span class="text-amber-400">&lt;status&gt;</span>100% Schema Compliant • Zero-Loss Idempotency Verified<span class="text-amber-400">&lt;/status&gt;</span>
<span class="text-sky-400">&lt;/handoff_payload&gt;</span></code></pre>
        </div>
    </div>
</section>
`;

const viewGEO = () => `
<section class="py-20 px-6 max-w-4xl mx-auto">
    <div class="mb-12">
        <h2 class="text-3xl font-bold text-white mb-4">Generative Engine Optimization (GEO)</h2>
        <p class="text-slate-400">Structuring data natively for agentic extraction, RAG vector retrieval, and Knowledge Graph reconciliation.</p>
    </div>

    <div class="space-y-12">
        <article class="bg-slate-900 p-8 rounded-xl border border-slate-800">
            <h3 class="text-xl font-bold text-emerald-400 mb-2">Atomic Answers & RAG Architecture</h3>
            <!-- Atomic Answer BLUF Format -->
            <p class="font-medium text-white mb-6 p-4 bg-slate-800 border-l-4 border-emerald-500 rounded-r">
                Atomic Answers are structurally dense, 40-to-60 word paragraphs placed strategically beneath H-tags to force Knowledge Graph parsing. This exact passage length is optimized for RAG pipelines to extract during the vector retrieval phase, securing deterministic citations in AI Overviews.
            </p>
            <p class="text-slate-400 text-sm">
                As demonstrated by empirical KDD research, deploying verified expert credentialing alongside precise statistical attribution and programmatic schema enforcement results in a +40.9% citation lift across generative search engines. 
            </p>
        </article>

        <article class="bg-slate-900 p-8 rounded-xl border border-slate-800">
            <h3 class="text-xl font-bold text-amber-400 mb-2">JSON-LD @graph & DefinedTerm Reconciliation</h3>
            <p class="font-medium text-white mb-6 p-4 bg-slate-800 border-l-4 border-amber-500 rounded-r">
                By deploying unified Global Power Blocks utilizing JSON-LD @graph arrays and DefinedTerm entity mappings, I programmatically eradicate duplicate entity generation across enterprise ecosystems. This structural enforcement drove a 156% non-branded impression lift by stabilizing the Knowledge Graph.
            </p>
        </article>
    </div>
</section>
`;

const viewYMYL = () => `
<section class="py-20 px-6 max-w-5xl mx-auto">
    <div class="mb-12 text-center">
        <h2 class="text-3xl font-bold text-white mb-4">Clinical Trust & Diagnostic Rigor in YMYL Sectors</h2>
        <p class="text-slate-400 max-w-2xl mx-auto">Algorithmic filters actively suppress unverified entities in regulated health and finance spaces. My Doctor of Veterinary Medicine (DVM) degree provides both an unassailable E-E-A-T moat and a battle-tested clinical diagnostic methodology for debugging complex state machines.</p>
    </div>

    <div class="grid md:grid-cols-3 gap-6 mb-12">
        <a href="https://www.catster.com/author/dr-luqman-javed-dvm-veterinarian/" target="_blank" rel="noopener noreferrer" class="bg-slate-900 p-8 rounded-xl border border-slate-800 hover:border-emerald-500 transition-colors flex flex-col items-center text-center">
            <span class="text-4xl mb-4">🐱</span>
            <h4 class="font-bold text-white mb-1">Catster Network</h4>
            <span class="text-xs text-emerald-500 font-mono uppercase tracking-widest bg-emerald-500/10 px-2 py-1 rounded">E-E-A-T Verified</span>
        </a>
        <a href="https://www.dogster.com/author/dr-luqman-javed" target="_blank" rel="noopener noreferrer" class="bg-slate-900 p-8 rounded-xl border border-slate-800 hover:border-emerald-500 transition-colors flex flex-col items-center text-center">
            <span class="text-4xl mb-4">🐶</span>
            <h4 class="font-bold text-white mb-1">Dogster Network</h4>
            <span class="text-xs text-emerald-500 font-mono uppercase tracking-widest bg-emerald-500/10 px-2 py-1 rounded">E-E-A-T Verified</span>
        </a>
        <a href="https://articles.hepper.com/author/dr-luqman-javed-veterinarian-dvm/" target="_blank" rel="noopener noreferrer" class="bg-slate-900 p-8 rounded-xl border border-slate-800 hover:border-emerald-500 transition-colors flex flex-col items-center text-center">
            <span class="text-4xl mb-4">🧬</span>
            <h4 class="font-bold text-white mb-1">Hepper Clinical</h4>
            <span class="text-xs text-emerald-500 font-mono uppercase tracking-widest bg-emerald-500/10 px-2 py-1 rounded">E-E-A-T Verified</span>
        </a>
    </div>
    
    <div class="bg-slate-900 p-8 rounded-xl border border-slate-800 text-slate-300 text-sm leading-relaxed max-w-3xl mx-auto space-y-4">
        <p>
            <strong class="text-white">Clinical Variable Isolation Applied to Distributed Systems:</strong> Diagnosing why an asynchronous n8n worker node failed during a 504 Gateway Timeout requires the exact same differential diagnosis and variable isolation used in clinical veterinary medicine.
        </p>
        <p>
            By cryptographically linking verified clinical publication profiles with DefinedTerm engineering nodes via <code class="text-emerald-400">sameAs</code> schema markup, Knowledge Graph parsers merge deep medical authority directly with enterprise AI systems architecture.
        </p>
    </div>
</section>
`;

const viewFieldNotes = () => `
<section class="py-20 px-6 max-w-4xl mx-auto">
    <div class="mb-12">
        <h2 class="text-3xl font-bold text-white mb-4">Field Notes & Architectural Telemetry</h2>
        <p class="text-slate-400">A rotating matrix of production post-mortems, clinical diagnostic parallels, and systems engineering notes from Porto, Portugal.</p>
    </div>

    <div class="grid gap-6">
        <div class="bg-slate-900 p-6 rounded-xl border border-slate-800 border-l-4 border-l-sky-500 cursor-pointer hover:bg-slate-800 transition-colors">
            <div class="text-xs text-slate-500 font-mono mb-2">Production Telemetry // Week 42</div>
            <h3 class="text-xl font-bold text-white mb-2">Eliminating Webhook Race Conditions via Redis Queue Mode & Idempotency Keys</h3>
            <p class="text-slate-400 text-sm">Deconstructing how concurrent webhook payloads triggered duplicate CRM mutations under heavy load, and how implementing SHA-256 PostgreSQL idempotency constraints with stateless Redis workers achieved zero-loss execution...</p>
        </div>

        <div class="bg-slate-900 p-6 rounded-xl border border-slate-800 border-l-4 border-l-emerald-500 cursor-pointer hover:bg-slate-800 transition-colors">
            <div class="text-xs text-slate-500 font-mono mb-2">Clinical Realities // Week 40</div>
            <h3 class="text-xl font-bold text-white mb-2">Differential Diagnosis & Dead Letter Queue Triage</h3>
            <p class="text-slate-400 text-sm">How the diagnostic reasoning required to isolate multi-variable biological pathology maps 1:1 to separating transient 429/504 API timeouts from permanent schema failures in centralized n8n error microservices...</p>
        </div>

        <div class="bg-slate-900 p-6 rounded-xl border border-slate-800 border-l-4 border-l-amber-500 cursor-pointer hover:bg-slate-800 transition-colors">
            <div class="text-xs text-slate-500 font-mono mb-2">Operational Infrastructure // Week 38</div>
            <h3 class="text-xl font-bold text-white mb-2">Synchronous Overlap: Orchestrating Global Clusters from Porto</h3>
            <p class="text-slate-400 text-sm">The distinct geographic and temporal advantages of managing containerized Docker Compose worker fleets and RAG content ecosystems from Vila Nova de Gaia, bridging European and North American enterprise operations...</p>
        </div>
    </div>
</section>
`;
