import { CButton } from '@/utils';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Canvas = styled.canvas`
  width: 600px;
  height: 600px;
  border: 1px solid black;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;

export const Input = styled.input`
  width: 120px;
  margin-top: 15px;
`;

export const Button = styled.button`
  ${CButton}
  height: 30px;
  margin-top: 15px;
  border: 1px solid black;
`;
