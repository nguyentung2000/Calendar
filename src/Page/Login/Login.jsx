import React, { useContext } from 'react';
import GlobalContext from '../../components/context/GlobalContext';
import { useNavigate } from 'react-router';
import './login.css'
const Login = () => {
    const { login, setLogin } = useContext(GlobalContext)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        setLogin(true)
        navigate('/')

    }
    return (
        <form className="form-login" onSubmit={handleSubmit}>
            <label htmlFor="name">Email:
                <input type="text" placeholder='Nhap ten dang nhap' name='name' id='name' />
            </label>
            <label htmlFor='password'>Password:
                <input type="password" placeholder='Nhap password' name='password' id='password' />
            </label>
            <button type='submit'>Submit</button>
        </form>
    );
}

export default Login;
