import test from 'ava';
import fn from './';

const from = '@namespace/hard-thing-to-replace';
const to = '@namespace/replace-with-this-thing';

const requireTestCases = [
  {
    in: `const a = require('${from}');`,
    out: `const a = require('${to}');`
  },
  {
    in: `const a = require("${from}");`,
    out: `const a = require("${to}");`
  },
  {
    in: `require('${from}/extra');`,
    out: `require('${to}/extra');`
  },
  {
    in: `require('./${from}')`,
    out: `require('./${from}')`
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
    in: `import a from '${from}'`,
    out: `import a from '${to}'`
  },
  {
    in: `import a from "${from}"`,
    out: `import a from "${to}"`
  },
  {
    in: `import a from '${from}/extra'`,
    out: `import a from '${to}/extra'`
  },
  {
    in: `import a from './${from}'`,
    out: `import a from './${from}'`
  }
];

test('import replaces', t => {
  t.plan(importTestCases.length);
  importTestCases.forEach(content => {
    t.is(fn(content.in, from, to), content.out);
  });
});
