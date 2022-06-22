
import React, {useState, useEffect, useCallback} from 'react';

const ListData = React.createContext({
    loadedCities: [null],
    setLoadedCities: () => {},
    loading: undefined,
    setLoadingCities: () => {},
    logData: undefined,
    setLogData: () => {}
});

export const ListDataProvider = (props) => {
    const [loadedCities, setLoadedCities] = useState([]);
    const [loading, setLoadingCities] = useState(true);
    const [logData, setLogData] = useState([]);
    
    const getUrl = 'server/all';

    const fetchData = useCallback(function fetchData() {
        fetch(getUrl)
        .then(res => res.json())
        .then(parsedData => {
            logData.push({text:`Data retrieved from: ${getUrl}`, time: `${new Date().toLocaleString()}.`})
            setLoadedCities(parsedData);
            // Important: tells the log that the job was done, and trigger the useeffect
            setLoadingCities(false);
            console.log('this is parsed data',parsedData)
        })
        .catch(err => err)
    },[logData, loading])

    useEffect( () => {
        const identifier = setTimeout( () => {
            fetchData()
        return () => {
            clearTimeout(identifier);
        };
      })
    },[loading, fetchData])

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
