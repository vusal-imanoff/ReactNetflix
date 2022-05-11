import React from 'react'
import netflix_logo from '../HeaderComponent/images/netflix-logo.png'
import './Header.css'

export default function Header() {
    return (
        <div className='salam'>
            <div className="header">
            <div className='net_logo'>
                <img src={netflix_logo} alt="" />
            </div>
            <div className=''>
                <select name="" id="">
                    <option value="">English</option>
                    <option value="">Russian</option>
                </select>
                <button className='btn'> SIgn In</button>

            </div>
            </div>
         <div className='first'>
         <h1>Unlimited movies, TV shows, and more.</h1>
         <h6>Watch anywhere. Cancel anytime.</h6>
         <span>Ready to watch? Enter your email to create or restart your membership.</span>
         <form action="">
             <input type="text" />
             <button className='inputt'>Get started</button>
         </form>
     </div>
        </div>
    )
}
