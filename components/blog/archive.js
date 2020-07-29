import { useState } from "react";

import Footer from "../template/footer";
import PreviewSimpleList from "../blog/preview-simple-list";
import Search from "./search";
import CategoryButton from "./category-button";

import fuzzyMatch from "../../lib/fuzzy-match";

const ALL = "All";

const Archive = ({ sortedPostsData }) => {
  const [activeCategory, setActiveCategory] = useState(ALL);
  const [searchInput, setSearchInput] = useState("");

  // All unique categories sorted by first appearence in sorted posts
  const categories = sortedPostsData.reduce((acc, post) => {
    const newCats = post.categories.filter((cat) => !acc.includes(cat));
    return [...acc, ...newCats];
  }, []);

  const filteredByCategory = sortedPostsData.filter(
    (post) => activeCategory === ALL || post.categories.includes(activeCategory)
  );

  // Only fuzzy search if user has actually typed something
  const filteredPosts =
    searchInput === ""
      ? filteredByCategory
      : filteredByCategory
          .map((post) => {
            const fuzzyData = fuzzyMatch(searchInput, post.title);
            return { ...post, fuzzyData };
          })
          .filter((post) => post.fuzzyData[0]) // If matched fuzzy search
          .sort((a, b) => b.fuzzyData[1] - a.fuzzyData[1]); // fuzzyData[1] is score

  const handleSearchChange = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };

  const handleCategoryClick = (label) => {
    setActiveCategory((prevActive) => (prevActive === label ? ALL : label));
  };

  const getButtons = () => {
    return [ALL, ...categories].map((key) => (
      <CategoryButton
        label={key}
        key={key}
        active={key === activeCategory}
        handleClick={handleCategoryClick}
      />
    ));
  };

  return (
    <section id="sidebar" className="archive">
      <div>
        <h3>Archive</h3>
        <Search value={searchInput} handleChange={handleSearchChange} />
        <div className="skill-button-container">{getButtons()}</div>
        <section className="blurb">
          <PreviewSimpleList posts={filteredPosts} />
        </section>
      </div>
      <Footer />
    </section>
  );
};

export default Archive;
