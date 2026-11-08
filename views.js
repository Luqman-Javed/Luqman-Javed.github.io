// views.js - Unified Narrative, Visual Architecture & Full Article Reader

const blogArticlesData = {
    'favorite-ai-model': {
        title: 'Why Picking a "Favorite" AI Model Makes No Sense',
        subtitle: 'Treat Your AI Stack Like a Clinical Diagnosis, Not a Sports Team',
        readTime: '4 min read',
        category: 'AI Systems & Clinical Thinking',
        image: '/article-favorite-ai-model.png',
        summary: 'Treating AI models like sports teams wastes hours of operational time because ChatGPT, Claude, and Gemini each rely on fundamentally different mechanisms under the hood. By applying a veterinarian\'s clinical diagnostic mindset to your tech stack, you can stop beating one model into submission and start routing every task to the model built to handle it on the first try.',
        content: `
            <p class="mb-5">I am always a little baffled when people find out I do not have a strict allegiance to one particular LLM. Usually, the first question I get when talking about AI is, "Which one is your favorite?" When I tell them I do not have one, they proceed to give me a very confused look.</p>
            <p class="mb-5">People treat AI models like sports teams. They pick one, buy the jersey, and spend hours trying to wrestle it into doing things it was never built to do; meanwhile, I am happily hopping between ChatGPT, Claude, and Gemini all day depending on the task in front of me or what my clients prefer to use in their stack.</p>
            <p class="mb-5">If you spend enough time on LinkedIn, you will see this constantly. Right now, Claude suffers the most from what I call new toy syndrome, even though it is not technically new. Every day, your feed is full of people claiming you can do X, Y, and Z exclusively with Claude. Most of that is just engagement bait, so I always take those posts with a grain of salt; however, that social media hype regularly spills over into real business decisions.</p>
            <p class="mb-5">I will walk into a consultation with a client, listen to their problem, and hear them say something to the effect of, "Well, Claude is clearly going to be the best one for this, right?" They saw a viral post and assumed it was the magic bullet for everything. When I tell them, "No, Claude can technically do this, but you would get much better results from Gemini for your specific task," they just give me this quizzical look.</p>
            <p class="mb-8">To a layperson, all LLMs look like they do the exact same thing: you type something into a box, and the machine gives you feedback. Behind the scenes, though, the mechanisms governing how each model handles a query are fundamentally different. Many companies are not actually stubborn about trying new tools; they simply assume that if they subscribe to one model, they automatically get the strengths of all of them.</p>

            <h3 class="text-2xl font-bold text-white mt-8 mb-4">The Clinical Approach to AI Selection</h3>
            <p class="mb-5">To me, this entire phenomenon is remarkably similar to a clinical setting. Back when I was practicing veterinary medicine and doing clinical research before entering the online world at Pangolia, you never treated an ailment with a blind allegiance to one single medication.</p>
            <p class="mb-5">If a patient comes in with a specific condition, there are usually multiple ways to treat it. Picking the right protocol depends on the patient's unique presentation and factors that are completely beyond your control: their age, their weight, their neuter status, any comorbidities they have, and the current medications they are already taking. All of those variables change how you treat the exact same ailment in two different patients.</p>
            <p class="mb-5">That is the exact lens I use when picking an LLM for a workflow. You have to diagnose the environment first.</p>
            <p class="mb-8">Sometimes, a company does not have the budget or security clearance to run multiple models; in those cases, you do not waste energy focusing on what you cannot control, and you make the best of what they already have on hand. In most instances, though, once you explain the underlying mechanics of why one model fits their presentation better than another, clients adapt very quickly. Whether I am helping a solo operator fix a single broken prompt or building intrinsic, multi step workflows for a large enterprise, simply matching the right mechanism to the right problem gets results right away.</p>

            <h3 class="text-2xl font-bold text-white mt-8 mb-4">How the Big Three Actually Behave in the Wild</h3>
            <p class="mb-5">If you look at how these models behave in practice, each one has a distinct personality and a specific set of strengths.</p>
            <ul class="space-y-4 mb-8 bg-slate-900/80 border border-slate-800 p-6 rounded-xl">
                <li><strong class="text-emerald-400">Claude is for craft and code.</strong> I reach for Claude when I care deeply about the craft of writing or when I am deep in code. It understands nuance, tone, and pacing better than anything else right now; it does not sound like a corporate robot unless you explicitly ask it to. Furthermore, the way it visualizes and debugs code makes it feel like an actual pair programmer sitting next to you.</li>
                <li><strong class="text-amber-400">ChatGPT is the Swiss Army knife for logic and voice.</strong> I open GPT when I need structured brainstorming, cold logic, or a sounding board. When I have a messy operational problem that needs to be broken down into a clean framework, or when I want to bounce ideas back and forth out loud on voice mode while walking around, it is unmatched.</li>
                <li><strong class="text-sky-400">Gemini is the heavy lifter for massive context.</strong> I switch to Gemini the second I have a mountain of raw information to process. If a client hands me a two hundred page report, an hour of raw video, or a messy folder of documents sitting deep inside Google Workspace, Gemini eats that context window for breakfast without losing the thread.</li>
            </ul>

            <h3 class="text-2xl font-bold text-white mt-8 mb-4">Stop Beating One Model Into Submission</h3>
            <p class="mb-5">The real skill in AI right now is not writing some magical ten page prompt to force one model to do everything. It is knowing the strengths and weaknesses of the tools available, looking closely at the problem in front of you, and routing the work to the right place.</p>
            <p class="mb-2">I will probably never have an allegiance to a single LLM; I love tinkering with all of them far too much. Stop trying to beat one model into submission when another one will happily give you exactly what you want on the first try.</p>
        `
    },
    'unsell-yourself': {
        title: 'The Two Words You Should Type Before Using AI for Anything',
        subtitle: 'Unsell Yourself: How to Escape the AI Productivity Paradox',
        readTime: '5 min read',
        category: 'AI Governance & Diagnostics',
        image: '/article-unsell-yourself.png',
        summary: 'Because large language models are predictive engines, they sound just as confident when leading you down a rabbit hole of wasted time as they do when they are right. By starting your prompt with the two words "Unsell yourself," you can force any AI to expose its own blind spots before you hand over a task it has no business doing.',
        content: `
            <p class="mb-5">One of the most common questions I get from clients and operators is simple: "Why can't I just get my AI to do this? Why do I need you to build or oversee this for me?"</p>
            <p class="mb-5">Many people operate under the quiet assumption that AI is good at everything; they believe that if they just phrase their request the right way, the machine will magically handle the job. Without realizing it, they step directly onto what I call the AI hamster wheel: spending hours trying to force a tool to execute a task it has no business doing, while struggling to understand why the output keeps falling flat.</p>
            <p class="mb-5">Whenever someone asks me why they should not blindly hand a task over to an LLM, I never give them a long lecture. Instead, I tell them to open their AI of choice and type one specific prompt before they do anything else.</p>
            <div class="bg-slate-900 border-l-4 border-emerald-500 p-5 rounded-r-xl my-6">
                <p class="text-white font-semibold mb-2">Start with two words: <span class="text-emerald-400 font-mono">"Unsell yourself."</span></p>
                <p class="text-slate-300 text-sm">Then finish the sentence with whatever you are trying to accomplish: <span class="font-mono text-amber-300">"Unsell yourself. Why are you not a good idea for [insert your task]?"</span></p>
            </div>
            <p class="mb-8">Try this for anything inside or outside of work; it works like a charm.</p>

            <h3 class="text-2xl font-bold text-white mt-8 mb-4">The Jagged Frontier and the Trap of Predictive Confidence</h3>
            <p class="mb-5">There is hard data behind why this matters. Researchers at Harvard Business School and Boston Consulting Group studied this exact phenomenon, often referred to as the AI productivity paradox or the "jagged technological frontier." They found that when operators used AI for tasks the technology was inherently good at, they finished their work roughly 25% faster and produced significantly better results. However, when those same operators used AI for tasks just outside its core capabilities, their accuracy dropped by 19 percentage points; in many cases, it actually took people longer to fix and untangle the AI's work than if they had just done the job from scratch without AI in the first place.</p>
            <p class="mb-5">The catch is that LLMs are predictive engines. Because they generate responses based on statistical probability rather than genuine comprehension, they sound equally confident when leading you down the right path as they do when leading you down a massive rabbit hole of wasted time.</p>
            <p class="mb-5">You can see this play out in the most harmless places. I love playing video games, and if you ask almost any major LLM a detailed question about the first generation Pokémon Starmie, which has been part of pop culture for decades, there is a very high chance the model will confuse Starmie's anime cry with the sound its pre evolution, Staryu, makes. It will tell you the wrong detail with absolute, unwavering confidence.</p>
            <p class="mb-5">That exact same flaw spills over into real business work every single day. Take content writing, for example. I am not saying AI cannot make writing faster; it obviously can. What I am saying is that when you delegate all of your writing to an LLM that does not know your actual thoughts, your lived experience, or how you genuinely feel about a topic, your work blends into the exact same gray sludge as everything else on the internet. Nothing stands out. If your goal is to build trust and drive genuine human engagement, blindly handing the pen to AI defeats the entire purpose.</p>
            <p class="mb-8">The beauty of the "Unsell yourself" prompt is that it flips AI's predictive confidence in your favor. Because the model is designed to answer your prompt as thoroughly and convincingly as possible, it will explain its own blind spots and failure modes with the exact same authority it usually uses to sell you on an answer.</p>

            <h3 class="text-2xl font-bold text-white mt-8 mb-4">Why I Never Take Outputs at Face Value</h3>
            <p class="mb-5">I am certainly not the first person to notice these blind spots, and I do not judge anyone who gets tripped up by them; most people are busy running their businesses and have no reason to study how language models fail. For me, though, this skepticism is second nature because of where I started my career.</p>
            <p class="mb-5">In the medical field, blind trust in an automated answer can be disastrous because an algorithm carries zero accountability when things go wrong. Not only am I a veterinarian, I also completed postgraduate studies in feline and canine clinical nutrition. While there are great elements to alternative feeding approaches, I have seen firsthand what happens when pet parents follow confident, AI generated dietary advice that is completely wrong and potentially dangerous for their specific animal.</p>
            <p class="mb-5">In a clinical setting, you learn very quickly that you can never take things at face value. Two patients can present with the exact same symptoms and share completely different underlying conditions; conversely, two animals can walk into a clinic looking completely fine on the surface while one is healthy and the other is hiding a serious medical issue. You always have to look closely at the individual presentation in front of you.</p>
            <p class="mb-2">That clinical instinct is the exact lens we need to bring to AI. The next time you are tempted to hand a critical workflow over to a model, or someone on your team asks why they cannot just automate a complex problem away, run the two word test first. Ask the machine to unsell itself, read its answer carefully, and decide from there if you actually want it in the driver's seat.</p>
        `
    },
    'creative-strategy-roster': {
        title: 'Why I Still Keep One Creative Strategy Client on My Roster',
        subtitle: 'Eliminating Drift vs. Hunting for Outliers: Why Building AI Systems Needs a Creative Counterweight',
        readTime: '5 min read',
        category: 'Creative Strategy & AI Architecture',
        image: '/article-creative-strategy-roster.png',
        summary: 'While clinical medicine, technical SEO, and AI workflow orchestration are all about eliminating variance so systems never drift, creative strategy is about hunting for human outliers. Keeping one creative strategy client on my roster and writing ad copy the hard way keeps my human intuition sharp, which ironically makes me much better at engineering AI systems.',
        content: `
            <p class="mb-5">When people come across my website or my LinkedIn profile, they usually put me into a very clean box: I am the veterinarian who transitioned into the online world and now builds AI workflows and technical search systems.</p>
            <p class="mb-5">For the most part, that is completely accurate. That is where I spend the majority of my working hours. However, as an independent consultant working with multiple clients, there is one rule I quietly hold onto: I always keep at least one creative strategy client on my roster at all times.</p>
            <p class="mb-5">On my public profiles and portfolios, I keep that side of my work relatively low key. Part of that is simply the nature of the industry; when you are running paid acquisition and creative testing for brands, you are almost always operating under strict NDAs. More than that, though, outsiders tend to look at creative strategy and assume it is completely disconnected from technical SEO, local SEO, Generative Engine Optimization (GEO), Assistive Agent Optimization (AAO), and AI architecture.</p>
            <p class="mb-8">To me, they are two halves of the exact same brain; keeping a foot in creative strategy protects a part of my thinking that the modern job market quietly strips away from people.</p>

            <h3 class="text-2xl font-bold text-white mt-8 mb-4">The Architecture of Zero Drift</h3>
            <p class="mb-5">To understand why I need creative strategy, you first have to understand how rigid the rest of my work is.</p>
            <p class="mb-5">There is a very clinical, methodical side to how I operate. When you train as a veterinarian, an element of perfectionism is baked into you from day one because real lives are at stake. Not every day in a clinic is a high pressure emergency; plenty of days are relaxed and genuinely fun. Still, you always have to rely on precision, clear methodology, and a deep understanding of how different physiological systems interact, because small errors can snowball very quickly if you are not careful.</p>
            <p class="mb-5">Building production AI workflows and executing technical SEO require that exact same clinical mindset.</p>
            <p class="mb-8">Most of my clients rely on frontier models like Claude, Gemini, or ChatGPT wired into orchestration platforms like n8n, Zapier, or Quickwork. When you are building an automated system in n8n or structuring technical and local SEO for a business, your primary enemy is variance. You have to be exceptionally precise in how you engineer the instructions and data pathways so that repeatability is guaranteed. Whether one operator runs the workflow today or ten different team members trigger it six months from now, you want the model to follow the exact same logical steps every single time. You are engineering the system so it does not drift.</p>

            <h3 class="text-2xl font-bold text-white mt-8 mb-4">Where Science Meets Human Unpredictability</h3>
            <p class="mb-5">If clinical medicine, AI architecture, and technical SEO are all about eliminating variance, creative strategy is where I get to hunt for it.</p>
            <p class="mb-5">Now, I am not saying creative strategy means opening a blank document, writing whatever you feel like, and throwing random ads at the wall to see what sticks. Anyone who has actually done the work knows there is a rigorous science to it. In fact, most people massively underestimate the sheer amount of organization and record keeping required to run creative strategy well.</p>
            <p class="mb-4">Before you ever write a line of copy, you are diagnosing the funnel:</p>
            <ul class="list-disc list-inside space-y-2 mb-6 text-slate-300 bg-slate-900/80 border border-slate-800 p-5 rounded-xl">
                <li>Where are the current ads bleeding attention or failing to convert?</li>
                <li>Who is the exact target avatar, and what stage of awareness are they in right now?</li>
                <li>Are they completely problem unaware, problem aware but solution unaware, or already comparing competing solutions?</li>
            </ul>
            <p class="mb-5">Even after you launch, the scientific method continues. There are plenty of times where I will take a single ad and isolate just one variable, changing only the first three seconds of a hook or a single line of copy, to understand the exact mechanism driving performance.</p>
            <p class="mb-8">Where the magic happens, though, is deconstructing a winning ad after it takes off. You can follow every rule in the book, yet humans will still surprise you; an angle you thought was secondary suddenly resonates deeply with an audience, and you have to reverse engineer the psychology of why real people cared.</p>

            <h3 class="text-2xl font-bold text-white mt-8 mb-4">Why You Cannot Shortcut the Craft</h3>
            <p class="mb-5">In an era where everyone is trying to automate everything, creative strategy is one of the few disciplines you cannot cheat or shortcut.</p>
            <p class="mb-5">You should not depend on AI to write your ad concepts or your core copy for you. You have to do it the long way first: sitting with the customer research, staring at the blank page, wrestling with the phrasing, and figuring out what actually moves a human being to act.</p>
            <p class="mb-5">Doing that work by hand keeps my creative edge alive, and every discipline I touch spills over into the others. My veterinary diagnostic training makes me better at debugging complex n8n workflows and technical SEO audits; my technical search work informs how I structure data for GEO and AAO; and doing creative strategy the hard way makes me significantly better at building AI systems.</p>
            <p class="mb-2">When you spend all day inside logic gates, schemas, and system prompts, it is very easy to start thinking like a machine. Keeping one creative strategy client on my roster forces me to stay connected to messy, emotional human psychology; it reminds me how people actually read, what makes them skeptical, and what earns their trust. Ironically, refusing to let AI do my creative thinking is the exact thing that makes me better at engineering AI in the first place.</p>
        `
    },
    'himalayan-salt-lamps': {
        title: 'On Labels, Himalayan Salt Lamps, and Why You Do Not Have to Fit in One Box',
        subtitle: 'Multiple CVs, One Brain: The Case Against Putting Yourself in a Single Professional Box',
        readTime: '4 min read',
        category: 'Career Philosophy & Multidisciplinary Life',
        image: '/article-himalayan-salt-lamps.png',
        summary: 'The modern job market loves to force people into a single career label, assuming that a veterinarian cannot also be an AI architect, a creative strategist, and an avid gamer. Your original training never turns off; instead, every discipline you master cross pollinates into the others and makes you sharper across the board.',
        content: `
            <p class="mb-5">I always find it a little hilarious what happens the second someone finds out I am a veterinarian.</p>
            <p class="mb-5">Almost immediately, a very specific image forms in their head: they assume I spend all day inside a clinic examining dogs and cats, especially once they learn my postgraduate degree is in feline and canine nutrition. Right after that, the confusion sets in. "Wait," they ask, "if you are a vet, why are you building AI systems and doing technical SEO for my company?"</p>
            <p class="mb-5">People love clean, single word labels; they want you to fit neatly into one box so they can categorize you and move on.</p>
            <p class="mb-8">The reality is that any field has far more nuance than outsiders realize. I know fellow veterinarians who are full time clinical researchers, vets who head up university departments, vets who have ventured into politics, and even vets who have left conventional life behind to become monks. Just look at the broader medical world right now: in recent American elections, more physicians and medical professionals have transitioned into political office than almost ever before. Your starting degree is a foundation for how you think, not a life sentence to only do one specific task forever.</p>

            <h3 class="text-2xl font-bold text-white mt-8 mb-4">You Do Not Lose Your Old Skills When You Build New Ones</h3>
            <p class="mb-5">Just because I am not officially practicing inside a clinic full time right now does not mean I stopped being a veterinarian. Sometimes on the weekends, I still drop by my friends' clinics just to help out with interesting cases; I also still speak online to prospective veterinary students about the profession and where it can take them.</p>
            <p class="mb-5">More importantly, that clinical instinct never actually turns off, even when I am in the middle of an AI consultation.</p>
            <p class="mb-5">Not long ago, I was on a video call with a client discussing their workflow architecture. She had her cat sitting in her lap, and sitting on a table right behind her was a glowing Himalayan salt lamp. Right in the middle of our meeting, I had to pause and say, "By the way, do you know that lamp is actually really dangerous for your cat?"</p>
            <p class="mb-5">Cats are instinctively drawn to movement, light, and flowing things, which is the exact same reason cat water fountains are so popular. Once a cat discovers a salt lamp, they are often enticed to lick it over and over again; before the owner realizes what is happening, the cat can end up with severe dehydration, sodium toxicity, or a dangerous electrolyte imbalance.</p>
            <p class="mb-8">Catching a hazard like that in the background of a Zoom call does not make me any less of an AI systems builder, and building n8n workflows or knowledge graphs does not erase my years of veterinary training. They live in the exact same brain.</p>

            <h3 class="text-2xl font-bold text-white mt-8 mb-4">The Myth of Mutually Exclusive Identities</h3>
            <p class="mb-5">This obsession with single labels spills over into the hiring world constantly. I have noticed that traditional recruiters often get visibly annoyed or confused when they realize a candidate has multiple distinct CVs for different disciplines. For some reason, the modern job market treats excelling at more than one thing as a red flag rather than an asset.</p>
            <p class="mb-5">You see the exact same narrow assumption in how people judge hobbies. I am an avid gamer, and every so often someone will ask why I spend my adult free time playing video games. They assume that if you call yourself a gamer, all you do is sit on a couch staring at a screen all day, completely ignoring the measurable cognitive and strategic benefits that come from gaming.</p>
            <p class="mb-5">None of these parts of who we are have to be mutually exclusive. You do not have to amputate one part of your personality or your career history just to be taken seriously in another.</p>
            <p class="mb-5">When I look back at my own path, I have practiced clinical medicine, written hundreds of veterinary articles online, hosted YouTube videos for a cat channel, scaled paid ads through creative strategy, audited technical and local SEO, worked on knowledge graphs, and built production AI systems. Today, I build AI architectures while concurrently keeping a hand in creative strategy and technical search.</p>
            <p class="mb-2">My hope is that we eventually stop forcing people to pick a single title for the rest of their lives. You are allowed to evolve, you are allowed to carry your past expertise into unexpected rooms, and you are allowed to be really good at more than one thing at a time.</p>
        `
    }
};

