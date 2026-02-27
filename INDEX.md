# Project Templates & References - Master Index

> Location: ~/Projects/tools/project-templates/
> 166 scaffold templates + 18 compliance checklists + 10 reference files
> Last updated: 2026-02-24

---

## IMPORTANT: Read This First

Claude: ALWAYS consult this index before scaffolding a new project.
1. Search for matching templates below
2. Check reference files for additional inspiration
3. Only scaffold from scratch if nothing matches

---

## Reference Files (10)

Curated catalogs from major open-source collections. Read these for inspiration and to find existing solutions.

| File | Source | Content | When to Use |
|------|--------|---------|-------------|
| `clone-wars-reference.md` | github.com/GorvGoyl/Clone-Wars | ~200 open-source app clones (Airbnb, Spotify, Trello, etc.) | Building a clone of a popular app |
| `codrops-hub-reference.md` | tympanus.net/codrops | ~400 creative WebGL/CSS/GSAP demos | Creative animations, visual effects |
| `rapidapi-hub-reference.md` | rapidapi.com | ~45 API categories, Top 50 APIs | Integrating third-party APIs |
| `awesome-llm-apps-reference.md` | github.com/Shubhamsaboo/awesome-llm-apps | 120+ Python AI projects | AI agent/RAG/LLM app ideas |
| `glama-mcp-reference.md` | glama.ai | 17,653 MCP servers, 700 connectors | Finding MCP servers to integrate |
| `website-templates-reference.md` | github.com/learning-zone/website-templates | 150+ HTML5/CSS3/Bootstrap templates | Static site design inspiration |
| `gitignore-reference.md` | github.com/github/gitignore | 262 gitignore templates | Setting up .gitignore for any stack |
| `profile-readme-reference.md` | github.com/kautukkundan/Awesome-Profile-README-templates | 244 GitHub profile README styles | Creating GitHub profile README |
| `roadmap-sh-reference.md` | roadmap.sh | 80+ roadmaps, 80+ projects, 900+ interview Q | Learning paths, project ideas |
| `aitmpl-reference.md` | app.aitmpl.com / davila7/claude-code-templates | 7,388 files: 434 agents, 258 commands, 673 skills, 66 MCPs | Extending Claude Code config (agents, commands, hooks, skills) |

---

## Compliance Checklists (18)

Regulatory compliance templates for commercial production-ready projects. See `compliance/INDEX.md` for full details.

| Category | Files | Content |
|----------|-------|---------|
| Sectors (7) | ecommerce, saas, healthcare, finance, children, ai-ml, marketplace | Sector-specific compliance checklists |
| Regulations (8) | gdpr, pci-dss-4, hipaa, ccpa-cpra, nis2-cra, soc2, eaa-wcag22, owasp-2025 | Detailed regulation checklists |
| Patterns (3) | cookie-consent, consent-management, data-subject-requests | Implementation patterns (multi-framework) |

Usage: `/compliance audit` | `/compliance sector:ecommerce` | `/compliance checklist gdpr`

---

## Scaffold Templates by Category (166)

### AI Agents (43 templates)

Single-purpose AI agents for specific domains.

