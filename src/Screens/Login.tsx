import React from 'react'
import BAInput from '../Componets/BAInput'
import BAButton from '../Componets/BAButton'
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import { fbLogin } from '../Config/Firebasemethod';


const Login = () => {

    const [model, setmodel] = useState<any>({})
    
    const navigate = useNavigate()
  
    const loginUser = () => {
        console.log(model);
        fbLogin(model).then((
            res => {navigate("/dashboard")}
        )).catch((err)=>{
            console.log(err)
        })
    }
      
  
  
    return (
    <div className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 h-screen flex justify-center items-center">
      <div className="w-[500px] bg-[rgba(255,255,255,.2)] p-10 rounded-lg">
        <div className='py-5'>
            <h1 className='text-3xl font-medium'>Login</h1>
        </div>
        <div className='py-5'>
            <BAInput 
            onChange={(e:any) => setmodel({...model, email:e.target.value})}
            label='Email'/>
        </div>
        <div className='py-5'>
            <BAInput 
            onChange={(e:any) => setmodel({...model, password:e.target.value})}
            label='Password' type='Password'/>
        </div>
        <div>
            <BAButton 
            onClick={loginUser}
            label='Login'/>
        </div>
      </div>

    </div>
    )
}

export default Login
