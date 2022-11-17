import { Link } from 'react-router-dom';
import { ProductContainer, Circle, Image, Info, Icon} from './styledComponents';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import FilterListIcon from '@mui/icons-material/FilterList';
import InfoIcon from '@mui/icons-material/Info';

const Item = ({ id, stock, price, pictureUrl}) => {
    return (
        <ProductContainer>
            
            <Info>
            
                <Icon>
                    <LocalOfferIcon /><strong>$ {price}</strong>
                </Icon>
                <Icon>
                    <FilterListIcon />{stock} unid.
                </Icon>
                <Icon>
                    <Link to={`/item/${id}`} ><InfoIcon />Details</Link>
                </Icon>
                 
                
            </Info> 
            <Circle />

           <Image src={pictureUrl} />

            
        </ProductContainer>
    );
}

export default Item;