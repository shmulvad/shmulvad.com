import Link from "next/link";

import Layout from "../components/layout";
import { email, countryCode, phone } from "../data/contact";

import SocialIcons from '../components/general/social-icons';

const Contact = () => (
  <Layout title="Contact">
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </h2>
        </div>
      </header>
      <div className="email-at">
        <p>
          Feel free to get in touch. You can email me at{" "}
          <a href={`mailto:${email}`}>{email}</a> or call me at{" "}
          <a href={`tel:${countryCode}${phone}`}>
            ({countryCode}) {phone.substring(0, 4)} {phone.substring(4)}
          </a>
          .
        </p>
      </div>
      <SocialIcons />
    </article>
  </Layout>
);

export default Contact;
