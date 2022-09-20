import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
    const [portfolio, setPortfolio] = useState(25000);


    return (
        <AppContext.Provider value={{ portfolio, setPortfolio }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}