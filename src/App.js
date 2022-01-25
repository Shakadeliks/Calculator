import Calculator from './Calculator';
import { Helmet } from "react-helmet";
function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Calculator</title>
        <link rel="canonical" href="https://shakadeliks.github.io/Calculator/" />
      </Helmet>
      <Calculator />
    </div>
  );
}

export default App;
