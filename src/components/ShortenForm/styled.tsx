import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 4px;

  input {
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    height: 44px;
    padding: 8px;
    font-weight: 500;
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.7);
  }

  button {
    background-color: #006400;
    padding: 8px 16px;
    margin: 0 16px;
    height: 59px;
    border: 0px;
    border-radius: 8px;
    font-weight: bold;
    font-size: 16px;
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);

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

export const Header = styled.div`
  display: flex;
  width: 40%;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 25px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  font-family: Verdana;
  background-color: #006400;
  border-radius: 8px;
  box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.7);
  color: white;

  h3 {
    margin-top: 45px;
    font-size: 14px;
    color: #32cd32;
  }
`;

export const linkShorted = styled.div`
  display: flex;
  margin-top: 50px;
  width: 100%;
  justify-content: center;
  padding: 4px;
  font-family: Verdana;
  font-size: 30px;
`;
