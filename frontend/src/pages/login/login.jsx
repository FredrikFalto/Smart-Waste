import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'

import Logo from '../../img/Logo.svg'

const LogIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isLoading } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }

    return (
        <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
            <div className='w-full max-w-md space-y-8'>
                <div>
                    <img
                        className='mx-auto'
                        src={Logo}
                        alt='Smart Waste logo'
                    />
                    <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
                        Logga in
                    </h2>
                </div>
                <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
                    <div className='-5space-y-px rounded-md shadow-sm'>
                        <div>
                            <input
                                type='email'
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                required
                                autoComplete='username'
                                className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-green-600 sm:text-sm'
                                placeholder='Email'
                            />
                        </div>
                        <div>
                            <input
                                type='password'
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                required
                                autoComplete='current-password'
                                className='relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                                placeholder='Lösenord'
                            />
                        </div>
                    </div>

                    <div className='flex items-center justify-between'>
                        <div className='text-sm'>
                            <a
                                href='/signup'
                                className='font-medium text-indigo-600 hover:text-indigo-500'
                            >
                                Skapa konto
                            </a>
                        </div>

                        <div className='text-sm'>
                            <a
                                href='/'
                                className='font-medium text-indigo-600 hover:text-indigo-500'
                            >
                                Glömt lösenord?
                            </a>
                        </div>
                    </div>
                    <button
                        disabled={isLoading}
                        type='submit'
                        className='group relative flex w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white'
                    >
                        Logga in
                    </button>

                    {error && (
                        <div className='error text-center text-red-600 text-lg'>
                            {error}
                        </div>
                    )}
                </form>
            </div>
        </div>
    )
}

export default LogIn
