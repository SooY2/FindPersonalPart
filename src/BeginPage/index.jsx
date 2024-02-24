import styled from 'styled-components';
import { logo } from '../assets/0_index';
import { Logo } from '../assets/svgs/0_index';
const BeginPage = () => {
  return (
    <Container>
      <StLogo>
        {/* <img src={logo} alt='LIKELIONSSU' /> */}
        <Logo />
        <h1>LIKELION SSU</h1>
      </StLogo>
    </Container>
  );
};

export default BeginPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: radial-gradient(
    138.12% 57.16% at 50% 50%,
    rgba(76, 103, 241, 0.44) 1%,
    #030d19 45%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StLogo = styled.div`
  display: flex;
  color: #fff;
  text-align: center;
  font-size: 2rem;
  font-weight: 800;
`;
