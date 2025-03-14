export function extractBodyContent(htmlString: string): string {
  // Удаляем маркеры кодового блока, если они есть
  const codeBlockPattern = /^```html\s*([\s\S]*?)\s*```$/m;
  const codeBlockMatch = htmlString.match(codeBlockPattern);
  if (codeBlockMatch) {
    htmlString = codeBlockMatch[1];
  }

  // Парсим строку как HTML
  const parser = new DOMParser();
  const dom = parser.parseFromString(htmlString, "text/html");

  // Проверяем, есть ли тег <body> и содержимое внутри него
  if (dom.body && dom.body.innerHTML && dom.body.innerHTML.trim() !== "") {
    return dom.body.innerHTML;
  } else {
    // Если тега <body> нет, возвращаем весь контент
    return htmlString;
  }
}
