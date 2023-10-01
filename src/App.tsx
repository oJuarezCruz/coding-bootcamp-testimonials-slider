import Attribution from "./Components/Attribution"
import Testimony from "./Components/Testimony";
import patternCurve from './images/pattern-curve.svg';

function App() {
  return (
    <div className="w-full min-h-screen font-inter flex items-start lg:items-center justify-center">
      <Testimony />
      <img
        src={patternCurve}
        alt=""
        className="absolute bottom-0 left-0 z-0"
      />
      <Attribution />
    </div>
  )
}

export default App
