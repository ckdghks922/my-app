import { CButton } from '../../utils';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 50px;
  width: 100%;
  border-top: 1px solid black;
`;

export const Menu = styled.div``;

export const IconButton = styled.button`
  ${CButton}
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 100px;
  height: 50px;

  & svg {
    width: 20px;
    height: 20px;
  }
`;

export const Badge = styled.div`
  position: absolute;
  top: 6px;
  right: 30px;
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
