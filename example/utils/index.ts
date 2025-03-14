export function transformHTML(htmlString: string, transformType: string) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");

  function traverse(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      if (transformType === "uppercase") {
        node.textContent = node.textContent.toUpperCase();
      } else if (transformType === "rtl") {
        node.textContent = node.textContent.split("").reverse().join(""); // Разворачиваем текст
      }
    } else {
      node.childNodes.forEach(traverse);
    }
  }

  traverse(doc.body);

  if (transformType === "rtl") {
    doc.body.style.direction = "rtl"; // Добавляем направление справа налево
  }

  return doc.body.innerHTML;
}
