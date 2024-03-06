import styled from 'styled-components';
import BeginPage from './BeginPage';
import { useState } from 'react';
import QuestionPage from './QuestionPage';
import EndPage from './EndPage';

const FindPersonalPart = () => {
  const [page, setPage] = useState(0);
  const [result, setResult] = useState('');

  const renderPage = (thispage) => {
    switch (thispage) {
      case 0:
        return <BeginPage setPage={setPage} />;
      case 1:
        return (
          <QuestionPage setPage={setPage} setResult={setResult}></QuestionPage>
        );
      case 2:
        return <EndPage result={result}></EndPage>;
      default:
        break;
    }
  };
  return <Container>{renderPage(page)}</Container>;
};

export default FindPersonalPart;

const Container = styled.div`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  max-width: 860px;
  margin: 0 auto;
  overflow: hidden;
`;
