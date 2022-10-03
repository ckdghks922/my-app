import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  margin: 10px auto;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Title = styled.header`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin: 15px 0;
`;

export const CoinWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: aliceblue;
  height: 50px;
  margin: 10px 0;

  & > a {
    font-style: italic;
    font-size: 20px;
    padding: 15px;

    &:hover {
      font-weight: 600;
    }
  }

  & > img {
    margin-left: 10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
`;

export const CoinImg = styled.img``;

export const CoinItemWrapper = styled.div``;

export const CoinName = styled.h1`
  margin-top: 10px;
  font-size: 30px;
  text-align: center;
`;

export const CoinDesc = styled.p`
  margin-top: 10px;
  font-size: 16px;
  line-height: 25px;
  text-align: center;
`;
