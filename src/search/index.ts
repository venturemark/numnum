import * as digit from "./digit";
import * as spec from "./spec";

const searchers: spec.Interface[] = [digit.Searcher];

// Search takes an arbitrary string and returns a list of any number found. The
// first element of the list returned is the item being identified as number
// with the highest certainty.
export function Search(str: string): number[] {
  let spl: string[] = [];
  {
    spl = str.split(" ");
  }

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

  return num;
}
