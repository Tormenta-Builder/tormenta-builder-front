import React from 'react'
import { useNavigate } from 'react-router-dom'

const WrongPath: React.FC = () => {
  
    const navigate = useNavigate()

    const handleBackToLogin = () => {
        navigate('/')
    }

    return (
    <div>
        <p>Então vc esta tentando acessar uma rota inexistente?</p>
        <button onClick={handleBackToLogin}> Voltar a home page </button>
    </div>
  );
}

export default WrongPath