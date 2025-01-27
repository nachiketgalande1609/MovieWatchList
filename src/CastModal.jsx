import React from "react";
import { Modal, Box, Grid, Typography, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function CastModal({ open, cast, onClose, setCurrentView, setSelectedCast }) {
    console.log(cast);

    if (!cast) return null;

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
                    width: "60%",
                    backgroundColor: "#fff",
                    borderRadius: "16px",
                    padding: 4,
                    maxHeight: "90%",
                    overflowY: "auto",
                    outline: "none",
                    boxShadow: 24,
                    position: "relative",
                    transition: "all 0.3s ease-in-out",
                    transform: open ? "scale(1)" : "scale(0.9)",
                }}
            >
                {/* Close Icon */}
                <Box
                    sx={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        cursor: "pointer",
                        background: "#ffffffb0",
                        borderRadius: "50%",
                        padding: 1,
                    }}
                    onClick={onClose}
                >
                    <CloseIcon sx={{ color: "#333" }} />
                </Box>

                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 4 }}>
                    <Box sx={{ flexShrink: 0, display: "flex", flexDirection: "column" }}>
                        <img
                            src={cast.profile_img}
                            alt={cast.name}
                            style={{
                                maxWidth: "280px",
                                borderRadius: "10px",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                                transition: "transform 0.3s ease-in-out",
                            }}
                        />
                        <Button
                            variant="contained"
                            sx={{ marginTop: 2, backgroundColor: "black", borderRadius: "10px" }}
                            onClick={() => {
                                setCurrentView("movies");
                                setSelectedCast(cast.name);
                                onClose();
                            }}
                        >
                            View Movies
                        </Button>
                    </Box>

                    <Box sx={{ flex: 1 }}>
                        <Box sx={{ marginBottom: 3 }}>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: "bold",
                                    fontFamily: "Arimo",
                                    color: "#333",
                                    marginBottom: 1,
                                }}
                            >
                                {cast.name}
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontFamily: "Arimo",
                                    color: "#555",
                                    marginBottom: 0.5,
                                }}
                            >
                                {cast.awards.join(", ")}
                            </Typography>
                        </Box>

                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={4}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontWeight: "bold",
                                        fontFamily: "Arimo",
                                        color: "#333",
                                    }}
                                >
                                    Nationality:
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontFamily: "Arimo",
                                        color: "#555",
                                    }}
                                >
                                    {cast.nationality}
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={8}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontWeight: "bold",
                                        fontFamily: "Arimo",
                                        color: "#333",
                                    }}
                                >
                                    Movies:
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontFamily: "Arimo",
                                        color: "#555",
                                    }}
                                >
                                    {cast.movies.join(", ")}
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontWeight: "bold",
                                        fontFamily: "Arimo",
                                        color: "#333",
                                    }}
                                >
                                    Date of Birth:
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontFamily: "Arimo",
                                        color: "#555",
                                    }}
                                >
                                    {cast.dob}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontWeight: "bold",
                                        fontFamily: "Arimo",
                                        color: "#333",
                                    }}
                                >
                                    Career Start:
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontFamily: "Arimo",
                                        color: "#555",
                                    }}
                                >
                                    {cast.career_start}
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontWeight: "bold",
                                        fontFamily: "Arimo",
                                        color: "#333",
                                    }}
                                >
                                    Net Worth:
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontFamily: "Arimo",
                                        color: "#555",
                                    }}
                                >
                                    {cast.net_worth}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontWeight: "bold",
                                        fontFamily: "Arimo",
                                        color: "#333",
                                    }}
                                >
                                    Known For:
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontFamily: "Arimo",
                                        color: "#555",
                                    }}
                                >
                                    {cast.known_for}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Box sx={{ marginTop: 3 }}>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontWeight: "bold",
                                    fontFamily: "Arimo",
                                    color: "#333",
                                    marginBottom: 1,
                                }}
                            >
                                Bio:
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontFamily: "Arimo",
                                    color: "#555",
                                }}
                            >
                                {cast.bio}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
}

export default CastModal;
