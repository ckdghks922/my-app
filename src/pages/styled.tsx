import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 50px;
`;

export const MainSide = styled.div`
  width: calc(100% - 60px);
  height: 100%;
  overflow: auto;

  @media all and (max-width: 767px) {
    width: 100%;
  }
`;
