import './MainMenu.css';

const mainMenu = () => {
  return (
    <div className="main-menu">
      <button className='close-main-menu'>
        x
      </button>
        <a
          className="main-menu-link"
          href="#"
        >
          Collections
        </a>
        <a
          className="main-menu-link"
          href="#"
        >
          Men
        </a>
        <a
          className="main-menu-link"
          href="#"
        >
          Women
        </a>
        <a
          className="main-menu-link"
          href="#"
        >
          About
        </a>
        <a
          className="main-menu-link"
          href="#"
        >
          Contact
        </a>
    </div>
  );
}

export default mainMenu;
