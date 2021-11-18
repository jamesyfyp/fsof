import React from "react"

export const loading = {
    loading: false
}

export const setLoading = ( x: boolean ) => { 
    x === true ? loading.loading = x : loading.loading = x
}

export const loadingContext = React.createContext({ 
    loading: loading, 
    setLoading: setLoading
});
    