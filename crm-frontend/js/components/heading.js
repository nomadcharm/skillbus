export const createHeadingElement = (type, text) => {
  const heading = document.createElement(type);
  heading.textContent = text;
  return heading;
}
