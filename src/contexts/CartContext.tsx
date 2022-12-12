import React, { createContext, useEffect, useState } from "react";
import api from "../services/api";
import imagePlaceholder from '../assets/placeholderProduct.png';

interface iCartProps {
  children: React.ReactNode;
}

interface iProduct {
    id: number;
    name: string;
    category: string;
    price: number;
    img: string;
    priceTotal?: number;
    reactKey?: number;
    counter?: number;
}

interface iInfo {
  name: string;
  many: number;
}

interface iCartContext {
    currentList: iProduct[];
    filterWithThisName: (nameToSearch: string) => void;
    stopSearch: () => void;
    currentInfoSearch: iInfo[];
    itemDoesNotExist: boolean;
    carList: iProduct[];
    removeCar: (identifier: number) => void;
    removeAllCar: () => void;
    addCar: (identifier: number) => void;
    isSearchFinish: boolean;


}



export const CartContext = createContext({} as iCartContext);


export function CartProvider({children}: iCartProps) {
    const [ currentList, setCurrentList ] = useState<iProduct[]>([
        {
          id: 0,
          name: 'Loading',
          category: '...',
          price: 0,
          counter: 1,
          priceTotal: 0,
          reactKey: Math.random(),
          img: imagePlaceholder,
        }
      ]);
      const [completeList, setCompleteList] = useState<iProduct[]>([]); 
      const [itemDoesNotExist, setItemDoesNotExist] = useState(false);
      const [isSearchFinish, setIsSearchFinish] = useState(false);
      const [currentInfoSearch, setCurrentInfoSearch] = useState<iInfo[]>([]);
      const [carList, setCarlist] = useState<iProduct[]>([]);
    
      useEffect(() => {
        api.get('/products')
          .then(response => {
            const listFormatToReact = response.data.map((el: iProduct) => {
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
        
        
    
      function removeCar(identifier: number) {
        const visibleList = [...currentList];
        const ListHandle = carList.filter(({id}) => id !== identifier);
        const productToRemove = carList.find((({id}) => id === identifier)); 
        if (productToRemove?.counter) {
          if (productToRemove.counter > 1) {
            productToRemove.counter -= 1;
            productToRemove.priceTotal = productToRemove.price * productToRemove.counter;
            ListHandle.push(productToRemove);
          }
        }
        setCarlist(ListHandle);
        setCurrentList(visibleList);
      };
    
      function addCar(identifier: number) {
        const visibleList = [...currentList];
        const alreadyInCarList = carList.find(({id}) => id === identifier);
        if (alreadyInCarList) {
          if (alreadyInCarList?.counter) {
            alreadyInCarList.counter += 1;
            alreadyInCarList.priceTotal = alreadyInCarList.counter * alreadyInCarList.price;
            const cleanList = carList.filter(({id}) => id !== identifier);
            setCarlist([...cleanList, alreadyInCarList]);
          }
        } else {
            const currentCarProduct = completeList.find(({id}) => id === identifier);
            if (currentCarProduct) {
              setCarlist([...carList, currentCarProduct]);
            }
          }
        if (visibleList) {
            setCurrentList(visibleList);
        }
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
    
      function filterWithThisName(nameToSearch: string) {
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
        <CartContext.Provider value={{
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
        </CartContext.Provider>
    )
}