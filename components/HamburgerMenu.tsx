import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/HamburgerMenu.module.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className={styles.hamburgerMenu}>
        <button onClick={toggleMenu} className={styles.hamburgerButton}>
          ☰
        </button>
        {isOpen && (
          <div className={styles.menu}>
            <Link href="/" legacyBehavior>
              <a className={styles.menuItem} onClick={toggleMenu}>Home</a>
            </Link>
            <Link href="/gallery" legacyBehavior>
              <a className={styles.menuItem} onClick={toggleMenu}>Gallery</a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a className={styles.menuItem} onClick={toggleMenu}>About</a>
            </Link>
          </div>
        )}
      </div>
      <style jsx>{`
        .hamburgerMenu {
          position: absolute;
          top: 10px;
          right: 10px;
          z-index: 1000;
        }
        .hamburgerButton {
          font-size: 24px;
          background: none;
          border: none;
          cursor: pointer;
        }
        .menu {
          position: absolute;
          top: 40px;
          right: 0;
          background: rgba(0, 0, 0, 0.8);
          padding: 10px;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
        }
        .menuItem {
          color: white;
          text-decoration: none;
          padding: 5px 0;
          transition: color 0.3s;
        }
        .menuItem:hover {
          color: #f0a500;
        }
      `}</style>
    </>
  );
};

export default HamburgerMenu;
