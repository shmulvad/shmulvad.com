import Link from "next/link";

import SocialIcons from "../general/social-icons";

import { fullName, websiteShort } from "../../data/contact";

const Footer = () => {
  const now = new Date();
  return (
    <section id="footer">
      <SocialIcons />
      <p className="copyright">
        &copy; {fullName} | {now.getFullYear()} |{" "}
        <Link href="/">
          <a>{websiteShort}</a>
        </Link>
      </p>
    </section>
  );
};

export default Footer;
