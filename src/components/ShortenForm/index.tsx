import React, { useState } from "react";
import api from "../../services/api";
import * as S from "./styled";
import homin from './contents/images/homin.png';

function ShortenForm() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const json = { originURL: url };

  const submitUrl = () => {
    api
      .post("/shorten", json)
      .then((response: any) => {
        setShortUrl(response.data.shortURL);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
    <div className="container">
      <S.Wrapper>
        <S.WrapperTitle>
        <h1>Hello World, shorten it!</h1>
        <h3>Paste the URL to be shortened</h3>
        </S.WrapperTitle>
        <S.WrapperInput>
        <input
          type="text"
          placeholder="Digite a URL que deseja encurtar"
          onChange={(event) => setUrl(event.target.value)}
        />
        <S.WrapperImage src={homin} alt="picture"/>
        

        </S.WrapperInput>
        <S.WrapperButton>
        <button type="submit" onClick={submitUrl}>
          <span>Encurtar URL</span>
        </button>
        </S.WrapperButton>
        
      </S.Wrapper>

      <S.LinkShorted>
        <a href={shortUrl}>{shortUrl}</a>
      </S.LinkShorted>
    </div>
    </div>

    
  );
}

export default ShortenForm;
