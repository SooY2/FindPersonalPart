import styled from 'styled-components';
import BeginPage from './BeginPage';

const FindPersonalPart = () => {
  return (
    <Container>
      <BeginPage></BeginPage>
    </Container>
  );
};

export default FindPersonalPart;

const Container = styled.div`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  max-width: 480px;
  margin: 0 auto;
  overflow: hidden;
`;
