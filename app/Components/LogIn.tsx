import React from 'react'
import styles from './buttons.module.css'

function LogIn() {
    return (
        <>
        <div className="px-[150px]">
            <form>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                <div className="relative mb-6">
                    <input type="text" id="website-admin" className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e-mail">
                    </input>
                </div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                <div className="flex">
                    <input type="password" id="website-admin" className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password">
                    </input>
                </div>

                <div className="flex pt-4">
                    <div className="pl-[380px]">
                        <button type="button" className="text-white bg-gray-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign In</button>

                        <button type="button" className="text-white bg-gray-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>

                        <p className="text-blue-600 text-center pt-2 text-sm underline">Password forgot?</p>
                        <p className="text-blue-600 text-center pt-2 text-sm underline">Sign In options</p>
                    </div>


                </div>
            </form>
            </div>
        </>
    )
}



export default LogIn