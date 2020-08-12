const headPattern = /(?<=<h[1-6]>)([^<]+)(?=<\/h[1-6]>)/g;

const sanitizeTitle = title => {
  return title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]/g, "");
}

const genHeadingIds = (contentHtml) => {
  return contentHtml
    .split("\n")
    .map((lineHtml) => {
      const headTitle = lineHtml.match(headPattern);
      if (!headTitle) {
        return lineHtml;
      }

      const sanitizedTitle = sanitizeTitle(headTitle[0]);
      const hLvl = /<h([1-6])>/g.exec(lineHtml)[1];
      return lineHtml.replace(/<h[1-6]>/g, `<h${hLvl} id="${sanitizedTitle}">`)
    })
    .join("\n");
};

export default genHeadingIds;
