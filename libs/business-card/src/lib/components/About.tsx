import styles from '../business-card.module.scss';

export const About = () => (
  <div className={styles['business-card--about']}>
    <h3>About</h3>
    <p>
      I am a frontend developer with a particular interest in making things
      simple and automating daily tasks. I try to keep up with security and best
      practices, and am always looking for new things to learn.
    </p>
  </div>
);
