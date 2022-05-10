import React from "react";
import {
    Typography,
    Grid,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Avatar,
    Container,
} from "@mui/material";

const Posts = () => {
    return (
        <Grid item md={16} xs={12}>
            <CardActionArea component="a">
                <Card sx={{ display: "flex" }}>
                    <CardContent sx={{ flex: 1 }}>
                        <Container
                            sx={{
                                display: "flex",
                                gap: 2,
                                alignItems: "center",
                                marginLeft: -3,
                                marginBottom: 3
                            }}
                        >
                            <Avatar variant="" />
                            <Typography variant="h6">MichaelScarn</Typography>
                        </Container>
                        <Typography variant="h5">Post Header</Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            May 10
                        </Typography>
                        <Typography variant="subtitle" paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse tincidunt metus eros, vestibulum
                            accumsan nisl suscipit a. Aliquam sit amet dui nec
                            neque suscipit vehicula efficitur nec erat.
                            Vestibulum tincidunt.
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        sx={{
                            width: 160,
                            display: { xs: "none", sm: "block" },
                        }}
                        src="https://source.unsplash.com/random"
                    />
                </Card>
            </CardActionArea>
        </Grid>
    );
};

export default Posts;
