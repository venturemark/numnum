// Searcher is the most basic implementation of detecting a number. It simply
// looks for digits in the given string and returns them. Note that str must not
// contain any whitespace.
export function Searcher(str: string): { found: boolean; match: number } {
  // If the provided string contains a punctuation mark we do not have a normal
  // number. In this case we cancel execution, because we are not going to find
  // any normal number moving forward.
  {
    let ok: boolean = str.includes(".");
    if (ok === true) {
      return { found: false, match: 0 };
    }
  }

  // At this point we simply apply a regular expression to find the single or
  // multi digit number. If there is not a single result from the call to
  // str.match we stop processing the provided string, since such a result would
  // mean something incomprehensible in terms of normal numbers.
  let y: any = str.match(/\d+/);
  {
    if (y === null) {
      return { found: false, match: 0 };
    }
    if (y.length != 1) {
      return { found: false, match: 0 };
    }
  }

  // Finally we have a number we found as string. As a safety net we process the
  // result via parseInt. If this returns NaN, the searcher implementation
  // returns nothing.
  let f: boolean = false;
  let m: number = 0;
  {
    f = true;
    m = parseInt(y[0]);

    if (isNaN(m) === true) {
      return { found: false, match: 0 };
    }
  }

  return { found: f, match: m };
}
