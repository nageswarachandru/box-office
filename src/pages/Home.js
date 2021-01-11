/* eslint-disable arrow-body-style */
import React,{ useState } from 'react'
import ActorGrid from '../components/actor/ActorGrid';
import MainPageLayout from '../components/MainPageLayout'
import ShowGrid from '../components/show/ShowGrid';
import {apiGet} from '../misc/config';

const Home = () => {
  const [input,setInput] = useState('');
  const [results,setResults] = useState(null);
  const [searchOption,setSearchOption] = useState('shows');

  const isSearchShows = searchOption === 'shows';

  const onSearch = () => {

    apiGet(`/search/${searchOption}?q=${input}`).then(result => {
      setResults(result);
    });
  };
  const onChangeInput = (ev) => {
    setInput(ev.target.value);
  };
  const onKeyDown = (ev) => {
    if(ev.keyCode === 13){
      onSearch()
    }
  }

  const onRadioChange = (ev) => {
    setSearchOption(ev.target.value)
  }

  const RenderResults = () => {
    if(results && results.length === 0){
      return <div>no Results</div>

    }
    if(results && results.length > 0){
      return  results[0].show ? (<ShowGrid data = {results}/>):(<ActorGrid data = {results}/>)
    }
    return null;
  };
  
  return (
    <MainPageLayout>
      <input type = "text" placeholder = "searching for something" onChange = {onChangeInput} onKeyDown = {onKeyDown} value = {input}/>
      <div>
        <label htmlFor = "show-search">
          shows
          <input id = "show-search" type="radio" value = "shows" checked = {isSearchShows} onChange = {onRadioChange}/>
        </label>
        <label htmlFor = "actor-search">
          actors
        <input id = "actor-search" type="radio" value = "people" checked = {!isSearchShows}onChange = {onRadioChange}/>
        </label>
      </div>
      <button type = 'button' onClick = {onSearch}>Serach</button>
      {RenderResults()}
    </MainPageLayout>
  )
}

export default Home
