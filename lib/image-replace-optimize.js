const imgPattern = /(?<=<img src=")([^"]+)(?=")/g;

const replaceImagesWithOptimized = (contentHtml, dir = "") => {
  return contentHtml
    .split("\n")
    .map((lineHtml) => {
      try {
        const imgSrc = lineHtml.match(imgPattern);
        return imgSrc
          ? lineHtml.replace(imgPattern, require(`images/${dir}${imgSrc[0]}`))
          : lineHtml;
      } catch (err) {
        return lineHtml;
      }
    })
    .join("\n");
};

export default replaceImagesWithOptimized;
