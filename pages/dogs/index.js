import Head from "next/head"
import Link from "next/link";
import { Component } from 'react'
import { attributes, react as HomeContent } from '../../content/posts/dogs.md';

export default class Home extends Component {
  render() {
    let { title, dogs } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <article>
          <h1>{title}</h1>
          <HomeContent />
          <ul>
            {dogs.map((dog, k) => (
              <li key={k}>
                <h2>{dog.name}</h2>
                <p>{dog.description}</p>
              </li>
            ))}
          </ul>
          <Link href="/"/>
        </article>
      </>
    )
  }
}