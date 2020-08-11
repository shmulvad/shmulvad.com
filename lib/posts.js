import fs from "fs";
import path from "path";
import readingTime from "reading-time";

import matter from "gray-matter";
import remark from "remark";
import highlight from "remark-highlight.js";
import math from "remark-math";
import footnotes from "remark-footnotes";

import remark2rehype from "remark-rehype";
import katex from "rehype-katex";
import stringify from "rehype-stringify";

import replaceImagesWithOptimized from "./image-replace-optimize";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    const readStatText = readingTime(matterResult.content).text;

    // Combine the data with the id
    return {
      id,
      readStatText,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getNewestPostId() {
  return getSortedPostsData()[0].id;
}

export async function getSortedPostsDataFull() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, "");
      return await getPostData(id);
    })
  );

  // Sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  if (!fs.existsSync(fullPath)) {
    return { error: true };
  }
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  const containsMath = /\$[^\$]+\$/.test(matterResult.content);
  const readStatText = readingTime(matterResult.content).text;

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(highlight)
    .use(math)
    .use(footnotes, { inlineNotes: true })
    .use(remark2rehype)
    .use(katex)
    .use(stringify)
    .process(matterResult.content);
  const contentHtml = replaceImagesWithOptimized(
    processedContent.toString(),
    "posts/"
  );

  // Combine the data with the id
  return {
    error: false,
    id,
    containsMath,
    readStatText,
    contentHtml,
    ...matterResult.data,
  };
}

// Returns an array that looks like this:
// [
//   {
//     params: {
//       id: 'ssg-ssr'
//     }
//   },
//   {
//     params: {
//       id: 'pre-rendering'
//     }
//   }
// ]
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}
