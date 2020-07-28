import { majorRoutes } from "../data/routes";
import levenstheinDist from "./levensthein";

const MAX_LEVEN_DIST_ALLOWED = 3;

export const findClosePages = path => {
  return majorRoutes
    .map(route => {
      return {
        ...route,
        dist: levenstheinDist(route.path, path)
      }
    })
    .filter((route) => route.dist <= MAX_LEVEN_DIST_ALLOWED)
    .sort((a, b) => a.dist > b.dist ? 1 : -1);
}

export const findClosePosts = (path, posts) => {
  return posts
    .map(({ id, title }) => {
      return {
        path: `/blog/${id}`,
        label: title,
        dist: levenstheinDist(`/blog/${id}`, path)
      }
    })
    .filter((post) => post.dist <= MAX_LEVEN_DIST_ALLOWED)
    .sort((a, b) => a.dist > b.dist ? 1 : -1);
}
