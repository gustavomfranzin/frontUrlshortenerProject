import React, { useState } from "react";
import api from '../../services/api';


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
     <h1>Hello World!</h1>
        <input
          type="text"
          placeholder="Insira a URL que deseja encurtar"
          onChange={(event) => setUrl(event.target.value)}
        />
        <button type="submit"
                onClick={submitUrl}         
        >
          <span>Encurtar URL</span>
        </button>
        <a href={shortUrl}>{shortUrl}</a>
    </div>
  );
}

export default ShortenForm;
