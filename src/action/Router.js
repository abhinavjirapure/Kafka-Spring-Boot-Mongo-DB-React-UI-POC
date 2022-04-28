import React from 'react'
import { Routes,Route } from "react-router-dom";
import ViewEmployeeData from './ViewEmployeeData'

function Router() {

    return (
        <Routes>
            <Route path ="/view-data" element = {<ViewEmployeeData />}/>
        </Routes>
    )

}
export default Router;