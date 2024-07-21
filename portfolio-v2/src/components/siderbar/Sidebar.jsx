import "./Sidebar.scss"
import ToggleButton from "./togglebutton/ToggleButton"
import Links from "./links/Links"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="bg">
        <Links />
      </div>
      <ToggleButton />
    </div>
  )
}

export default Sidebar
