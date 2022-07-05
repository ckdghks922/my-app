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
  margin-top: 30px;
`;

export const Input = styled.input`
  margin-top: 30px;
  width: 250px;
  height: 30px;
`;

export const Button = styled.button`
  margin-top: 30px;
  width: 150px;
  height: 50px;
  border: none;
  cursor: pointer;
  background-color: black;
  color: white;

  &:hover {
    background-color: gray;
    color: black;
  }
`;
