import React from 'react'
import { Link } from 'react-router-dom'
const  Navbar = ()=>{
    return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
            <Link className="navbar-brand" to="/"><i className="fa-solid fa-newspaper mx-2"></i>अखबार<i className="fa-solid fa-newspaper mx-2"></i></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link className="nav-link mx-3" aria-current="page" to="/">Home <i className="fa-solid fa-house"></i></Link></li>
                <li className="nav-item"><Link className="nav-link mx-3" to="/business">Business <i className="fa-solid fa-business-time"></i></Link></li>
                <li className="nav-item"><Link className="nav-link mx-3" to="/entertainment">Entertainment <i className="fa-solid fa-tv"></i></Link></li>
                <li className="nav-item"><Link className="nav-link mx-3" to="/general">General <i className="fa-solid fa-newspaper "></i></Link></li>
                <li className="nav-item"><Link className="nav-link mx-3" to="/health">Health <i className="fa-solid fa-notes-medical"></i></Link></li>
                <li className="nav-item"><Link className="nav-link mx-3" to="/science">Science <i className="fa-solid fa-flask"></i></Link></li>
                <li className="nav-item"><Link className="nav-link mx-3" to="/sports">Sports <i className="fa-solid fa-medal"></i></Link></li>
                <li className="nav-item"><Link className="nav-link mx-3" to="/technology">Technology <i className="fa-solid fa-microchip"></i></Link></li>
                </ul>
        </div>
    </div>
        </nav>
    </div>
    )
  }

export default Navbar
