function NavBar() {
   return (
      <>
         <div className={"title-container"}>
            <div className={"title-div"}>
               <div className={"title"}>Bad Bank</div>
            </div>
         </div>

         <nav className="navbar navbar-expand-lg navbar-dark navigation-container">
            <div id="navbarNav" className="nav-fill w-100 navigation-div">
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <ul className="navbar-nav navigation-list">
                  <li className="nav-item navigation-item popup">
                     <a className="nav-link navigation-link" href="#">Home</a>
                     <span className="popup-text">The Home page is the default landing page where users can find information about the bank and important updates.</span>
                  </li>
                  <li className="nav-item navigation-item popup">
                     <a className="nav-link navigation-link" href="#/createaccount/">Create Account</a>
                     <span className="popup-text">The Create Account page allows users to create new accounts.</span>
                  </li>
                  <li className="nav-item navigation-item popup">
                     <a className="nav-link navigation-link" href="#/login/">Login</a>
                     <span className="popup-text">The Login page allows users to log in and log out of existing accounts. Only one user can be logged in at a time.</span>
                  </li>
                  <li className="nav-item navigation-item popup">
                     <a className="nav-link navigation-link" href="#/deposit/">Deposit</a>
                     <span className="popup-text">The Deposit page allows logged-in users to deposit money into existing accounts.</span>
                  </li>
                  <li className="nav-item navigation-item popup">
                     <a className="nav-link navigation-link" href="#/withdraw/">Withdraw</a>
                     <span className="popup-text">The Withdraw page allows logged-in users to withdraw money into existing accounts.</span>
                  </li>
                  <li className="nav-item navigation-item popup">
                     <a className="nav-link navigation-link" href="#/alldata/">All Data</a>
                     <span className="popup-text">The All Data page is where users can see all existing account data. This is where Bad Bank earns its name.</span>
                  </li>          
               </ul>
            </div>
         </nav>
      </>
   );
}
