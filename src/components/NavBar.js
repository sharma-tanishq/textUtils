import React from 'react'
import { Link } from 'react-router-dom';
import darkModeImg from '../moon.png'
import lightModeImg from '../sun.png'

export default function NavBar(props) {
    return (
        <div>

            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bgNav-${props.mode}`}>
                <div className="container-fluid" >
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <div>
                                <button onClick={props.toggleDLMode} type="button" style={{ backgroundColor: props.mode === "light" ? "rgb(248, 249, 250)" : "black", border: "none" }}><div><img className={`${props.mode}-mode-icon`} src={props.mode === "dark" ? lightModeImg : darkModeImg} alt="Happy" object-fit="fit" /></div></button>
                            </div>
                            {/* <button onClick={props.toggleDLMode} type="button" className={`btnNav-${props.mode}`} id="modeBtn">{`${props.mode==="light"?"Enable Dark Mode":"Enable Light Mode"}`}</button> */}
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
