import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 55vh;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0%;
  background-color: white;
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
  }
  h3 {
    margin-top: 0px;
    margin-left: auto;
    margin-right: auto;
    color: #ff3744;
  }
`;

export const WrapperInput = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px;
  height: 70%;
  font-family: Verdana;
  background-color: white;
  margin-bottom: 0%;
   
   

  input {
    border: 1px solid #ccc;
    border-radius: 20px;
    margin-top: 15%;
    margin-left: 0;
    width: 90%;
    height: 25px;
    padding: 8px;
    font-weight: 500;
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.7);

     @media screen and (min-width: 451px) {
            width: 100%;
            margin-top: 8%;
    }
  } 

  
`;

export const WrapperImage = styled.img`
  margin-left: 0;
  height: 40%;

  @media screen and (min-width: 451px) {
            height: 100%;
    }
`;

export const WrapperButton = styled.button`
  border-radius: 8px;
  display: flex;
  justify-content: center;
  width: auto;
  border: 0px;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  background-color: transparent;

  button {
    background-color: #ff3744;
    padding: 8px 16px;
    width: 100%;
    height: 100%;
    border: 0px;
    border-radius: 8px;
    font-weight: bold;
    font-size: 16px;
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
