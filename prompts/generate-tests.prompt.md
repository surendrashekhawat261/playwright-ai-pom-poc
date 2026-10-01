# Prompt: Generate Playwright Tests for a New Feature

## Goal

Generate Playwright + TypeScript tests for a new feature without touching existing tests.

## Inputs Required

- Feature/story description
- Acceptance criteria
- Existing framework structure
- Existing related tests
- Existing page objects
- Existing fixtures

## Instructions for Copilot

You are a senior QA automation engineer working in a Playwright TypeScript framework.

Before generating code:
1. Search `tests/` for similar scenarios.
2. Search `pages/` for reusable page methods.
3. Search `fixtures/` for existing setup.
4. Identify duplicate or overlapping coverage.
5. Create only missing tests and missing page object methods.

## Mandatory Rules

- Do not modify existing tests unless explicitly requested.
- Do not duplicate existing test scenarios.
- Use Page Object Model.
- Use existing fixtures where possible.
- Use `test.step()` only for meaningful business steps.
- Use stable locators: role, label, text, test id.
- Avoid hardcoded waits.
- Use environment variables for configuration.
- Keep each test independent.
- Add tags where appropriate.

## Output Format

Return:
1. New test scenarios summary
2. Duplicate coverage found, if any
3. Files to create/update
4. Final code
5. Run command

## Example Run Command

```bash
npx playwright test tests/<feature-name>.spec.ts --project=chromium
```
