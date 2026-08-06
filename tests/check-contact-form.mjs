import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';

const index = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const script = readFileSync(new URL('../script.js', import.meta.url), 'utf8');

assert.match(
  index,
  /<form[^>]*id="contactForm"[^>]*action="https:\/\/api\.web3forms\.com\/submit"[^>]*method="POST"[^>]*>/,
  'contact form should post directly to Web3Forms'
);

assert.match(
  index,
  /<input[^>]*type="hidden"[^>]*name="access_key"[^>]*value="8e9e11ef-8d4d-4bc2-8a23-2934b04b0bfe"[^>]*>/,
  'contact form should include the Web3Forms access key'
);

for (const field of ['name', 'email', 'subject', 'message']) {
  assert.match(
    index,
    new RegExp(`name="${field}"[^>]*required|required[^>]*name="${field}"`),
    `contact form should keep required ${field} field`
  );
}

assert.doesNotMatch(
  script,
  /contactForm\.addEventListener\('submit'/,
  'script should not intercept the contact form submit event'
);

assert.doesNotMatch(
  script,
  /Simulate form submission|Simulate API call/,
  'script should not contain the previous fake submission behavior'
);
