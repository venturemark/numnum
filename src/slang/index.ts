// words is a dictionary of terms we want to map numbers to. People might use
// natural language to express their data. If words and their number mapping are
// missing this list can be easily extended. If extended unit tests should be
// written for the new terms so that we ensure a rock solid experience for the
// user.
const words: Record<string, number> = {
  first: 1,
  one: 1,
  pair: 2,
  pairs: 2,
  second: 2,
  two: 2,
  five: 5,
  ten: 10,
  dozen: 12,
  twenty: 20,
};

// Searcher is the a basic implementation of detecting a floating point number.
// It looks for digits containing punctations in the given string and returns
// them. Note that str must not contain any whitespace.
export function Searcher(str: string): { found: boolean; match: number } {
  // In case the provided string does not occur in our dictionary we stop
  // processing right away.
  {
    if (!(str in words)) {
      return { found: false, match: 0 };
    }
  }

  // Here we know for sure the provided string is part of our mapping. We can
  // simply return the configured number.
  let f: boolean = false;
  let m: number = 0;
  {
    f = true;
    m = words[str];
  }

  return { found: f, match: m };
}
