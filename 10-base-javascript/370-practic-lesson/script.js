"use strict";

function amountOfPages(summary) {
  let pages = 0;
  let sum = 0;

  while (sum < summary) {
    pages++;
    sum += pages.toString().length;
  }
  console.log(pages);
  return pages;
}

amountOfPages(10);
