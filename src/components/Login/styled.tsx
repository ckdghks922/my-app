import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  max-width: 300px;
  margin: 0 auto;
`;

export const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WelcomeText = styled.h1`
  font-size: 30px;
  font-weight: 700;
`;

export const SubText = styled.span`
  margin-top: 30px;
  font-size: 18px;
  font-weight: 500;
`;

export const Input = styled.input.attrs({ required: true })`
  margin-top: 30px;
  width: 300px;
  height: 30px;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);

  ::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  &:focus {
    border-bottom: 1px solid blue;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const InfoCircle = styled.div<{ valid: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.valid ? 'green' : 'red')};
`;

export const InfoText = styled.span`
  margin-left: 10px;
  font-size: 12px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
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
