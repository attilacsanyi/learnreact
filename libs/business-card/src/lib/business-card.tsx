import styles from './business-card.module.scss';

/* eslint-disable-next-line */
export interface BusinessCardProps {}

export function BusinessCard(props: BusinessCardProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to BusinessCard!</h1>
    </div>
  );
}

export default BusinessCard;
