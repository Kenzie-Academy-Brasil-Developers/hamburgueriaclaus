import { useContext, useState } from 'react';
import { CartContext } from '../../../contexts/CartContext';
import { BtnDefaultMainColor } from '../../BtnDefaultMainColor';
import { ContainerInputStyle } from './styles';

export function InputSearch() {
  const [valueInput, setValueInput] = useState('');
  const { filterWithThisName } = useContext(CartContext);
  return (
    <ContainerInputStyle>
      <input
        placeholder='Digite para pesquisar'
        onChange={(event) => setValueInput(event.target.value)}
      />
      <BtnDefaultMainColor
        classList='btnMed'
        action={() => filterWithThisName(valueInput)}
        dataAction={valueInput}
      >
        Pesquisar
      </BtnDefaultMainColor>
    </ContainerInputStyle>
  );
}
