import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home: React.FC = () => {
  
  const navigate = useNavigate()

    const handleNavigateToLogin = () => {
        navigate('/login')
    }

    return (
    <div>
        <p>Home</p>
        <button onClick={handleNavigateToLogin}> Ir para o Login </button>
    </div>
  );
}

export default Home