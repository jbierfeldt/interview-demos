import "./css/style.scss";

import { Card } from "./components/Card";
import data from "./data/dataset1.json";

// Type definition for Park data
export type Park = {
  body: string;
  category: string;
  image?: string;
  link?: string;
  linkText?: string;
  title?: string;
};

// Number of items per row
const itemsPerRow = 3;

// querySelector for hero__row
const hero__row = document.querySelector<HTMLDivElement>(".hero__row")!;

// function to remove featured class and order class from all cards
const removeFeaturedFromAll = () => {
  document.querySelectorAll(".hero__card-column").forEach((el: Element) => {
    el.classList.remove("order-first", "hero__card-column_featured_true");
  });
};

// function to add featured class and order class to selected card
const featureSelectedCard = (cardColumn: HTMLDivElement) => {
  removeFeaturedFromAll();
  cardColumn.classList.add("order-first", "hero__card-column_featured_true");
};

// Loop through data and create a card element for each object
data.parks.forEach((park: Park) => {
  // only create card if image is present
  // if not present, do nothing
  if (park.image) {
    // create div element for hero__card-column
    const cardColumn = document.createElement("div");

    // add classes to element
    // using bootstrap-grid, set the number of cards to display per row
    // via the `itemsPerRow` variable
    cardColumn.classList.add(
      "hero__card-column",
      `col-sm-${Math.floor(12 / itemsPerRow)}`
    );

    // create card element
    const card = Card({
      park: park,
      handleTouchCard: () => featureSelectedCard(cardColumn),
    });

    // append card to hero__card-column
    cardColumn.append(card);

    // append hero__card-column to hero__row
    hero__row.append(cardColumn);
  }
});
