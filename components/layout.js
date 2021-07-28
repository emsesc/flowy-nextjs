import Head from 'next/head'
import Navbar from './nav.js'
import Steps from './steps.js'
import Props from './props.js'
import styles from "./layout.module.css"

export const siteTitle = 'CounselorBot - Build a course'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap" rel="stylesheet"></link>
        <meta
          name="description"
          content="Create your own course"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
      </Head>

      <Navbar title="Ganning is poop" repoName="ganning157/poop"></Navbar>
      <Steps></Steps>
    </div>
  )
}
