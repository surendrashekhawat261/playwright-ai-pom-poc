import fs from 'fs';
import path from 'path';

const testDir = path.join(process.cwd(), 'tests');
const pageDir = path.join(process.cwd(), 'pages');
const outputFile = path.join(process.cwd(), 'ai-healing-prompt.md');

function readTsFiles(dir: string): string {
  if (!fs.existsSync(dir)) return '';

  return fs.readdirSync(dir)
    .filter(file => file.endsWith('.ts'))
    .map(file => {
      const filePath = path.join(dir, file);
      return `\n\n===== ${filePath} =====\n${fs.readFileSync(filePath, 'utf-8')}`;
    })
    .join('\n');
}

const prompt = `
You are reviewing a Playwright TypeScript automation framework using Page Object Model.

Goal:
Identify brittle or broken locators and suggest better Playwright locators.

Locator rules:
1. Prefer getByRole() where possible.
2. Prefer getByLabel(), getByPlaceholder(), and getByText() for user-facing elements.
3. Use CSS IDs only when stable.
4. Avoid XPath and long CSS selectors.
5. Do not blindly auto-heal if it may hide a real product defect.
6. Suggest code changes in Page Object files first, not directly in test files.

Please review the following tests and page objects:

${readTsFiles(pageDir)}
${readTsFiles(testDir)}
`;

fs.writeFileSync(outputFile, prompt.trim(), 'utf-8');
console.log(`AI healing prompt created: ${outputFile}`);
