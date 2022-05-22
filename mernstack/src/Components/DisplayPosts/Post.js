import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";


const Post = (props) => {
    
        const { refresh, setRefresh } = props;
        const [data, setData] = useState([]);
        const pullData = () => {
            axios("https://mernstack-application.herokuapp.com/posts")
                .then((response) => {
                    setData(response.data);
                    setRefresh(false);
                    // console.log(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        };
        useEffect(() => {
            if (refresh) pullData();
        }, [refresh]);

    return (
        <>
        
            {data.map((dat) => (
                <Grid item xs={12} md={12}>
                    <CardActionArea component="a" href={`/${dat._id}`}>
                        <Card sx={{ display: "flex" }}>
                            <CardContent sx={{ flex: 1 }}>
                                <Typography component="h2" variant="h5">
                                    {dat.title}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    color="text.secondary"
                                >
                                    {dat.author}
                                </Typography>
                                <Typography variant="subtitle1" paragraph>
                                    {dat.body}
                                </Typography>
                                <Typography variant="subtitle1" color="primary">
                                    Continue reading...A
                                </Typography>
                            </CardContent>
                            <CardMedia
                                component="img"
                                sx={{
                                    width: 160,
                                    display: { xs: "none", sm: "block" },
                                }}
                                image="https://source.unsplash.com/random"
                                // alt={dat.imageLabel}
                            />
                        </Card>
                    </CardActionArea>
                </Grid>
            ))}
        </>
    );
};

export default Post;
