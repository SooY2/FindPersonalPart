import { useEffect } from 'react';
import FindPersonalPart from './FindPersonalPart';
import GlobalStyles from './globalStyles';

const setScreenSize = () => {
  let vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

function App() {
  useEffect(() => {
    window.addEventListener('resize', () => setScreenSize());
    setScreenSize();
  }, []);
  return (
    <>
      <GlobalStyles />
      <FindPersonalPart />
    </>
  );
}

export default App;
