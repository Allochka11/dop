import React from "react";

type ButtonType = {
    nickName:string
    callback:()=>void
}

export const Button = (props: ButtonType) => {
    const onClickButtonHandler = () => {
        props.callback();

    }

    return(
        <button onClick={onClickButtonHandler}>
            {props.nickName}
        </button>
    );
};