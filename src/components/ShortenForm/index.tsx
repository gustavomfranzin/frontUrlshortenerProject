import React, { useState } from "react";
import api from '../../services/api';
import * as S from './styled';


function ShortenForm() {

const [url, setUrl] = useState('')
const [shortUrl, setShortUrl] = useState('')
const json = {originURL: url}

  const submitUrl = () =>{

      api.post('/shorten', json).then((response:any) =>{
           setShortUrl(response.data.shortURL) 
         }
       ).catch((error:any)=>{
          console.log(error)
     })
  }

  return (
    <div className="App"> 
    <S.Header>
    <h1>Hello World, shorten it!</h1>
    <h3>Paste the URL to be shortened</h3>
    </S.Header>
    <S.Wrapper className="App">
     
        <input
          type="text"
          placeholder="Digite a URL que deseja encurtar"
          onChange={(event) => setUrl(event.target.value)}
        />
        <button type="submit"
                onClick={submitUrl}         
        >
          <span>Encurtar URL</span>
        </button>
    </S.Wrapper >
    <S.linkShorted>
    <a href={shortUrl}>{shortUrl}</a>
    </S.linkShorted>
    </div>
  );
}

export default ShortenForm;
