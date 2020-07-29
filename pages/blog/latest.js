import { useEffect } from 'react';
import { useRouter } from "next/router";

import { getNewestId } from "../../lib/posts";


const Latest = ({ newestId }) => {
  const router = useRouter();

  useEffect(() => {
    router.push(`/blog/${newestId}`);
  }, []);

  return null;
};

export async function getStaticProps() {
  const newestId = getNewestId();
  return {
    props: {
      newestId
    },
  };
}

export default Latest;
