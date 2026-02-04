# Omniharmonic Second Brain — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a comprehensive personal knowledge management system ("second brain") for Benjamin Life that combines a private command center (projects, tasks, meetings, contacts) with a public knowledge wiki, powered by the Opal knowledge engine.

**Architecture:** Directory-based public/private separation — `vault/` (gitignored) for all private content, `wiki/` (git-tracked, Quartz-published) for public content. Opal's 27 skills and 23 commands sit at the root `.claude/` directory, providing shared intelligence across both zones. Content templates use rich YAML frontmatter for Obsidian Dataview queryability. All entity types follow consistent metadata patterns enabling cross-referencing dashboards.

**Tech Stack:** Markdown + YAML frontmatter, Obsidian (with Dataview), Quartz (static site generator), Git, Opal (Claude Code plugin), Meetily/Fathom (transcription), Google Calendar, Notion.

---

## Directory Structure (Target)

```
omniharmonic/
├── .claude/                           # Opal engine (shared intelligence)
│   ├── skills/                        # 27 processing skills
│   ├── commands/                      # 23 slash commands
│   ├── agents/                        # Coordinator agent
│   └── templates/                     # Opal preset templates
├── .opal/                             # User knowledge configuration
│   ├── schema.yaml                    # Resource types, dimensions, relationships
│   ├── config.yaml                    # Main user configuration
│   └── bridges/                       # Taxonomy translation bridges
├── config/                            # System configuration
│   ├── settings.yaml                  # Core settings (mode, processing, directories)
│   ├── integrations.yaml              # Content source integrations
│   ├── publishing.yaml                # Quartz/static site settings
│   ├── llm.yaml                       # LLM routing
│   ├── embeddings.yaml                # Vector search settings
│   └── processing.yaml                # PDF/content processing
├── _templates/                        # Content templates (all types)
│   ├── task.md
│   ├── PROJECT.md
│   ├── project-index.md
│   ├── meeting.md
│   ├── person.md
│   ├── organization.md
│   ├── concept.md
│   ├── research.md
│   └── writing.md
├── _index/                            # Entity index & state
│   ├── entities.json
│   ├── pipeline-state.json
│   └── sync-state.json
│
├── vault/                             # PRIVATE (gitignored)
│   ├── projects/                      # Project workspaces
│   │   ├── opencivics/
│   │   │   ├── PROJECT.md
│   │   │   ├── index.md               # Dashboard with Dataview
│   │   │   ├── meetings/
│   │   │   ├── docs/
│   │   │   └── shared/
│   │   ├── opencivics-labs/
│   │   ├── localism-fund/
│   │   ├── regen-commons/
│   │   ├── spirit-of-the-front-range/
│   │   ├── ethereum-localism/
│   │   └── opal/
│   ├── tasks/                         # Cross-project task tracking
│   │   ├── index.md                   # Task dashboard
│   │   ├── active/
│   │   └── completed/
│   ├── meetings/                      # Global meeting archive (by date)
│   ├── people/                        # Contact profiles
│   ├── organizations/                 # Organization profiles
│   ├── _inbox/                        # Incoming raw content
│   │   └── meetings/                  # Raw transcripts
│   ├── _staging/                      # Pending review
│   └── _drafts/                       # Work in progress
│       └── followups/
│
├── wiki/                              # PUBLIC (git-tracked, Quartz)
│   ├── writing/                       # Published essays
│   │   ├── substack/
│   │   └── original/
│   ├── concepts/                      # Public concept definitions
│   ├── research/                      # Research & analysis
│   ├── projects/                      # Public project pages
│   └── about/                         # Bio, contact, mission
│
├── docs/                              # System documentation
│   └── plans/                         # Implementation plans
├── .gitignore                         # vault/ excluded
├── CLAUDE.md                          # Root context for all agents
└── README.md
```

---

## Resource Types (Schema)

