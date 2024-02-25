import styled from 'styled-components';

export const Container = styled.div`
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

export const StLogo = styled.div`
  display: flex;
  gap: 1rem;
  color: #fff;
  text-align: center;
  font-size: 2rem;
  font-weight: 800;
`;
