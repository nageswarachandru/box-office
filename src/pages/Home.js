/* eslint-disable arrow-body-style */
import React,{ useState } from 'react'
import ActorGrid from '../components/actor/ActorGrid';
import CustomRadio from '../components/CustomRadio';
import MainPageLayout from '../components/MainPageLayout'
import ShowGrid from '../components/show/ShowGrid';
import {apiGet} from '../misc/config';
import { useLastQuery } from '../misc/custom-hooks';
import { RadioInputsWrapper, SearchButtonWrapper, SearchInput } from './Home.styled';

const Home = () => {
  const [input,setInput] = useLastQuery();
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
      <SearchInput type = "text" placeholder = "searching for something" onChange = {onChangeInput} onKeyDown = {onKeyDown} value = {input}/>
      <RadioInputsWrapper>
        <div>

          <CustomRadio
          label ="Shows"
          input id = "show-search" value = "shows" checked = {isSearchShows} onChange = {onRadioChange} 
           />

        </div>
        <div>
        <CustomRadio
          label ="Actors"
          input id = "actor-search" value = "people" checked = {!isSearchShows}onChange = {onRadioChange}
           />
        </div>
        
      </RadioInputsWrapper>
      

      <SearchButtonWrapper>
      <button type = 'button' onClick = {onSearch}>Search</button></SearchButtonWrapper>
      {RenderResults()}
    </MainPageLayout>
  )
}

export default Home
