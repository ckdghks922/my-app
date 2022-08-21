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
  margin-top: 10px;
  list-style: disc;
`;
