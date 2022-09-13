import React, { useContext, createContext, useState } from 'react'

const ResultContext = createContext();
const baseURL = 'https://google-search3.p.rapidapi.com/api/v1';
export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isloading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    // //videos //images //news
    const getResults = async (type) => {
        setIsLoading(true);
        const response = await fetch(`${baseURL}${type}`, {
            method: 'GET',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Key': 'e730fef1d4msh37b254b3c210c7ap1ab900jsn12cc1ba3d1b0',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
            }
        })
        const data = await response.json();

        setResults(data)
        setIsLoading(false);
        console.log(data);
    }
    return (
        <ResultContext.Provider value={{ getResults, searchTerm, setSearchTerm, results, isloading }}>
                   {children}
        </ResultContext.Provider> 
    );

}
export const useResultContext = () => useContext(ResultContext)
