// Searcher is the most basic implementation of detecting a number. It simply
// looks for digits in the given string and returns them. Note that str must not
// contain any whitespace.
export function Searcher(str: string): { found: boolean; match: number } {
  {
    let ok: boolean = str.includes(".");
    if (ok === true) {
      return { found: false, match: 0 };
    }
  }

  let y: any = str.match(/\d+/);
  {
    if (y === null) {
      return { found: false, match: 0 };
    }
    if (y.length != 1) {
      return { found: false, match: 0 };
    }
  }

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
