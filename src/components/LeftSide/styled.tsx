import { CButton } from '../../utils';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  height: 100%;
  border-right: 1px solid black;
`;

export const Menu = styled.div``;

export const IconButton = styled.button`
  ${CButton}
  position: relative;
  margin-top: 15px;
  padding: 0;
  width: 40px;
  height: 40px;

  & svg {
    width: 20px;
    height: 20px;
  }
`;

export const Badge = styled.div`
  position: absolute;
  top: 6px;
  right: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12px;
  height: 12px;
  background-color: red;
  color: white;
  font-size: 8px;
  border-radius: 50%;
`;
