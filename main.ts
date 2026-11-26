import { mkdirSync, writeFileSync } from "node:fs";

// Fortune Cookie Funnies for Engineers — one-line fortune, <= 120 chars.
// Champion of a 12-candidate internal tournament judged by the RULES.txt
// rubric: a real fortune-cookie message for a software engineer, a joke
// that lands on the first read, short and declarative, fresh, and tight
// with the funniest word at the end.
const FORTUNE =
  "Your pull request will be approved in minutes. The reviewer did not read it. Neither did you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE + "\n", "utf8");
