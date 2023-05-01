import Image from "next/image";
import React from 'react'

export default function Logo() {
  return (
    <>
    <section>
        <Image 
            className="dark:border-slate-500 drop-shadow-xl shadow-black mx-auto mt-8 pt-8"
            src="/images/Group.png"
            width={200}
            height={200}
            alt="App name"
            priority= {true}
        />
    </section>
    </>
  )
}
