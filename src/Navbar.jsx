// Navbar.js
import React from "react";
import { AppBar, Toolbar, Typography, TextField, Button, Box, Container } from "@mui/material";

function Navbar({ searchQuery, handleSearchChange, setView, setSelectedCast, setSelectedGenre, setSelectedYear, setSelectedSortOption }) {
    return (
        <AppBar position="sticky" sx={{ backgroundColor: "#1D1D1D", borderBottom: "1px solid rgb(67, 67, 67)", boxShadow: "none" }}>
            <Container>
                <Toolbar sx={{ padding: "0 !important" }}>
                    <Typography
                        variant="h6"
                        sx={{ flexGrow: 1, cursor: "pointer" }}
                        onClick={() => {
                            setView("movies");
                            setSelectedCast("");
                            setSelectedGenre("");
                            setSelectedYear("");
                            setSelectedSortOption("");
                        }}
                    >
                        Movie Finder
                    </Typography>

                    <Box sx={{ display: "flex", gap: 2 }}>
                        <Button color="inherit" onClick={() => setView("movies")}>
                            Movies
                        </Button>
                        <Button color="inherit" onClick={() => setView("cast")}>
                            Cast
                        </Button>
                        <TextField
                            label="Search Movies"
                            variant="filled"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            size="small"
                            sx={{
                                backgroundColor: "#363636",
                                borderRadius: "10px",
                                "& .MuiInputBase-root": {
                                    color: "white", // Text color
                                },
                                "& .MuiInputLabel-root": {
                                    color: "#888",
                                },
                                "& .MuiInputBase-root.Mui-focused": {
                                    color: "white", // Focused text color
                                },
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "#fff", // Border color
                                },
                                "& .MuiFilledInput-underline:before": {
                                    display: "none", // Hide the underline before focus
                                },
                                "& .MuiFilledInput-underline:after": {
                                    display: "none", // Hide the underline after focus
                                },
                            }}
                        />
                    </Box>
                </Toolbar>{" "}
            </Container>
        </AppBar>
    );
}

export default Navbar;