| Template | Domain | Key Tech |
|----------|--------|----------|
| `ai-assistant` | General assistant | OpenAI/Anthropic |
| `ai-cerebras-search` | AI-powered search | Cerebras |
| `ai-chess` | Chess AI | Game AI |
| `ai-consultant` | Business consulting | LLM + analysis |
| `ai-customer-support` | Customer service | Chatbot + RAG |
| `ai-data-analysis` | Data analytics | Python + pandas |
| `ai-data-visualization` | Data viz | Charts + AI |
| `ai-deep-research` | Research agent | Web search + synthesis |
| `ai-domain-research` | Domain analysis | Web scraping + AI |
| `ai-email-gtm` | Email marketing | AI + email APIs |
| `ai-financial-coach` | Personal finance | Financial AI |
| `ai-health-fitness` | Health tracking | Health AI |
| `ai-home-renovation` | Home design | Vision + design AI |
| `ai-investment` | Investment advisor | Financial AI |
| `ai-journalist` | News writing | AI content |
| `ai-langgraph-supervisor` | Agent orchestration | LangGraph |
| `ai-life-insurance-advisor` | Insurance | Domain AI |
| `ai-medical-imaging` | Medical image analysis | Vision AI |
| `ai-meeting` | Meeting assistant | Transcription + AI |
| `ai-meme-generator` | Meme creation | Image gen + humor |
| `ai-mental-wellbeing` | Mental health | Supportive AI |
| `ai-movie-production` | Film production | Creative AI |
| `ai-music-generator` | Music creation | Audio AI |
| `ai-news-podcast` | Podcast generation | TTS + AI |
| `ai-personal-finance` | Budget tracking | Financial AI |
| `ai-reasoning-agent` | Reasoning/logic | Advanced reasoning |
| `ai-recipe-meal-planning` | Meal planning | Food + nutrition AI |
| `ai-self-evolving` | Self-improving agent | Meta-learning |
| `ai-smolagent` | Lightweight agent | SmolAgent framework |
| `ai-speech-trainer` | Speech practice | Voice + AI |
| `ai-startup-insight` | Startup analysis | Business AI |
| `ai-startup-trend-analysis` | Trend analysis | Data + AI |
| `ai-stripe-agent` | Payment agent | Stripe + AI |
| `ai-system-architect` | System design | Architecture AI |
| `ai-tic-tac-toe` | Game AI | Simple game |
| `ai-travel-agent` | Travel planning | Travel APIs + AI |
| `ai-typesafe-agent` | Type-safe agent | TypeScript + AI |
| `ai-aqi-analysis` | Air quality | Environmental AI |
| `ai-blog-to-podcast` | Blog to audio | TTS + content |
| `ai-breakup-recovery` | Emotional support | Supportive AI |
| `ai-3d-pygame` | 3D game | Pygame + AI |
| `multimodal-ai-agent` | Multi-modal | Vision + text + audio |
| `xai-finance-agent` | Finance agent | xAI + financial analysis |

### RAG Applications (21 templates)

Retrieval-Augmented Generation pipelines.

| Template | Approach | Key Tech |
|----------|----------|----------|
| `rag-chatbot` | Basic RAG chatbot | Embeddings + vector DB |
| `rag-chain` | Chained RAG | LangChain |
| `rag-contextual` | Context-aware RAG | Advanced retrieval |
| `rag-corrective` | Self-correcting RAG | Feedback loop |
| `rag-hybrid-search` | Hybrid search | Dense + sparse |
| `rag-db-routing` | Multi-DB routing | Query routing |
| `rag-as-service` | RAG API service | FastAPI + RAG |
| `rag-autonomous` | Autonomous RAG agent | Agent + RAG |
| `rag-blog-search` | Blog search | Content RAG |
| `rag-vision` | Vision RAG | Image + text |
| `rag-vision-advanced` | Advanced vision RAG | Multi-modal |
| `rag-agentic-gemma` | Agentic RAG | Gemma model |
| `rag-agentic-gpt5` | Agentic RAG | GPT-5 |
| `rag-agentic-math` | Math RAG | Mathematical reasoning |
| `rag-agentic-reasoning` | Reasoning RAG | Chain-of-thought |
| `rag-cohere` | Cohere RAG | Cohere API |
| `rag-deepseek-local` | Local RAG | DeepSeek model |
| `rag-gemini` | Gemini RAG | Google Gemini |
| `rag-gemma-mcp` | MCP RAG | Gemma + MCP |
| `rag-llama-local` | Local Llama RAG | Llama model |
| `rag-local-agent` | Local agent RAG | Local LLM |
| `rag-local-hybrid` | Local hybrid | Local + cloud |
| `rag-qwen-local` | Qwen RAG | Qwen model |

### Multi-Agent Teams (16 templates)

Coordinated teams of AI agents working together.

