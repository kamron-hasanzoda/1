const user = {
  name: "Iskandar",
  surname: "Xasanov",
  age: 22,
  status: true,
  visa: ["Canada", "USA", "South Korea"],
  fullname: function () {
    return this.name + " " + this.surname;
  },
};
let passport = {
  serries: "AC",
  number: 1231546444,
  date: {
    get: "2015",
    to: "2025",
  },
};
let assign = Object.assign({}, user, passport);
console.log(assign);
let keys = Object.keys(assign);
console.log(keys);
let concat = keys.concat(assign);
console.log(concat);
type = {
  bool: [concat.filter(item => typeof item === 'boolean')],
  num: [concat.filter(item => typeof item === 'number')],
  obj: [concat.filter(item => typeof item === 'object')],
  string: [concat.filter(item => typeof item === 'string')],
};
console.log(type.obj);
