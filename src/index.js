import React from 'react';
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ErrorScreen from 'screens/ErrorScreen';
import HomeScreen from 'screens/HomeScreen';
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
            }
        ]
    },
]);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={router} />);