import CardAll from "../CardAll";
import { ListProductsStyles } from "./styles";

function ListProducts({ ArrayProducts , fun }) {
    return (
        <ListProductsStyles>
            {ArrayProducts.map(({ name , id , category , price , img }) => 
                <CardAll key={id} name={name} category={category} price={price} img={img} id={id}/>
            )}
        </ListProductsStyles>
    )
};

export default ListProducts;