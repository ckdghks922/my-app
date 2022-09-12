import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 350px;
  margin: 0 auto;
`;

export const CoinWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: gray;
  height: 50px;
  margin-top: 15px;

  & > a {
    font-size: 20px;
    padding: 15px;
  }
`;
