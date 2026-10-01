# Prompt: Review Playwright Test Quality

## Goal

Review Playwright + TypeScript tests for maintainability, reliability, and framework standards.

## Review Checklist

Check for:
- Duplicate tests
- Brittle locators
- Hardcoded waits
- Hardcoded test data
- Overly long tests
- Missing assertions
- Weak assertions
- Repeated code that should move to page objects
- Missing fixture usage
- Secrets or credentials
- Unstable date/time logic
- Test dependency on execution order
- Unclear test titles
- Missing tags

## Locator Quality Rules

Prefer:
- `page.getByRole()`
- `page.getByLabel()`
- `page.getByText()`
- `page.getByTestId()`

Avoid:
- XPath
- nth-child
- generated CSS classes
- long chained CSS selectors
- index-based locators without reason

## Output Format

Return a review report:

```text
Overall Risk: Low / Medium / High

Findings:
1. Finding
   - Risk:
   - Reason:
   - Suggested fix:

Recommended Changes:
- ...
```
