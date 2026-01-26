# Commit Message Guidelines

To maintain a clean and navigable project history, this project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification.

## Commit Message Structure

Each commit message should follow this structure:

`<type>: <short description>`

## Commit types

Use one of the following types:

| Type       | Description      | When to use                                          |
| ---------- | ---------------- | ---------------------------------------------------- |
| `feat`     | New feature      | Adding new functionality                             |
| `fix`      | Bug fix          | Fixing an error                                      |
| `docs`     | Documentation    | README files, comments, markdown docs                |
| `style`    | Code style       | Formatting, spacing (no logic changes)               |
| `refactor` | Code refactoring | Improving code structure without changing behavior   |
| `test`     | Tests            | Adding or updating tests                             |
| `chore`    | Maintenance      | Config files, dependencies, build or tooling changes |
| `perf`     | Performance      | Improving speed or efficiency                        |
| `revert`   | Revert changes   | Reverting a previous commit                          |

## When to Commit

- One logical change per commit
- Small, meaningful commits
- Commit often

## Example Workflow

`git commit -m "feat: add eligibility checker"`

`git commit -m "fix: correct celsius formula"`

`git commit -m "docs: update installation steps in readme"`

`git commit -m "style: fix indentation in converter.js"`
