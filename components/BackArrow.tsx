import Link from 'next/link';
import styles from '../styles/BackArrow.module.css';

const BackArrow = () => {
  return (
    <div className={styles.backArrow}>
      <Link href="/" legacyBehavior>
        <a>← Back</a>
      </Link>
    </div>
  );
};

export default BackArrow;
