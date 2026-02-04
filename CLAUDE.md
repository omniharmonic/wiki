# Omniharmonic — Second Brain

You are operating inside **Benjamin Life's second brain** — a comprehensive personal and professional knowledge management system powered by the OPAL engine.

## Identity

This system is a **digital familiar and echo** — an extension of Benjamin's cognitive workspace. It holds his projects, tasks, meetings, relationships, and published knowledge in an interconnected, AI-queryable structure.

## Owner

**Benjamin Life** — Co-Founder of OpenCivics, bioregional organizer, systems thinker, civic innovator. Based in Boulder, Colorado.

- Website: https://www.omniharmonic.com
- Writing: https://omniharmonic.substack.com
- Code: https://github.com/omniharmonic
- Contact: synergy@benjaminlife.one

## Architecture

### Two Zones

| Zone | Path | Visibility | Purpose |
|------|------|------------|---------|
| **Vault** | `vault/` | Private (gitignored) | Command center — projects, tasks, meetings, people, orgs |
| **Wiki** | `wiki/` | Public (git-tracked) | Knowledge base — writing, concepts, research |

**The privacy boundary is structural.** The entire `vault/` directory is excluded from git via `.gitignore`. Only content inside `wiki/` can ever be published. There is no metadata-based visibility — if it's in vault, it's private. Period.

### Resource Types

| Type | Zone | Directory | Purpose |
|------|------|-----------|---------|
| task | vault | `vault/tasks/active/` | Actionable items with status, priority, project links |
| project | vault | `vault/projects/<name>/` | Project workspaces with dashboards |
| meeting | vault | `vault/meetings/YYYY-MM-DD/` | Meeting notes and transcripts |
| person | vault | `vault/people/` | Contact profiles and relationships |
| organization | vault | `vault/organizations/` | Organization profiles |
| concept | wiki | `wiki/concepts/` | Public concept definitions |
| research | wiki | `wiki/research/` | Research documents and analysis |
| writing | wiki | `wiki/writing/` | Published essays and articles |

### Content Templates

All templates live in `_templates/` with rich YAML frontmatter for Obsidian Dataview queries. Every file has a `type:` field that enables cross-type querying.

### Schema

Full schema definition in `.opal/schema.yaml` — resource types, fields, dimensions, and relationships.

---

## Processing Pipeline

```
vault/_inbox/ (raw content)
    │
    ▼
CLASSIFY ────────► What is this? (transcript, document, audio, URL)
    │
    ▼
PREPROCESS ──────► Cleanup (transcript fix, audio→text, PDF→markdown)
    │
    ▼
EXTRACT ─────────► Domain-aware entity extraction (Claude-powered)
    │                Uses .opal/schema.yaml to understand what matters
    ▼
RECONCILE ───────► Check for duplicates in _index/entities.json
    │
    ▼
STAGE ───────────► Prepare proposed changes ──► vault/_staging/
    │
    ▼
REVIEW ──────────► Human reviews staged changes
    │
    ▼
COMMIT ──────────► Apply changes to vault/ and _index/
```

### Key Directory Mapping

- **Inbox**: `vault/_inbox/` — raw incoming content
- **Staging**: `vault/_staging/` — pending human review
- **Index**: `_index/` — entity index and pipeline state
- **Templates**: `_templates/` — content type templates

---

## Available Commands

### Setup & Status
| Command | Description |
|---------|-------------|
| `/setup` | Interactive configuration wizard |
| `/status` | Show current state and pending items |
| `/profile` | Manage configuration profiles |
| `/help` | Contextual guidance |

### Content Acquisition
| Command | Description |
|---------|-------------|
| `/sync` | Pull from configured sources (Meetily, Calendar, etc.) |
| `/ingest` | Manual content ingestion |
| `/watch` | Monitor RSS feeds |
| `/calendar` | Meeting context and calendar writeback |

### Processing
| Command | Description |
|---------|-------------|
| `/process` | Process inbox through extraction pipeline |
| `/review` | Review and approve staged changes |
| `/cleanup` | Tidy up after processing |

### Search & Discovery
| Command | Description |
|---------|-------------|
| `/search <query>` | Semantic + keyword search across vault and wiki |
| `/ask <question>` | AI-powered Q&A with citations |
| `/graph` | Visualize entity relationships |
| `/coverage` | Gap analysis by dimension |

### Publishing
| Command | Description |
|---------|-------------|
| `/publish` | Build and deploy wiki via Quartz |
| `/digest` | Generate activity summaries |

### Project Management
| Command | Description |
|---------|-------------|
| `/sources` | Manage content sources |
| `/embeddings` | Manage semantic search index |

---

## Active Projects

| Project | Organization | Role |
|---------|-------------|------|
| OpenCivics | OpenCivics | Co-Founder, Network Steward |
| OpenCivics Labs | OpenCivics | Lead, Software Cooperative |
| Localism Fund | — | Co-Steward |
| Regen Commons | — | Co-Founder |
| Spirit of the Front Range | — | Bioregional Organizer |
| Ethereum Localism | OpenCivics | Track Lead |
| Opal | OpenCivics Labs | Lead Developer |

---

## Key Collaborators

- **Tim Archer** — OpenCivics co-founder
- **Patricia Parkinson** — OpenCivics co-founder
- **Christopher & Sophia Life** — One Nation / broader network

---

## Working Principles

1. **Vault is sacred.** Never expose vault content to git, publishing, or external systems.
2. **Templates are law.** Always use `_templates/` when creating new content. Frontmatter consistency enables Dataview.
3. **Process, don't dump.** Content enters through `vault/_inbox/` and goes through the pipeline. Don't create files directly in final locations unless intentional.
4. **Link everything.** Use wiki-links (`[[path/to/file]]`) aggressively. Cross-references create the knowledge graph.
5. **Schema-aware extraction.** When processing content, reference `.opal/schema.yaml` to understand what entities and relationships to extract.
6. **Human review.** Nothing bypasses staging without explicit approval.

---

## Philosophy

> *"Not the imposed harmony of a conductor forcing consensus, but the emergent harmony of a jazz ensemble — where each player's improvisations create something none could achieve alone."*

This system serves Benjamin's core question: *"Why is the world so full of suffering and why haven't we collectively chosen to create a more beautiful one?"*

Every piece of knowledge captured here is in service of building the infrastructure for non-rivalrous coordination — a world that works for all.

---

*Powered by OPAL — Open Protocol Agent Librarian*
