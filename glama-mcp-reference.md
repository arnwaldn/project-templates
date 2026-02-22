# Glama.ai MCP Ecosystem - Connectors & Servers Reference

> Compiled from glama.ai/mcp, glama.ai/mcp/connectors, glama.ai/mcp/servers,
> glama.ai/blog (State of MCP 2025), and github.com/punkpeye/awesome-mcp-servers
> Last updated: 2026-02-22

---

## Ecosystem Quick Stats

| Metric | Value |
|--------|-------|
| Total MCP Servers (Glama registry) | 17,653+ |
| MCP Connectors (remote, no install) | 700+ |
| Awesome MCP Servers (GitHub) | 400+ curated |
| Categories | 42+ |
| NPM weekly downloads (ecosystem) | 31M+ |
| Reddit r/mcp members | 80K+ |
| Discord community | 9.5K+ |
| GitHub contributors (2025) | 15,294 |
| GitHub commits (2025) | 85K |
| VC funding raised (ecosystem) | $73M+ |
| Glama platform users | 50,000+ businesses |

---

## What Are MCP Connectors vs Servers?

| Feature | MCP Servers | MCP Connectors |
|---------|-------------|----------------|
| Installation | Local (npx, Docker, binary) | No install (remote) |
| Auth | API keys in env vars | OAuth 2.0 or no auth |
| Setup | Config in settings.json | One-click connect |
| Count | 17,653+ | 700+ |
| Best for | Custom/local tools | Quick integrations |

---

## Connector Categories (with counts)

### By Authentication
| Type | Count |
|------|-------|
| No Auth | 659 |
| OAuth 2.0 | 198 |

### By Capability
| Capability | Count |
|------------|-------|
| Tools | 190 |
| Resources | 82 |
| Prompts | 78 |
| Logging | 23 |
| Completions | 12 |
| Tasks | 7 |

### By Industry / Use Case

| Category | Connectors | Description |
|----------|-----------|-------------|
| **Search** | 232 | Web search, semantic search, custom search |
| **Developer Tools** | 226 | IDEs, CI/CD, code analysis, SDKs |
| **App Automation** | 186 | Workflow automation, integrations |
| **Finance** | 70 | Trading, banking, crypto, fintech |
| **Marketing** | 69 | SEO, ads, campaigns, analytics |
| **Communication** | 68 | Email, chat, messaging, voice |
| **Research & Data** | 65 | Academic, scientific, data enrichment |
| **Web Scraping** | 57 | Data extraction, crawling, parsing |
| **E-commerce & Retail** | 51 | Shopping, inventory, payments |
| **Autonomous Agents** | 46 | Agent frameworks, orchestration |
| **Open Data** | 45 | Public datasets, government data |
| **Documentation Access** | 44 | Library docs, API references |
| **Agent Orchestration** | 43 | Multi-agent coordination |
| **Government Data** | 43 | Public sector, civic data |
| **Project Management** | 40 | Task tracking, team coordination |
| **Databases** | 39 | SQL, NoSQL, vector DBs |
| **Knowledge & Memory** | 39 | RAG, knowledge graphs, memory |
| **Workplace & Productivity** | 39 | Office tools, collaboration |
| **Browser Automation** | 36 | Web interaction, testing |
| **Security** | 36 | Threat intel, scanning, identity |
| **Content Management** | 36 | CMS, content creation |
| **Monitoring** | 34 | Observability, alerts, logging |
| **Blockchain** | 34 | Crypto, DeFi, on-chain data |
| **Cloud Platforms** | 33 | AWS, GCP, Azure, Railway |
| **RAG Systems** | 30 | Retrieval-augmented generation |
| **Multimedia Processing** | 27 | Video, audio, image tools |
| **Customer Data** | 25 | CRM, customer analytics |
| **Social Media** | 25 | Social platform integrations |
| **Travel & Transportation** | 24 | Booking, logistics, transit |
| **Web3 & Decentralized** | 24 | DApps, smart contracts |

---

## Top MCP Servers by NPM Downloads

| Package | Weekly Downloads | Category |
|---------|-----------------|----------|
| **@playwright/mcp** | 951K | Browser Automation |
| **@upstash/context7-mcp** | 396K | Documentation Access |
| **@modelcontextprotocol/server-filesystem** | 197K | File Systems |
| **chrome-devtools-mcp** | 124K | Browser Automation |

