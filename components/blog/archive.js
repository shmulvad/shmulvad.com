import { useState } from "react";

import Footer from "../template/footer";
import PreviewSimpleList from "../blog/preview-simple-list";
import Search from "./search";
import CategoryButton from "./category-button";

import Fuse from "fuse.js";

const ALL = "All";

const Archive = ({ sortedPostsData }) => {
  const [activeCategory, setActiveCategory] = useState(ALL);
  const [searchInput, setSearchInput] = useState("");

  // All unique categories sorted by first appearence in sorted posts
  const categories = sortedPostsData.reduce((acc, post) => {
    const newCats = post.categories.filter((cat) => !acc.includes(cat));
    return [...acc, ...newCats];
  }, []);

  const filterByFuzzyMatch = (categoryFilteredPosts) => {
    const fuse = new Fuse(categoryFilteredPosts, {
      keys: ["title"],
      includeMatches: true,
      minMatchCharLength: Math.min(2, searchInput.length)
    });
    return fuse.search(searchInput).map((match) => match.item);
  };

  const filteredByCategory = sortedPostsData.filter(
    (post) => activeCategory === ALL || post.categories.includes(activeCategory)
  );

  // Only fuzzy search if user has actually typed something
  const filteredPosts =
    searchInput === ""
      ? filteredByCategory
      : filterByFuzzyMatch(filteredByCategory);

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
