import test from 'ava';
import fn from './';

const from = 'a';
const to = 'b';

const requireTestCases = [
  {
    in: `const a = require('a');`,
    out: `const a = require('b');`
  },
  {
    in: `const a = require("a");`,
    out: `const a = require("b");`
  },
  {
    in: `require('a/extra');`,
    out: `require('b/extra');`
  },
  {
    in: `require('./a')`,
    out: `require('./a')`
  }
];

test('require replaces', t => {
  t.plan(requireTestCases.length);
  requireTestCases.forEach(content => {
    t.is(fn(content.in, from, to), content.out);
  });
});

const importTestCases = [
  {
    in: `import a from 'a'`,
    out: `import a from 'b'`
  },
  {
    in: `import a from "a"`,
    out: `import a from "b"`
  },
  {
    in: `import a from 'a/extra'`,
    out: `import a from 'b/extra'`
  },
  {
    in: `import a from './a'`,
    out: `import a from './a'`
  }
];

test('import replaces', t => {
  t.plan(importTestCases.length);
  importTestCases.forEach(content => {
    t.is(fn(content.in, from, to), content.out);
  });
});
