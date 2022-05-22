import React, { useState } from "react";
import DisplayPosts from "../DisplayPosts/DisplayPosts";
import { Container } from "@mui/material";
import {Button} from '@mui/material'

export default function Home() {
    const [refresh, setRefresh] = useState(true);
    return (
        <>
            {/* <div style={{ width: "40%" }}> */}
            <Container>
                {/* <Button sx={{ margintop: '2rem' }}>
                    New Post
                </Button> */}
                <DisplayPosts refresh={refresh} setRefresh={setRefresh} />
            </Container>
            {/* <CreatePost refresh={refresh} setRefresh={setRefresh} /> */}
        </>
    );
}
