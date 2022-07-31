import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WelcomeText = styled.h1`
  margin-top: 50px;
`;

export const SubText = styled.span`
  margin-top: 50px;
`;

export const Input = styled.input`
  margin-top: 30px;
  width: 250px;
  height: 30px;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);

  ::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid blue;
  }
`;

export const Button = styled.button`
  margin-top: 30px;
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 5px;
  background-color: black;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: gray;
    color: black;
  }
`;
