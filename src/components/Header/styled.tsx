import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  width: calc(100% - 60px);
  height: 50px;
  padding: 0 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  & svg {
    width: 20px;
    height: 20px;
  }
`;

export const Text = styled.span`
  margin-right: auto;
  font-weight: 500;
  font-size: 17px;
`;

export const Time = styled.span`
  margin-left: auto;
`;
