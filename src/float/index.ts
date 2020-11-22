// Searcher is the a basic implementation of detecting a floating point number.
// It looks for digits containing punctations in the given string and returns
// them. Note that str must not contain any whitespace.
export function Searcher(str: string): { found: boolean; match: number } {
  // If the provided string does not contain a punctuation mark we do not have a
  // floating point number. In this case we cancel execution, because we are not
  // going to find any floating point number moving forward.
  {
    let ok: boolean = str.includes(".");
    if (ok === false) {
      return { found: false, match: 0 };
    }
  }

  // At this point we have at least one punctuation mark. Splitting the provided
  // string should leave us with two elements. If there are more or less
  // elements we are out.
  let s: string[] = [];
  {
    s = str.split(".");

    if (s === null) {
      return { found: false, match: 0 };
    }
    if (s.length != 2) {
      return { found: false, match: 0 };
    }
  }

  // Finally constructing the floating point number as string and parse it
  // properly. As a safety net we process the result via parseFloat. If this
  // returns NaN, the searcher implementation returns nothing.
  let f: boolean = false;
  let m: number = 0;
  {
    f = true;
    m = parseFloat(s[0] + "." + s[1]);

    if (isNaN(m) === true) {
      return { found: false, match: 0 };
    }
  }

  return { found: f, match: m };
}
