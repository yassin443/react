import logo from "../assets/images.png"
import search from "../assets/isearch.png"
import voice from "../assets/voice.jpeg"
import plus from "../assets/plus.png"
import notify from "../assets/notification.png"

const Header = () => {
  return (
    <header className="header">

      <img src={logo} alt="YouTube" className="youtube" />
   
<div className="Bar">

      <div className="barsearch">
        <input type="text" className="inp" placeholder="Rechercher" />
        <img src={search} alt="search" className="search" />
      </div>

      <img src={voice} alt="voice" className="voice" />

</div>

      <ul className="nav-links">
        <li>
          <button className="create">
            <img src={plus} alt="plus" className="plus" />
            Créer
          </button>
        </li>
        <li> <img src={notify} alt="plus" className="notify" /></li>
      </ul>

    </header>
  )
}

export default Header
