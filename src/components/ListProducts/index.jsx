import { useContext } from "react";
import { BaseContext } from "../../contexts/Base";
import CardAll from "../CardAll";
import { ListProductsStyles } from "./styles";

function ListProducts() {
    const {
        currentList
    } = useContext(BaseContext);
    return (
        <ListProductsStyles>
            {currentList.map(({ name , id , category , price, img , reactKey }) => 
                <CardAll key={reactKey} name={name} category={category} price={price} img={img} id={id}/>
            )}
        </ListProductsStyles>
    )
};

export default ListProducts;