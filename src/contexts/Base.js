import { createContext, useEffect, useState } from "react";
import api from "../services/api";
import imagePlaceholder from '../assets/placeholderProduct.png';
export const BaseContext = createContext({});

export function BaseProvider({children}) {
    const [ currentList, setCurrentList ] = useState([
        {
          id: 0,
          name: 'Loading',
          category: '...',
          price: 0,
          priceTotal: 0,
          reactKey: Math.random(),
          img: imagePlaceholder
        }
      ]);
      const [completeList, setCompleteList] = useState([]); 
      const [itemDoesNotExist, setItemDoesNotExist] = useState(false);
      const [isSearchFinish, setIsSearchFinish] = useState(false);
      const [currentInfoSearch, setCurrentInfoSearch] = useState([]);
      const [carList, setCarlist] = useState([]);
    
      useEffect(() => {
        api.get('products')
          .then(response => {
            const listFormatToReact = response.data.map((el) => {
              el.reactKey = Math.random();
              el.counter = 1;
              el.priceTotal = el.price;
              return el;
            });
            setCurrentList(listFormatToReact);
            setCompleteList(listFormatToReact);
    
          })
          .catch(error => console.log(error));
      }, []);
        
        
    
      function removeCar(identifier) {
        const visibleList = [...currentList];
        const ListHandle = carList.filter(({id}) => id !== identifier);
        const productToRemove = carList.find((({id}) => id === identifier));
        if (productToRemove.counter > 1) {
          productToRemove.counter -= 1;
          productToRemove.priceTotal = productToRemove.price * productToRemove.counter;
          ListHandle.push(productToRemove);
        }
        setCarlist(ListHandle);
        setCurrentList(visibleList);
      };
    
      function addCar(identifier) {
        const visibleList = [...currentList];
        const alreadyInCarList = carList.find(({id}) => id === identifier);
        if (alreadyInCarList === undefined) {
          const currentCarProduct = completeList.find(({id}) => id === identifier);
          setCarlist([...carList, currentCarProduct]);
        } else {
          alreadyInCarList.counter += 1;
          alreadyInCarList.priceTotal = alreadyInCarList.counter * alreadyInCarList.price;
          const cleanList = carList.filter(({id}) => id !== identifier);
          setCarlist([...cleanList, alreadyInCarList]);
        };
        setCurrentList(visibleList);
      };
    
      function removeAllCar() {
        const ListHandle = currentList.map(el => {
          el.priceTotal = el.price;
          el.counter = 1;
          return el
        });
        setCarlist([]);
        setCurrentList(ListHandle);
      };
    
      function filterWithThisName(nameToSearch) {
          setItemDoesNotExist(false);
          const listFiltered = [...completeList].filter(({name}) => name.toLowerCase().includes(nameToSearch.toLowerCase()));
          if (listFiltered.length === 0) {
            setItemDoesNotExist(true);
          } else {
            setIsSearchFinish(true);
            setCurrentList(listFiltered);
            const info = { name: nameToSearch, many: listFiltered.length };
            setCurrentInfoSearch([info]);
          };
      };
    
      function stopSearch() {
        setItemDoesNotExist(false);
        setIsSearchFinish(false);
        setCurrentList(completeList);
      };

    return (
        <BaseContext.Provider value={{
            currentList, 
            filterWithThisName,
            isSearchFinish,
            stopSearch,
            currentInfoSearch,
            itemDoesNotExist,
            carList,
            removeCar,
            removeAllCar,
            addCar
        }}>
            {children}
        </BaseContext.Provider>
    )
}