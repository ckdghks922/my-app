import { memo } from 'react';
import * as S from './styled';

interface ViewProps {
  text: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
          if (event.key === 'Enter') onAdd(text);
        }}
      />
    </S.ViewWrapper>
  );
};

interface ItemProps {
  id: number;
  text: string;
}
const Item: React.FC<ItemProps> = ({ id, text }) => {
  return <S.TodoItem>{text}</S.TodoItem>;
};
export const ItemView = memo(Item);
