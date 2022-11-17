import ItemCount from './ItemCount';
import { DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Title, Desc, Price } from './styledComponents';

const ItemDetail = ({ item }) => {

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    return (
        <>
        {
            item && item.image
            ? 
            <DetailContainer>
                <WrapperDetail>
                    
                    <InfoContainer>
                        <Title>{item.name}</Title>
                        <Desc>{item.description}</Desc>
                        <Price>${item.cost}</Price>
                        <Desc>{item.stock} unidades en stock</Desc>
                    </InfoContainer>
                    
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                    <ImgContainer>
                        <ImageDetail src={item.image[0]} />
                    </ImgContainer>
                </WrapperDetail>
            </DetailContainer>
            : <p>Aguarde...</p>
        }
        </>
    );
}

export default ItemDetail;