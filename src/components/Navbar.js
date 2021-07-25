import React from 'react';
import logo from '../logo.svg';
import {FaBars} from 'react-icons/fa'
import {links, socialLinks} from '../data'
 


export default function Navbar() {
    return (
        <nav>
                  <div className="nav-center">
                            <div className="nav-header">
                                        <img className="logo" src={logo} alt="Umesh Raghav" /> 
                                        <button className='nav-toggle'><FaBars/></button>
                            </div>

                            <div className="links-container show-conatiner">
                                    <ul className="links">
                                        {links.map((link)=>{
                                            return <li key={link.id}> 
                                            
                                                    <a href={link.url}> {link.text} </a>
                                              </li>
                                        })}
                                    </ul>
                            </div>
                            <ul className="social-icons">
                                {socialLinks.map((sl)=>{
                                        return <li key={sl.id}>

                                                <a href={sl.url}> {sl.icon} <span className="social-text">{sl.text}</span> </a>
                                        </li>
                                })}
                            </ul>
                      
                      </div>  
        </nav>
    )
}
