import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
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
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Time = styled.span`
  margin-left: auto;

  @media all and (max-width: 767px) {
    display: none;
  }
`;
