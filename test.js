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
    in: `
    const a = require('${from}');
    const b = require('${from}/b');
    `,
    out: `
    const a = require('${to}');
    const b = require('${to}/b');
    `
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
  },
  {
    in: `require('./node_modules/${from}')`,
    out: `require('./node_modules/${to}')`
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
    in: `
    import a from "${from}";
    import b from "${from}/b";
    `,
    out: `
    import a from "${to}";
    import b from "${to}/b";
    `
  },
  {
    in: `import a from '${from}/extra';`,
    out: `import a from '${to}/extra';`
  },
  {
    in: `import a from './${from}'`,
    out: `import a from './${from}'`
  },
  {
    in: `import a from './node_modules/${from}'`,
    out: `import a from './node_modules/${to}'`
  }
];

test('import replaces', t => {
  t.plan(importTestCases.length);
  importTestCases.forEach(content => {
    t.is(fn(content.in, from, to), content.out);
  });
});
