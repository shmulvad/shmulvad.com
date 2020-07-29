import Link from "next/link";

const References = () => (
  <div className="references">
    <div className="link-to" id="references" />
    <div className="title">
      <Link href="/contact">
        <a>
          <h3>References are available upon request</h3>
        </a>
      </Link>
    </div>
  </div>
);

export default References;