const viewHome = () => `
<section class="py-16 md:py-24 px-6 max-w-6xl mx-auto">
    <!-- Hero Section -->
    <div class="max-w-4xl mx-auto text-center mb-14">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-mono mb-6">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Dr. Luqman "Lucky" Javed, DVM • Clinical Precision Applied to Digital Systems
        </div>
        
        <h1 class="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
            Veterinary Diagnostic Rigor Meets <span class="text-emerald-400">AI Architecture</span>, <span class="text-sky-400">Technical Search</span>, and <span class="text-amber-400">Creative Psychology.</span>
        </h1>
        
        <p class="text-slate-300 text-lg md:text-xl leading-relaxed mb-8">
            Hi, I am Luqman Javed, though almost everyone I work with calls me Lucky. On paper, my background looks like four separate careers: veterinarian and animal nutritionist, published editorial lead, paid acquisition strategist, and AI systems architect. In practice, they are four lenses of the exact same diagnostic methodology.
        </p>

        <div class="flex flex-wrap items-center justify-center gap-4">
            <a href="/ai-systems" data-link class="px-6 py-3 bg-emerald-500 text-slate-950 font-bold rounded-lg text-sm font-mono hover:bg-emerald-400 transition-colors">
                Explore AI Systems →
            </a>
            <a href="/seo-geo" data-link class="px-6 py-3 bg-slate-900 text-white border border-slate-700 rounded-lg text-sm font-mono hover:border-sky-400 hover:text-sky-400 transition-colors">
                Technical &amp; Local SEO →
            </a>
            <a href="/blog" data-link class="px-6 py-3 bg-slate-900 text-slate-300 border border-slate-800 rounded-lg text-sm font-mono hover:border-amber-400 hover:text-amber-400 transition-colors">
                Read My Essays →
            </a>
        </div>
    </div>

    <!-- Convergence Infographic Showcase -->
    <div class="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 md:p-10 mb-16 shadow-2xl">
        <div class="max-w-3xl mx-auto text-center mb-8">
            <div class="text-xs font-mono text-amber-400 uppercase tracking-widest mb-2">The Unified Thesis</div>
            <h2 class="text-2xl md:text-3xl font-bold text-white mb-3">How Four Disciplines Converge Into One Brain</h2>
            <p class="text-slate-400 text-sm md:text-base leading-relaxed">
                Whether I am diagnosing a physiological condition, isolating variables in a half million dollar ad campaign, auditing a website's technical schema, or building a thirteen app AI ecosystem, the core problem never changes: understanding how complex systems and human beings behave in the wild.
            </p>
        </div>
        <div class="overflow-hidden rounded-xl border border-slate-800 bg-slate-950 mb-8">
            <img src="/convergence-diagram.png" alt="Convergence diagram showing Clinical Diagnostics, Creative Psychology, Technical and Local Search, and AI Architecture uniting into One Brain Zero Drift" class="w-full h-auto object-cover">
        </div>
        <div class="grid md:grid-cols-2 gap-6 text-sm text-slate-300 leading-relaxed">
            <div class="bg-slate-950/80 border border-slate-800/80 p-6 rounded-xl">
                <h3 class="text-white font-bold text-base mb-2 flex items-center gap-2">
                    <span class="text-emerald-400 font-mono">01 //</span> Eliminating Systemic Drift
                </h3>
                <p class="text-slate-400">
                    In clinical medicine, technical SEO, and production AI workflows, variance is the enemy. Small errors snowball quickly when systems are left to guess. I engineer deterministic instructions, clean data schemas, and automated guardrails so your systems execute the exact same way every time.
                </p>
            </div>
            <div class="bg-slate-950/80 border border-slate-800/80 p-6 rounded-xl">
                <h3 class="text-white font-bold text-base mb-2 flex items-center gap-2">
                    <span class="text-amber-400 font-mono">02 //</span> Hunting for Human Outliers
                </h3>
                <p class="text-slate-400">
                    When you spend all day inside logic gates and schemas, it is easy to start thinking like a robot. My foundation as a manual copywriter, veterinary author, and creative strategist keeps me grounded in real human psychology; it reminds me what makes people skeptical and what earns their trust.
                </p>
            </div>
        </div>
    </div>

    <!-- Four Pillars Navigation Grid -->
    <div class="mb-16">
        <div class="text-center mb-10">
            <h2 class="text-2xl md:text-3xl font-bold text-white mb-3">Choose a Lens to Explore</h2>
            <p class="text-slate-400 text-sm max-w-2xl mx-auto">
                My clients span the globe and come to me for very different needs, from a single surgical prompt or technical audit to full scale multi application ecosystems.
            </p>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
            <!-- Pillar 1: AI Systems -->
            <div class="bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all p-8 rounded-xl flex flex-col justify-between">
                <div>
                    <div class="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">Pillar 01 // Systems &amp; Orchestration</div>
                    <h3 class="text-2xl font-bold text-white mb-3">AI Systems &amp; Workflow Architecture</h3>
                    <p class="text-slate-400 text-sm leading-relaxed mb-6">
                        I do not treat AI models like sports teams. I diagnose your operational bottleneck and route the work across Claude, ChatGPT, and Gemini, building everything from standalone custom prompts to thirteen app enterprise ecosystems and automated pipelines in n8n, Zapier, and Quickwork.
                    </p>
                </div>
                <a href="/ai-systems" data-link class="inline-flex items-center text-emerald-400 font-mono text-xs font-bold hover:text-emerald-300">
                    Inspect AI Architecture &amp; Philosophy →
                </a>
            </div>

            <!-- Pillar 2: Technical & Local SEO -->
            <div class="bg-slate-900 border border-slate-800 hover:border-sky-500/50 transition-all p-8 rounded-xl flex flex-col justify-between">
                <div>
                    <div class="text-xs font-mono text-sky-400 uppercase tracking-wider mb-2">Pillar 02 // Search &amp; Knowledge Graphs</div>
                    <h3 class="text-2xl font-bold text-white mb-3">Technical SEO, Local SEO &amp; GEO</h3>
                    <p class="text-slate-400 text-sm leading-relaxed mb-6">
                        Technical SEO is clinical diagnostics for websites. I run deep Screaming Frog crawls, unify sitewide JSON LD schema graphs, align websites with Google Business Profiles via the Core 30 framework, and structure Atomic Answers for Generative Engine Optimization.
                    </p>
                </div>
                <a href="/seo-geo" data-link class="inline-flex items-center text-sky-400 font-mono text-xs font-bold hover:text-sky-300">
                    Explore Search &amp; Audit Methodology →
                </a>
            </div>

            <!-- Pillar 3: Creative Strategy -->
            <div class="bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-all p-8 rounded-xl flex flex-col justify-between">
                <div>
                    <div class="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">Pillar 03 // Paid Acquisition &amp; Psychology</div>
                    <h3 class="text-2xl font-bold text-white mb-3">Scientific Creative Strategy</h3>
                    <p class="text-slate-400 text-sm leading-relaxed mb-6">
                        When audience targeting is a commodity, creative testing is your primary lever. Combining deep Voice of Customer review mining, clinical bioavailability science, and single variable isolation, I have scaled campaigns up to a 6.0x return on a $500,000 ad budget.
                    </p>
                </div>
                <a href="/creative-strategy" data-link class="inline-flex items-center text-amber-400 font-mono text-xs font-bold hover:text-amber-300">
                    View Creative Philosophy &amp; Sample Concepts →
                </a>
            </div>

            <!-- Pillar 4: Veterinary & Nutrition -->
            <div class="bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition-all p-8 rounded-xl flex flex-col justify-between">
                <div>
                    <div class="text-xs font-mono text-purple-400 uppercase tracking-wider mb-2">Pillar 04 // Clinical Roots &amp; Media</div>
                    <h3 class="text-2xl font-bold text-white mb-3">Veterinary Medicine, Nutrition &amp; Authorship</h3>
                    <p class="text-slate-400 text-sm leading-relaxed mb-6">
                        My clinical foundation across companion animals, exotics, and wildlife never turns off. Explore my published work across Catster, Dogster, Hepper, and Discover Magazine, my tenure on the Catster YouTube channel, and my clinical animal nutrition philosophy.
                    </p>
                </div>
                <a href="/vet-authorship" data-link class="inline-flex items-center text-purple-400 font-mono text-xs font-bold hover:text-purple-300">
                    See Veterinary Authorship &amp; Nutrition →
                </a>
            </div>
        </div>
    </div>

    <!-- Bottom Quick Contact Banner -->
    <div class="bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950/40 border border-slate-800 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
            <h3 class="text-2xl font-bold text-white mb-2">Want to talk through a project or workflow?</h3>
            <p class="text-slate-400 text-sm max-w-xl">
                Whether you need a custom AI system, a plain English technical SEO audit, creative strategy, or commercial pet nutrition consulting, reach out directly.
            </p>
        </div>
        <div class="flex flex-wrap gap-3">
            <a href="/contact" data-link class="px-6 py-3 bg-emerald-500 text-slate-950 font-bold rounded-lg text-sm font-mono hover:bg-emerald-400 transition-colors">
                Get in Touch →
            </a>
            <a href="mailto:admin@luqmanjaved.com" class="px-6 py-3 bg-slate-950 text-slate-200 border border-slate-700 rounded-lg text-sm font-mono hover:border-emerald-400 transition-colors">
                admin@luqmanjaved.com
            </a>
        </div>
    </div>
</section>
`;

