/* Reusable Button component */

// type definition for button arguments
export type ButtonArguments = {
  category: string;
  linkText: string;
  handleTouchLink: (e: Event) => void;
};

export const Button = ({
  category,
  linkText,
  handleTouchLink,
}: ButtonArguments): HTMLButtonElement => {
  // create button element
  const body__button = document.createElement("button");

  // add classes to element
  body__button.classList.add(
    "card-body__button",
    `card-body__button_category_${category}`
  );

  // add button text
  body__button.innerHTML = linkText;

  // add eventListener for click/touch events
  body__button.addEventListener("click", (e: Event) => {
    handleTouchLink(e);
  });

  // return HTMLButtonElement
  return body__button;
};
