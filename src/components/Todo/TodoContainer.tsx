import { useState, useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/stores';
import { TodoView, ItemView } from './TodoView';
import * as S from './styled';

export const TodoContainer: React.FC = observer(() => {
  const { todoStore } = useStore();
  const [text, setText] = useState<string>('');

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement> | null): void => {
      if (!e) setText('');
      else setText(e.target.value);
    },
    [],
  );
  const handleAdd = useCallback((text: string): void => {
    if (!text) return;
    todoStore.addList(text);
  }, []);

  const handleUpdate = useCallback((id: number, flag: boolean): void => {
    todoStore.updateList(id, flag);
  }, []);
  const handleDelete = useCallback((id: number): void => {
    todoStore.deleteList(id);
  }, []);

  return (
    <S.Wrapper>
      <TodoView text={text} onChange={handleChange} onAdd={handleAdd} />
      <S.TodoList>
        {todoStore.todoList.map(elem => (
          <ItemView
            key={elem.id}
            id={elem.id}
            text={elem.text}
            done={elem.done}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </S.TodoList>
    </S.Wrapper>
  );
});
