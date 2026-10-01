# Playwright AI POM POC

This is a Playwright + TypeScript Page Object Model POC for:

https://testautomationpractice.blogspot.com/

## Setup

```bash
npm install
npx playwright install
```

## Run Tests

```bash
npm test
```

## Run Headed

```bash
npm run test:headed
```

## View Report

```bash
npm run report
```

## Generate AI Healing Prompt

```bash
npm run ai:prompt
```

This creates `ai-healing-prompt.md`, which can be shared with GitHub Copilot Chat or another AI assistant to suggest locator improvements.

## Notes

The framework uses Page Object Model. Update locators mainly inside `pages/*.ts` files.
