import { Feed } from "feed";
import { getSortedPostsDataFull } from "./posts";

import { email, fullName, websiteLong } from "../data/contact";
import { indexDescription } from "../data/descriptions";

const generateFeed = async (filetype) => {
  // See https://github.com/jpmonette/feed for options
  const feed = new Feed({
    title: fullName,
    description: `${fullName} - ${indexDescription}`,
    id: websiteLong,
    link: websiteLong,
    feed: `${websiteLong}/api/feed.${filetype}`,
    language: "en",
    image: websiteLong + require("images/shmulvad.jpg"),
    favicon: `${websiteLong}/images/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, ${fullName}`,
    generator: "Feed for Node.js",
    feedLinks: {
      xml: `${websiteLong}/api/feed.xml`,
      json: `${websiteLong}/api/feed.json`,
    },
    author: {
      name: fullName,
      email,
      link: websiteLong,
    },
  });

  feed.addCategory("Tech");

  const sortedPosts = await getSortedPostsDataFull();
  sortedPosts.forEach((post) => {
    const categories = post.categories.map((name) => {
      return { name: name };
    });
    feed.addItem({
      title: post.title,
      id: `${websiteLong}/blog/${post.id}`,
      link: `${websiteLong}/blog/${post.id}`,
      description: post.summary,
      date: new Date(post.date),
      category: categories,
      image: websiteLong + require(`images/posts/${post.heroImg}`),
      author: [
        {
          name: fullName,
          email,
          link: websiteLong,
        },
      ],
    });
  });

  return feed;
};

export default generateFeed;
