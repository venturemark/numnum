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

test("mixed multiples", () => {
  let s: string = "THIS IS JUST 10TIMES!!! BETTER";

  let l: number[] = search.Search(s);

  expect(l).toHaveLength(1);
  expect(l).toContain(10);
});

test("mixed multiples", () => {
  let s: string = "my stock went 10x within 6 months";

  let l: number[] = search.Search(s);

  expect(l).toHaveLength(2);
  expect(l).toContain(10);
  expect(l).toContain(6);
});

test("javascript code", () => {
  let s: string = 'console.log("hello, world!"); // > hello, world! ';

  let l: number[] = search.Search(s);

  expect(l).toHaveLength(0);
});