const viewAISystems = () => `
<section class="py-16 md:py-24 px-6 max-w-6xl mx-auto">
    <!-- Section Header -->
    <div class="mb-12">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-4">
            Pillar 01 // AI Architecture &amp; Workflow Orchestration
        </div>
        <h1 class="text-3xl md:text-5xl font-bold text-white mb-4">Clinical Diagnostics Over Tool Allegiance</h1>
        <p class="text-slate-300 text-lg max-w-3xl leading-relaxed">
            In veterinary medicine, you never prescribe a single miracle drug without evaluating the patient's presentation, comorbidities, and environment first. I build AI systems the exact same way: diagnosing the operational bottleneck first, routing each step to the right model, and engineering guardrails so the workflow never drifts.
        </p>
    </div>

    <!-- Core Infographic -->
    <div class="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 md:p-8 mb-14 shadow-2xl">
        <div class="overflow-hidden rounded-xl border border-slate-800 bg-slate-950 mb-6">
            <img src="/ai-ecosystem-diagram.png" alt="AI Ecosystem Flowchart showing Clinical Task Triage, Model Routing across Claude, GPT, and Gemini, JSON State Handshake and Circuit Breakers, and Zero Drift Production" class="w-full h-auto object-cover">
        </div>
        <div class="grid md:grid-cols-3 gap-6 text-sm">
            <div class="bg-slate-950 p-5 rounded-xl border border-slate-800/80">
                <div class="font-mono text-xs text-emerald-400 uppercase mb-1">Claude // Craft &amp; Code</div>
                <div class="font-bold text-white mb-2">Nuance, Editorial Voice &amp; Pair Programming</div>
                <p class="text-slate-400 text-xs leading-relaxed">
                    I reach for Claude when writing quality, human cadence, and complex code architecture matter most. It respects strict negative constraints and acts like a sharp pair programmer.
                </p>
            </div>
            <div class="bg-slate-950 p-5 rounded-xl border border-slate-800/80">
                <div class="font-mono text-xs text-amber-400 uppercase mb-1">ChatGPT // Logic &amp; Voice</div>
                <div class="font-bold text-white mb-2">Cold Logic &amp; Structural Frameworks</div>
                <p class="text-slate-400 text-xs leading-relaxed">
                    I open GPT when breaking messy operational problems into structured decision trees or bouncing logic back and forth out loud during voice mode ideation.
                </p>
            </div>
            <div class="bg-slate-950 p-5 rounded-xl border border-slate-800/80">
                <div class="font-mono text-xs text-sky-400 uppercase mb-1">Gemini // Heavy Context</div>
                <div class="font-bold text-white mb-2">Deep Research &amp; Multimodal Ingestion</div>
                <p class="text-slate-400 text-xs leading-relaxed">
                    I switch to Gemini the second a workflow requires digesting two hundred page reports, raw video files, or sprawling Google Workspace repositories without losing the thread.
                </p>
            </div>
        </div>
    </div>

    <!-- Flexible Client Spectrum -->
    <div class="grid md:grid-cols-2 gap-8 mb-16">
        <div class="bg-slate-900 border border-slate-800 p-8 rounded-xl">
            <div class="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">Full Spectrum Delivery</div>
            <h2 class="text-2xl font-bold text-white mb-4">From One Surgical Prompt to Thirteen App Ecosystems</h2>
            <p class="text-slate-400 text-sm leading-relaxed mb-4">
                Not every company needs a massive, overengineered software stack. Some clients come to me because their team just needs one rock solid, repeatable prompt inside ChatGPT or Claude that stops hallucinating and gets the job done on the first try.
            </p>
            <p class="text-slate-400 text-sm leading-relaxed">
                Other clients need full scale automation across their entire agency or enterprise. For those teams, I wire frontier models into orchestration tools like <strong class="text-white">n8n, Zapier, and Quickwork</strong>, or architect interconnected multi application ecosystems with persistent disk state handshakes, automated Word document and chart compilers, and human verification gates.
            </p>
        </div>

        <div class="bg-slate-900 border border-slate-800 p-8 rounded-xl">
            <div class="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">Case Study // Enterprise Agency Architecture</div>
            <h2 class="text-2xl font-bold text-white mb-4">The 13 App Agency Production Ecosystem</h2>
            <p class="text-slate-400 text-sm leading-relaxed mb-4">
                For a US digital marketing agency, I architected a synchronized thirteen application AI ecosystem that guides non technical operators from market research and pre sales diagnostics all the way through website sitemaps, commercial copy, hyper local blogs, Google Business Profile optimization, and multimodal image generation.
            </p>
            <ul class="space-y-2 text-xs text-slate-300 font-mono">
                <li>• <span class="text-emerald-400">Dual Payload State Handshakes:</span> Zero context loss across chat sessions</li>
                <li>• <span class="text-sky-400">Pre Compaction Circuit Breakers:</span> Hard stops before memory degradation</li>
                <li>• <span class="text-amber-400">Closed Loop Multimodal Vision:</span> FLUX.2 Pro GPU widgets + 100 point physics grading</li>
                <li>• <span class="text-purple-400">Automated Deliverables:</span> Python &amp; Node.js .docx and Matplotlib chart builders</li>
            </ul>
        </div>
    </div>

    <!-- Purposeful Bite-Sized Architectural Snippet -->
    <div class="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-12">
        <div class="mb-6">
            <div class="text-xs font-mono text-sky-400 uppercase tracking-widest mb-2">Under the Hood // Keeping Systems Honest</div>
            <h3 class="text-xl font-bold text-white mb-2">How I Prevent Context Amnesia in Long Workflows</h3>
            <p class="text-slate-400 text-sm max-w-3xl leading-relaxed">
                When operators run long sessions in an LLM, the model eventually compresses early messages and quietly forgets verified client facts. Instead of writing bloated code walls, I enforce a lightweight Truth Hierarchy and disk backed JSON handshake between applications so verified facts and hard exclusions are never lost:
            </p>
        </div>

        <div class="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
            <div class="bg-slate-900/90 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
                <div class="flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                    <span class="ml-3 text-xs font-mono text-slate-400">session_state_handshake_contract.json</span>
                </div>
                <span class="text-xs font-mono text-emerald-400">ZERO DRIFT VERIFIED</span>
            </div>
            <div class="p-5 font-mono text-xs text-slate-300 overflow-x-auto leading-relaxed">
<pre><code>{
  "truth_hierarchy_order": [
    "1. Live Operator Overrides",
    "2. Session State Handshake Ledger (Disk Rehydrated)",
    "3. Master Client Profile Baseline"
  ],
  "session_circuit_breaker": {
    "max_pages_per_session": 3,
    "on_limit_reached": "Export Dual Payload (.json + .md) for zero loss continuation"
  },
  "fact_governance": {
    "verified_facts": "Locked for immediate production use",
    "hard_exclusions": "Strictly blocked across copy, links, and image prompts",
    "unconfirmed_claims": "Isolated as plain English team verification tags"
  }
}</code></pre>
            </div>
        </div>
    </div>

    <!-- CTA -->
    <div class="text-center">
        <a href="/contact" data-link class="inline-block px-6 py-3 bg-emerald-500 text-slate-950 font-bold rounded-lg text-sm font-mono hover:bg-emerald-400 transition-colors">
            Discuss an AI Workflow or Custom System →
        </a>
    </div>
</section>
`;

