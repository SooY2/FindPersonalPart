import styled from 'styled-components';
import { Logo } from '../assets/svgs/0_index';
import { beginLion } from '../assets/imgs/0_index';
import PropTypes from 'prop-types';

const BeginPage = ({ setPage }) => {
  return (
    <Container>
      <StLogo>
        <Logo />
        <h1>LIKELION SSU</h1>
      </StLogo>
      <StEllipse>
        <StLion src={beginLion} alt='likelion' />
      </StEllipse>
      <StBeginPContainer>
        <StBeginPBox>
          <StBeginP>만약에만약에... 내가 아기사자가 된다면......? </StBeginP>
          <StBeginP>12기 숭멋사에... 들어간다면...</StBeginP>
          <StBeginP>어떤.... 아기사자가 될까....?</StBeginP>
        </StBeginPBox>
        <StBeginPBox>
          <StBeginP>무슨파트에 지원하면 될까...</StBeginP>
          <StBeginP>난 어떤 사자가 되고 싶을까...?</StBeginP>
        </StBeginPBox>
      </StBeginPContainer>
      <StBtn
        type='button'
        onClick={(e) => {
          e.preventDefault();
          setPage(1);
        }}
      >
        START
      </StBtn>
    </Container>
  );
};

BeginPage.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default BeginPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: radial-gradient(
      138.12% 80.16% at 50% 50%,
      rgba(76, 103, 241, 0.44) 1%,
      #030d19 40%
    ),
    #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const StLogo = styled.div`
  display: flex;
  gap: 1rem;
  color: #fff;
  text-align: center;
  font-size: 2rem;
  font-weight: 800;
`;

const StEllipse = styled.div`
  position: absolute;
  width: 27rem;
  height: 26.7rem;
  border-radius: 269px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: -12.109px 12.109px 12.109px 0px rgba(255, 255, 255, 0.1) inset,
    12.109px -12.109px 12.109px 0px rgba(194, 194, 194, 0.1) inset;
  backdrop-filter: blur(12.109176635742188px);
`;

const StLion = styled.img`
  position: absolute;
  top: 3rem;
  width: 27rem;
`;

const StBeginPContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20rem;
`;

const StBeginPBox = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
`;

const StBeginP = styled.p`
  color: #fff;
  text-align: center;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
  letter-spacing: 0.8px;
`;

const StBtn = styled.button`
  width: 12.3rem;
  height: 3.5rem;
  border-radius: 20px;
  background-color: #030d19;
  border: 1.5px solid #99a5dc;
  color: #fff;
  text-align: center;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 0.8px;
`;
