import React from 'react';
import BasicExample from "./BasicExample.jsx";
import SlowRender from "./SlowRender.jsx";

function MainTransition(props) {
    return (
        <>
            <SlowRender />
            {/*<BasicExample />*/}
        </>
    );
}

export default MainTransition;