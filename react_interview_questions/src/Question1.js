// Question:

// We have an API https://example.com/v1/api/login where we send in email,
// password using content-type application/json.

// This API returns { token: <JWT Token>, user_id: <integer>, role: <string>}.

// I want you to write the AUTH Provider to handle authentication of the system.
// Please fill in the TODOs.

import React, {createContext ,useContext, useState} from 'react';
import axios from 'axios';
import { useReducer } from 'react';

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {state, dispatch} = useContext(AuthContext)
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const onSubmit = async (event) => {
      //TODO
      //Call Axios
      event.preventDefault();
      try {
        const response = await axios.post("https://example.com/v1/api/login", {
            email,
            password
        }, {headers: {'Content-Type': "application/json"}})
        
        dispatch({type: 'LOGIN', payload: response.data})


      }catch (err) {
        console.error(err)
      }
    }
  
    return (
        <div className='p-10'>
            <h2 className="font-black my-10">Question 1</h2>
            <p>
                {`
                  // Question:

                  // We have an API https://example.com/v1/api/login where we send in email,
                  // password using content-type application/json.

                  // This API returns { token: <JWT Token>, user_id: <integer>, role: <string>}.

                  // I want you to write the AUTH Provider to handle authentication of the system.
                  // Please fill in the TODOs.
                `}
            </p>
            
            <h3 className="my-6 font-bold">Solution</h3>
            
            <form onSubmit={onSubmit} className='my-5'>
                <label for="email" className='font-bold'> Email: 
                    <input type="email" id='email' onChange={handleEmailChange} className='mx-2 bg-gray-100 p-2 border border-black rounded font-normal' />
                </label>
                <label for="password" className='font-bold'> Password: 
                    <input type="passwprd" id='password' onChange={handlePasswordChange} className='mx-2 bg-gray-100 p-2 border border-black rounded font-normal' />
                </label>      
                <input type='submit' value="LOGIN" className='bg-blue-600 text-sm text-gray-200 p-2 font-bold'/>
            </form>
            <div>
                <div>{state.token || "Error"}</div>
                <div>{state.user_id || "Error"}</div>
                <div>{state.role || "Error"}</div>
            </div>
        </div>

    );
  };
  
  //Provider
export const AuthContext = createContext();
const initialState = {};

const reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
      //TODO
        // return { ...state, token: action.payload.token, user_id: action.payload.user_id, role: action.payload.role};
        return { ...state, token: action.payload.token, user_id: action.payload.user_id, role: action.payload.role};
      case "LOGOUT":
        return{...state, token:"", user_id:"", role:""};
      default: return state;
    }
};
  
export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <AuthContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
        {children}
        </AuthContext.Provider>
    );
}


