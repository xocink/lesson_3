// const stat = [
//   { name: "Lora", score: 1.003 },
//   { name: "Lora", score: 1.003 },
//   { name: "Lora", score: 2 },
//   { name: "Max", score: 3.76 },
// ];
//
// const sort = (arr) => {
//   return arr.sort((a, b) => b.score - a.score);
// };
//
// const filter = (params) => {
//   return (arr) => arr.filter((item) => item.name === params);
// };
//
// const findAll = (params) => {
//   return (arr) => arr.filter((item) => item.score === params);
// };
//
export const compose = (...funcs) => {
  return (arr,args) => {
    if (!arr) {
      return
    }
    const test = funcs.reduce((acc, func,index) => acc = [...acc, ...func(arr,args[index])], []);
    return funcs.reduce((acc, func,index) => acc = [...acc, ...func(arr,args[index])], []);
  };
};
//
// console.log(compose(sort,)(stat))