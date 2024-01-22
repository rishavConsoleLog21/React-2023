import React from "react";
import Link from "next/link";

const BlogPage = () => {
  return (
    <main>
      <h1>BlogPage</h1>
      <p>
        <Link href="/blog/first-post">first-post</Link>
      </p>
      <p>
        <Link href="/blog/second-post">second-post</Link>
      </p>
    </main>
  );
};

export default BlogPage;
