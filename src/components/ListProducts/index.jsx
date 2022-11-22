import CardAll from "../CardAll";
import { ListProductsStyles } from "./styles";

function ListProducts({ ArrayProducts , fun }) {
    return (
        <ListProductsStyles>
            {ArrayProducts.map(({ name , id , category , price , img , reactKey }) => 
                <CardAll key={reactKey} name={name} category={category} price={price} img={img} id={id} action={fun}/>
            )}
        </ListProductsStyles>
    )
};

export default ListProducts;