const viewSEOGEO = () => `
<section class="py-16 md:py-24 px-6 max-w-6xl mx-auto">
    <!-- Section Header -->
    <div class="mb-12">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono mb-4">
            Pillar 02 // Technical SEO, Local Search &amp; Generative Engine Optimization
        </div>
        <h1 class="text-3xl md:text-5xl font-bold text-white mb-4">Precision Diagnostics for Search &amp; AI Engines</h1>
        <p class="text-slate-300 text-lg max-w-3xl leading-relaxed">
            Technical SEO feels remarkably like clinical work. Most of what holds a website back is invisible to the naked eye; a page can look healthy on screen while its underlying heading tags, canonicals, internal link equity, and structured data are quietly working against it.
        </p>
    </div>

    <!-- Core Infographic -->
    <div class="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 md:p-8 mb-14 shadow-2xl">
        <div class="overflow-hidden rounded-xl border border-slate-800 bg-slate-950 mb-6">
            <img src="/seo-geo-diagram.png" alt="SEO and GEO Architectural Diagram showing Technical Site Health and Schema, Local SEO and Core 30 Architecture, and GEO Atomic Answers and Knowledge Graphs" class="w-full h-auto object-cover">
        </div>
        <div class="grid md:grid-cols-3 gap-6 text-sm">
            <div class="bg-slate-950 p-5 rounded-xl border border-slate-800/80">
                <div class="font-mono text-xs text-emerald-400 uppercase mb-1">01 // Technical Health &amp; Schema</div>
                <div class="font-bold text-white mb-2">DOM Inspection &amp; Global Power Blocks</div>
                <p class="text-slate-400 text-xs leading-relaxed">
                    Using Screaming Frog crawls and manual HTML inspection, I diagnose missing H1 hierarchies, redirect chains, and schema drift, unifying business data into a single Global Power Block in the site header.
                </p>
            </div>
            <div class="bg-slate-950 p-5 rounded-xl border border-slate-800/80">
                <div class="font-mono text-xs text-amber-400 uppercase mb-1">02 // Local SEO &amp; Core 30</div>
                <div class="font-bold text-white mb-2">Powering the Google Business Profile</div>
                <p class="text-slate-400 text-xs leading-relaxed">
                    In local service markets, your website exists to support and power your Google Business Profile. I map dedicated category portals and high intent service pages 1 to 1 against GBP categories and local geogrids.
                </p>
            </div>
            <div class="bg-slate-950 p-5 rounded-xl border border-slate-800/80">
                <div class="font-mono text-xs text-purple-400 uppercase mb-1">03 // GEO &amp; AAO</div>
                <div class="font-bold text-white mb-2">Atomic Answers &amp; Knowledge Graphs</div>
                <p class="text-slate-400 text-xs leading-relaxed">
                    To win citations in AI Overviews and assistive agents, I structure forty to sixty word pronoun free Atomic Answers beneath headings and reconcile entities using explicit semantic triples.
                </p>
            </div>
        </div>
    </div>

    <!-- Philosophy: The Myth of the SEO Unicorn -->
    <div class="grid md:grid-cols-2 gap-8 mb-16">
        <div class="bg-slate-900 border border-slate-800 p-8 rounded-xl">
            <div class="text-xs font-mono text-sky-400 uppercase tracking-wider mb-2">My Search Philosophy</div>
            <h2 class="text-2xl font-bold text-white mb-4">Why Nobody Should Claim to Be a Solo "SEO Unicorn"</h2>
            <p class="text-slate-400 text-sm leading-relaxed mb-4">
                While I have studied and worked across every layer of search, including Technical SEO, Local SEO, Generative Engine Optimization (GEO), and Assistive Agent Optimization (AAO), I do not believe it is realistic for one human being to claim they can execute every single aspect of SEO solo at an elite level.
            </p>
            <p class="text-slate-400 text-sm leading-relaxed">
                Sustainable search growth is a team sport. My superpower is acting as the diagnostic architect: uncovering the exact technical, structural, and local entity bottlenecks holding a site back, fixing the underlying schema and architecture, and translating complex crawl data into crystal clear, plain English action plans that web developers, copywriters, and stakeholders can execute without friction.
            </p>
        </div>

        <div class="bg-slate-900 border border-slate-800 p-8 rounded-xl">
            <div class="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">Real World Diagnostic Case Study</div>
            <h2 class="text-2xl font-bold text-white mb-4">Translating Crawl Telemetry Into Plain English Wins</h2>
            <p class="text-slate-400 text-sm leading-relaxed mb-4">
                When I audit a client's website, I never dump a raw spreadsheet of ten thousand rows onto a business owner's desk. Here is what a typical diagnostic pass looks like in practice:
            </p>
            <ul class="space-y-3 text-xs text-slate-300 leading-relaxed">
                <li><strong class="text-emerald-400 font-mono">1. The Invisible H1 Bug:</strong> Spotted why 29 out of 30 live pages flagged as missing H1 headlines in Screaming Frog even though big bold banners appeared on screen (theme builder elements were coded as H4s instead of H1s), giving developers a five minute fix that preserved visual font sizes.</li>
                <li><strong class="text-sky-400 font-mono">2. Internal Link Equity Routing:</strong> Identified money pages stranded with only 3 internal links and mapped a global Services dropdown and portal architecture to jump every core repair page to 30+ sitewide internal links.</li>
                <li><strong class="text-amber-400 font-mono">3. Schema &amp; NAP Unification:</strong> Resolved conflicting CallRail tracking numbers and mismatched operating hours across 22 pages by deploying one centralized Global Power Block in the header.</li>
            </ul>
        </div>
    </div>

    <!-- CTA -->
    <div class="text-center">
        <a href="/contact" data-link class="inline-block px-6 py-3 bg-sky-500 text-slate-950 font-bold rounded-lg text-sm font-mono hover:bg-sky-400 transition-colors">
            Request a Technical or Local SEO Audit →
        </a>
    </div>
</section>
`;

