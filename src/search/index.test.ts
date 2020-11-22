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
  let s: string = "my stock went 10x within 1 year";

  let l: number[] = search.Search(s);

  expect(l).toHaveLength(2);
  expect(l).toContain(10);
  expect(l).toContain(1);
});

test("javascript code", () => {
  let s: string = 'console.log("hello, world!"); // > hello, world! ';

  let l: number[] = search.Search(s);

  expect(l).toHaveLength(0);
});

test("with float", () => {
  let s: string = "foo bar 6.66";

  let l: number[] = search.Search(s);

  expect(l).toHaveLength(1);
  expect(l).toContain(6.66);
});

test("with float", () => {
  let s: string = "this has a chance of .5 all things considered";

  let l: number[] = search.Search(s);

  expect(l).toHaveLength(1);
  expect(l).toContain(0.5);
});

test("with float", () => {
  let s: string = "this has a chance of .995 all things considered";

  let l: number[] = search.Search(s);

  expect(l).toHaveLength(1);
  expect(l).toContain(0.995);
});

test("with ips", () => {
  let s: string = "192.0.10.255 hosts mailware";

  let l: number[] = search.Search(s);

  expect(l).toHaveLength(0);
});

test("with ips", () => {
  let s: string = "127.0.0.1 is just garbage";

  let l: number[] = search.Search(s);

  expect(l).toHaveLength(0);
});

test("with domain", () => {
  let s: string = "come visit example.com";

  let l: number[] = search.Search(s);

  expect(l).toHaveLength(0);
});

test("with domain", () => {
  let s: string = "come visit my.fancy.website.com";

  let l: number[] = search.Search(s);

  expect(l).toHaveLength(0);
});

test("with percentage", () => {
  let s: string = "we are up around 15% since this morning";

  let l: number[] = search.Search(s);

  expect(l).toHaveLength(1);
  expect(l).toContain(15);
});

test("with percentage", () => {
  let s: string = "we are up around 15% since this morning";

  let l: number[] = search.Search(s);

  expect(l).toHaveLength(1);
  expect(l).toContain(15);
});

test("with words", () => {
  let s: string = "we got our first customer";

  let l: number[] = search.Search(s);

  expect(l).toHaveLength(1);
  expect(l).toContain(1);
});

test("with words", () => {
  let s: string = "we got our second customer";

  let l: number[] = search.Search(s);

  expect(l).toHaveLength(1);
  expect(l).toContain(2);
});

test("with words", () => {
  let s: string = "this was more like ten out of twenty";

  let l: number[] = search.Search(s);

  expect(l).toHaveLength(2);
  expect(l).toContain(10);
  expect(l).toContain(20);
});

test("with words", () => {
  let s: string = "we just sold over a dozen pairs";

  let l: number[] = search.Search(s);

  expect(l).toHaveLength(2);
  expect(l).toContain(12);
  expect(l).toContain(2);
});

test("with words", () => {
  let s: string = "I know this from first hand experience";

  let l: number[] = search.Search(s);

  expect(l).toHaveLength(1);
  expect(l).toContain(1);
});

test("with duplicates", () => {
  let s: string = "hindsight is twenty twenty";

  let l: number[] = search.Search(s);

  expect(l).toHaveLength(1);
  expect(l).toContain(20);
});

test("with duplicates", () => {
  let s: string = "hindsight is 20 20";

  let l: number[] = search.Search(s);

  expect(l).toHaveLength(1);
  expect(l).toContain(20);
});

test("with dates", () => {
  let s: string = "we start at the 01.04.20 with our new campaign";

  let l: number[] = search.Search(s);

  expect(l).toHaveLength(0);
});

test("with dates", () => {
  let s: string = "we start at the 01-04-20 with our new campaign";

  let l: number[] = search.Search(s);

  expect(l).toHaveLength(0);
});

test("with dates", () => {
  let s: string = "we start at the 01/04/20 with our new campaign";

  let l: number[] = search.Search(s);

  expect(l).toHaveLength(0);
});

test("with parantheses", () => {
  let s: string = "we got a couple of them (16) in house";

  let l: number[] = search.Search(s);

  expect(l).toHaveLength(1);
  expect(l).toContain(16);
});

test("with parantheses", () => {
  let s: string = "we got a couple of them (16ish) in house";

  let l: number[] = search.Search(s);

  expect(l).toHaveLength(1);
  expect(l).toContain(16);
});

test("with parantheses", () => {
  let s: string = "we got a couple of them (~16) in house";

  let l: number[] = search.Search(s);

  expect(l).toHaveLength(1);
  expect(l).toContain(16);
});
