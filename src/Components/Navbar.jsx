import { Link} from 'react-router-dom'
import {  useGlobalContext } from './utils/global.context'
import "../Styles/navbar.css"


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {stateTheme, dispatchTheme} =  useGlobalContext()

  const changeTheme = ()=>{
    if (stateTheme.t) {
      dispatchTheme({type: 'SWITCH_DARK'}) 
    } else {dispatchTheme({type: 'SWITCH_LIGHT'})} 
  }


  return (
  <div className="navbar">
      <div className='odonto'>
          <h4>Clínica DH</h4>
          <img className='esteto' src='/images/ico-esteto.png' alt='imagen de estetoscopio'></img>
      </div>
      <nav> 
      
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        <Link  to="/"><p className='nav-h3' >Home</p></Link>
        <Link  to="/contact"><p className='nav-h3'>Contact</p></Link>
        <Link  to="/favs"><p className='nav-h3'>Favs</p></Link>

        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button className="theme-btn"  onClick={changeTheme } >{stateTheme.t? '🌙' : '☀️'} </button>
      </nav>
    </div>
  )
}


export default Navbar