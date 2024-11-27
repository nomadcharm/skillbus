export const createTableHeaderElement = (className, text) => {
  const tableHeaderEl = document.createElement("th");

  const classNames = className;
  classNames.forEach(name => tableHeaderEl.classList.add(name));

  tableHeaderEl.textContent = text;
  return tableHeaderEl;
}
