import { useEffect } from "react";
import { useRouter } from "next/router";

import { getNewestPostId } from "../../lib/posts";

const Latest = ({ newestPostId }) => {
  const router = useRouter();

  useEffect(() => {
    router.push(`/blog/${newestPostId}`);
  }, []);

  return null;
};

export async function getStaticProps() {
  const newestPostId = getNewestPostId();
  return {
    props: {
      newestPostId,
    },
  };
}

export default Latest;
