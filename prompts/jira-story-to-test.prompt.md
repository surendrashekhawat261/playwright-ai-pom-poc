# Prompt: Convert Jira Story to Playwright Tests

## Goal

Convert a Jira story into Playwright + TypeScript test scenarios and automation code.

## Instructions for Copilot

Read the Jira story and produce:
1. Functional test scenarios
2. Edge cases
3. Negative scenarios
4. Automation candidates
5. Non-automation/manual scenarios
6. Playwright test code

## Framework Rules

- Use existing page objects.
- Create missing page methods only when required.
- Use existing fixtures.
- Do not duplicate existing test coverage.
- Do not modify unrelated files.
- Keep test data in `test-data/` when reusable.
- Keep API setup in `api/` when backend setup is needed.
- Add meaningful tags.

## Scenario Format

```text
Scenario:
Precondition:
Steps:
Expected Result:
Automation Priority: High / Medium / Low
```

## Code Output

Generate:
- Spec file under `tests/`
- Page object updates under `pages/`
- Test data under `test-data/` if needed
- Fixture update only if reusable setup is required

## Run Command

```bash
npx playwright test tests/<story-or-feature>.spec.ts --project=chromium
```
