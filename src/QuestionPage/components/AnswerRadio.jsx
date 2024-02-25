import styled from 'styled-components';

const AnswerRadio = ({ value, name, label, checkedValue, setChecked }) => {
  const handleRadio = (e) => {
    setChecked((prevChecked) => {
      const newChecked = [...prevChecked];
      newChecked[name] = e.target.value; // 배열의 인덱스는 0부터 시작하기 때문에 3번째 요소의 인덱스는 2입니다.
      return newChecked;
    });
  };
  return (
    <StCompanyLabel>
      <StRadioInput
        type='radio'
        name={name}
        value={value}
        checked={checkedValue === value}
        onChange={handleRadio}
      />
      <StRadioSpan>{label}</StRadioSpan>
    </StCompanyLabel>
  );
};

export default AnswerRadio;

const StCompanyLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const StRadioInput = styled.input`
  display: none;
`;

const StRadioSpan = styled.span`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 1rem;
  height: 5.5rem;
  padding: 1rem 1.7rem;
  border-radius: 10px;
  color: #fff;
  border: 1px solid #fff;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 2rem;

  background-color: #131b446e;

  ${StRadioInput}:checked + & {
    background-color: #ffffffe7;
    color: #1b1539;
    font-weight: 900;

    &::before {
      content: '🦁 ';
    }
  }
`;
