import Counter from "./Components/Counter"
import Link from "next/link"
import Header from './Components/Header'
import LogIn from "./Components/LogIn"
import Logo from './Components/Logo'
import styles from "./page.module.css"


export default function Home() {
  return (
    <>
      <body className="bg-white">
        <Header></Header>
        <Logo></Logo>

        <main className={styles.main}>
          
          <LogIn></LogIn>
        
        </main>

      </body>

    </>
  )
}