---

## Featured MCP Connectors (Remote, No Install)

### Developer Tools
| Connector | Provider | Description |
|-----------|----------|-------------|
| **Postman** | postmanlabs | Connect AI agents to your Postman APIs |
| **JFrog** | jfrog | Repository management, artifact scanning |
| **LangSmith** | langchain-ai | LLM observability and tracing |
| **Semgrep** | semgrep | Code scanning, SAST security analysis |
| **Railway** | railwayapp | Cloud deployment, project management |
| **ZenML** | zenml-io | ML pipeline orchestration |
| **Databutton** | databutton | App scaffolding and planning |
| **octomind** | OctoMind-dev | E2E web testing automation |
| **Code Registry** | - | Code package lookup |

### Search & Data
| Connector | Provider | Description |
|-----------|----------|-------------|
| **Brave Search** | brave | Web search via Brave Search API |
| **Exa** | exa-labs | AI-powered semantic web search |
| **DataForSEO** | dataforseo | SEO data, SERP analysis |
| **Serpstat** | SerpstatGlobal | SEO analytics, keyword research |
| **Searchapi** | - | Multi-engine search aggregator |
| **Docfork** | docfork | Docs for 9000+ libraries |
| **google-news-trends** | jmanek | Google News articles and trends |

### Databases & Storage
| Connector | Provider | Description |
|-----------|----------|-------------|
| **Meilisearch** | meilisearch | Full-text search engine |
| **Chroma** | chroma-core | Vector database for RAG |
| **Alibaba Cloud DMS** | aliyun | Cross-engine database querying |
| **YDB** | ydb-platform | Distributed SQL database |

### Security
| Connector | Provider | Description |
|-----------|----------|-------------|
| **Kaspersky OpenTIP** | KasperskyLab | Threat intelligence platform |
| **ScanMalware** | scanmalware | URL scanning, malware detection |
| **Panther** | panther-labs | SIEM, security monitoring |
| **Mallory** | malloryai | Real-time cyber threat intel |
| **JoeSandbox** | joesecurity | Malware analysis, IOC extraction |
| **PingOne** | pingidentity | Identity management |
| **Agent Safe** | - | Agent security guardrails |

### Communication & Productivity
| Connector | Provider | Description |
|-----------|----------|-------------|
| **Notion** | makenotion | Notes, wikis, project management |
| **Linear** | - | Issue tracking, project management |
| **Teamwork.com** | Teamwork | Client project management |
| **Sentry** | - | Error tracking, performance monitoring |
| **Bitrix24** | - | CRM, project management |
| **Webflow** | - | Website builder, CMS |
| **Wix** | - | Website builder platform |
| **Gmail (MintMCP)** | - | Email management |
| **SendForSign** | sendforsign | E-signature workflows |
| **DeepWriter** | deepwriter-ai | Content creation platform |

### Finance & Blockchain
| Connector | Provider | Description |
|-----------|----------|-------------|
| **CryptoQuant** | CryptoQuantOfficial | On-chain crypto analytics |
| **Token Metrics** | token-metrics | Crypto analytics platform |
| **Nansen** | - | Blockchain analytics |
| **Bitrefill** | bitrefill | Crypto shopping, gift cards |
| **Satstream** | satstream | Bitcoin blockchain data |
| **Grove (Pocket Network)** | pokt-network | 69+ blockchain RPC endpoints |
| **Blockscout** | - | Blockchain explorer |
| **Payram** | - | Payment processing |

### Cloud Platforms
| Connector | Provider | Description |
|-----------|----------|-------------|
| **Cloud Run** | GoogleCloudPlatform | Deploy to Google Cloud Run |
| **Contabo** | la-rebelion/HAPI | VPS provisioning |
| **Selise Blocks Cloud** | - | Cloud platform services |

### Research & Science
| Connector | Provider | Description |
|-----------|----------|-------------|
| **Noctua** | geneontology | Gene Ontology models |
| **BioContextAI** | biocontext-ai | Biomedical knowledge bases |
| **UN Demographics** | - | United Nations population data |
| **Explorium** | - | Data enrichment platform |

