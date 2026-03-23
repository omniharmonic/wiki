---
title: "Knowledge Commons"
type: concept
visibility: public
aliases: [Knowledge Commoning, Knowledge Sharing Commons]
related:
  - [[wiki/concepts/Pattern Mining]]
  - [[wiki/concepts/Bioregional Coordination]]
  - [[wiki/concepts/AI]]
  - [[wiki/concepts/Peer Federation]]
tags: [knowledge-management, commons, ai, bioregional, open-protocols]
created: "2026-02-10"
updated: "2026-02-10"
---

# Knowledge Commons

## Definition

A **knowledge commons** is a shared repository and governance system for collectively managing, preserving, and evolving knowledge within a community or network. Unlike proprietary knowledge systems, knowledge commons operate on principles of open access, collaborative curation, and distributed stewardship.

## Significance

Knowledge commons enable communities to:

- **Preserve embodied wisdom** from elders and practitioners
- **Avoid reinventing wheels** by making past learnings accessible
- **Federate across bioregions** without imposing universal schemas
- **Scale coordination** through shared understanding of patterns
- **Democratize expertise** by making practical knowledge queryable and accessible

## Key Principles

### 1. Open Access

Knowledge is freely available to commons members and (often) broader public, rather than proprietary or paywalled.

### 2. Collaborative Curation

Multiple contributors add, refine, and maintain knowledge over time. Not centrally controlled.

### 3. Living Documentation

Knowledge commons evolve as new insights emerge, rather than static archives.

### 4. Contextual Understanding

Knowledge includes context of who, when, where, why — not just abstract information.

## AI-Enabled Knowledge Commons

Recent developments in [[wiki/concepts/AI|AI]] and [[wiki/concepts/Vector Embeddings|vector embeddings]] dramatically lower barriers to knowledge commoning:

### Traditional Challenges

- **Schema reconciliation**: Different communities organize knowledge differently
- **Manual tagging**: Time-intensive to categorize and cross-reference
- **Universal standards**: Imposing shared taxonomy alienates diverse perspectives
- **Technical barriers**: Complex systems exclude non-technical contributors

### AI Solutions

- **Agent-mediated translation**: Agents negotiate between different taxonomies without universal schema
- **Automatic pattern extraction**: AI ingests interviews, documents, conversations and extracts key patterns
- **Natural language interface**: Non-technical people can query and contribute via conversation
- **Federated indexing**: Agents subscribe to repo updates via meta-index, pull relevant insights

### DIY Protocol Librarian Stack

**Proposed workflow** (from [[vault/_staging/meetings/2026-02-10-spirit-duna-formation|Spirit meeting]]):

1. **Recording**: Phone, audio recorder, video call → capture elder interview, practitioner knowledge
2. **Transcription**: Whisper or similar tool → convert audio to text
3. **Pattern mining**: AI agent extracts key insights, tags entities, creates cross-references
4. **Repository ingest**: Structured knowledge added to shared repo (e.g., Obsidian vault, GitHub)
5. **Federation**: Agent pings federated repos ("we added pattern about backyard gardens, do you want it?")
6. **Public access**: Knowledge published via wiki, queryable by community

## Applications

### Bioregional Coordination

**Example**: [[vault/projects/spirit-of-the-front-range|Spirit of the Front Range]] + [[wiki/concepts/Cascadia Bioregional Movement|Cascadia]]
- Both regions capture local agricultural knowledge (climate, soil, growing practices)
- Agents federate patterns between regions
- Each maintains local taxonomy, agents translate
- Shared learning without imposed standardization

**See**: [[vault/_staging/meetings/2026-02-10-spirit-duna-formation]] for knowledge commons infrastructure discussion

### Civic Transparency

**Example**: [[wiki/concepts/Open Council|Open Council]] (Heenal Rajani)
- 1,500 city council meetings archived (London, Ontario, 10 years)
- RAG (retrieval-augmented generation) chatbot for querying
- Transcripts + minutes + press reports (multiple perspectives)
- **Vision**: "If every city had this, collective insights could talk together"

**See**: [[vault/_staging/meetings/2026-02-10-heenal-rajani-opencivics-collaboration]] for Open Council details

### Open Protocol Libraries

**Example**: [[vault/projects/opencivics|OpenCivics]] + [[vault/organizations/Super Benefit]]
- Shared repositories of civic coordination patterns
- Agent-mediated federation between repos
- Meta-index (not meta-repo) approach
- Bridge schemas enable translation without universal standard

**See**: [[vault/_staging/meetings/2026-02-10-heenal-rajani-opencivics-collaboration]] for protocol federation discussion

## Technical Architecture

### Peer Federation Model

**Not**: Central repository that all communities contribute to

**Instead**: Distributed repos that agents federate peer-to-peer

