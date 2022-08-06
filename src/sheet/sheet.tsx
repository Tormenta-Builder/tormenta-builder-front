import React from 'react'
import { useNavigate } from 'react-router-dom'

const Sheet: React.FC = () => {
  
  const navigate = useNavigate()

  const handleBackToLogin = () => {
      navigate('/login')
  }

  const handleNavigateToHome = () => {
    navigate('/')
}
  
  return (
    <div>
        <p>Sheet</p>
        <button onClick={handleBackToLogin}> Voltar a pagina home </button>
        <button onClick={handleBackToLogin}> Voltar a tela de login </button>
    </div>
  );
}

export default Sheet