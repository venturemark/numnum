// Searcher is the most basic implementation of detecting a number. It simply
// loogs for digits in the given string and returns them. Note that str must not
// contain any whitespace.
export function Searcher(str: string): { found: boolean; match: number } {
  let f: boolean = false;
  let m: number = 0;

  let y: any = str.match(/\d+/);
  {
    if (y === null) {
      return { found: f, match: m };
    }
    if (y.length != 1) {
      return { found: f, match: m };
    }
  }

  {
    f = true;
    m = parseInt(y[0]);
  }

  return { found: f, match: m };
}
