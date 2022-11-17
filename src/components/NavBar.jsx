import { AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { Wrapper, MenuItem,  Center} from './styledComponents';


const NavBar = () => {
    return (
        <AppBar position="sticky" color="secondary">
            <Wrapper >
                <Center>
                    <Link to='/'style={{textDecoration: "none", color: "white", fontsize:'500px'}} >CHERRY</Link>
                
                    <Link to='/category/1' style={{textDecoration: "none", color: "white"}}><MenuItem>Espumantes</MenuItem></Link>
                    <Link to='/category/2' style={{textDecoration: "none", color: "white"}}><MenuItem>Bebidas Blancas</MenuItem></Link>
                    <Link to='/category/3' style={{textDecoration: "none", color: "white"}}><MenuItem>Licores</MenuItem></Link>                    
                    <MenuItem><CartWidget /></MenuItem>
                </Center>
                
    
                  
                
            </Wrapper>
        </AppBar>
    );
}

export default NavBar;