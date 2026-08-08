const inputText = document.getElementById('markdown-input');
const htmlOutput = document.getElementById('html-output');
const preview = document.getElementById('preview');

const rules = [
  { regex: /^### (.+)$/gm, replace: '<h3>$1</h3>' },
  { regex: /^## (.+)$/gm, replace: '<h2>$1</h2>' },
  { regex: /^# (.+)$/gm, replace: '<h1>$1</h1>' },
  { regex: /\*\*(.+?)\*\*/g, replace: '<strong>$1</strong>' },
  { regex: /__(.+?)__/g, replace: '<strong>$1</strong>' },
  { regex: /\*(.+?)\*/g, replace: '<em>$1</em>' },
  { regex: /_(.+?)_/g, replace: '<em>$1</em>' },
  { regex: /!\[([^\]]+)\]\(([^)]+)\)/g, replace: '<img alt="$1" src="$2">'},
  { regex: /\[([^\]]+)\]\(([^)]+)\)/g,  replace: '<a href="$2">$1</a>'},
  { regex: /^>\s?(.*)$/gm, replace: '<blockquote>$1</blockquote>' }
];

function convertMarkdown()
{
  let markdownText = inputText.value;
  rules.forEach(rule => {
    markdownText = markdownText.replace(rule.regex, rule.replace);
    htmlOutput.textContent = markdownText;
    preview.innerHTML = htmlOutput.textContent;
  });
}
inputText.addEventListener('keydown', () => {
  convertMarkdown();
});
