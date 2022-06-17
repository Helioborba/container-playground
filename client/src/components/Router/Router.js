// common imports
import React from "react";
import {Box} from "@mui/material";
import {Route, Routes} from "react-router-dom";

// Pages
import Home from "../../pages/Home.js";
import List from "../../pages/List.js";
import NotFound from "../../pages/NotFound.js";

// Better use context for this!

const Router = (props) => {
    return (
        <React.Fragment>
            <Box>
                <Routes>
                    <Route path="/" element={<Home></Home>}/>
                    <Route path="/list" element={<List ></List>}/>
                    <Route path="/*" element={<NotFound></NotFound>}/>
                </Routes>
            </Box>
        </React.Fragment>
    );
};

export default Router; 