### Translation & Text
| Connector | Provider | Description |
|-----------|----------|-------------|
| **DeepL** | DeepLcom | Neural machine translation |

### Multimedia
| Connector | Provider | Description |
|-----------|----------|-------------|
| **JobDoneBot** | acromoney888 | 84+ tools: image, PDF, docs, dev utils |
| **Ludo AI** | - | Game asset generation |
| **PDF.co** | pdfdotco | PDF processing tasks |

---

## Popular MCP Servers (Local Install)

### Official / Major Provider Servers

| Server | Provider | Install | Category |
|--------|----------|---------|----------|
| **Playwright MCP** | Microsoft | `npx @playwright/mcp` | Browser Automation |
| **Context7** | Upstash | `npx @upstash/context7-mcp` | Documentation |
| **Filesystem** | Anthropic | `npx @modelcontextprotocol/server-filesystem` | File Systems |
| **GitHub** | Anthropic | `npx @modelcontextprotocol/server-github` | Version Control |
| **Memory** | Anthropic | `npx @modelcontextprotocol/server-memory` | Knowledge |
| **Sequential Thinking** | Anthropic | `npx @modelcontextprotocol/server-sequential-thinking` | Reasoning |
| **Puppeteer** | Anthropic | `npx @modelcontextprotocol/server-puppeteer` | Browser |
| **Postgres** | Anthropic | `npx @modelcontextprotocol/server-postgres` | Databases |
| **Slack** | Anthropic | `npx @modelcontextprotocol/server-slack` | Communication |
| **Google Maps** | Anthropic | `npx @modelcontextprotocol/server-google-maps` | Location |
| **AWS** | AWS Labs | `npx @awslabs/mcp` | Cloud |
| **Cloudflare** | Cloudflare | HTTP MCP | Cloud |
| **Supabase** | Supabase | `npx @supabase/mcp-server-supabase` | Databases |
| **Firebase/Genkit** | Google | `npx @anthropic/genkit-mcp` | Backend |
| **Vercel** | Vercel | HTTP MCP | Deployment |
| **Railway** | Railway | `npx @railway/mcp-server` | Deployment |
| **Sentry** | Sentry | npm install | Monitoring |
| **Linear** | Linear | OAuth connector | Project Mgmt |

### Community Favorites

| Server | Description | Install |
|--------|-------------|---------|
| **Firecrawl** | Web scraping with JS rendering | `npx firecrawl-mcp` |
| **Desktop Commander** | Desktop automation, file ops | `npx @wonderwhy-er/desktop-commander` |
| **Magic UI** | UI component generation | `npx @magicuidesign/mcp` |
| **Brave Search** | Privacy-focused web search | `npx @anthropic/brave-search-mcp` |
| **Exa Search** | AI-powered semantic search | npm install |
| **Browserbase** | Cloud browser automation | npm install |
| **Neon** | Serverless Postgres | npm install |
| **Prisma** | ORM and database tools | npm install |
| **Turbopuffer** | Vector database | npm install |
| **Tavily** | AI search engine | npm install |

---

## Awesome MCP Servers - Full Category Index

From github.com/punkpeye/awesome-mcp-servers (400+ servers):

