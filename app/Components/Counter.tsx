'use client'
import { useState } from "react";
import React from 'react'

export function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prev => prev + 1)
    }

    const decrement = () => {
        setCount(prev => prev - 1)
    }

    const reset = () => {
        setCount(prev => prev = 0)
    }

    return (
        <>
            <div>
                <h2>Click here</h2>
                <br/>
                <h3>{count}</h3>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
                <button onClick={reset}>reset</button>
            </div>
        </>
    )
}

export default Counter