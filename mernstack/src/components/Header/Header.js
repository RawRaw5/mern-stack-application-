import React from "react";
import { Toolbar, Typography, Button, Link } from "@mui/material";

const pages = [
    { title: "Home", url: "/home" },
    { title: "About", url: "/about" },
    { title: "Sports", url: "/sports" },
    { title: "Business", url: "/business" },
];


const Header = () => {
    return (
        <>
            <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Typography
                    variant="h4"
                    component="h2"
                    align="center"
                    sx={{ flex: 1 }}
                >
                    MernBlog
                </Typography>
                <Button variant="outlined">Log In</Button>
            </Toolbar>
            <Toolbar
                component="nav"
                variant=""
                sx={{ justifyContent: "space-evenly",}}
            >
                {pages.map((page) => (
                    <Link
                        color="inherit"
                        noWrap
                        key={page.title}
                        variant="body2"
                        href={page.url}
                        sx={{ p: 1, flexShrink: 0 }}
                    >
                        {page.title}
                    </Link>
                ))}
            </Toolbar>
        </>
    );
};

export default Header;
