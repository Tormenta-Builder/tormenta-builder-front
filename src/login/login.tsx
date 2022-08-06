import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
  
  const navigate = useNavigate()

    const handleSheet = () => {
        navigate('/sheet')
    }

    return (
    <div>
        <p>Login 5</p>
        <button onClick={handleSheet}> Ir para a ficha </button>
    </div>
  );
}

export default Login