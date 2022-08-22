import { CButton } from '@/utils';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 350px;
  margin: 0 auto;
`;

export const ViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.span`
  font-size: 25px;
  font-weight: 700;
  margin-top: 50px;
`;

export const Input = styled.input`
  width: 100%;
  margin: 25px 0;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  ::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  &:focus {
    border-bottom: 1px solid black;
  }
`;

export const TodoList = styled.ul``;

export const TodoItem = styled.li`
  display: flex;
  align-items: center;
  height: 25px;
  margin-top: 10px;
`;

export const TodoText = styled.span<{ done: boolean }>`
  max-width: calc(100% - 90px);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-decoration: ${props => (props.done ? 'line-through' : 'none')};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-left: auto;
`;

export const Button = styled.button<{ isFirst?: boolean }>`
  ${CButton}
  margin-left: 7px;
  color: ${props => (props.isFirst ? 'black' : 'red')};
`;
