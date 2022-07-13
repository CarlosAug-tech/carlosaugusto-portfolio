import React from "react";
import { Outlet, Route, Routes as DOMRoutes } from "react-router-dom";

import { Home } from "../pages/Home";
import { DefaultLayout } from "../pages/_layouts/default";

function Routes() {
    return (
        <DOMRoutes>
            <Route
                element={
                    <DefaultLayout>
                        <Outlet />
                    </DefaultLayout>
                }
            >
                <Route path="/" element={<Home />} />
            </Route>
        </DOMRoutes>
    );
}

export { Routes };
