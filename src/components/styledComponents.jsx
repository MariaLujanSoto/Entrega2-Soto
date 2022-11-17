import styled from "styled-components";

//NavBar
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;


const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;



const MenuItem = styled.div`
    font-size: 15px;
    margin-left: 25px;
`;


//ItemCount
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
   
    justify-content: center;
    height:50px;
    margin-bottom:30px;
`;

const ProductAmount = styled.div`
    font-size: 20px;
    margin: 5px;
    color:red;
`;


//ItemList
const ProductsContainer = styled.div`
    padding: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color:black;
    
`;

//Item
const Info = styled.div`
    border-radius:50px;
    position: absolute;
    z-index: 3;
    display:flex;
    

    
    
    
   
   
   
`;

const ProductContainer = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 350px;
    height: 350px;
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 50px;
    flex-direction: column
    
`;

const Circle = styled.div`
    width: 100px;
    height: 200px;
    border-radius: 100%;
    
`;

const Image = styled.img`
    height: 75%;
    z-index: 2;
`;

const Icon = styled.div`


    border-radius: 50px;
    font-size: 12px;
    width: 100px;
    height: 40px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
        transform: scale(1.1);
       
    }
`;


//ItemDetail
const DetailContainer = styled.div`
    background-color:white;
`;

const WrapperDetail = styled.div`
    padding:50px;
    
    display: flex;
    color: black;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center

    
`;

const ImgContainer = styled.div`
    flex: 1;

`;

const ImageDetail = styled.img`
    width: 100%;
    height: 40vh;
    
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 300px;
    
`;

const Title = styled.h1`
    font-weight: 1000;
    
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price  = styled.span`
    font-weight: 100;
    font-size: 40px;
    
`;

const Footer = styled.div`
    align-items:center;
`;

export { 
    Wrapper, MenuItem, Center,
    ProductAmountContainer, ProductAmount, 
    ProductsContainer, ProductContainer,
    Circle, Image, Info, Icon,
    DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Title, Desc, Price, Footer
}