const viewCreativeStrategy = () => `
<section class="py-16 md:py-24 px-6 max-w-6xl mx-auto">
    <!-- Section Header -->
    <div class="mb-12">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-4">
            Pillar 03 // Paid Acquisition, Consumer Psychology &amp; Ad Testing
        </div>
        <h1 class="text-3xl md:text-5xl font-bold text-white mb-4">Hunting for Human Outliers Through Scientific Testing</h1>
        <p class="text-slate-300 text-lg max-w-3xl leading-relaxed">
            Five years ago, media buyers could win on Meta by finding a clever audience interest stack. Today, algorithmic delivery has turned audience targeting into a shared commodity. Creative strategy is the primary proprietary lever left, and running it well requires equal parts deep customer research and disciplined variable isolation.
        </p>
    </div>

    <!-- Exclusivity & NDA Callout Banner -->
    <div class="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 md:p-8 mb-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
            <div class="text-xs font-mono text-amber-400 uppercase tracking-widest mb-1">Roster Policy // One Client at a Time</div>
            <h2 class="text-xl md:text-2xl font-bold text-white mb-2">Exclusive Creative Partnership</h2>
            <p class="text-slate-300 text-sm max-w-3xl leading-relaxed">
                To keep my creative edge sharp alongside my AI and search architecture work, I partner with strictly <strong class="text-white">one creative strategy client at a time</strong>, whether in a dedicated or seasonal capacity. All live client campaigns are conducted under strict confidentiality agreements; I am always happy to discuss creative testing frameworks and methodology directly on a call.
            </p>
        </div>
        <a href="/contact" data-link class="px-5 py-3 bg-amber-400 text-slate-950 font-bold rounded-lg text-xs font-mono whitespace-nowrap hover:bg-amber-300 transition-colors">
            Check Roster Availability →
        </a>
    </div>

    <!-- Core Infographic -->
    <div class="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 md:p-8 mb-16 shadow-2xl">
        <div class="overflow-hidden rounded-xl border border-slate-800 bg-slate-950 mb-6">
            <img src="/creative-strategy-diagram.png" alt="Scientific Creative Strategy Diagram showing Deep VOC and Review Research, Awareness Stage Routing, Single Variable Isolation, and Compounding Winners" class="w-full h-auto object-cover">
        </div>
        <div class="grid md:grid-cols-3 gap-6 text-sm">
            <div class="bg-slate-950 p-5 rounded-xl border border-slate-800/80">
                <div class="font-mono text-xs text-emerald-400 uppercase mb-1">Step 01 // Deep VOC Mining</div>
                <div class="font-bold text-white mb-2">Exact Buyer Language Over Guesswork</div>
                <p class="text-slate-400 text-xs leading-relaxed">
                    Before writing a single word of copy, I mine five star reviews for exact buyer phrasing, one star competitor reviews for unmet gaps, Reddit threads, and ad comments until the angle writes itself.
                </p>
            </div>
            <div class="bg-slate-950 p-5 rounded-xl border border-slate-800/80">
                <div class="font-mono text-xs text-amber-400 uppercase mb-1">Step 02 // Awareness Routing</div>
                <div class="font-bold text-white mb-2">Matching Script Entry to Audience Temperature</div>
                <p class="text-slate-400 text-xs leading-relaxed">
                    Unaware audiences need education and problem agitation; problem aware buyers start at failed solutions; product aware buyers start directly at mechanism proof and offer comparisons.
                </p>
            </div>
            <div class="bg-slate-950 p-5 rounded-xl border border-slate-800/80">
                <div class="font-mono text-xs text-purple-400 uppercase mb-1">Step 03 // Variable Isolation</div>
                <div class="font-bold text-white mb-2">True Concept Swings vs. Fake Volume</div>
                <p class="text-slate-400 text-xs leading-relaxed">
                    Thirty seven tiny variations of a losing ad is fake volume. I test genuinely distinct angles on static creatives first, isolate one variable at a time (hook, angle, or format), and scale winners into video.
                </p>
            </div>
        </div>
    </div>

    <!-- Highlight Case Studies: 6.0x ROAS Collagen Launch + Pet Brand Collaborations -->
    <div class="grid md:grid-cols-2 gap-8 mb-16">
        <div class="bg-slate-900 border border-slate-800 p-8 rounded-xl flex flex-col justify-between">
            <div>
                <div class="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">Flagship Campaign Highlight</div>
                <h3 class="text-2xl font-bold text-white mb-3">$500,000 Spend at 6.0x ROAS: North American Collagen Launch</h3>
                <p class="text-slate-400 text-sm leading-relaxed mb-4">
                    When launching a new collagen product across North America targeting two distinct avatars (women navigating age related collagen loss and dedicated gym goers), the market was saturated with loud, overpromised beauty hype.
                </p>
                <p class="text-slate-400 text-sm leading-relaxed mb-6">
                    Drawing on my clinical background, I pivoted the entire angle toward trust and physiological science: explaining exact bioavailability, cellular absorption mechanics, and how the body actually utilizes peptides for joint recovery and skin elasticity. That scientific transparency drove a 6.0 return on ad spend across a half million dollar budget.
                </p>
            </div>
            <div class="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                <div>
                    <div class="text-2xl font-bold text-emerald-400 font-mono">$500k</div>
                    <div class="text-xs text-slate-400">Campaign Spend</div>
                </div>
                <div>
                    <div class="text-2xl font-bold text-amber-400 font-mono">6.0x ROAS</div>
                    <div class="text-xs text-slate-400">Return on Ad Spend</div>
                </div>
            </div>
        </div>

        <div class="bg-slate-900 border border-slate-800 p-8 rounded-xl flex flex-col justify-between">
            <div>
                <div class="text-xs font-mono text-sky-400 uppercase tracking-wider mb-2">Product &amp; Brand Collaborations</div>
                <h3 class="text-2xl font-bold text-white mb-3">Translating Clinical Science Into Scroll Stopping Positioning</h3>
                <p class="text-slate-400 text-sm leading-relaxed mb-4">
                    My introduction to the advertising world began at <strong class="text-white">Hepper</strong>, a US luxury cat furniture brand, where I advised on both feline behavioral design and campaign storytelling for flagship products like the Hepper Nest, the Hi Lo Cat Scratcher, and the NomNom Bowl.
                </p>
                <p class="text-slate-400 text-sm leading-relaxed mb-6">
                    Since then, I have collaborated with UK supplement brand <strong class="text-white">Pambros</strong> on formulation validation and compliant benefit messaging, as well as direct to consumer jewelry, skincare, and pet health brands across North America and Europe.
                </p>
            </div>
            <div class="text-xs font-mono text-slate-400 pt-4 border-t border-slate-800">
                Verticals: Pet Products &amp; Supplements • Human Nutraceuticals • Skincare • Men's &amp; Women's Jewelry • B2B Growth
            </div>
        </div>
    </div>

    <!-- Sample Ad Concepts Gallery -->
    <div class="mb-12">
        <div class="mb-8">
            <div class="text-xs font-mono text-amber-400 uppercase tracking-widest mb-2">Concept Sandbox // Illustrative Creative Angles</div>
            <h2 class="text-2xl md:text-3xl font-bold text-white mb-2">Sample Static &amp; Video Ad Concepts</h2>
            <p class="text-slate-400 text-sm max-w-3xl">
                Below is a curated sample of spec concepts demonstrating how I package distinct hooks, value propositions, and visual metaphors across static and video formats.
            </p>
        </div>

        <!-- Video Concepts Row -->
        <div class="grid md:grid-cols-2 gap-6 mb-8">
            <div class="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col">
                <div class="bg-slate-950 p-3 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>Format // AI Character Metaphor &amp; Voiceover Hook</span>
                    <span class="text-amber-400">Video Concept 01</span>
                </div>
                <video controls preload="metadata" class="w-full h-72 object-contain bg-black">
                    <source src="/0426.mov" type="video/mp4">
                    <source src="/0426.mov" type="video/quicktime">
                    Your browser does not support the video tag.
                </video>
                <div class="p-5">
                    <h4 class="font-bold text-white text-base mb-1">Breaking Realism to Dramatize Founder Burnout</h4>
                    <p class="text-slate-400 text-xs leading-relaxed">
                        Instead of producing generic AI slop that pretends to be a fake human actor, this concept uses humor and visual exaggeration to call out seven figure founders still managing their own Meta ads.
                    </p>
                </div>
            </div>

            <div class="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col">
                <div class="bg-slate-950 p-3 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>Format // B Roll Text Overlay &amp; Outcome Contrast</span>
                    <span class="text-emerald-400">Video Concept 02</span>
                </div>
                <video controls preload="metadata" class="w-full h-72 object-contain bg-black">
                    <source src="/agency-ad-sample.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <div class="p-5">
                    <h4 class="font-bold text-white text-base mb-1">Low Friction POV Hook Calling Out Vanity Metrics</h4>
                    <p class="text-slate-400 text-xs leading-relaxed">
                        A clean B roll overlay format built for solution aware business owners who have been burned by agencies reporting impressions instead of revenue growth.
                    </p>
                </div>
            </div>
        </div>

        <!-- Static Concepts Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col">
                <img src="/Skin.jpg" alt="Skincare static ad concept highlighting 98 percent absorption and skipping 10 step routines" class="w-full h-56 object-cover bg-black">
                <div class="p-4">
                    <div class="text-xs font-mono text-emerald-400 mb-1">Skincare // Mechanism Angle</div>
                    <h4 class="font-bold text-white text-sm mb-1">The Anti Routine Hook</h4>
                    <p class="text-slate-400 text-xs">Contrasts exhausting ten step routines with high absorption simplicity.</p>
                </div>
            </div>

            <div class="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col">
                <img src="/Puppy Energy.jpg" alt="Pet supplement static ad concept showing an older golden retriever regaining puppy energy" class="w-full h-56 object-cover bg-black">
                <div class="p-4">
                    <div class="text-xs font-mono text-amber-400 mb-1">Pet Health // Visual Contrast</div>
                    <h4 class="font-bold text-white text-sm mb-1">Same Age, Different Mobility</h4>
                    <p class="text-slate-400 text-xs">Pairs emotional pet parent desire with a concrete mobility statistic.</p>
                </div>
            </div>

            <div class="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col">
                <img src="/Jewelry.jpg" alt="Jewelry static ad concept showing how a hand forged piece elevates a basic outfit" class="w-full h-56 object-cover bg-black">
                <div class="p-4">
                    <div class="text-xs font-mono text-sky-400 mb-1">DTC Fashion // Value Framing</div>
                    <h4 class="font-bold text-white text-sm mb-1">The Perceived Value Upgrade</h4>
                    <p class="text-slate-400 text-xs">Anchors product value by contrasting a ten dollar basic top with a five hundred dollar fit.</p>
                </div>
            </div>

            <div class="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col">
                <img src="/Meeting_Still.jpg" alt="B2B meme style static ad contrasting a small monthly ad budget with high agency setup fees" class="w-full h-56 object-cover bg-black">
                <div class="p-4">
                    <div class="text-xs font-mono text-purple-400 mb-1">B2B Growth // Pattern Interrupt</div>
                    <h4 class="font-bold text-white text-sm mb-1">Risk Reversal Humor</h4>
                    <p class="text-slate-400 text-xs">Disarms agency skepticism by calling out setup fee anxiety with a performance guarantee.</p>
                </div>
            </div>
        </div>
    </div>
</section>
`;

