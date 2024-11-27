import { createHeadingElement } from "./heading.js";
import { createTableElement } from "./table.js";
import { createButtonElement } from "./button.js";

export const renderTableSectionElement = () => {
  const bodyEl = document.querySelector("body");
  const sectionEl = document.createElement("section");
  const containerEl = document.createElement("div");
  const headingEl = createHeadingElement("h2", "Клиенты");
  const tableEl = createTableElement();
  const addClientBtnEl = createButtonElement("Добавить клиента");

  sectionEl.classList.add("clients");
  containerEl.classList.add("container");
  headingEl.classList.add("section-title", "clients__title");
  addClientBtnEl.classList.add("clients__add-btn")

  containerEl.append(headingEl, tableEl, addClientBtnEl);
  sectionEl.append(containerEl);
  bodyEl.append(sectionEl);

  return { addClientBtnEl };
}
