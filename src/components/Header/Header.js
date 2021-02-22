import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {examp} from "../../actions/actions";

function Header() {
    const hui = useSelector(state => state.post);
    const dispatch = useDispatch();

    return (

        <div>
            {hui.map((item, i) => {
                return (
                    <p key={i} onClick={() => dispatch(examp())}>{item.hui}</p>
                )
            })}
        </div>

    );
}

export default Header;