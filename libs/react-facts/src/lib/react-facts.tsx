import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';

export function ReactFacts({ baseUrl }: { baseUrl: string }) {
  return (
    <div className="page">
      <Header baseUrl={baseUrl} />
      <MainContent />
      <Footer />
    </div>
  );
}

export default ReactFacts;
