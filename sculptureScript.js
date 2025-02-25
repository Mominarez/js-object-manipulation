const sculptureList = require("./data.js");

const sculptureListLengths = sculptureList.map((sculpture) => {
  let lengths = {};
  for (let key in sculpture) {
    lengths[key] = typeof sculpture[key] === 'string' ? sculpture[key].length : 0;
  }
  return lengths;
});

console.log(sculptureListLengths);