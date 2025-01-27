import React from "react";
import { Modal, Box, Grid, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import imdbLogo from "../static/imdb.png";

function MovieModal({ open, movie, onClose }) {
    if (!movie) return null;

    const convertMinutesToHrMin = (minutes) => {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        return `${hours} hr ${remainingMinutes} min`;
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backdropFilter: "blur(5px)",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
            }}
        >
            <Box
                sx={{
                    width: "50%",
                    backgroundColor: "#fff",
                    borderRadius: "16px",
                    padding: 4,
                    maxHeight: "85%",
                    overflowY: "auto",
                    outline: "none",
                    boxShadow: 24,
                    position: "relative",
                    transform: open ? "scale(1)" : "scale(0.9)",
                    transition: "all 0.3s ease-in-out",
                }}
            >
                {/* Close Icon */}
                <Box
                    sx={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        cursor: "pointer",
                        background: "#ffffffb0",
                        borderRadius: "50%",
                        padding: 0.5,
                    }}
                    onClick={onClose}
                >
                    <CloseIcon sx={{ color: "#333" }} />
                </Box>

                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                    {/* Poster Image */}
                    <Box sx={{ flexShrink: 0 }}>
                        <img
                            src={movie.poster_url}
                            alt={movie.title}
                            style={{
                                maxWidth: "280px",
                                borderRadius: "8px",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                            }}
                        />
                    </Box>

                    <Box sx={{ flex: 1, marginLeft: 2 }}>
                        {/* Title Section */}
                        <Box sx={{ marginBottom: 3 }}>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: "bold",
                                    fontFamily: "Arimo",
                                    color: "#333",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                {movie.title}
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontFamily: "Arimo",
                                    color: "#555",
                                    marginBottom: 0.5,
                                }}
                            >
                                {movie.genre.join(" / ")}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontFamily: "Arimo",
                                    color: "#777",
                                    fontStyle: "italic",
                                }}
                                gutterBottom
                            >
                                {movie.year}
                            </Typography>
                            {movie.imdb_rating && (
                                <Box sx={{ display: "flex", alignItems: "center", marginTop: 1 }}>
                                    <img
                                        src={imdbLogo}
                                        alt="IMDb logo"
                                        style={{
                                            height: "30px",
                                            marginRight: 4,
                                            position: "relative",
                                            left: "-5px",
                                        }}
                                    />
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            fontWeight: "bold",
                                            fontFamily: "Arimo",
                                        }}
                                    >
                                        {movie.imdb_rating} / 10
                                    </Typography>
                                </Box>
                            )}
                        </Box>

                        {/* Movie Details Section */}
                        <Box sx={{ marginTop: 2, marginBottom: 2 }}>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontWeight: "bold",
                                    fontFamily: "Arimo",
                                    color: "#bf880f",
                                    marginBottom: 1,
                                }}
                            >
                                Description:
                            </Typography>
                            <Typography variant="body2" sx={{ color: "#555" }}>
                                {movie.description}
                            </Typography>
                        </Box>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontWeight: "bold",
                                        fontFamily: "Arimo",
                                        color: "#bf880f",
                                    }}
                                >
                                    Director:
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#555" }}>
                                    {movie.director}
                                </Typography>
                            </Grid>

                            <Grid item xs={6}>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontWeight: "bold",
                                        fontFamily: "Arimo",
                                        color: "#bf880f",
                                    }}
                                >
                                    Runtime:
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#555" }}>
                                    {convertMinutesToHrMin(movie.runtime)}
                                </Typography>
                            </Grid>

                            <Grid item xs={6}>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontWeight: "bold",
                                        fontFamily: "Arimo",
                                        color: "#bf880f",
                                    }}
                                >
                                    Language:
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#555" }}>
                                    {movie.language}
                                </Typography>
                            </Grid>

                            <Grid item xs={6}>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontWeight: "bold",
                                        fontFamily: "Arimo",
                                        color: "#bf880f",
                                    }}
                                >
                                    Cast:
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#555" }}>
                                    {movie.cast.map((castMember) => (
                                        <span key={castMember.actor}>
                                            <strong>{castMember.actor}</strong> as {castMember.character}
                                            <br />
                                        </span>
                                    ))}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
}

export default MovieModal;
