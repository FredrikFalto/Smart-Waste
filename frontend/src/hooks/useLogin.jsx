import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

const url = 'http://localhost:4000'

export const useLogin = () => {
    // const navigate = useNavigate()
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch(url + '/api/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        })
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            // Save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            // Update the auth context
            dispatch({ type: 'LOGIN', payload: json })

            setIsLoading(false)

            window.location.replace(`/listings`)
        }
    }

    return { login, isLoading, error }
}