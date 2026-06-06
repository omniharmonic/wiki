---
title: "Meta-Index"
type: concept
visibility: public
aliases:
  - "Meta-Repository (contrast)"
  - "Registry of Knowledge Commons"
  - "Federated Index"
  - "Neutral Knowledge Registry"
related:
  - "[[wiki/concepts/Knowledge Commons]]"
  - "[[wiki/concepts/Knowledge Organizational Infrastructure]]"
  - "[[wiki/concepts/bioregional-knowledge-commons]]"
  - "[[wiki/concepts/Peer Federation]]"
  - "[[wiki/concepts/open-protocol-libraries]]"
  - "[[wiki/concepts/polycentric-governance]]"
  - "[[wiki/concepts/subsidiarity]]"
  - "[[the-infrastructure-of-belonging]]"
tags:
  - knowledge-management
  - federation
  - bioregional
  - protocols
created: "2026-06-06"
updated: "2026-06-06"
---

# Meta-Index

## Definition

A **meta-index** is a decentralized registry for discovering and federating [[wiki/concepts/Knowledge Commons|knowledge commons]] without routing everything through a centralized meta-repository. Rather than a single warehouse that all communities feed, the meta-index is a minimal registry of participating repos — their location, taxonomy, and contact — that lets agents subscribe to the commons relevant to them. Benjamin frames the distinction sharply as "meta-index (not meta-repo)": the index makes commons *findable* without making them *subordinate*.

## Registry, Not Repository

The meta-index holds pointers, not content. Each participating community keeps its own repo and its own local taxonomy; the index simply records where each lives and how to reach it. In Benjamin's worked example, the Spirit of the Front Range agent extracts an agricultural pattern ("backyard gardens") and pings the [[wiki/concepts/Cascadia Bioregional Movement|Cascadia]] agent to offer it. Cascadia decides autonomously whether to accept. Because both communities maintain distinct taxonomies, the agents negotiate translation case-by-case using [[wiki/concepts/Bridge Schemas|bridge YAML files]] rather than conforming to a shared schema.

Where the meta-index makes repos *discoverable*, [[wiki/concepts/Knowledge Organizational Infrastructure|Knowledge Organizational Infrastructure (COI)]] makes them *interoperable* — the "mycelial substrate" and "duct tape and WD-40" enabling federation through signed envelopes and stigmergic, signal-based updates rather than mandated pulls.

## Opinionated Minimalism and the Trap of the Map-Maker

Benjamin's design ethic here is "opinionated minimalism": the index agrees on a few shared standards (geophysical coordinates, governance language) while staying agnostic about how each node governs itself internally. He points to the Murmurations Protocol as a communally governed open data standard fit for this role.

The deeper rationale is avoiding the "trap of the map-maker" — whoever controls a central registry becomes a gatekeeper. By keeping the index minimal, neutral, and protocol-based rather than a substantive content store, the pattern preserves [[wiki/concepts/subsidiarity|subsidiarity]] and [[wiki/concepts/recursive-sovereignty|recursive sovereignty]] in knowledge governance while still enabling planetary coordination. This is what makes the "plurality of addressable space" possible: many self-governing communities indexed on neutral infrastructure, overlapping geographically without competing for jurisdiction.

## In Benjamin's Work

The meta-index appears throughout Benjamin's federated [[wiki/concepts/bioregional-knowledge-commons|bioregional knowledge commons]] work and the [[wiki/concepts/open-protocol-libraries|open protocol libraries]] he is prototyping with OpenCivics. It underwrites the "plurality of addressable space" vision from [[the-infrastructure-of-belonging]]. Concrete implementations include Darren Zal's Salish Sea agent and Shawn Anderson's Cowichan Valley agent sharing via COI, the Front Range × Cascadia pilot, and Frank Sanborn's Social Fabric project, which operationalizes the pattern at neighborhood scale with a relational trust graph and federated domains.
