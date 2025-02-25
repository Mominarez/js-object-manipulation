const sculptureList = require("./data.js");

const sculptureListLengths = sculptureList.map((sculpture) => {
  let lengths = {};//empty object
  for (let key in sculpture) {
    //checks if the prop value is a string and stores length
    lengths[key] = typeof sculpture[key] === 'string' ? sculpture[key].length : 0;
  }
  return lengths;
});

console.log(sculptureListLengths);//prints array of objects