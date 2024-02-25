import styled from 'styled-components';
import { BE, DE, FE, PM } from '../assets/imgs/0_index';

const EndPage = ({ result }) => {
  const RanderCard = () => {
    switch (result) {
      case 'ansPM':
        return <StIMG src={PM} />;
      case 'ansDE':
        return <StIMG src={DE} />;
      case 'ansFE':
        return <StIMG src={FE} />;
      case 'ansBE':
        return <StIMG src={BE} />;
      default:
        break;
    }
  };
  return (
    <Container>
      <h1>나의 아기사자 유형은?</h1>
      <div>{RanderCard()}</div>
      <div>
        <button>숭실대 멋쟁이 사자처럼이 궁금하다면? </button>
        <button>지원하고 싶다면? </button>
      </div>
    </Container>
  );
};

export default EndPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const StIMG = styled.img`
  width: 33rem;
`;
