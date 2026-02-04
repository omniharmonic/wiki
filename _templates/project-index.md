---
title: "{{ title }} — Dashboard"
type: dashboard
project: "[[vault/projects/{{ slug }}]]"
---

# {{ title }}

## Active Tasks

```dataview
TABLE status, priority, due
FROM "vault/tasks"
WHERE contains(project, this.file.folder) AND status != "done"
SORT priority DESC, due ASC
```

## Recent Meetings

```dataview
TABLE date, attendees
FROM "vault/meetings"
WHERE contains(projects, this.file.folder)
SORT date DESC
LIMIT 10
```

## Key People

```dataview
LIST
FROM "vault/people"
WHERE contains(projects, this.file.folder)
```
