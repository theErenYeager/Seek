import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search72.p.rapidapi.com';

export const ResultContextProvider = ({children}) => {

    const [results , setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('Eren Yeager');

    const getResults = async (type) => {
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}`, {
            method:'GET',
            headers:{
            'X-RapidAPI-Key': 'c715025de3msh0e050bf09341b3ep1eaac2jsna7292e00c771',
            'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
            }

        })
        const data = await response.json();

        setResults(data);
        setIsLoading(false);


    }
    return(
        <ResultContext.Provider value={{ getResults,results,searchTerm,setSearchTerm,isLoading}}>
            {children}

        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext);