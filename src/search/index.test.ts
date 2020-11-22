import * as search from ".";

test("empty string", () => {
  let s: string = "";

  let l: number[] = search.Search(s);

  expect(l).toHaveLength(0);
});

test("random string", () => {
  let s: string = "foo bar";

  let l: number[] = search.Search(s);

  expect(l).toHaveLength(0);
});

test("with digit", () => {
  let s: string = "foo 3 bar";

  let l: number[] = search.Search(s);

  expect(l).toHaveLength(1);
  expect(l).toContain(3);
});

test("with digit", () => {
  let s: string = "20 foo bar";

  let l: number[] = search.Search(s);

  expect(l).toHaveLength(1);
  expect(l).toContain(20);
});

test("with digit", () => {
  let s: string = "foo bar 666";

  let l: number[] = search.Search(s);

  expect(l).toHaveLength(1);
  expect(l).toContain(666);
});
