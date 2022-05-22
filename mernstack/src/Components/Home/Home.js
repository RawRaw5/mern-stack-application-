import React, { useState } from "react";
import DisplayPosts from "../DisplayPosts/DisplayPosts";

export default function Home() {
    const [refresh, setRefresh] = useState(true);
    return (
        <>
            <div style={{ width: "40%" }}>
                <DisplayPosts refresh={refresh} setRefresh={setRefresh} />
            </div>
            {/* <CreatePost refresh={refresh} setRefresh={setRefresh} /> */}
        </>
    );
}