| Template | Domain | Team Structure |
|----------|--------|----------------|
| `team-coding` | Software dev | Coder + reviewer + tester |
| `team-competitor-intel` | Market research | Researcher + analyst |
| `team-design` | Design | Designer + UX + critic |
| `team-finance` | Finance | Analyst + advisor |
| `team-game-design` | Game design | Designer + dev + tester |
| `team-legal` | Legal | Researcher + drafter |
| `team-real-estate` | Real estate | Agent + analyst |
| `team-recruitment` | HR/Hiring | Screener + interviewer |
| `team-seo-audit` | SEO | Auditor + optimizer |
| `team-services-agency` | Agency | PM + designer + dev |
| `team-teaching` | Education | Tutor + quiz + evaluator |
| `team-travel-planner` | Travel | Planner + booker |
| `team-uiux-feedback` | UX review | Reviewer + tester |
| `mixture-of-agents` | General | Multi-model mixture |
| `multi-agent-researcher` | Research | Multi-agent research |
| `openai-research-agent` | Research | OpenAI agents SDK |

### Memory & Chat Apps (13 templates)

Chatbots and apps with persistent memory.

| Template | Type | Target |
|----------|------|--------|
| `memory-arxiv` | Research memory | arXiv papers |
| `memory-local-chatgpt` | Local ChatGPT clone | Local LLM |
| `memory-multi-llm` | Multi-model chat | Multiple LLMs |
| `memory-personalized` | Personalized chat | User context |
| `memory-stateful-chat` | Stateful chat | Session memory |
| `memory-travel` | Travel memory | Trip planning |
| `chat-arxiv` | Chat with papers | arXiv |
| `chat-github` | Chat with repos | GitHub |
| `chat-gmail` | Chat with email | Gmail |
| `chat-pdf` | Chat with PDFs | PDF parsing |
| `chat-substack` | Chat with newsletters | Substack |
| `chat-youtube` | Chat with videos | YouTube |
| `chat-tarots` | Tarot reading | Fun/spiritual |

### MCP Servers (5 templates)

Model Context Protocol server implementations.

| Template | Function |
|----------|----------|
| `mcp-browser` | Browser automation MCP |
| `mcp-github` | GitHub integration MCP |
| `mcp-multi` | Multi-tool MCP server |
| `mcp-notion` | Notion integration MCP |
| `mcp-travel-planner` | Travel planning MCP |

### Voice AI (3 templates)

Voice-enabled AI applications.

| Template | Use Case |
|----------|----------|
| `voice-audio-tour` | Audio tour guide |
| `voice-customer-support` | Voice support agent |
| `voice-rag` | Voice-enabled RAG |

### Games (6 templates)

Game development scaffolds.

