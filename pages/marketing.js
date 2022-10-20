import Link from 'next/link'
import styles from '../styles/Home.module.css'

export async function getStaticProps() {
  return {
    props: {
      message: "This is a static page — and a prop",
    },
  };
}

export default function Marketing({message}) {
  return (
    <div>
      <h1>Marketing Page</h1>
      <p id="message">{message}</p>
      <Link href="/"><a>Home</a></Link>
    </div>
  )
}