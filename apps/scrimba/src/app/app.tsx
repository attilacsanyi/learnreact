import { BusinessCard } from '@scrimba/business-card';
import { ReactFacts } from '@scrimba/react-facts';
import { BrowserRouter } from 'react-router-dom';
import { environment } from '../environments/environment';

const { baseUrl } = environment;

export function App() {
  return (
    <BrowserRouter basename={baseUrl}>
      <BusinessCard baseUrl={baseUrl} />
      <ReactFacts baseUrl={baseUrl} />
    </BrowserRouter>
  );
}

export default App;
