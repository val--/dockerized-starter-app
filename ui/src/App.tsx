import './App.css';
import ApiCheckerWithAxios from './components/ApiCheckerWithAxios';
import InternalApiChecker from './components/InternalApiChecker';

function App() {
  return (
    <div>
      <h1>Internal API check : </h1>
      <InternalApiChecker/>
      <h1>External API check : </h1>
      <ApiCheckerWithAxios/>
    </div>
  );
}

export default App;
