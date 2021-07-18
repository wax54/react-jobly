import { useState } from "react";

const useLocalStorageState = (storageName, init) => {

    function getState () {
        return localStorage[storageName] || init;
    }

    function storeState(currState) {
        localStorage[storageName] = currState;
    }

    function  updateState (newState) {
        setState(newState);
        storeState(newState)
    }

    const [state, setState] = useState(getState());
    storeState(state);
    return [state, updateState]
};

export { useLocalStorageState }
