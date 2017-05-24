'use strict';
module.exports = (content, from, to) => {
  // require and import replacement regex patterns
  const regexes = [
    new RegExp(`(require\\(['|"].*?node_modules/)${from}(.*?['|"]\\))`, 'g'),
    new RegExp(`(require\\(['|"])${from}(.*?['|"]\\))`, 'g'),
    new RegExp(`(from\\s+['|"].*?node_modules/)${from}(.*?['|"])`, 'g'),
    new RegExp(`(from\\s+['|"])${from}(.*?['|"])`, 'g')
  ];
  regexes.forEach(reg => {
    let match;
    // eslint-disable-next-line no-cond-assign
    while (match = reg.exec(content)) {
      const before = match[1];
      const after = match[2];
      const wrappedTo = `${before}${to}${after}`;
      content = content.replace(match[0], wrappedTo);
    }
  });
  return content;
};
