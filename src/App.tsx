import React from 'react';

import { Employees } from "./pages/Employees";
import { DataContextProvider } from "./context/data-context";
import { TimesheetsModal } from "./components/Timesheets";

export const App = () => {
    return (
        <DataContextProvider>
            <Employees />
            <TimesheetsModal />
        </DataContextProvider>
    );
};
