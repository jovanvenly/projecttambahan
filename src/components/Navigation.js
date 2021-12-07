import React from 'react';
const Navigation = () => {
    return(
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-13">
           <div className="collapse navbar-collapse" id="navbarSupportedContent ">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">ALL TYPES</a>
                        
                            <li className="dropdown-item" href="#!">All Products></li>
                            <li className="dropdown-item" href="#!">Low Price</li>
                            <li className="dropdown-item " href="#!">High Price</li>
                      
                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">PRICE</a>
            </div>
        </div>
    </nav> 
    );
}

export default Navigation;