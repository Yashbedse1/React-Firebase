import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [pageState, setPageState] = useState("Sign in");
    const auth = getAuth();
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if(user){
          setPageState('Profile');
        }else{
          setPageState('Sign in');
        }
      })
    }, [auth])
    function pathMatchRoute(route) {
        if(route === location.pathname){
            return true
        }
    }
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-40'>
      <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
        <div>
            <h1 className='h-5 cursor-pointer'
            onClick={() => navigate("/")}>Cross Works</h1>
        </div>
        <div className=''>
            <ul className='flex space-x-10'>
                <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
                ${pathMatchRoute("/") && "text-black border-b-black"}`} onClick={() => navigate("/")}>Home</li>
                <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
                ${pathMatchRoute("/offers") && "text-black border-b-black"}`} onClick={() => navigate("/offers")}>Offers</li>
                <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
                  ${(pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) && "text-black border-b-black"}`} onClick={() => navigate("/profile")}>
                  {pageState}
                </li>
            </ul>
        </div>
      </header>
    </div>
  )
}

export default Header
