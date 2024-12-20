import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Header () {
    const [verMenu, setVerMenu] = useState(window.innerWidth > 600);

    return (
        <header className="bg">
            <div className="content-header">
                <div className="nav solid-nav">
                    <a href="#">
                        <img className="logo" src="/img/logo.png" alt="imagen logo" />
                    </a>
                <div className="right">
                {verMenu && <nav className="navbar" style={{visibility: 'visible'}}>
                    <a className="link" href="#movingsquad">About</a>
                    <a className="link" href="#service">Services</a>
                    <a href="#contact">
                        <button className="contact">
                            <i className="fa-regular fa-envelope"></i>Contact Us!
                        </button>
                    </a>
            </nav>}
        </div>
        <div className="mobile-menu" onClick={()=>setVerMenu(!verMenu)}>
            <img src="/img/barras.svg" alt="icono menu responsive" />
        </div>
      </div>
    </div>
        <div className="title">
        <a href="" className="logo-title">
            <img className='img-logo' src="/img/logo.png" alt="" />
        </a>
            <h2>Need to Move?</h2>
            <a href="#contact">
                <button className="contact big">Give us a call!</button>
            </a>
            </div>
        </header>
    )
}