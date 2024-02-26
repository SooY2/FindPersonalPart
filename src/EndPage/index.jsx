import styled from 'styled-components';
import { BE, DE, FE, PM } from '../assets/imgs/0_index';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
import { useRef } from 'react';
import { PARTEXPLAINS } from '../constants/PARTEXPLAINS';

const EndPage = ({ result }) => {
  const divRef = useRef(null);
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
  const handleDownload = async () => {
    if (!divRef.current) return;

    try {
      const div = divRef.current;
      const canvas = await html2canvas(div, { scale: 2 });
      canvas.toBlob((blob) => {
        if (blob !== null) {
          saveAs(blob, 'likelion.png');
        }
      });
    } catch (error) {
      console.error('Error converting div to image:', error);
    }
  };
  return (
    <>
      <Container>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <StTitle onClick={handleDownload}>나의 아기사자 유형은? 🦁</StTitle>
          <StDown type='button' onClick={handleDownload}>
            결과지 다운받기 ⬇
          </StDown>
        </div>

        <div>{RanderCard()}</div>
        <StLinks>
          <StBtn
            type='button'
            onClick={() =>
              window.open('https://likelionssu.com/recruit', '_blank')
            }
          >
            <p>숭실대 멋쟁이사자처럼 홈페이지 보러가기</p> &gt;
          </StBtn>
          <StBtn
            type='button'
            onClick={() => window.open('https://likelionssu.com', '_blank')}
          >
            <p>숭실대 멋쟁이사자처럼 지원하러가기</p> &gt;
          </StBtn>
        </StLinks>
      </Container>
      {true && (
        <Container style={{ zIndex: '-1', gap: '2rem' }} ref={divRef}>
          <StTitle>나의 아기사자 유형은? 🦁</StTitle>
          <div>{RanderCard()}</div>
          <StExplain>
            {PARTEXPLAINS.find((item) => item.part === result).content}
          </StExplain>
        </Container>
      )}
    </>
  );
};

export default EndPage;

const StTitle = styled.h1`
  color: #fff;
  font-size: 2rem;
  font-weight: 800;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem 3rem;
  background: linear-gradient(
      12deg,
      rgba(30, 14, 92, 0.9) 8.77%,
      #151f4f 25.76%,
      #050b11 48.76%,
      #051221 65.77%,
      #0a1b2f 82.65%,
      rgba(35, 22, 88, 0.79) 102.19%
    ),
    #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const StIMG = styled.img`
  width: 100%;
  max-width: 33rem;
  box-shadow: 1px 4px 10px 3px #8b7dc3;
  border-radius: 20px;

  -webkit-animation: rotate-vert-center 1s
    cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.5s both;
  animation: rotate-vert-center 1s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.5s
    both;

  @-webkit-keyframes rotate-vert-center {
    0% {
      -webkit-transform: rotateY(0);
      transform: rotateY(0);
    }
    100% {
      -webkit-transform: rotateY(360deg);
      transform: rotateY(360deg);
    }
  }
  @keyframes rotate-vert-center {
    0% {
      -webkit-transform: rotateY(0);
      transform: rotateY(0);
    }
    100% {
      -webkit-transform: rotateY(360deg);
      transform: rotateY(360deg);
    }
  }
`;
const StLinks = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const StBtn = styled.button`
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 3.5rem;
  border-radius: 15px;
  background: #dfe4ff;
  font-size: 1.2rem;
  font-weight: 700;
  color: #313131;
`;

const StDown = styled.button`
  width: fit-content;
  border-radius: 5px;
  background-color: transparent;
  font-size: 1.5rem;
  font-weight: 500;
  color: #b5a5ef;
`;

const StExplain = styled.div`
  padding: 1.5rem;
  font-size: 1.4rem;
  line-height: 1.8rem;
  word-break: keep-all;
  font-weight: 400;
  color: #fff;
  background-color: #ffffff43;
  border-radius: 20px;
`;
