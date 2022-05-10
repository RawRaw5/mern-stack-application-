import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import { CssBaseline, Grid } from "@mui/material";
import FeaturedPost from "./components/FeaturedPost/FeaturedPost";
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";

function App() {
    return (
        <div className="App">
            <CssBaseline />
			<Container maxWidth="lg">
                <Header />
                {/* <FeaturedPost /> */}
                <Grid container spacing={2}>
                    <Posts />
                    <Posts />
                    <Posts />
                    <Posts />
                    <Posts />
                    <Posts />
                    <Posts />
                    <Posts />
                </Grid>
			</Container>
        </div>
    );
}

export default App;
