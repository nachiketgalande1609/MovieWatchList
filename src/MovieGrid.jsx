// MovieGrid.js
import React from "react";
import { Grid, Box, Typography, Container } from "@mui/material";

const MovieGrid = ({ movies, handleMovieCardClick }) => {
    return (
        <Container sx={{ marginTop: 4 }}>
            <Grid container spacing={8}>
                {movies && movies.length > 0 ? (
                    movies.map((movie) => (
                        <Grid item key={movie.title} xs={6} sm={4} md={2.4} lg={2.4}>
                            <Box
                                sx={{
                                    borderRadius: 2,
                                    cursor: "pointer",
                                    textAlign: "left",
                                }}
                                onClick={() => handleMovieCardClick(movie)}
                            >
                                <img
                                    src={movie.poster_url}
                                    alt={movie.title}
                                    style={{
                                        width: "100%",
                                        borderRadius: "8px",
                                        margin: 0,
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
                                    {movie.title}
                                </Typography>

                                <Typography variant="subtitle2" sx={{ color: "#999", fontWeight: "100", fontFamily: "Arimo" }}>
                                    {movie.year}
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
                            marginTop: 6,
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

export default MovieGrid;
