/* eslint-disable arrow-body-style */
import React,{ useState } from 'react'
import MainPageLayout from '../components/MainPageLayout'

const Home = () => {
  const [input,setInput] = useState('');
  const onSearch = () => {

    fetch(`https://api.tvmaze.com/search/shows?q=${input}`).then(r => r.json()).then(result => {
      console.log(result);
    })

  }
  const onChangeInput = (ev) => {
    setInput(ev.target.value);
  };
  const onKeyDown = (ev) => {
    if(ev.keyCode === 13){
      onSearch()
    }
  }
  
  return (
    <MainPageLayout>
      <input type = "text" onChange = {onChangeInput} onKeyDown = {onKeyDown} value = {input}/>
      <button type = 'button' onClick = {onSearch}>Serach</button>
    </MainPageLayout>
  )
}

export default Home
