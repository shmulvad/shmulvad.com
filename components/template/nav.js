import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  socialIcons,
  email,
  fullName,
  firstName,
  websiteShort,
} from "../../data/contact";

const Nav = () => {
  const router = useRouter();
  const now = new Date();

  return (
    <section id="sidebar">
      <section id="intro">
        <Link href="/">
          <a className="logo">
            <img src={"/images/me_icon.jpg"} alt="" />
          </a>
        </Link>
        <header>
          <h2>{fullName}</h2>
          <p>
            <a href={`mailto:${email}`}>{email}</a>
          </p>
        </header>
      </section>

      <section className="blurb">
        <h2>About</h2>
        <p>
          Hi, I&apos;m {firstName}. I am a graduate Computer Science student at
          National University of Singapore specializing in Artificial
          Intelligence and former student and TA at University of Copenhagen.
        </p>
        <ul className="actions">
          <li>
            {router.pathname !== "/resume" ? (
              <Link href="/resume">
                <a className="button">Learn More</a>
              </Link>
            ) : (
              <Link href="/about">
                <a className="button">About Me</a>
              </Link>
            )}
          </li>
        </ul>
      </section>

      <section id="footer">
        <ul className="icons">
          {socialIcons.map((s) => (
            <li key={s.label}>
              <a href={s.link}>
                <FontAwesomeIcon icon={s.icon} height="1em" alt={s.label} />
              </a>
            </li>
          ))}
        </ul>
        <p className="copyright">
          &copy; {fullName} | {now.getFullYear()} |{" "}
          <Link href="/">
            <a>{websiteShort}</a>
          </Link>
          .
        </p>
      </section>
    </section>
  );
};

export default Nav;
