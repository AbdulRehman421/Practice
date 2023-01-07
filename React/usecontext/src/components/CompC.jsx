import React, { useContext } from 'react'
import { Theme } from '../App'
const CompC = () => {
    let { dark } = useContext(Theme)
    let { setDark } = useContext(Theme)
    console.log(dark);
    return (
        <>
            <div>CompC</div>
            <h1 onClick={() => setDark(prev => !prev)}>
                {dark ? <span>Dark</span> : <span>False</span>}
            </h1>
        </>
    )
}

export default CompC