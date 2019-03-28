import * as R from "ramda";

const log = res => console.log(res);
const queryString = "?item=2&page=10&total=90";

/* tslint:disable */
const parseQs = R.compose(
  log,
  R.fromPairs,
  R.map(R.split("=") as (str: string) => any),
  R.split("&"),
  R.tail
);

parseQs(queryString);
