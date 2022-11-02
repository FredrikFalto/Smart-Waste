import { useState } from 'react'

import Logo from '../../img/Logo.svg'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(email, password)
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
                        Skapa konto
                    </h2>
                </div>
                <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
                    <div className='-space-y-px rounded-md shadow-sm'>
                        <div>
                            <input
                                required
                                type='email'
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-green-600 sm:text-sm'
                                placeholder='Email'
                            />
                        </div>
                        <div>
                            <input
                                required
                                type='password'
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                autoComplete='current-password'
                                className='relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                                placeholder='Lösenord'
                            />
                        </div>
                    </div>

                    <div className='flex items-center justify-between'>
                        <div className='text-sm'>
                            <p>
                                Redan medlem?{' '}
                                <a
                                    href='/'
                                    className='font-medium text-indigo-600 hover:text-indigo-500'
                                >
                                    Logga in
                                </a>
                            </p>
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

                    <div>
                        <button
                            type='submit'
                            className='group relative flex w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white'
                        >
                            Skapa konto
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
