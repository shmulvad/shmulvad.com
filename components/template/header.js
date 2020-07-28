import Link from 'next/link'
import Hamburger from './hamburger';
import { mainRoute, majorRoutes } from '../../data/routes';

const Header = () => (
  <header id="header">
    <h1 className="index-link">
      <Link href={mainRoute.path}>
        <a>{mainRoute.label}</a>
      </Link>
    </h1>
    <nav className="links">
      <ul>
        {majorRoutes.map(l => (
          <li key={l.label}>
            <Link href={l.path}>
              <a>{l.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    <Hamburger />
  </header>
);

export default Header;
