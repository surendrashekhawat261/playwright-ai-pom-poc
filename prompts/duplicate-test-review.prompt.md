# Prompt: Duplicate Test Review

## Goal

Identify duplicate or overlapping Playwright tests before adding new automation.

## Instructions for Copilot

Search the existing framework before creating new tests.

Review:
- `tests/`
- `pages/`
- `fixtures/`
- test titles
- tags
- page object methods
- acceptance criteria already covered

## Duplicate Rules

A test may be duplicate if:
- It validates the same user journey
- It has the same precondition, action, and assertion
- It only changes minor data but validates the same behavior
- It repeats an existing smoke/regression flow
- It duplicates API coverage already present elsewhere

## Output Format

```text
Duplicate Risk: Low / Medium / High

Existing Similar Tests:
1. File:
   Test:
   Overlap:

Recommendation:
- Create new test
- Extend existing test
- Add data variation
- Do not automate
```
