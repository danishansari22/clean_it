import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LockClosedIcon } from '@heroicons/react/outline'
import {useNavigate} from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../firebasconfig/firebaseconfig'
import { collection, addDoc } from 'firebase/firestore'
export default function Signup() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [address, setAddress] = useState("");
    
    const navigate =useNavigate();
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                const intialreawrd = 0;
                console.log(user);
                addDoc(collection(db, "users"), {
                    username: username, email: email, phonenumber: phonenumber, password: password,
                    address: address, uid: user.uid, reward:intialreawrd,
                }).then(() => {
                    setSuccessMsg("new user is added,redirectin to loginpage")
                    setUserName("")
                    setEmail("")
                    setAddress("")
                    setPhonenumber("")
                    setErrorMsg("")
                    
                    setTimeout(() => {
                        setSuccessMsg("");
                        navigate('/');
                    }, 4000);
                })
                    .catch((error) => { setErrorMsg(error.message) })
            }).catch((error) => {
                if (error.message == 'Firebase: Error(auth/invalid-email).') {
                    setErrorMsg("please fill the email")
                }
            })
    }
    return (
        <div className='conatiner bg-gray flex flex-wrap'>
            <div className='basis-1/3' style={{ backgroundColor: 'gray', height: "600px" }}>
                <div className="min-h-full flex  items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">

                        <div className='container mx-auto bg-gray'>


                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up</h2>

                        </div>
                        <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
                            { }
                            <input type="hidden" name="remember" defaultValue="true" />
                            <div className="rounded-md shadow-sm -space-y-px ">
                                <div>
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        onChange={(e) => setEmail(e.target.value)}

                                        type="email"

                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Email address"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email-address" className=" mt-2 sr-only">
                                        Email address
                                    </label>
                                    <input
                                        onChange={(e) => setPhonenumber(e.target.value)}

                                        type="tel"

                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-2"
                                        placeholder="Phone no."
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <input

                                        onChange={(e) => setUserName(e.target.value)}
                                        type="text"

                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-2"
                                        placeholder="Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <input

                                        onChange={(e) => setAddress(e.target.value)}
                                        type="text"

                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-2"
                                        placeholder="Address"
                                    />
                                </div>
                                <div>
                                    <label className="sr-only">
                                        Email address
                                    </label>
                                    <input

                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password"

                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-2"
                                        placeholder="password"
                                    />
                                </div>

                                <div>
                                    <label className="sr-only">
                                        Password
                                    </label>

                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">


                                </div>

                                <div className="text-sm">

                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-300 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                        <LockClosedIcon className="h-5 w-5 text-yellow-500 group-hover:text-yellow-400" aria-hidden="true" />
                                    </span>
                                    Sign up
                                </button>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {successMsg && <>
                {successMsg}
            </>}
            {errorMsg && <>
                {errorMsg}
            </>}
        </div>
    )
}
