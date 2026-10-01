# Prompt: Locator Review and Stabilization

## Goal

Review and improve Playwright locators in page objects and tests.

## Instructions for Copilot

Analyze locators for stability and maintainability.

## Preferred Locator Priority

1. `getByRole`
2. `getByLabel`
3. `getByPlaceholder`
4. `getByText`
5. `getByTestId`
6. Stable CSS selector
7. XPath only as last option

## Anti-Patterns

Flag:
- XPath without strong reason
- CSS with generated classes
- `nth()` without business reason
- text locators with dynamic values
- chained selectors that depend on layout
- duplicate locator definitions
- locator definitions inside tests when reusable

## Output Format

```text
Locator Risk: Low / Medium / High

Findings:
1. Current locator:
   Issue:
   Better locator:
   Reason:
```
