import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Components/navbar/Sidebar";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import CreatePostForm from "./Components/CreatePostForm/CreatePostForm";
import Button from "react-bootstrap/Button";
import {
    CssBaseline,
    ThemeProvider,
    Container,
    createTheme,
    Box,
} from "@mui/material";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

const theme = createTheme("");

function App() {
    const [refresh, setRefresh] = useState(true);

    return (
        // <div className="App">
        // </div>
        <>
            <Router>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Header />
                    <Container maxWidth="lg">
                        <Box
                            component="div"
                            sx={{
                                color: "primary",
                                // marginTop: "5rem",
                                justifyContent: "center",
                                marginBottom: "3rem"
                            }}
                        >
                        <Container sx={{ height: '50px'}}/>
                        </Box>
                        {/* <Button href="/new-post">New post</Button>   */}
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            {/* <Route path="/new-post" element={<CreatePostForm />} /> */}
                        </Routes>
                    </Container>
                    <Footer />
                </ThemeProvider>
                <div className="sideBar">
                    {/* <Sidebar /> */}
                    {/* <Header /> */}
                </div>
                {/* <CreatePostForm /> */}
            </Router>
        </>
    );
}

export default App;
