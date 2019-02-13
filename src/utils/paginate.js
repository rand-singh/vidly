import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  // first calculate the starting index of the items on a page
  const startIndex = (pageNumber - 1) * pageSize;

  // first we need to convert items array into a lodash wrapper so we chain lodash methods
  // this makes our code more fluent. Then convert back to normal array using the value() method
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