const viewVetAuthorship = () => `
<section class="py-16 md:py-24 px-6 max-w-6xl mx-auto">
    <!-- Section Header -->
    <div class="mb-12">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono mb-4">
            Pillar 04 // Doctor of Veterinary Medicine, Animal Nutrition &amp; Editorial Leadership
        </div>
        <h1 class="text-3xl md:text-5xl font-bold text-white mb-4">Where Clinical Medicine &amp; Digital Storytelling Began</h1>
        <p class="text-slate-300 text-lg max-w-3xl leading-relaxed">
            Graduating from veterinary school during the height of the 2020 pandemic taught me early on that modern clinicians had to be just as comfortable navigating digital technology as they were inside a hospital exam room.
        </p>
    </div>

    <!-- Origin & Editorial Leadership Grid -->
    <div class="grid md:grid-cols-2 gap-8 mb-14">
        <div class="bg-slate-900 border border-slate-800 p-8 rounded-xl">
            <div class="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">Clinical Practice to Pangolia</div>
            <h2 class="text-2xl font-bold text-white mb-4">Writing &amp; Leading Content Before the AI Wave</h2>
            <p class="text-slate-400 text-sm leading-relaxed mb-4">
                After practicing clinical medicine in animal hospitals and serving as a university research associate, I joined <strong class="text-white">Pangolia</strong> as an online veterinarian and writer before growing into an Operations and Quality Assurance leadership role managing decentralized clinical and editorial teams.
            </p>
            <p class="text-slate-400 text-sm leading-relaxed">
                Every article I wrote and edited during those years was crafted manually long before ChatGPT existed. Alongside writing hundreds of peer reviewed veterinary guides across <strong class="text-white">Catster, Dogster, Hepper, PangoVet, and The Vet Desk</strong>, I served as the official on camera veterinarian for the <strong class="text-white">Catster YouTube channel</strong> and contributed veterinary insight to national media outlets including <strong class="text-white">Discover Magazine</strong>.
            </p>
        </div>

        <!-- Animal Nutrition Section (Carefully Framed per Lucky's Philosophy) -->
        <div class="bg-slate-900 border border-emerald-500/30 p-8 rounded-xl flex flex-col justify-between">
            <div>
                <div class="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">Clinical Animal Nutrition &amp; Exotics</div>
                <h2 class="text-2xl font-bold text-white mb-4">Why I Refuse to "Rank" Pet Diets</h2>
                <p class="text-slate-300 text-sm leading-relaxed mb-4">
                    Across my postgraduate studies in animal nutrition, my certifications in both conventional and integrative veterinary nutrition (including CIVT), and hundreds of clinical nutrition cases spanning companion animals as well as exotic animals and wildlife, one principle has always guided my work: <strong class="text-white">there is no single "correct" diet for every pet.</strong>
                </p>
                <p class="text-slate-400 text-sm leading-relaxed mb-4">
                    I actively avoid ranking pet foods on generic trophy lists because proper nutrition depends entirely on an individual animal's physiology, species, life stage, comorbidities, and daily environment. Because of that standard, my philosophy is simple: <strong class="text-emerald-400">I only prescribe or formulate precise individual diets for patients I have examined firsthand or know inside and out.</strong>
                </p>
                <p class="text-slate-400 text-sm leading-relaxed mb-6">
                    Right now, my nutrition work is focused primarily on research and publications; however, if you are interested in commercial diet or supplement formulations, educational video collaborations, or have general pet nutrition queries, I would love to hear from you.
                </p>
            </div>
            <a href="mailto:admin@luqmanjaved.com?subject=Animal%20Nutrition%2C%20Formulation%20or%20Media%20Inquiry" class="inline-flex items-center justify-center px-5 py-3 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 rounded-lg text-xs font-mono font-bold hover:bg-emerald-500/25 transition-colors">
                Email Me Regarding Nutrition, Formulations or Media →
            </a>
        </div>
    </div>

    <!-- Verified Publications & Media Credits -->
    <div class="mb-12">
        <h3 class="text-2xl font-bold text-white mb-6 text-center">Verified Veterinary Publications &amp; Media Appearances</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="https://www.catster.com/author/dr-luqman-javed-dvm-veterinarian/" target="_blank" rel="noopener noreferrer" class="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-emerald-500 transition-colors flex flex-col justify-between">
                <div>
                    <div class="flex items-center justify-between mb-3">
                        <span class="text-2xl">🐱</span>
                        <span class="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded">Author &amp; Vet Reviewer</span>
                    </div>
                    <h4 class="font-bold text-white text-lg mb-2">Catster</h4>
                    <p class="text-slate-400 text-xs leading-relaxed mb-4">
                        Published feline medicine, nutrition, and behavior guides, alongside hosting veterinary educational videos on the official Catster YouTube channel.
                    </p>
                </div>
                <span class="text-xs font-mono text-emerald-400">View Author Profile ↗</span>
            </a>

            <a href="https://www.dogster.com/author/dr-luqman-javed" target="_blank" rel="noopener noreferrer" class="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-emerald-500 transition-colors flex flex-col justify-between">
                <div>
                    <div class="flex items-center justify-between mb-3">
                        <span class="text-2xl">🐶</span>
                        <span class="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded">Author &amp; Vet Reviewer</span>
                    </div>
                    <h4 class="font-bold text-white text-lg mb-2">Dogster</h4>
                    <p class="text-slate-400 text-xs leading-relaxed mb-4">
                        Comprehensive canine health, preventive care, and clinical nutrition articles written and reviewed for pet parents worldwide.
                    </p>
                </div>
                <span class="text-xs font-mono text-emerald-400">View Author Profile ↗</span>
            </a>

            <a href="https://articles.hepper.com/author/dr-luqman-javed-veterinarian-dvm/" target="_blank" rel="noopener noreferrer" class="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-emerald-500 transition-colors flex flex-col justify-between">
                <div>
                    <div class="flex items-center justify-between mb-3">
                        <span class="text-2xl">🧬</span>
                        <span class="text-xs font-mono text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded">Vet Advisor &amp; Author</span>
                    </div>
                    <h4 class="font-bold text-white text-lg mb-2">Hepper</h4>
                    <p class="text-slate-400 text-xs leading-relaxed mb-4">
                        Veterinary medical authorship and ergonomic product positioning collaboration for modern feline furniture and daily care hardware.
                    </p>
                </div>
                <span class="text-xs font-mono text-amber-400">View Author Profile ↗</span>
            </a>

            <div class="bg-slate-900 p-6 rounded-xl border border-slate-800 flex flex-col justify-between">
                <div>
                    <div class="flex items-center justify-between mb-3">
                        <span class="text-2xl">🦜</span>
                        <span class="text-xs font-mono text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded">Featured Expert</span>
                    </div>
                    <h4 class="font-bold text-white text-lg mb-2">Discover Magazine</h4>
                    <p class="text-slate-400 text-xs leading-relaxed mb-4">
                        Featured veterinary expert explaining avian physiology, capsaicin receptor differences, and why parrots can safely eat spicy foods.
                    </p>
                </div>
                <span class="text-xs font-mono text-slate-400">Avian &amp; Exotic Physiology</span>
            </div>

            <div class="bg-slate-900 p-6 rounded-xl border border-slate-800 flex flex-col justify-between">
                <div>
                    <div class="flex items-center justify-between mb-3">
                        <span class="text-2xl">🩺</span>
                        <span class="text-xs font-mono text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded">Pangolia Ecosystem</span>
                    </div>
                    <h4 class="font-bold text-white text-lg mb-2">PangoVet &amp; The Vet Desk</h4>
                    <p class="text-slate-400 text-xs leading-relaxed mb-4">
                        Clinical editorial leadership, quality assurance standardization, and veterinary writing across companion and exotic animal verticals.
                    </p>
                </div>
                <span class="text-xs font-mono text-slate-400">Editorial QA &amp; Authorship</span>
            </div>

            <a href="https://www.youtube.com/@CatsterOfficial" target="_blank" rel="noopener noreferrer" class="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-red-500/60 transition-colors flex flex-col justify-between">
                <div>
                    <div class="flex items-center justify-between mb-3">
                        <span class="text-2xl">🎬</span>
                        <span class="text-xs font-mono text-red-400 bg-red-500/10 px-2.5 py-1 rounded">On Camera Host</span>
                    </div>
                    <h4 class="font-bold text-white text-lg mb-2">Catster YouTube Channel</h4>
                    <p class="text-slate-400 text-xs leading-relaxed mb-4">
                        Served as the official on camera veterinarian, scripting and presenting accessible feline health and behavior breakdowns for cat owners.
                    </p>
                </div>
                <span class="text-xs font-mono text-red-400">Watch on YouTube ↗</span>
            </a>
        </div>
    </div>
</section>
`;

