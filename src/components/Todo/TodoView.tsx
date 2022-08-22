import { memo } from 'react';
import * as S from './styled';

interface ViewProps {
  text: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement> | null) => void;
  onAdd: (text: string) => void;
}
export const TodoView: React.FC<ViewProps> = ({ text, onChange, onAdd }) => {
  return (
    <S.ViewWrapper>
      <S.Text>오늘의 할 일</S.Text>
      <S.Input
        value={text}
        placeholder="할 일을 추가해 보세요"
        onChange={onChange}
        onKeyDown={event => {
          if (event.key === 'Enter') {
            onAdd(text);
            onChange(null);
          }
        }}
      />
    </S.ViewWrapper>
  );
};

interface ItemProps {
  id: number;
  text: string;
  done: boolean;
  onUpdate: (id: number, flag: boolean) => void;
  onDelete: (id: number) => void;
}
const Item: React.FC<ItemProps> = ({ id, text, done, onUpdate, onDelete }) => {
  return (
    <S.TodoItem>
      <S.TodoText done={done}>{text}</S.TodoText>
      <S.ButtonWrapper>
        <S.Button isFirst onClick={() => onUpdate(id, !done)}>
          {done ? '해제' : '완료'}
        </S.Button>
        <S.Button onClick={() => onDelete(id)}>삭제</S.Button>
      </S.ButtonWrapper>
    </S.TodoItem>
  );
};
export const ItemView = memo(Item);
