import { CButton } from '@/utils';
import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  height: 100%;
  border-right: 1px solid rgba(0, 0, 0, 0.2);

  @media all and (max-width: 767px) {
    display: none;
  }
`;

export const Menu = styled.ul``;

export const MenuList = styled.li`
  margin-top: 15px;
`;

export const IconButton = styled.button`
  ${CButton}
  position: relative;
  padding: 0;
  width: 40px;
  height: 40px;

  & svg {
    width: 20px;
    height: 20px;
  }
`;

const badgeAnimation = keyframes`
  0% {
    transform: none;
  }
  50% {
    transform: translateY(-5px) rotateY(360deg);
  }
  100% {
    transform: none;
  }
`;

export const Badge = styled.div`
  position: absolute;
  top: 6px;
  right: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  background-color: red;
  color: white;
  font-size: 8px;
  border-radius: 50%;
  animation: ${badgeAnimation} 2s ease-in-out;
`;
