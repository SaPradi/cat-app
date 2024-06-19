
const indicesWithColSpan2 = [1, 3, 7, 11, 13, 15, 19, 22, 26, 29];

const getColSpanClass = (index:number) => {
  return indicesWithColSpan2.includes(index) ? 'col-span-2' : '';
};
export default getColSpanClass