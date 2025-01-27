import React, { useState } from "react";
import { Grid, Box, Typography, Container, Button, ButtonGroup } from "@mui/material";

const Cast = ({ actors, handleCastCardClick }) => {
    const [selectedLetter, setSelectedLetter] = useState("");

    // Function to filter actors by the selected letter
    const filteredActors = selectedLetter ? actors.filter((actor) => actor.name.charAt(0).toUpperCase() === selectedLetter) : actors;

    // Generate A-Z buttons
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    return (
        <Container sx={{ marginTop: 4 }}>
            {/* A-Z Buttons */}
            <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 3 }}>
                <ButtonGroup disableElevation sx={{ flexWrap: "wrap", boxShadow: "none", border: "none" }}>
                    {/* "All" Button */}
                    <Button
                        disableRipple
                        onClick={() => setSelectedLetter("")} // Reset filter
                        sx={{
                            minWidth: 30,
                            padding: "5px",
                            backgroundColor: selectedLetter === "" ? "#fff" : "#363636",
                            color: selectedLetter === "" ? "black" : "white",
                            border: "none",
                            "&:hover": {
                                backgroundColor: selectedLetter === "" ? "#f5f5f5" : "#505050",
                            },
                        }}
                    >
                        All
                    </Button>

                    {/* Alphabet Buttons */}
                    {alphabet.map((letter) => (
                        <Button
                            key={letter}
                            disableRipple
                            onClick={() => setSelectedLetter(letter)}
                            sx={{
                                minWidth: 30,
                                padding: "5px",
                                backgroundColor: selectedLetter === letter ? "#fff" : "#363636",
                                color: selectedLetter === letter ? "black" : "white",
                                border: "none",
                                "&:hover": {
                                    backgroundColor: selectedLetter === letter ? "#f5f5f5" : "#505050",
                                },
                            }}
                        >
                            {letter}
                        </Button>
                    ))}
                </ButtonGroup>
            </Box>

            {/* Actor List */}
            <Grid container spacing={8}>
                {filteredActors.length > 0 ? (
                    filteredActors.map((actor) => (
                        <Grid item key={actor.name} xs={6} sm={4} md={2.4} lg={2.4}>
                            <Box
                                sx={{
                                    borderRadius: 2,
                                    cursor: "pointer",
                                    textAlign: "left",
                                }}
                                onClick={() => handleCastCardClick(actor)}
                            >
                                <img
                                    src={actor.profile_img}
                                    alt={actor.name}
                                    style={{
                                        width: "100%",
                                        height: "300px",
                                        objectFit: "cover",
                                        borderRadius: "8px",
                                        border: "4px solid #fff",
                                    }}
                                />
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: "white",
                                        fontFamily: "Arimo",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {actor.name}
                                </Typography>

                                <Typography variant="subtitle2" sx={{ color: "#999", fontWeight: "100", fontFamily: "Arimo" }}>
                                    {actor.dob}
                                </Typography>
                            </Box>
                        </Grid>
                    ))
                ) : (
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            width: "100%",
                            marginTop: 8,
                        }}
                    >
                        <Typography color="white" variant="h6">
                            No Results Found
                        </Typography>
                    </Box>
                )}
            </Grid>
        </Container>
    );
};

export default Cast;
