import {Row} from "../components";

export const filterData = (data : Row[],searchQuery : string) : Row[]=> {
  if (searchQuery === '') {
    return data
  }
  return  data ? data.filter((item) => item.country.toLowerCase().startsWith(searchQuery.toLowerCase())) : undefined
}