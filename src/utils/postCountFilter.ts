import {Row} from "../components";

const OPTIONS = {
  zero: 'Without posts',
  hundredPlus: 'More than 100 posts',
};

export const postCountFilter = (data: Row[], filterList: string[]): Row[] => {

  if (!data) {
    return undefined;
  } else if (!filterList.length) {
    return data.slice()
  }
  const innerData = data.slice();
  const result = filterList.map((option) => filterByDropdown(innerData, option))
  return result.flat()
}

const filterByDropdown = (data: Row[], option: string) : Row[] => {
  switch (option) {
    case OPTIONS.zero :
      return data.filter((item) => item.posts === 0)
    case OPTIONS.hundredPlus:
      return data.filter((item) => item.posts >= 100)
    default :
      return data
  }
}