import Image from 'next/image';
import Link from 'next/link';
import { FaShoppingCart, FaSistrix, FaUser } from 'react-icons/fa';
import styles from './MainNavbar.module.css';

const MainNavbar = () => {
  return (
    <nav className="flex flex-row justify-between">
      <section>
        <Link href="/">
          <a>
            <div className="flex flex-row items-center">
              <Image
                src="/images/company/logo.png"
                alt="Just Drink Tea Logo"
                height="65.33"
                width="110"
              />
              <span className={styles['logo-title']}>Just Drink Tea</span>
            </div>
          </a>
        </Link>
      </section>
      <section>
        <div className="flex flex-row gap-5 items-center h-full">
          <div className={styles.menu}>
            <ul className="flex flex-row gap-5">
              <li>Home</li>
              <li>About Us</li>
              <li>Shop</li>
              <li>Contact</li>
            </ul>
            <span>|</span>
          </div>
          <div>
            <ul className="flex flex-row gap-3 items-center">
              <li className={styles['icon-list']}>
                <FaSistrix className={styles.icon} />
              </li>
              <li className={styles['icon-list']}>
                <FaUser className={styles.icon} />
              </li>
              <li className="hover:cursor-pointer">$0.00</li>
              <li className={styles['icon-list'] + ' bg-neutral-300'}>
                <FaShoppingCart className={styles.icon} />
                <span className={styles['cart-count']}>99+</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default MainNavbar;
