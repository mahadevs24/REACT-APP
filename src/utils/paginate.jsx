import _ from "lodash";

import Pagination from "../components/common/pagination";

export function paginate(pageNumber, pageSize, items) {
  const startIndex = (pageNumber - 1) * pageSize;
  console.log(_(items).slice(startIndex, 2));
  return _(items).slice(startIndex).take(pageSize).value();
}
