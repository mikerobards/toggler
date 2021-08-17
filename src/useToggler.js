import { useState } from "react";

function useToggler(defaultOnValue = false) {
    //create the state
    const [on, setIsToggledOn] = useState(defaultOnValue)

    //create a method for easily flipping the isToggleOn value

    function toggle() {
        setIsToggledOn(prev => !prev)
    }

    // Return something useful for whatever component will be using this hook

    return { on, toggle }
}

export default useToggler