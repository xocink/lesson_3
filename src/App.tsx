import {useState, useEffect} from 'react';
import {StyledEngineProvider} from '@mui/material/styles';

import {Table, Filters, Sort, Search} from './components';
import {getImages, getUsers, getAccounts} from './mocks/api';


import type {Row} from './components';
import type {Image, User, Account} from '../types';

import rows from './mocks/rows.json';
import {dataConverter} from "./utils/dataConverter";
import {sortData} from "./utils/sortData";
import {filterData} from "./utils/filterData";
import {postCountFilter} from "./utils/postCountFilter";


import styles from './App.module.scss';


// mockedData has to be replaced with parsed Promises’ data
const mockedData: Row[] = rows.data;

function App() {
  const [data, setData] = useState<Row[]>(undefined);
  const [passingData,setPassingData] = useState<Row[]>(undefined)
  const [sort, setSort] = useState<string>('');
  const [search,setSearch] = useState<string>('');
  const [filters,setFilters] = useState<string[]>(undefined);
  useEffect(() => {
    // fetching data from API
    Promise.all([getImages(), getUsers(), getAccounts()]).then(
      ([images, users, accounts]: [Image[], User[], Account[]]) =>
        setData(dataConverter(images, users, accounts))
    )
  }, [])

  useEffect(() => {
    console.log(sort)
    setPassingData(sortData(data, sort));

  }, [sort])


  useEffect(()=> {
    console.log(filterData(data,search))
    setPassingData(filterData(data,search))
  },[search])

  useEffect(() => {
    console.log(postCountFilter(data,filters))
    setPassingData(postCountFilter(data,filters));
  },[filters])
  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <div className={styles.container}>
          <div className={styles.sortFilterContainer}>
            <Filters updateSelected={setFilters}/>
            <Sort updateSelected={setSort}/>
          </div>
          <Search updateSelected={setSearch}/>
        </div>
        <Table rows={passingData || mockedData}/>
      </div>
    </StyledEngineProvider>
  );
}

export default App;