import React, {useState,useRef, useEffect} from 'react';
import logo from '../logo.svg';
import {FaBars} from 'react-icons/fa'
import {links, socialLinks} from '../data'
 


export default function Navbar() {
    const [showLinks, setShowLinks] = useState(false)    
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if(showLinks){
            linksContainerRef.current.style.height=`${linksHeight}px`;
        }else{
            linksContainerRef.current.style.height = '0px'
        }


    }, [showLinks])

    return (
        <nav>
                  <div className="nav-center">
                            <div className="nav-header">
                                        <img className="logo" src={logo} alt="Umesh Raghav" /> 
                                        <button className='nav-toggle' onClick={()=>setShowLinks(!showLinks)}><FaBars/></button>
                            </div>

                            <div className="links-container" ref={linksContainerRef}>
                                    <ul className="links" ref={linksRef}>
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
