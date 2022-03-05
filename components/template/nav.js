import Link from "next/link";
import { useRouter } from "next/router";

import Image from "../general/image";
import Footer from "./footer";

import { email, fullName, firstName } from "../../data/contact";

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link href="/">
        <a className="logo">
          <Image src="me_icon.jpeg" alt={fullName} />
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
        Hi, I&apos;m {firstName}. I am a data scientist at Singapore Pools and Master of Computing from National University of Singapore with a specialisation in Artificial Intelligence.
      </p>
      <ul className="actions">
        <li>
          {useRouter().pathname !== "/resume" ? (
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
    <Footer />
  </section>
);

export default Nav;
