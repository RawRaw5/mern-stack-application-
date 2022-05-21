import React, { useState } from "react";
import DisplayPosts from "../DisplayPosts/DisplayPosts"
import CreatePost from "../create_post";

export default function Home () {
    const [refresh, setRefresh] = useState(true)
    return (
        <>
             
                    <div style={{ width: '40%' }}>
                        <DisplayPosts refresh={refresh} setRefresh={setRefresh} />
                    </div>
                    <CreatePost refresh={refresh} setRefresh={setRefresh} />
        </>
    )
}