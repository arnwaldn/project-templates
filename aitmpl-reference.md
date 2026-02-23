# AITMPL — Claude Code Templates Reference

> Source: [app.aitmpl.com](https://app.aitmpl.com/) | [GitHub: davila7/claude-code-templates](https://github.com/davila7/claude-code-templates)
> Total: 7,388 files — agents, commands, hooks, skills, MCPs, settings
> Use: Inspiration for extending Claude Code configuration (agents, commands, hooks, skills)

---

## Overview

AITMPL is the largest public collection of Claude Code configuration templates. Use it as a reference when:
- Creating new **agents** → 434 templates across 27 categories
- Creating new **commands** → 258 templates across 22 categories
- Creating new **hooks** → 45 templates across 10 categories
- Adding **skills** → 673 templates across 20 categories
- Configuring **MCPs** → 66 templates across 11 categories
- Optimizing **settings** → 79 templates across 12 categories

## How to Browse

```bash
# Browse online
# https://app.aitmpl.com/

# Or via GitHub API
gh api repos/davila7/claude-code-templates/contents/agents --jq '.[].name'
gh api repos/davila7/claude-code-templates/contents/commands --jq '.[].name'
gh api repos/davila7/claude-code-templates/contents/hooks --jq '.[].name'
gh api repos/davila7/claude-code-templates/contents/skills --jq '.[].name'
```

---

## Agents — 434 templates / 27 categories

### High-value categories for us

| Category | Count | Key agents | Our equivalent |
|----------|-------|------------|----------------|
| **devops-infrastructure** | 39 | devops-engineer, cloud-architect, kubernetes-operator, terraform-expert | devops-expert.md |
| **data-ai** | 40 | machine-learning-engineer, data-scientist, nlp-engineer, computer-vision-engineer | ml-engineer.md |
| **security** | 20 | penetration-tester, compliance-auditor, incident-responder, sre-kubernetes | security-expert.md |
| **mcp-dev-team** | 8 | mcp-developer, mcp-server-architect, mcp-testing-engineer | mcp-expert.md |
| **deep-research-team** | 16 | research-orchestrator, fact-checker, competitive-intelligence-analyst | research-expert.md |
| **realtime** | 2 | websocket-engineer, supabase-realtime-optimizer | networking-expert.md |
| **performance-testing** | 5 | load-testing-specialist, performance-engineer, web-vitals-optimizer | performance-optimizer.md |
| **ui-analysis** | 5 | design-system-analyst, accessibility-auditor | frontend-design-expert.md |

### Categories we don't cover

| Category | Count | Notable agents |
|----------|-------|----------------|
| **blockchain-web3** | 4 | blockchain-developer, smart-contract-auditor |
| **programming-languages** | 50 | elixir-expert, kotlin-expert, swift-expert, scala-expert |
| **enterprise-communication** | 8 | slack-bot-builder, discord-bot-architect |
| **scientific** | 15+ | bioinformatics, quantum-computing, chemistry |

---

## Commands — 258 templates / 22 categories

### High-value commands

| Category | Count | Key commands | Our equivalent |
|----------|-------|-------------|----------------|
| **orchestration** | 15 | feature-pipeline, status, resume, start, sync | /status, /feature-pipeline |
| **database** | 9 | supabase-migration, schema-sync, type-generator | /db |
| **testing** | 15 | generate-tests, test-coverage, e2e-setup | /tdd |
| **performance** | 10 | optimize-bundle, optimize-api, implement-caching | /optimize |
| **security** | 6 | security-audit, dependency-audit, penetration-test | /security-audit |
| **project-management** | 20 | project-health, sprint-planning, standup-report | /health, /status |
| **setup** | 15 | setup-monorepo, setup-ci-cd, setup-docker | /setup-cicd, /scaffold |

### Commands we don't have

| Category | Count | Notable commands |
|----------|-------|-----------------|
| **simulation** | 10 | monte-carlo-simulator, digital-twin-creator |
| **team** | 14 | retrospective-analyzer, code-pairing |
| **nextjs-vercel** | 10 | nextjs-bundle-analyzer, vercel-deploy-optimize |

---

## Hooks — 45 templates / 10 categories

### Hooks we could adopt

| Hook | Description | Priority |
|------|-------------|----------|
| **conventional-commits** | Force conventional commit format | We have this in git-guard.py |
| **prevent-direct-push** | Block push to main/master | We have this in git-guard.py |
| **performance-budget-guard** | Alert if perf budget exceeded | HIGH — not covered |
| **validate-branch-name** | Validate branch naming convention | MEDIUM |
| **smart-commit** | Auto-generate commit messages | MEDIUM |
| **build-on-change** | Auto-build after changes | MEDIUM |

---

## Skills — 673 templates / 20 categories

### High-value skill categories

| Category | Count | Key topics |
|----------|-------|------------|
| **development** | 858 files | accessibility, api-patterns, agent-development, react-best-practices |
| **ai-research** | 405 files | agents-langchain, agents-crewai, agents-llamaindex, rag-patterns |
| **database** | 66 files | supabase-postgres-best-practices (50+ rules) |
| **security** | 52 files | ethical-hacking, api-fuzzing, OWASP patterns |
| **workflow-automation** | 46 files | n8n patterns, github-workflow-automation |
| **creative-design** | 29 files | ui-design-system, mermaid-diagrams, c4-architecture |
| **enterprise-communication** | 33 files | slack-bot, discord-bot, gdpr-expert |

---

## MCPs — 66 templates / 11 categories

### MCPs we don't have

| MCP | Category | Priority |
|-----|----------|----------|
| **mongodb** | database | HIGH if using NoSQL |
| **stripe** | devtools | HIGH for e-commerce (skill exists) |
| **sentry** | devtools | HIGH for monitoring |
| **terraform** | devtools | HIGH for IaC |
| **elasticsearch** | devtools | MEDIUM |
| **grafana** | devtools | MEDIUM |
| **postman** | devtools | MEDIUM |

---

## Quick Reference — When to Consult AITMPL

| Situation | What to look for |
|-----------|-----------------|
| Creating a new agent | Browse agents/ for the closest category |
| Creating a new command | Browse commands/ for workflow patterns |
| Adding a new hook | Browse hooks/ for automation ideas |
| Extending skills | Browse skills/ for domain expertise |
| Adding an MCP | Browse mcps/ for integration options |
| Optimizing settings | Browse settings/ for configuration patterns |
