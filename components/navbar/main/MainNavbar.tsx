import Image from 'next/image';
import Link from 'next/link';
import styles from './MainNavbar.module.css';

export interface IMainNavbar {}

const MainNavbar: React.FC<IMainNavbar> = ({}) => {
  return (
    <nav className="flex flex-row justify-between">
      <section>
        <Link href="/">
          <a>
            <div className="flex flex-row items-center">
              <Image
                src="/images/company/logo.png"
                alt="Just Drink Tea Logo"
                height="98"
                width="165"
              />
              <span className={styles.logotext}>Just Drink Tea</span>
            </div>
          </a>
        </Link>
      </section>
      <section className="flex flex-row">
        <div>Menu</div>
        <div>User Section</div>
      </section>
    </nav>
  );
};

export default MainNavbar;
