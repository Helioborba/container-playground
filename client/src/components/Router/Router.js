// common imports
import React,{useState} from "react";
import {Box} from "@mui/material";
import {Route,Routes} from "react-router-dom";

// Pages
import Home from "../../pages/Home.js";
import List from "../../pages/List.js";
import NotFound from "../../pages/NotFound.js";

// Better use context for this!

const Router = (props) => {
    const [logData, setLogData] = useState([])

    return (
        <React.Fragment>
            <Box>
                <Routes>
                    <Route path="/" element={<Home logData={logData}></Home>}/>
                    <Route path="/list" element={<List logData={logData}></List>}/>
                    <Route path="/*" element={<NotFound></NotFound>}/>
                </Routes>
            </Box>
        </React.Fragment>
    );
};

export default Router; 