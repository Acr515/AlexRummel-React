import React from 'react';
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import HomeScreen from 'screens/HomeScreen';
import PortfolioScreen from 'screens/PortfolioScreen';
import ErrorScreen from 'screens/ErrorScreen';
import XRScreen from 'screens/XRScreen';
import PortfolioEntries from 'config/PortfolioEntries';
import 'config/GlobalStyle.scss';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorScreen />,
        children: [
            {
                path: "",
                element: <HomeScreen />
            },
            {
                path: "portfolio",
                element: <PortfolioScreen />
            },
            ...PortfolioEntries.projects.map(entry => {
                return {
                    path: entry.getRelativeUrl(),
                    element: <entry.screenComponent />
                };
            }),
            {
                path: "*",
                element: <ErrorScreen forceErrorCode={404} />,
                errorElement: <ErrorScreen />
            }
        ]
    },
    {
        path: "/xr",
        element: <XRScreen />
    }
], { basename: "/staging" });

const helmet = {};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <HelmetProvider context={helmet}>
        <RouterProvider router={router} />
    </HelmetProvider>
);