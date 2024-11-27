import { renderHeaderElement } from "./components/header.js";
import { renderTableSectionElement } from "./components/tableSection.js";

const renderMainPage = () => {
  renderHeaderElement();

  const { addClientBtnEl } = renderTableSectionElement();

  addClientBtnEl.addEventListener("click", () => {
    console.log(1)
  })

}

renderMainPage()
