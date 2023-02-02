/* Reusable Card component */

import type { Park } from "../main";
import { Button } from "./Button";

// default settings
const defaultCategory = "Natural";
const defaultTitle = "National Park";

// type definition for card arguments
export type CardArguments = {
  park: Park;
  handleTouchCard: (e: Event) => void;
};

export const Card = ({
  park,
  handleTouchCard,
}: CardArguments): HTMLDivElement => {
  // create div element for card
  const card = document.createElement("div");
  // add classes to element
  card.classList.add("card");

  // create div element for card-banner
  const banner = document.createElement("div");
  // add classes to element
  banner.classList.add(
    "card-banner",
    `card-banner_category_${park.category.toLowerCase()}`
  );

  // create div element for card-banner__text
  const banner__text = document.createElement("div");
  // add classes to element
  banner__text.classList.add("card-banner__text");
  // add text
  banner__text.innerHTML = park.category || defaultCategory;
  // append element to card-banner
  banner.appendChild(banner__text);
  // append card-banner to card
  card.appendChild(banner);

  // create div element for card-image
  const image = document.createElement("div");
  // add classes to element
  image.classList.add("card-image");
  // create img element for card-image
  const image__img = document.createElement("img");
  // add src to img
  image__img.src = park.image || "";
  // append img to card-image
  image.appendChild(image__img);
  // append card-image to card
  card.appendChild(image);

  // create div element for card-body
  const body = document.createElement("div");
  // add classes to element
  body.classList.add("card-body");

  // create div element for card-body__title
  const body__title = document.createElement("div");
  // add classes to element
  body__title.classList.add(
    "card-body__title",
    `card-body__title_category_${park.category?.toLowerCase()}`
  );
  // add text
  body__title.innerHTML = park.title || defaultTitle;
  // append card-body__title to card-body
  body.append(body__title);

  // create div element for card-body__text
  const body__text = document.createElement("div");
  // add classes to element
  body__text.classList.add("card-body__text");
  // add text
  body__text.innerHTML = park.body;
  // append card-body__text to card-body
  body.append(body__text);

  // if object has a link, create Button component
  // else, do nothing
  if (park.link) {
    // create card-body__button element
    const body__button = Button({
      category: park.category.toLowerCase(),
      linkText: park.linkText || "",
      handleTouchLink: (e: Event) => {
        e.stopPropagation();
        alert(park.linkText);
      },
    });
    // append card-body__button to card-body
    body.append(body__button);
  }
  // append card-body to card
  card.appendChild(body);

  // add eventListener for click/touch events on card
  card.addEventListener("click", (e: Event) => {
    handleTouchCard(e);
  });

  // return HTMLDivElement
  return card;
};
