import { useState, useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/stores';
import { TodoView, ItemView } from './TodoView';
import * as S from './styled';

export const TodoContainer: React.FC = observer(() => {
  const { todoStore } = useStore();
  const [text, setText] = useState<string>('');

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setText(e.target.value);
    },
    [],
  );
  const handleAdd = useCallback((text: string) => {
    if (!text) return;
    todoStore.addList(text);
  }, []);

  return (
    <S.Wrapper>
      <TodoView text={text} onChange={handleChange} onAdd={handleAdd} />
      <S.TodoList>
        {todoStore.todoList.map(elem => (
          <ItemView key={elem.id} id={elem.id} text={elem.text} />
        ))}
      </S.TodoList>
    </S.Wrapper>
  );
});
