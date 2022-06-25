import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import App from '../App'
import { LockClosedIcon } from '@heroicons/react/solid'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
export default function LandingPage() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const auth=getAuth();
    const navigate=useNavigate()
    const handleLogin =(e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            setSuccessMsg("loged in successfully")
            setEmail("")
            setPassword("")
            setErrorMsg("")
            setTimeout(()=>{
                setSuccessMsg("")
                navigate("/UserDash")
            },3000);
        })
        .catch((error)=>{
            const errorCode=error.code;
            console.log(error.message)
            if(error.message == 'Firebase: Error(auth/invalid-email).'){
                setErrorMsg('Please fill all required fields')

            }
            if(error.message == 'Firebase: Error(auth/user-not-found).'){
                setErrorMsg('Please fill all required fields')

            }
            if(error.message == 'Firebase: Error(auth/wrong-password).'){
                setErrorMsg('Please fill all required fields')

            }
        })
    }
    return (
        <div className='conatiner bg-gray flex flex-wrap'>
            <div className='basis-1/3' style={{ backgroundColor: 'gray', height: '100%' }}>
           
                <div className="min-h-full flex  items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                        <div className='container mx-auto bg-gray'>

                            <div className="flex felx-row">
                                <button type='button' className='p-2 rounded-2xl ml-4 h-12 bg-yellow-400 hover:bg-yellow-500'><Link to="/">Login as customer</Link></button>


                                <button type='button' className='p-2 rounded-2xl ml-9 h-12 bg-yellow-200 hover:bg-yellow-500'><Link to="/managerSignin">Login as Manager</Link></button>
                            </div>
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in as customer</h2>
                            <p className="mt-2 text-center text-sm text-gray-600">
                                Or{' '}
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                   <Link to="/signup">Signup</Link> 
                                </a>
                            </p>
                        </div>
                        <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleLogin}>
                            <input type="hidden" name="remember" defaultValue="true" />
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        onChange={(e)=>setEmail(e.target.value)}
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Email address"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="password" className="sr-only">
                                        Password
                                    </label>
                                    <input
                                        
                                        onChange={(e)=>setPassword(e.target.value)}
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Password"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                        <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                    </span>
                                    Sign in
                                </button>

                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
            {successMsg&&<>
                            {successMsg}
                            </>}
                            {errorMsg&&<>{errorMsg}</>}
        </div>
    )
}
