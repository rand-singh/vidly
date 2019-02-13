import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  // console.log("items", items);
  // console.log("pageNumber", pageNumber);
  // console.log("pageSize", pageSize);

  // first calculate the starting index of the items for the given page
  const startIndex = (pageNumber - 1) * pageSize;

  console.log("startIndex", startIndex);

  // dont need lodash, use slice method from es6, replace the lodash
  // statement in the return below with const slide
  // const slice = items.slice(startIndex, startIndex + pageSize);

  // first we need to convert items array into a lodash wrapper so we chain lodash methods
  // this makes our code more fluent. Then convert back to normal array using the value() method
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