| Type | Zone | Purpose |
|------|------|---------|
| task | vault | Individual actionable items with status, priority, project links |
| project | vault | Project workspaces with metadata, objectives, dashboards |
| meeting | vault | Meeting notes/transcripts with attendees, action items |
| person | vault | Contact profiles with relationship context, commitments |
| organization | vault | Organization profiles with structure, involvement |
| concept | wiki | Public concept definitions with wiki-links |
| research | wiki | Research documents, analysis, findings |
| writing | wiki | Published essays, articles, thought leadership |

## Relationships

- project → task (has-many, via `project` field on task)
- project → meeting (has-many, via `projects[]` field on meeting)
- project → person (collaborators, via `collaborators[]` field)
- project → organization (parent, via `org` field)
- meeting → person (attendees, via `attendees[]` field)
- meeting → task (generates, via `context` field on task)
- person → organization (belongs-to, via `organizations[]` field)
- concept → concept (related, via `related[]` field)
- research → concept (explores, via wiki-links)
- writing → concept (discusses, via wiki-links)

## Key Workflows

**Meeting Ingestion:**
`vault/_inbox/meetings/` → `/process` → creates note in `vault/meetings/YYYY-MM-DD/`, extracts people to `vault/people/`, generates tasks in `vault/tasks/active/`, links to relevant projects

**Publishing:**
Write content in `wiki/`. `git add` + `git commit` + `git push`. Quartz builds static site. Only `wiki/` content is ever public.

**Task Management:**
Create tasks in `vault/tasks/active/`. Link to projects via frontmatter. View cross-project in `vault/dashboard.md` via Dataview. Move to `vault/tasks/completed/` when done.

---

## Implementation Tasks

### Task 1: Create Directory Structure

**Step 1:** Create all directories

```bash
# Vault directories
mkdir -p vault/projects/{opencivics,opencivics-labs,localism-fund,regen-commons,spirit-of-the-front-range,ethereum-localism,opal}/{meetings,docs,shared}
mkdir -p vault/tasks/{active,completed}
mkdir -p vault/meetings
mkdir -p vault/people
mkdir -p vault/organizations
mkdir -p vault/_inbox/meetings
mkdir -p vault/_staging
mkdir -p vault/_drafts/followups

# Wiki directories
mkdir -p wiki/writing/{substack,original}
mkdir -p wiki/concepts
mkdir -p wiki/research
mkdir -p wiki/projects
mkdir -p wiki/about

# System directories
mkdir -p .opal/bridges
mkdir -p config
mkdir -p _templates
mkdir -p _index
```

**Step 2:** Create .gitkeep files in empty directories

### Task 2: Copy Opal Engine to Root

**Step 1:** Copy `.claude/` from Opal to root (skills, commands, agents, templates)
**Step 2:** Verify all 27 skills, 23 commands, and agent files are present

### Task 3: Create Schema Configuration

**File:** `.opal/schema.yaml`

Define all resource types, fields, dimensions, and relationships.

### Task 4: Create System Configuration

**Files:**
- `config/settings.yaml` — Personal mode, vault-based directories
- `config/integrations.yaml` — Meetily, Fathom, Calendar, Notion, Telegram, RSS
- `config/publishing.yaml` — Quartz config for wiki/

### Task 5: Create Content Templates

**Files:** All 9 templates in `_templates/`

### Task 6: Write CLAUDE.md

Root context document adapted for the second brain structure.

### Task 7: Create .gitignore

Exclude vault/, secrets, audio/video, embeddings, etc.

### Task 8: Scaffold Vault Projects

Create PROJECT.md and index.md for each of the 7 projects with initial data from Benjamin_Life.md.

### Task 9: Scaffold Wiki

Create initial about/index.md and placeholder files.

### Task 10: Create Dashboards

- `vault/dashboard.md` — Master command center
- `vault/tasks/index.md` — Task overview
- Each project `index.md` — Project dashboards with Dataview

### Task 11: Initialize Git

```bash
git init
git add .
git commit -m "Initialize omniharmonic second brain"
```
