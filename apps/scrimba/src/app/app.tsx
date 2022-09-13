import { ReactFacts } from '@scrimba/react-facts';
import { BrowserRouter } from 'react-router-dom';
import { environment } from '../environments/environment';

const { baseUrl } = environment;

export function App() {
  return (
    <BrowserRouter basename={baseUrl}>
      <ReactFacts baseUrl={baseUrl} />
      <div />
    </BrowserRouter>
  );
}

export default App;
