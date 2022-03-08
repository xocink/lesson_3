interface Itest {
  search: string,
  sort: string,
  filters: string[]
}

export const getAppliedFilters = (filtersObj: Itest): string[] => {
  const filtersObjKeys = Object.keys(filtersObj);
  // console.log(checkFilters(filtersObj["filters"]));
  const appliedFilters = filtersObjKeys.filter((key) => checkFilters(filtersObj[key]) ? filtersObj[key] : '')
  // console.log(appliedFilters)
  return appliedFilters
}

const checkFilters = (curFilter : string | string[]) : boolean => {
  if (Array.isArray(curFilter)){
    console.log(curFilter)
    return curFilter.every((option) => option.length)
  }

  return !!curFilter.length
}