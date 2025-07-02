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

export function prepareHtmlForLexical(htmlString: string): string {
  // Удаляем маркеры кодового блока, если они есть
  const codeBlockPattern = /^```html\s*([\s\S]*?)\s*```$/m;
  const codeBlockMatch = htmlString.match(codeBlockPattern);
  if (codeBlockMatch) {
    htmlString = codeBlockMatch[1];
  }

  // Если строка пустая, возвращаем пустой параграф
  if (!htmlString || htmlString.trim() === "") {
    return "<p></p>";
  }

  // Парсим строку как HTML
  const parser = new DOMParser();
  const dom = parser.parseFromString(htmlString, "text/html");

  // Проверяем, содержит ли контент блочные элементы
  const body = dom.body;
  const bodyHtml = body.innerHTML.trim();

  // Если контент уже содержит блочные элементы на верхнем уровне, просто возвращаем его
  const hasBlockElements =
    /^\s*<(div|p|h[1-6]|ul|ol|li|blockquote|table|pre|section|article|header|footer|nav|aside|main)/i.test(
      bodyHtml,
    );

  if (hasBlockElements) {
    return bodyHtml;
  }

  // Если контент не обёрнут в блочный элемент, оборачиваем его в div
  return `<div>${bodyHtml}</div>`;
}
