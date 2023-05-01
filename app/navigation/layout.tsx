import React from 'react'
import styles from './navigation.module.css'

export default function NavigationLayout({children,}: {children: React.ReactNode}) {
    return (
        <>
            <nav>Navigation navbar</nav>
            <main className={styles.main}>{children}</main>
        </>
  )
}
