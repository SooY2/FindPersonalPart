import PropTypes from 'prop-types';
import * as St from '../commonStyles';
import { QUESTIONS } from '../constants/QUESTIONS';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import AnswerRadio from './components/AnswerRadio';
import { Logo } from '../assets/svgs/0_index';
import { findPersonalPart } from '../utils/calcResult';

const QuestionPage = ({ setPage, setResult }) => {
  const [step, setStep] = useState(0);
  const [checked, setChecked] = useState([
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ]);
  const [choices, setChoices] = useState([]);
  const [isActive, setIsActive] = useState(false);

  //질문 섞는 함수
  const shuffleChoices = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    setIsActive(false);
    setChecked((prevChecked) => {
      const newChecked = [...prevChecked];
      newChecked[step] = ''; // 배열의 인덱스는 0부터 시작하기 때문에 3번째 요소의 인덱스는 2입니다.
      return newChecked;
    });
    setChoices(shuffleChoices(QUESTIONS[step].choices));
  }, [step]);

  useEffect(() => {
    if (checked[step] !== '') setIsActive(true);
  }, [checked]);

  return (
    <StContainer>
      <St.StLogo>
        <Logo />
        <h1>LIKELION SSU</h1>
      </St.StLogo>
      <StQuestion>Q. {QUESTIONS[step].question}</StQuestion>
      <StAnswerContainer>
        {choices.map((choice, idx) => {
          return (
            <AnswerRadio
              key={choice.content + idx}
              value={choice.part}
              label={choice.content}
              name={step}
              checkedValue={checked[step]}
              setChecked={setChecked}
            />
          );
        })}
      </StAnswerContainer>
      <StBtn
        type='button'
        onClick={(e) => {
          e.preventDefault();
          if (step === 11) {
            setResult(findPersonalPart(checked));
            setPage(2);
            return;
          }
          setStep(step + 1);
        }}
        disabled={!isActive}
      >
        다음으로
      </StBtn>
    </StContainer>
  );
};

QuestionPage.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default QuestionPage;

const StContainer = styled.div`
  width: 100%;
  height: 100%;
  background: radial-gradient(
    138.12% 80.16% at 50% 50%,
    rgba(76, 103, 241, 0.44) 1%,
    #030d19 40%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.5rem;
  padding: 5rem 3rem;
`;

const StQuestion = styled.h1`
  font-size: 2rem;
  color: #fff;
  font-weight: 500;
  line-height: 2.8rem;
  word-break: keep-all;
`;

const StAnswerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StBtn = styled.button`
  width: 12.3rem;
  height: 4rem;
  border-radius: 20px;
  background-color: ${(props) => (props.disabled ? '#cccccc89' : '#030d19')};
  border: 1.5px solid #99a5dc;
  color: #fff;
  text-align: center;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 0.8px;
`;
