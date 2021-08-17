import { useState } from "react";

function useToggler() {
    //create the state
    const [isToggledOn, setIsToggledOn] = useState(false)

    //create a method for easily flipping the isToggleOn value

    function toggle() {
        setIsToggledOn(prev => !prev)
    }

    // Return something useful for whatever component will be using this hook

    return { isToggledOn, toggle }
}

export default useToggler