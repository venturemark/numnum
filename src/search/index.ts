import * as digit from "../digit";
import * as float from "../float";
import * as slang from "../slang";
import * as spec from "./spec";

const searchers: spec.Interface[] = [
  digit.Searcher,
  float.Searcher,
  slang.Searcher,
];

// Search takes an arbitrary string and returns a list of any number found. The
// first element of the list returned is the item being identified as number
// with the highest certainty.
export function Search(str: string): number[] {
  // The provided string must be split into its fields. That is removing all
  // whitespaces from the equation. The separate searcher implementations
  // require the strings they receive to be free of any whitespace, since they
  // are meant to address one field at a time.
  let spl: string[] = [];
  {
    spl = str.split(" ");
  }

  // We iterate over the fields and provide each to each of our separate
  // searcher implementations. If any searcher finds a number, we add it to the
  // list.
  let num: number[] = [];
  for (let i = 0; i < spl.length; i++) {
    let s: string = spl[i];

    for (let i = 0; i < searchers.length; i++) {
      let f: spec.Interface = searchers[i];
      let r: spec.Result = f(s);

      if (r.found === true) {
        num.push(r.match);
      }
    }
  }

  // It might happen that multiple searchers come to the same conclusion. For
  // this case we remove all duplicates.
  let uni: number[] = num.filter(function (e, i, l) {
    return i === l.indexOf(e);
  });

  return uni;
}
