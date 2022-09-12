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
  margin: 10px 0;

  & > a {
    font-size: 20px;
    padding: 15px;
  }

  & > img {
    margin-left: 10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
`;

export const CoinImg = styled.img``;
