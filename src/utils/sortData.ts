import {Row} from "../components";

export const sortData = (data : Row[],sort : string) : Row[] => {
  const innerData : Row[] = data ? data.slice() : undefined;
  if (sort) {
    const sortedResult = innerData.sort(comparator)
    return sort === 'asc' ? sortedResult : sortedResult.reverse()
  }
  return innerData
}

const comparator = (itemOne : Row, itemTwo : Row) : number => {
  return itemOne.posts - itemTwo.posts
}