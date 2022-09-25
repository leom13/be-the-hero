import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";

import api from "../../services/api";
import './styles.css';

//import loggiImg from '../../assets/logo.png';
import logoImg from '../../assets/logo.png';
import {FiLogIn} from 'react-icons/fi';
export default function Logon(){
    const [id,setId] = useState('');
    const navigate = useNavigate();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('sessions',{id});

            localStorage.setItem('ongId',id);
            localStorage.setItem('ongName',response.data.name);

            navigate('/profile');

        }catch(err){
            alert('Falha no login, tente novamente.');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img className="logo" src={logoImg} alt="Loggii"/>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID" 
                           value={id} 
                           onChange={e => setId(e.target.value)}/>
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register">
                       <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
        </div>
    );
}