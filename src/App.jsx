import React, { useState, useMemo } from "react";
import { Grid, Container, Box, Typography } from "@mui/material";
import moviesData from "../movies.json";
import actorsData from "../actors.json";
import MovieModal from "./MovieModal";
import Filters from "./Filters";
import Navbar from "./Navbar";
import MovieGrid from "./MovieGrid";
import Cast from "./Cast";
import CastModal from "./CastModal";

function App() {
    const [movies, setMovies] = useState(moviesData);
    const [actors, setActors] = useState(actorsData);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [openMovieModal, setOpenMovieModal] = useState(false);
    const [openCastModal, setOpenCastModal] = useState(false);
    const [selectedActor, setSelectedActor] = useState(null);
    const [selectedCast, setSelectedCast] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("");
    const [selectedYear, setSelectedYear] = useState("");
    const [selectedSortOption, setSelectedSortOption] = useState("");

    const [currentView, setCurrentView] = useState("movies");

    const actorCount = movies.reduce((acc, movie) => {
        movie.cast.forEach((actor) => {
            acc[actor.actor] = (acc[actor.actor] || 0) + 1; // Ensure we are counting based on the actor name
        });
        return acc;
    }, {});

    const yearData = [...new Set(movies.map((movie) => movie.year))];
    const castList = Object.keys(actorCount).filter((actor) => actorCount[actor] > 1);
    const uniqueGenre = [...new Set(movies.flatMap((movie) => movie.genre))];

    const filteredAndSortedMovies = useMemo(() => {
        let filteredMovies = movies.filter((movie) => {
            const matchesQuery = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCast = selectedCast ? movie.cast.some((actor) => actor.actor === selectedCast) : true;
            const matchesGenre = selectedGenre ? movie.genre.includes(selectedGenre) : true;
            const matchesYear = selectedYear ? movie.year === selectedYear : true;
            return matchesQuery && matchesCast && matchesGenre && matchesYear;
        });

        switch (selectedSortOption) {
            case "Date: Latest-Old":
                return filteredMovies.sort((a, b) => b.year - a.year);
            case "Date: Old-Latest":
                return filteredMovies.sort((a, b) => a.year - b.year);
            case "Name: A-Z":
                return filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
            case "Name: Z-A":
                return filteredMovies.sort((a, b) => b.title.localeCompare(a.title));
            default:
                return filteredMovies;
        }
    }, [movies, searchQuery, selectedCast, selectedGenre, selectedSortOption, selectedYear]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleMovieCardClick = (movie) => {
        setSelectedMovie(movie);
        setOpenMovieModal(true);
    };

    const handleCloseMovieModal = () => {
        setOpenMovieModal(false);
        setSelectedMovie(null);
    };

    const handleCastCardClick = (movie) => {
        setSelectedActor(movie);
        setOpenCastModal(true);
    };

    const handleCloseCastModal = () => {
        setOpenCastModal(false);
        setSelectedMovie(null);
    };

    return (
        <div style={{ maxHeight: "100vh" }}>
            <Navbar
                searchQuery={searchQuery}
                handleSearchChange={handleSearchChange}
                setView={setCurrentView}
                setSelectedCast={setSelectedCast}
                setSelectedGenre={setSelectedGenre}
                setSelectedYear={setSelectedYear}
                setSelectedSortOption={setSelectedSortOption}
            />
            <Box sx={{ maxHeight: "calc(100vh - 65px)", overflowY: "auto" }}>
                {currentView === "movies" ? (
                    <>
                        <Filters
                            selectedCast={selectedCast}
                            setSelectedCast={setSelectedCast}
                            castList={castList}
                            selectedGenre={selectedGenre}
                            setSelectedGenre={setSelectedGenre}
                            uniqueGenre={uniqueGenre}
                            selectedYear={selectedYear}
                            setSelectedYear={setSelectedYear}
                            yearData={yearData}
                            selectedSortOption={selectedSortOption}
                            setSelectedSortOption={setSelectedSortOption}
                        />

                        <MovieGrid movies={filteredAndSortedMovies} handleMovieCardClick={handleMovieCardClick} />
                    </>
                ) : currentView === "cast" ? (
                    <Cast actors={actors} handleCastCardClick={handleCastCardClick} />
                ) : null}
            </Box>

            <MovieModal open={openMovieModal} movie={selectedMovie} onClose={handleCloseMovieModal} />
            <CastModal
                open={openCastModal}
                cast={selectedActor}
                onClose={handleCloseCastModal}
                setCurrentView={setCurrentView}
                setSelectedCast={setSelectedCast}
            />
        </div>
    );
}

export default App;
