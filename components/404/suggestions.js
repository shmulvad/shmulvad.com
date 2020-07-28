import Link from "next/link";

const Suggestions = ({ items, term }) => {
  if (items.length === 0) return null;

  return (
    <>
      <p>
        The following {term}{items.length > 1 && "s"}{' '}
        might satisfy your request:
      </p>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.path}>
              <Link href={item.path}>
                <a>{item.label}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Suggestions;
