import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';

export const ReactFacts = ({ baseUrl }: { baseUrl: string }) => (
  <div className="page">
    <Header baseUrl={baseUrl} />
    <MainContent />
    <Footer />
  </div>
);
