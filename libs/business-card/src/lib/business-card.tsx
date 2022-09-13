import styles from './business-card.module.scss';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Info } from './components/Info';
import { Interests } from './components/Interests';

export const BusinessCard = ({ baseUrl }: { baseUrl: string }) => (
  <div className={styles['business-card']}>
    <Info />
    <About />
    <Interests />
    <Footer />
  </div>
);
