import { DescriptionOutlined, InfoOutlined, LocalOfferOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { ProductContainer, Circle, Image, Info, Icon} from './styledComponents';

const Item = ({ id, stock, price, pictureUrl, sales }) => {
    return (
        <ProductContainer>
            <Circle />
           
            <Info>
            
               
                <Icon>
                    <LocalOfferOutlined /><strong>$ {price}</strong>
                </Icon>
                <Icon>
                    <DescriptionOutlined />{stock} unid.
                </Icon>
                <Icon>
                    <Link to={`/item/${id}`} ><InfoOutlined />Details</Link>
                </Icon>
                 
                
            </Info>

            <Image src={pictureUrl} />
        </ProductContainer>
    );
}

export default Item;