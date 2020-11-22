import * as search from ".";

test("empty string", () => {
  let s: string = "";

  expect(search.Search(s)).toHaveLength(0);
});

test("random string", () => {
  let s: string = "foo bar";

  expect(search.Search(s)).toHaveLength(0);
});
