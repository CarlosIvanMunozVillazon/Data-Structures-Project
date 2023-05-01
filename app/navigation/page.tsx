import React from 'react'
import Link from 'next/link'
import styles from './navigation.module.css'

export default function Navigation() {
    return (
        <>
            <main className = "text-right text-blue-700">
                <h1>Here we can search things</h1>
                <Link href="/">Go home</Link>
            </main>
        </>
    )
}
