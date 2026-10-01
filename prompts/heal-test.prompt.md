# Prompt: Heal Failing Playwright Test

## Goal

Fix a failing Playwright test while preserving the original business intent.

## Instructions for Copilot

Analyze the failure carefully before changing code.

Check:
1. Error message
2. Failing line
3. Trace/screenshot/video if available
4. DOM changes if Playwright MCP is available
5. Related page object method
6. Related test data
7. Environment or authentication dependency

## Failure Classification

Classify the failure as one of:

- Locator issue
- Timing/synchronization issue
- Test data issue
- Environment issue
- Product defect
- Assertion no longer valid
- Duplicate or obsolete test

## Healing Rules

- Do not remove assertions to make the test pass.
- Do not replace a strong assertion with a weak one.
- Do not add `waitForTimeout`.
- Prefer `expect(locator).toBeVisible()` and other web-first assertions.
- Prefer `getByRole`, `getByLabel`, `getByTestId`.
- Keep the test readable.
- Update the page object instead of repeating locator changes in many tests.
- If behavior changed, clearly flag it for manual review.

## Output Format

Return:
1. Root cause
2. Type of failure
3. Files changed
4. Code patch
5. Risk of the fix
6. Command to rerun
