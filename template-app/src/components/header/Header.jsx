import image from "../../pluginfile.png";
import "../header/header.css"



const Header = () => {
  return (
    <header className="headerTitle">
        <img style={{width:"200px"}} src={image} alt="" />
    </header>
  )
}

export default Header