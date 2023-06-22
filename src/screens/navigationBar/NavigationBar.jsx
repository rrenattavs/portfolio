import "./NavigationBar.css"
import "../../App.css"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavigationLinks } from '../../helpers/NavigationLinks'


const NavigationBar = () => {
    
    const createLink=()=>{
        return NavigationLinks.map((e, idx) => (
            <Nav.Link key={idx} href ={e.ref}>{e.name}</Nav.Link>
        ))
    }

  return (
    <div id="home">
        <Navbar className="navigation__container" expand="md">
            <Navbar.Brand style={{marginLeft: '1rem'}} className = "navbar-brand" href="#home">RVIEIRAS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse style = {{justifyContent: 'flex-end', marginRight: '1rem', borderColor: 'none'}}>
                <Nav className='links' style = {{margin: '0 1rem'}}>
                {createLink()}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
  )

}

export default NavigationBar