export interface iCartProps {
    children: React.ReactNode;
}

export interface iProduct {
    id: number;
    name: string;
    category: string;
    price: number;
    img: string;
    priceTotal?: number;
    reactKey?: number;
    counter?: number;
}

export interface iInfo {
    name: string;
    many: number;
}

export interface iCartContext {
    currentList: iProduct[];
    filterWithThisName: (nameToSearch: string) => void;
    stopSearch: () => void;
    currentInfoSearch: iInfo[];
    itemDoesNotExist: boolean;
    carList: iProduct[];
    removeCar: (identifier: number) => void;
    removeAllThisProductCar: (identifier: number) => void;
    removeAllCar: () => void;
    addCar: (identifier: number) => void;
    isSearchFinish: boolean;
}