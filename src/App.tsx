import { Routes, Route, BrowserRouter } from 'react-router-dom';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div />} />
        <Route path="/" element={<div />} />
        <Route path="/" element={<div />} />
      </Routes>
    </BrowserRouter>
  );
};
