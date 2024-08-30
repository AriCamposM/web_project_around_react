import headerLogo from '../images/header__logo.png'

function Header (){
    return (
        <header className="header">
        <div className="header__container">
          <img
            src={headerLogo}
            alt="Logo"
            className="header__logo"
          />
        </div>
      </header>
    )
};

export default Header;