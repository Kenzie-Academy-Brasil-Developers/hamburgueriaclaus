import { InputStyle } from "./styles";
import { useState } from "react";
import { BsEyeFill , BsEyeSlashFill } from 'react-icons/bs';
import { iInputDefaultPros } from "./types";

export function InputDefault({ error , id , label , type , status }: iInputDefaultPros) {
    const defaultColorBtn = { color: 'gray' };
    const [showPasswd, setShowPasswd] = useState(false);
    const [currType, setCurrType] = useState(type);
    const [currentBtn, setCurrentBtn] = useState(<BsEyeFill style={defaultColorBtn}/>);
    const [currValue, setCurrValue] = useState('');

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

    console.log(currValue)

    return (
        <InputStyle htmlFor={id} currColor={status} currValue={currValue}>
            <fieldset>
                <label>{label}</label>
                <div>
                    <input id={id} onChange={({target:{value}}) => setCurrValue(value)}
                        type={
                        type === 'password' ?
                        currType :
                        type
                    }/>
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