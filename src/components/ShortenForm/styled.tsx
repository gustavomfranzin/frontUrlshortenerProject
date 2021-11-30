import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6%;
  border-radius: 8px;
  color: white; 
`;

export const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0;
  padding: 4px;
  font-family: Verdana;

  h1 {
    margin-top: 3px;
    margin-left: auto;
    margin-right: auto;
    color: #00a6cb;
    font-size: 3vh;
  }
  h3 {
    margin-top: 0px;
    margin-left: auto;
    margin-right: auto;
    color: #ff3744;
    font-size: 1.5vh;
  }
`;

export const WrapperInput = styled.div`
  display: flex;
  justify-content:left ;
  padding: 4px;
  width:100%;
  height: 100%;
  font-family: Verdana;
  }  

  input {
    border: 1px solid #ccc;
    border-radius: 20px;
    margin-top: 10%;
    margin-left: 15%;
    width: 40%;
    height: 3%;
    padding: 8px;
    font-weight: 500;
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.7);
  } 

`;

export const WrapperImage = styled.img`
  width: 30%;
  height: 30%;
  
`;

export const WrapperButton = styled.button`
  border-radius: 8px;
  display: flex;
  justify-content: center;
  width: auto;
  border: 0px;
  margin-left: auto;
  margin-right: auto;
  background-color: transparent;

  button {
    background-color: #ff3744;
    padding: 8px 16px;
    width: 100%;
    height: 3vh;
    border: 0px;
    border-radius: 8px;
    font-weight: bold;
    font-size: 1.5vh;
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.1);

    &:hover {
      background-color: #32cd32;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.9);
    }

    span {
      font-weight: bold;
      color: #ffff;
    }
  }
`;

export const LinkShorted = styled.div`
  margin-top: 15%;
  display: flex;
  margin-top: 50px;
  width: 100%;
  justify-content: center;
  padding: 4px;
  font-family: Verdana;
  font-size: 30px;
`;