const viewBlog = (activeSlug = null) => {
    if (activeSlug && blogArticlesData[activeSlug]) {
        const article = blogArticlesData[activeSlug];
        const allSlugs = Object.keys(blogArticlesData);
        const otherSlugs = allSlugs.filter(slug => slug !== activeSlug);

        return `
        <section class="py-14 md:py-20 px-6 max-w-4xl mx-auto">
            <div class="mb-8">
                <button data-article="" class="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer">
                    ← Back to All Articles
                </button>
            </div>

            <article class="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-12 shadow-2xl">
                <div class="flex flex-wrap items-center gap-3 text-xs font-mono text-amber-400 mb-4">
                    <span>${article.category}</span>
                    <span>•</span>
                    <span class="text-slate-400">${article.readTime}</span>
                    <span>•</span>
                    <span class="text-slate-400">By Dr. Luqman "Lucky" Javed, DVM</span>
                </div>

                <h1 class="text-3xl md:text-5xl font-bold text-white leading-tight mb-3">${article.title}</h1>
                <p class="text-lg text-slate-400 mb-8">${article.subtitle}</p>

                <div class="overflow-hidden rounded-xl border border-slate-800 bg-slate-950 mb-10">
                    <img src="${article.image}" alt="${article.title}" class="w-full h-auto object-cover">
                </div>

                <div class="text-slate-200 text-base md:text-lg leading-relaxed">
                    ${article.content}
                </div>
            </article>

            <!-- Read Next Section -->
            <div class="mt-14">
                <h3 class="text-xl font-bold text-white mb-6">More Essays to Explore</h3>
                <div class="grid md:grid-cols-3 gap-6">
                    ${otherSlugs.map(slug => {
                        const item = blogArticlesData[slug];
                        return `
                        <div data-article="${slug}" class="bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-xl overflow-hidden cursor-pointer transition-all flex flex-col justify-between">
                            <div>
                                <img src="${item.image}" alt="${item.title}" class="w-full h-36 object-cover bg-slate-950">
                                <div class="p-5">
                                    <div class="text-xs font-mono text-emerald-400 mb-1">${item.readTime}</div>
                                    <h4 class="font-bold text-white text-sm mb-2 leading-snug">${item.title}</h4>
                                </div>
                            </div>
                            <div class="px-5 pb-4 text-xs font-mono text-amber-400">Read Article →</div>
                        </div>
                        `;
                    }).join('')}
                </div>
            </div>
        </section>
        `;
    }

    const slugs = Object.keys(blogArticlesData);
    return `
    <section class="py-16 md:py-24 px-6 max-w-6xl mx-auto">
        <div class="mb-12">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-4">
                Essays &amp; Field Notes
            </div>
            <h1 class="text-3xl md:text-5xl font-bold text-white mb-4">Thoughts on AI, Clinical Diagnostics, Search &amp; Creative Craft</h1>
            <p class="text-slate-300 text-lg max-w-3xl leading-relaxed">
                Essays on why picking a favorite AI model makes no sense, how to test whether an LLM belongs in your workflow, why I still write ad copy the hard way, and why you never have to fit into a single career box.
            </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
            ${slugs.map(slug => {
                const article = blogArticlesData[slug];
                return `
                <article data-article="${slug}" class="bg-slate-900 border border-slate-800 hover:border-emerald-500/60 rounded-2xl overflow-hidden cursor-pointer transition-all flex flex-col justify-between group shadow-xl">
                    <div>
                        <div class="overflow-hidden bg-slate-950 border-b border-slate-800">
                            <img src="${article.image}" alt="${article.title}" class="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300">
                        </div>
                        <div class="p-6 md:p-8">
                            <div class="flex items-center gap-3 text-xs font-mono text-emerald-400 mb-3">
                                <span>${article.category}</span>
                                <span>•</span>
                                <span class="text-slate-400">${article.readTime}</span>
                            </div>
                            <h2 class="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors leading-snug">
                                ${article.title}
                            </h2>
                            <p class="text-slate-400 text-sm leading-relaxed">
                                ${article.summary}
                            </p>
                        </div>
                    </div>
                    <div class="px-6 md:px-8 pb-6 pt-2 flex items-center justify-between text-xs font-mono text-amber-400">
                        <span>Read Full Essay</span>
                        <span class="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                </article>
                `;
            }).join('')}
        </div>
    </section>
    `;
};

