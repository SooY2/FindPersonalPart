import styled from 'styled-components';

const FindPersonalPart = () => {
  return <Container>FindPersonalPart</Container>;
};

export default FindPersonalPart;

const Container = styled.div`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  max-width: 480px;
  margin: 0 auto;
  overflow: hidden;
  background: radial-gradient(
    138.12% 57.16% at 50% 50%,
    rgba(76, 103, 241, 0.44) 1%,
    #030d19 45%
  );
`;
