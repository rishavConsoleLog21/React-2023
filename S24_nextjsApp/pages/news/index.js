import React, { Fragment } from "react";
import Link from "next/link";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li><Link href='/news/detailPage'>News Deatail Page</Link></li>
        <li>News Item 2</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
