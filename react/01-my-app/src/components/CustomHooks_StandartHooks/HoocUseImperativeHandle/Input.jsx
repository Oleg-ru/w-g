import React, {useImperativeHandle, useRef} from 'react';

function Input({ref}) {
    const inputRef = useRef(null);

    useImperativeHandle(ref, () => {
        return {
            focus: () => {
                inputRef.current.focus()
            },
            getValue: () => inputRef.current.value
        }
    }, [])

    return (
        <input ref={inputRef} type="text" placeholder={'Введи че-нибудь'}/>
    );
}

export default Input;