| Template | Type |
|----------|------|
| `game-3d-web` | 3D browser game (Three.js/WebGL) |
| `game-multiplayer` | Multiplayer online game |
| `game-puzzle` | Puzzle game |
| `game-roguelike` | Roguelike dungeon |
| `game-web` | 2D browser game |
| `unity-game` | Unity 3D game (C#) |

### ML & Fine-tuning (4 templates)

Machine learning pipelines and model fine-tuning.

| Template | Focus |
|----------|-------|
| `finetune-gemma` | Fine-tune Google Gemma |
| `finetune-llama` | Fine-tune Meta Llama |
| `ml-pipeline` | ML training pipeline |
| `token-optimization` | Token usage optimization |

### Web Applications (21 templates)

Full-stack and frontend web applications.

> **Quick option — B12 Website Generator (MCP tool)**
> Pour un site business rapide sans code custom, utiliser le **B12 MCP** (`generate_website` tool).
> Fournir un `name` + `description` → site complet genere en secondes.
> Ideal pour: agency, blog, ecommerce, hotel, landing, medical, nonprofit, photography, portfolio, real-estate, restaurant, saas, startup, wedding.

| Template | Industry/Type |
|----------|---------------|
| `admin-dashboard` | Admin panel |
| `agency` | Agency website |
| `blog` | Blog platform |
| `ecommerce` | E-commerce store |
| `education` | Education platform |
| `fitness` | Fitness tracker |
| `hotel` | Hotel booking |
| `interior-design` | Interior design showcase |
| `landing` | Landing page |
| `medical` | Medical/health portal |
| `nextjs-saas` | SaaS starter (Next.js) |
| `nonprofit` | Nonprofit website |
| `photography` | Photography portfolio |
| `portfolio` | Developer portfolio |
| `product-launch-intel` | Product launch page |
| `real-estate` | Real estate listings |
| `restaurant` | Restaurant website |
| `saas` | SaaS platform |
| `startup` | Startup landing |
| `wedding` | Wedding website |
| `pwa` | Progressive Web App |

### Mobile (4 templates)

| Template | Platform |
|----------|----------|
| `android-native` | Android (Kotlin) |
| `expo-starter` | React Native (Expo) |
| `ios-native` | iOS (Swift) |
| `mobile` | Cross-platform |

### Desktop (3 templates)

| Template | Framework |
|----------|-----------|
| `desktop` | Generic desktop |
| `electron-app` | Electron |
| `tauri-app` | Tauri (Rust + Web) |

### DevOps & API (5 templates)

| Template | Type |
|----------|------|
| `api` | REST API starter |
| `microservices` | Microservices architecture |
| `supabase-native` | Supabase-first app |
| `vercel-advanced` | Advanced Vercel deployment |
| `workflows` | Workflow automation |

### Developer Tools (7 templates)

| Template | Type |
|----------|------|
| `chrome-extension` | Chrome extension |
| `cursor-experiments` | Cursor IDE experiments |
| `discord-bot` | Discord bot |
| `github-profile` | GitHub profile README |
| `project-docs` | Project documentation |
| `sdd` | Software Design Document |
| `web-scraping-agent` | Web scraper |

### Learning & Courses (3 templates)

| Template | Source |
|----------|--------|
| `google-adk-course` | Google Agent Dev Kit course |
| `openai-sdk-course` | OpenAI SDK course |
| `guides` | General guides collection |

### Specialized (7 templates)

| Template | Domain |
|----------|--------|
| `resume-job-matcher` | Resume/job matching |
| `smart-contracts` | Blockchain smart contracts |
| `streaming-chatbot` | Streaming chat interface |
| `thinkpath-chatbot` | Thinking-path chatbot |
| `websocket-chat` | WebSocket real-time chat |
| `webxr-experience` | WebXR/VR experience |
| `windows-autonomous-agent` | Windows automation agent |
| `oss-critique` | Open source code review |

---

## Quick Lookup by Use Case

### "I want to build a..."

| Use Case | Best Template | Also Check Reference |
|----------|--------------|---------------------|
| Quick business site (no code) | **B12 MCP** `generate_website` | Instant AI-generated site |
| SaaS product | `nextjs-saas` or `saas` | clone-wars (Stripe/auth clones) |
| AI chatbot | `ai-assistant` or `rag-chatbot` | awesome-llm-apps |
| Mobile app | `expo-starter` or `android-native` | roadmap-sh (Flutter roadmap) |
| Game | `game-web` or `game-3d-web` | codrops (WebGL effects) |
| Portfolio | `portfolio` or `github-profile` | profile-readme, website-templates, **B12 MCP** |
| Restaurant site | `restaurant` | website-templates (5 restaurant), **B12 MCP** |
| E-commerce | `ecommerce` | clone-wars (Amazon/Shopify clones), **B12 MCP** |
| Chrome extension | `chrome-extension` | - |
| Discord bot | `discord-bot` | rapidapi (bot APIs) |
| MCP server | `mcp-multi` | glama-mcp (17K+ servers) |
| Desktop app | `tauri-app` or `electron-app` | - |
| API backend | `api` or `microservices` | gitignore (Node/Python/Go) |
| Data pipeline | `ml-pipeline` or `ai-data-analysis` | roadmap-sh (data eng roadmap) |
| Blog | `blog` | website-templates, **B12 MCP** |
| Landing page | `landing` or `startup` | website-templates, codrops, **B12 MCP** |

### "I need an API for..."

Consult `rapidapi-hub-reference.md` for 45 categories of APIs.

### "I need a .gitignore for..."

Consult `gitignore-reference.md` for 262 templates with recommended combos.

### "I want to learn..."

Consult `roadmap-sh-reference.md` for 80+ roadmaps and 80+ project ideas.

---

## Source

- Templates: ultra-create-v28 scaffold collection
- References: Curated from 9 major open-source repositories
- Total: 166 templates + 18 compliance checklists + 10 reference files
