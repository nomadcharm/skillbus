import { createTableRowElement } from "./tableRow.js";
import { createTableHeaderElement } from "./tableHeader.js";

export const createTableElement = () => {
  const tableEl = document.createElement("table");
  const tHeadEl = document.createElement("thead");
  const tHeadRowEl = createTableRowElement();
  const idHeaderEl = createTableHeaderElement(["table__head-cell", "table__head-cell--id"], "ID");
  const fullNameHeaderEl = createTableHeaderElement(["table__head-cell", "table__head-cell--name"], "Фамилия Имя Отчество");
  const createdAtHeaderEl = createTableHeaderElement(["table__head-cell", "table__head-cell--date-created"], "Дата и время создания");
  const editedAtHeaderEl = createTableHeaderElement(["table__head-cell","table__head-cell--date-edited"], "Последние изменения");
  const contactsHeaderEl = createTableHeaderElement(["table__head-cell","table__head-cell--contacts"], "Контакты");
  const actionsHeaderEl = createTableHeaderElement(["table__head-cell","table__head-cell--actions"], "Действия");
  const tBodyEl = document.createElement("tbody");

  tableEl.classList.add("table");
  tHeadEl.classList.add("table__head");
  tHeadRowEl.classList.add("table__head-row");
  tBodyEl.classList.add("table__body");

  tHeadRowEl.append(idHeaderEl, fullNameHeaderEl, createdAtHeaderEl, editedAtHeaderEl, contactsHeaderEl, actionsHeaderEl);
  tHeadEl.append(tHeadRowEl);
  tableEl.append(tHeadEl, tBodyEl)
  return tableEl;
}
