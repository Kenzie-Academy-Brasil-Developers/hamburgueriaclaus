import { InputStyle } from './styles';
import { useEffect, useState } from 'react';
import { BsEyeFill , BsEyeSlashFill } from 'react-icons/bs';
import { iInputDefaultPros } from './types';

export function InputDefault({ error , id , label , type , status , register , disabled , currInputValue }: iInputDefaultPros) {
    const defaultColorBtn = { color: 'gray' };
    const [showPasswd, setShowPasswd] = useState(false);
    const [currType, setCurrType] = useState(type);
    const [currentBtn, setCurrentBtn] = useState(<BsEyeFill style={defaultColorBtn}/>);
  
    function changeVisibilityPasswd() {
        setShowPasswd(!showPasswd);
        if (showPasswd) {
            setCurrType('text');
            setCurrentBtn(<BsEyeSlashFill style={defaultColorBtn}/>);
        } else {
            setCurrType('password');
            setCurrentBtn(<BsEyeFill style={defaultColorBtn}/>);
        }
    }

    return (
        <InputStyle htmlFor={id} currColor={status} currValue={currInputValue} disabled={disabled}>
            <fieldset>
                <label>{label}</label>
                <div>
                    <input disabled={disabled} id={id}
                        type={
                        type === 'password' ?
                        currType :
                        type
                    } {...register}/>
                    {
                        type === 'password' ?
                        <button type='button' onClick={changeVisibilityPasswd}>
                            {currentBtn}
                        </button> :
                        <></>
                    }
                </div>
            </fieldset>
            <small>{error}&nbsp;</small>
        </InputStyle>
    )
}