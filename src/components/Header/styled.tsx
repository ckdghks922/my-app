import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const Text = styled.span`
  font-size: 17px;
  font-weight: 500;
  margin-right: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Time = styled.span`
  font-weight: 500;
  margin-left: auto;
  white-space: nowrap;

  @media all and (max-width: 767px) {
    display: none;
  }
`;
