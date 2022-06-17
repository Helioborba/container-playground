
import React, {useState, useEffect} from 'react';

/**
 * Holds the canvas context and the nodes of the current marches
 * 
 */
const ListData = React.createContext({
    loadedCities: [null],
    setLoadedCities: () => {},
    loading: undefined,
    setLoadingCities: () => {},
    logData: undefined,
    setLogData: () => {}
});

export const ListDataProvider = (props) => {
    const [loadedCities, setLoadedCities] = useState([null]);
    const [loading, setLoadingCities] = useState(true);
    const [logData, setLogData] = useState([]);
    
    const getUrl = 'server/all';

    function fetchData() {
        fetch(getUrl)
        .then(res => res.json())
        .then(parsedData => {
            logData.push({text:`Data retrieved from: ${getUrl}`, time: `${new Date().toLocaleString()}.`})
            setLoadedCities(parsedData);
            // Important: tells the log that the job was done, and trigger the useeffect
            setLoadingCities(false);
     
        })
        .catch(err => err)
    }

    useEffect( () => {
        const identifier = setTimeout( () => {
            fetchData()
        return () => {
            clearTimeout(identifier);
        };
      })
    },[loading])

    return(
        <ListData.Provider value={{
            loadedCities: loadedCities,
            setLoadedCities: setLoadedCities,
            loading: loading,
            setLoadingCities: setLoadingCities,
            logData: logData,
            setLogData: setLogData
        }}>
        {props.children}
        </ListData.Provider>
    )
}

export default ListData;
