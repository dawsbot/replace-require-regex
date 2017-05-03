'use strict';
module.exports = (content, from, to) => {
  const regexes = [
    /(require\(['|"])(a)(.*?['|"]\))/g,
    /(from\s+['|"])(a)(.*?['|"])/g
  ];
  regexes.forEach(reg => {
    const res = reg.exec(content);
    if (res) {
      const before = res[1];
      const after = res[3];
      const wrappedTo = `${before}${to}${after}`;
      content = content.replace(res[0], wrappedTo);
    }
  });
  return content;
};
