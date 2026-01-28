# Git Branching Guide

Quick reference for managing branches and merging.

---

## 1. Branch Management

| Action                | Command                |
| :-------------------- | :--------------------- |
| **List branches**     | `git branch`           |
| **Create new branch** | `git branch <name>`    |
| **Switch branch**     | `git switch <name>`    |
| **Create & Switch**   | `git switch -c <name>` |
| **View history**      | `git log --oneline`    |

---

## 2. Workflow Steps

1. **Develop:** Make changes to your files.
2. **Stage:** `git add .`
3. **Commit:** `git commit -m "feat: description"`
4. **Finish:** Switch back to main and merge:

```bash
git switch main
git merge <branch-name>
```

## 3. Resolving Conflicts

If a conflict occurs, Git will mark it in the file

Steps to fix:

1. Open the file and keep the desired code.
2. Remove the markers (<<<<<<<, =======, >>>>>>>).
3. Save, then run:

```bash
git add <file>
git commit -m "fix: resolve merge conflict"
```

## 4. Cleanup

After a successful merge, you can safely delete the feature branch:

```bash
git branch -d <branch-name>
```
