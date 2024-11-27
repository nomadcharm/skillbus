export const renderHeaderElement = () => {
  const bodyEl = document.querySelector("body");
  const headerEl = document.createElement("header");
  const containerEl = document.createElement("div");
  const logoEl = document.createElement("img");
  const searchBarEl = document.createElement("input");

  headerEl.classList.add("header");
  containerEl.classList.add("container", "header__container");
  logoEl.classList.add("header__logo");
  searchBarEl.classList.add("header__search-bar");
  searchBarEl.placeholder = "Введите запрос";

  logoEl.src = "../assets/img/logo.svg";

  containerEl.append(logoEl, searchBarEl);
  headerEl.append(containerEl);

  bodyEl.append(headerEl);
}
