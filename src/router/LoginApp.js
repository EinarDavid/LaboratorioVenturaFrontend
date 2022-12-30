import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginApp = () => {
    const navigate = useNavigate();

    const onLogin = () => {
        navigate('/*');
    }

    return (
        <>
            <div>
                <h1>LoginApp</h1>
                <button
                onClick={onLogin}
                >Login
                </button>
            </div>
        </>
    )
}

