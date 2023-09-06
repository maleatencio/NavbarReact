import './Navbar.css'
import styled from 'styled-components'


const Navbar = () => {
    return (
        <>
         <NavContainer>
            <h2>venus</h2>
            <div>
                <a href="#">New in</a>
                <a href="#">Shop all</a>
                <a href="#">Nosotros</a>
            </div>

           {/*} <input type="checkbox" id="check"/>

<label for="check"><i class="material-icons" id="btn">menu</i>
    <i class="material-icons" id="cancel">close</i></label>*/}
    
    <a href="#"><i class="material-symbols-outlined" id="shop">
        shopping_bag
    </i></a> 
         </NavContainer>
          

      
        </>
    )
}

export default Navbar;


const NavContainer = styled.nav `

 h2{

font-family: 'Barlow Condensed', sans-serif;
 text-transform: uppercase;
font-size: 45px;
  letter-spacing: 1px;
 font-weight: 100;
 }

 background-color: #FFEAEA;

 `