| # | Category | Examples |
|---|----------|----------|
| 1 | **Aggregators** | 1mcp/agent, Aganium |
| 2 | **Aerospace & Astrodynamics** | Orbital mechanics tools |
| 3 | **Art & Culture** | Museum APIs, creative tools |
| 4 | **Architecture & Design** | Diagram generation, visualization |
| 5 | **Biology & Medicine** | FHIR, genomics, medical data |
| 6 | **Browser Automation** | Playwright, Browserbase, Puppeteer |
| 7 | **Cloud Platforms** | AWS, GCP, Azure, Cloudflare, Railway |
| 8 | **Code Execution** | Sandboxes, REPL environments |
| 9 | **Coding Agents** | AI dev assistants |
| 10 | **Command Line** | Terminal integration, shell tools |
| 11 | **Communication** | Slack, Discord, Email, SMS |
| 12 | **Customer Data** | CRM, Salesforce, HubSpot |
| 13 | **Databases** | Postgres, MySQL, MongoDB, Redis, SQLite |
| 14 | **Data Platforms** | BigQuery, Snowflake, Databricks |
| 15 | **Data Science** | ML tools, Jupyter, analysis |
| 16 | **Delivery** | Shipping, logistics tracking |
| 17 | **Developer Tools** | Git, testing, CI/CD, linting |
| 18 | **Embedded Systems** | IoT, Arduino, hardware |
| 19 | **Environment & Nature** | Climate, weather, sustainability |
| 20 | **File Systems** | Local/cloud file management |
| 21 | **Finance & Fintech** | Trading, banking, crypto |
| 22 | **Gaming** | Game engines, game data APIs |
| 23 | **Home Automation** | Home Assistant, smart home |
| 24 | **Knowledge & Memory** | RAG, knowledge graphs, memory |
| 25 | **Legal** | Legal research, contracts |
| 26 | **Location Services** | Maps, geocoding, routing |
| 27 | **Marketing** | SEO, ads, campaigns |
| 28 | **Monitoring** | Datadog, Grafana, alerts |
| 29 | **Multimedia** | Video, audio, image processing |
| 30 | **Product Management** | Jira, Linear, Asana |
| 31 | **Research** | Academic papers, datasets |
| 32 | **Search & Data Extraction** | Brave, Exa, scraping |
| 33 | **Security** | VirusTotal, Semgrep, Snyk |
| 34 | **Social Media** | Twitter, Facebook, LinkedIn |
| 35 | **Sports** | Live scores, stats |
| 36 | **Support & Service** | Zendesk, Intercom, ticketing |
| 37 | **Translation** | DeepL, Google Translate |
| 38 | **Text-to-Speech** | ElevenLabs, audio synthesis |
| 39 | **Travel & Transportation** | Flights, hotels, transit |
| 40 | **Version Control** | GitHub, GitLab, Bitbucket |
| 41 | **Workplace & Productivity** | Notion, Google Workspace |
| 42 | **Other Tools** | Miscellaneous integrations |

---

## MCP Ecosystem Trends (2025-2026)

### Key Findings (from Glama State of MCP 2025)

1. **Remote servers won** over local deployments - easier setup, better security
2. **Consolidation** toward full-stack MCP platforms
3. **MCP-First SaaS** - existing data providers adding MCP as primary interface
4. **Background agents** replacing chat-based workflows
5. **Enterprise private registries** emerging for internal tool sharing
6. **MCP Apps spec** introduced Nov 2025 for richer interactions
7. **~50% attrition** - ~40 of 81 tracked MCP companies pivoted/abandoned

### Top VC-Funded MCP Companies

| Company | Funding | Focus |
|---------|---------|-------|
| Obot AI | $35M | Enterprise MCP gateway |
| Glue | $20M | Agentic workspace |
| Daloopa | $13M | Financial data platform |
| Runlayer | $11M | Security-focused MCP |
| Alpic | $6M | MCP-native cloud |
| Desktop Commander | 1.1M EUR | Desktop automation |

---

## Quick Reference: Setting Up MCP Servers

### In Claude Code (~/.claude.json)
```json
{
  "mcpServers": {
    "server-name": {
      "command": "npx",
      "args": ["-y", "@package/mcp-server"]
    }
  }
}
```

### Remote/HTTP MCP Server
```json
{
  "mcpServers": {
    "server-name": {
      "type": "http",
      "url": "https://mcp.example.com/mcp"
    }
  }
}
```

### In Project (.mcp.json for team sharing)
```json
{
  "mcpServers": {
    "server-name": {
      "command": "npx",
      "args": ["-y", "@package/mcp-server"],
      "env": {
        "API_KEY": "your-key"
      }
    }
  }
}
```

---

## Sources

- Glama MCP Hub (glama.ai/mcp)
- Glama MCP Connectors (glama.ai/mcp/connectors)
- Glama MCP Servers (glama.ai/mcp/servers)
- Glama Blog - State of MCP 2025 (glama.ai/blog/2025-12-07-the-state-of-mcp-in-2025)
- Awesome MCP Servers (github.com/punkpeye/awesome-mcp-servers)
- NPM download stats for MCP packages
