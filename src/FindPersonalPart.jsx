import styled from 'styled-components';
import BeginPage from './BeginPage';
import { useState } from 'react';

const FindPersonalPart = () => {
  const [page, setPage] = useState(0);

  const renderPage = (thispage) => {
    switch (thispage) {
      case 0:
        return <BeginPage setPage={setPage} />;
      case 1:
        return <></>;
      case 2:
        return <>2</>;
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
  max-width: 480px;
  margin: 0 auto;
  overflow: hidden;
`;
