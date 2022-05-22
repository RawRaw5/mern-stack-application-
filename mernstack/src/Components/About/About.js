import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const bull = (
    <Box
        component="span"
        sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
        •
    </Box>
);

const creators = [
    {
        name: "Saul Cortes",
        github: "https://github.com/inscious",
        linkedin: "https://www.linkedin.com/in/saul-cortes-656b3a22b/",
    },
    {
        name: "Robert White",
        github: "https://github.com/RawRaw5",
        linkedin: "#",
    },
    {
        name: "Parker Van Every",
        github: "https://github.com/RawRaw5",
        linkedin: "https://www.linkedin.com/in/parker-van-every/",
    },
    {
        name: "Jesus Flores",
        github: "https://github.com/RawRaw5",
        linkedin: "#",
    },
];

export default function About() {
    return (
        <>
            {creators.map((creator) => (
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        {/* <Typography
                            sx={{ fontSize: 14 }}
                            color="text.secondary"
                            gutterBottom
                        >
                            Word of the Day
                        </Typography> */}
                        <Typography variant="h5" component="div">
                            {creator.name}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            adjective
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            target="_blank"
                            href={creator.github}
                            size="small"
                        >
                            <GitHubIcon />
                        </Button>
                        <Button
                            target="_blank"
                            href={creator.linkedin}
                            size="small"
                        >
                            <LinkedInIcon />
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </>
    );
}