**Mechanism**:
1. **Meta-index**: Registry of participating repos (location, taxonomy, contact)
2. **Agent subscriptions**: Agents subscribe to relevant repos via index
3. **Update notifications**: New content → notify subscribed agents
4. **Agent evaluation**: Receiving agent decides if content fits their repo
5. **Schema translation**: Agents use bridge YAML files to translate between taxonomies
6. **Bilateral negotiation**: No universal schema, agents negotiate case-by-case

**Advantages**:
- No central point of failure
- No imposed standardization
- Local autonomy preserved
- Global accessibility achieved
- Emergent interoperability

### Example: Adding Agricultural Pattern

1. **Jordan's podcast** (Front Range) extracts pattern from farmer interview
2. **Spirit agent** ingests transcript, identifies "backyard garden network" pattern
3. **Spirit agent** pings Cascadia agent: "New pattern on backyard gardens, want it?"
4. **Cascadia agent** checks taxonomy: "Yes, fits our 'urban agriculture' category"
5. **Agents negotiate**: Spirit uses "backyard gardens", Cascadia uses "urban ag"
6. **Pattern added** to Cascadia repo with translated taxonomy
7. **Both communities** can now query this knowledge in their own language

## Eleanor Ostrom's "Knowledge as a Commons"

**Context**: [[vault/people/Eleanor Ostrom|Eleanor Ostrom]] extended commons theory beyond physical resources (fisheries, forests) to knowledge itself

**Key insight**: Knowledge exhibits commons characteristics:
- Non-rivalrous (use doesn't deplete)
- Subject to tragedy of the commons (under-contribution, over-extraction)
- Requires governance to sustain
- Benefits from collective stewardship

**Reference**: Ostrom edited book "Knowledge as a Commons" (beyond her famous fisheries work)

## Distinction from Knowledge Management

| Knowledge Management | Knowledge Commons |
|---------------------|-------------------|
| Organizational efficiency | Collective wisdom preservation |
| Proprietary/internal | Open/federated |
| Top-down curation | Distributed stewardship |
| Standardized taxonomy | Pluralistic taxonomies |
| Individual/team access | Community/network access |

## Implementation Examples

### OpenCivics Knowledge Commons

**Status**: Prototyping during ETH Boulder hackathon (Feb 2026)

**Components**:
- GitHub repo as constitution
- Obsidian vault as knowledge base
- AI agents as librarians and federators
- Meta-index for repo discovery
- Bridge schemas for translation

### Front Range Commons

**Status**: Planning (2026 formation)

**Focus**:
- Agricultural knowledge (seed to soil)
- Indigenous revitalization wisdom
- Bioregional coordination patterns
- Elder interviews and oral histories

### Cascadia Bioregional Commons

**Status**: Active pattern mining efforts

**Collaboration**: Federation with Front Range and other bioregions

**Method**: Elder interviews, practitioner knowledge capture, pattern extraction

## Challenges & Open Questions

### Governance

- Who decides what knowledge enters commons?
- How to handle contested knowledge or disagreement?
- What authority do agents have to make federation decisions?

### Quality Control

- How to ensure knowledge accuracy?
- What verification mechanisms exist?
- How to update knowledge as understanding evolves?

### Privacy & Consent

- How to respect wishes of knowledge holders?
- Attribution vs anonymity decisions
- Cultural appropriation concerns (especially indigenous knowledge)

### Sustainability

- Who maintains infrastructure?
- How to fund ongoing stewardship?
- What happens if key maintainers leave?

## Related Concepts

- [[wiki/concepts/Pattern Mining]] - Extracting insights from interviews/documents
- [[wiki/concepts/Bioregional Coordination]] - Place-based organizing enabled by knowledge commons
- [[wiki/concepts/Peer Federation]] - Decentralized relationship model
- [[wiki/concepts/AI]] - Technology enabling scaled knowledge commoning
- [[wiki/concepts/Vector Embeddings]] - How AI remembers and relates knowledge
- [[wiki/concepts/Meta-Index]] - Registry approach vs meta-repo
- [[wiki/concepts/Bridge Schemas]] - Translation between taxonomies
- [[wiki/concepts/RAG]] (Retrieval-Augmented Generation) - AI technique for queryable archives
- [[wiki/concepts/Open Protocols]] - Shared standards for coordination

## References

- [[vault/_staging/meetings/2026-02-10-spirit-duna-formation]] - Knowledge commons infrastructure planning
- [[vault/_staging/meetings/2026-02-10-heenal-rajani-opencivics-collaboration]] - Federation approach and Open Council
- Eleanor Ostrom, "Knowledge as a Commons" (edited volume)
- [[vault/projects/opencivics|OpenCivics]] - Applied knowledge commons work