const viewContact = () => `
<section class="py-16 md:py-24 px-6 max-w-5xl mx-auto">
    <div class="text-center max-w-3xl mx-auto mb-14">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-4">
            Direct Communication // Porto, Portugal &amp; Worldwide
        </div>
        <h1 class="text-3xl md:text-5xl font-bold text-white mb-4">Let's Talk Through What You Are Building</h1>
        <p class="text-slate-300 text-lg leading-relaxed">
            Whether you need a custom AI system, a technical or local SEO audit, creative strategy, or want to connect regarding commercial pet nutrition formulations and media, choose a topic below to open a pre addressed email directly to my inbox at <a href="mailto:admin@luqmanjaved.com" class="text-emerald-400 underline hover:text-emerald-300">admin@luqmanjaved.com</a>.
        </p>
    </div>

    <!-- Topic Routing Cards -->
    <div class="grid md:grid-cols-2 gap-6 mb-14">
        <a href="mailto:admin@luqmanjaved.com?subject=AI%20Systems%20and%20Workflow%20Inquiry" class="bg-slate-900 border border-slate-800 hover:border-emerald-500 p-7 rounded-xl transition-all flex flex-col justify-between group">
            <div>
                <div class="text-xs font-mono text-emerald-400 uppercase mb-2">01 // AI Architecture &amp; Prompts</div>
                <h2 class="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">AI Systems, Custom Prompts &amp; Automation</h2>
                <p class="text-slate-400 text-sm leading-relaxed mb-6">
                    From a single surgical prompt in Claude, ChatGPT, or Gemini to multi application agency ecosystems and automated pipelines in n8n, Zapier, or Quickwork.
                </p>
            </div>
            <span class="text-xs font-mono text-emerald-400 font-bold">Email About AI Systems ↗</span>
        </a>

        <a href="mailto:admin@luqmanjaved.com?subject=Technical%20and%20Local%20SEO%20or%20GEO%20Inquiry" class="bg-slate-900 border border-slate-800 hover:border-sky-500 p-7 rounded-xl transition-all flex flex-col justify-between group">
            <div>
                <div class="text-xs font-mono text-sky-400 uppercase mb-2">02 // Search &amp; Knowledge Graphs</div>
                <h2 class="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">Technical SEO, Local SEO &amp; GEO Audits</h2>
                <p class="text-slate-400 text-sm leading-relaxed mb-6">
                    Plain English website health audits, Screaming Frog diagnostics, Global Power Block JSON LD schema unifications, and Core 30 Google Business Profile architectures.
                </p>
            </div>
            <span class="text-xs font-mono text-sky-400 font-bold">Email About SEO &amp; GEO ↗</span>
        </a>

        <a href="mailto:admin@luqmanjaved.com?subject=Creative%20Strategy%20Roster%20Inquiry" class="bg-slate-900 border border-slate-800 hover:border-amber-500 p-7 rounded-xl transition-all flex flex-col justify-between group">
            <div>
                <div class="text-xs font-mono text-amber-400 uppercase mb-2">03 // Paid Acquisition (1 Client Roster)</div>
                <h2 class="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">Scientific Creative Strategy &amp; Ad Testing</h2>
                <p class="text-slate-400 text-sm leading-relaxed mb-6">
                    Inquire about current or seasonal availability for my single client creative strategy roster, Voice of Customer research, and Meta ad testing frameworks.
                </p>
            </div>
            <span class="text-xs font-mono text-amber-400 font-bold">Check Creative Roster Availability ↗</span>
        </a>

        <a href="mailto:admin@luqmanjaved.com?subject=Animal%20Nutrition%2C%20Formulation%20or%20Media%20Inquiry" class="bg-slate-900 border border-slate-800 hover:border-purple-500 p-7 rounded-xl transition-all flex flex-col justify-between group">
            <div>
                <div class="text-xs font-mono text-purple-400 uppercase mb-2">04 // Veterinary &amp; Animal Nutrition</div>
                <h2 class="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">Commercial Formulations, Publications &amp; Media</h2>
                <p class="text-slate-400 text-sm leading-relaxed mb-6">
                    Reach out regarding pet supplement or diet formulation validation, veterinary editorial publications, video collaborations, or general nutrition queries.
                </p>
            </div>
            <span class="text-xs font-mono text-purple-400 font-bold">Email About Nutrition &amp; Media ↗</span>
        </a>
    </div>

    <!-- Direct Platforms Box -->
    <div class="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 text-center">
        <h3 class="text-lg font-bold text-white mb-2">Prefer to Connect on LinkedIn or Upwork?</h3>
        <p class="text-slate-400 text-sm mb-6">
            You can also message me directly on LinkedIn or book a consultation contract through my verified Upwork profile.
        </p>
        <div class="flex flex-wrap items-center justify-center gap-4">
            <a href="mailto:admin@luqmanjaved.com" class="px-5 py-2.5 bg-emerald-500 text-slate-950 font-bold rounded-lg text-xs font-mono hover:bg-emerald-400 transition-colors">
                admin@luqmanjaved.com
            </a>
            <a href="https://www.linkedin.com/in/luqman-javed" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 bg-slate-950 text-white border border-slate-700 rounded-lg text-xs font-mono hover:border-emerald-400 transition-colors">
                Connect on LinkedIn ↗
            </a>
            <a href="https://www.upwork.com/freelancers/~018ea1439c9499bc24" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 bg-slate-950 text-amber-400 border border-amber-500/30 rounded-lg text-xs font-mono hover:bg-amber-500/10 transition-colors">
                View Upwork Profile ↗
            </a>
        </div>
    </div>
</section>
`;
