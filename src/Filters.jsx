import React from "react";
import { Grid, Box, FormControl, InputLabel, Select, MenuItem, Container, IconButton, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear"; // Importing the cross icon

const Filters = ({
    selectedCast,
    setSelectedCast,
    castList,
    selectedGenre,
    setSelectedGenre,
    uniqueGenre,
    selectedYear,
    setSelectedYear,
    yearData,
    selectedSortOption,
    setSelectedSortOption,
}) => {
    const sortOptions = ["Date: Latest-Old", "Date: Old-Latest", "Name: A-Z", "Name: Z-A"];

    // Function to reset all filters
    const clearFilters = () => {
        setSelectedCast("");
        setSelectedGenre("");
        setSelectedYear("");
        setSelectedSortOption("");
    };

    // Check if any filter is applied (not an empty string)
    const isFiltersApplied = selectedCast || selectedGenre || selectedYear || selectedSortOption;

    return (
        <Box style={{ backgroundColor: "#171717" }}>
            <Container>
                <Box sx={{ padding: "20px 0" }}>
                    <Grid container spacing={2}>
                        {/* Other Select Fields */}
                        <Grid item xs={2.4} sm={2.4} md={2.4} lg={2.4}>
                            <FormControl variant="filled" sx={{ width: "100%", backgroundColor: "#363636", borderRadius: "10px" }}>
                                <InputLabel sx={{ color: "#888" }}>Filter by Cast</InputLabel>
                                <Select
                                    value={selectedCast}
                                    onChange={(e) => setSelectedCast(e.target.value)}
                                    label="Filter by Cast"
                                    MenuProps={{
                                        PaperProps: {
                                            style: {
                                                maxHeight: "500px",
                                                overflowY: "auto",
                                            },
                                        },
                                    }}
                                    sx={{
                                        "& .MuiSelect-select": {
                                            color: "white",
                                            backgroundColor: "#363636",
                                            borderRadius: "10px",
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "#888",
                                        },
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "transparent",
                                        },
                                        "& .MuiSelect-icon": {
                                            color: "white",
                                        },
                                        "& .MuiSelect-select:focus": {
                                            backgroundColor: "#363636",
                                        },
                                    }}
                                >
                                    <MenuItem value="">
                                        <em>All</em>
                                    </MenuItem>
                                    {castList.map((actor) => (
                                        <MenuItem key={actor} value={actor}>
                                            {actor}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={2.4} sm={2.4} md={2.4} lg={2.4}>
                            <FormControl variant="filled" sx={{ width: "100%", backgroundColor: "#363636", borderRadius: "10px" }}>
                                <InputLabel sx={{ color: "#888" }}>Filter by Genre</InputLabel>
                                <Select
                                    value={selectedGenre}
                                    onChange={(e) => setSelectedGenre(e.target.value)}
                                    label="Filter by Genre"
                                    MenuProps={{
                                        PaperProps: {
                                            style: {
                                                maxHeight: "500px",
                                                overflowY: "auto",
                                            },
                                        },
                                    }}
                                    sx={{
                                        "& .MuiSelect-select": {
                                            color: "white",
                                            backgroundColor: "#363636",
                                            borderRadius: "10px",
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "#888",
                                        },
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "transparent",
                                        },
                                        "& .MuiSelect-icon": {
                                            color: "white",
                                        },
                                        "& .MuiSelect-select:focus": {
                                            backgroundColor: "#363636",
                                        },
                                    }}
                                >
                                    <MenuItem value="">
                                        <em>All</em>
                                    </MenuItem>
                                    {uniqueGenre.map((genre) => (
                                        <MenuItem key={genre} value={genre}>
                                            {genre}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={2.4} sm={2.4} md={2.4} lg={2.4}>
                            <FormControl variant="filled" sx={{ width: "100%", backgroundColor: "#363636", borderRadius: "10px" }}>
                                <InputLabel sx={{ color: "#888" }}>Filter by Year</InputLabel>
                                <Select
                                    value={selectedYear}
                                    onChange={(e) => setSelectedYear(e.target.value)}
                                    label="Filter by Year"
                                    MenuProps={{
                                        PaperProps: {
                                            style: {
                                                maxHeight: "500px",
                                                overflowY: "auto",
                                            },
                                        },
                                    }}
                                    sx={{
                                        "& .MuiSelect-select": {
                                            color: "white",
                                            backgroundColor: "#363636",
                                            borderRadius: "10px",
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "#888",
                                        },
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "transparent",
                                        },
                                        "& .MuiSelect-icon": {
                                            color: "white",
                                        },
                                        "& .MuiSelect-select:focus": {
                                            backgroundColor: "#363636",
                                        },
                                    }}
                                >
                                    <MenuItem value="">
                                        <em>All</em>
                                    </MenuItem>
                                    {yearData.map((year) => (
                                        <MenuItem key={year} value={year}>
                                            {year}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={2.4} sm={2.4} md={2.4} lg={2.4}>
                            <FormControl variant="filled" sx={{ width: "100%", backgroundColor: "#363636", borderRadius: "10px" }}>
                                <InputLabel sx={{ color: "#888" }}>Sort</InputLabel>
                                <Select
                                    value={selectedSortOption}
                                    onChange={(e) => setSelectedSortOption(e.target.value)}
                                    label="Sort"
                                    MenuProps={{
                                        PaperProps: {
                                            style: {
                                                maxHeight: "500px",
                                                overflowY: "auto",
                                            },
                                        },
                                    }}
                                    sx={{
                                        "& .MuiSelect-select": {
                                            color: "white",
                                            backgroundColor: "#363636",
                                            borderRadius: "10px",
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "#888",
                                        },
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "transparent",
                                        },
                                        "& .MuiSelect-icon": {
                                            color: "white",
                                        },
                                        "& .MuiSelect-select:focus": {
                                            backgroundColor: "#363636",
                                        },
                                    }}
                                >
                                    <MenuItem value="">
                                        <em>Default</em>
                                    </MenuItem>
                                    {sortOptions.map((option) => (
                                        <MenuItem key={option} value={option}>
                                            {option}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>

                        {/* Clear Filters Button */}
                        <Grid item xs={2.4} sm={2.4} md={2.4} lg={2.4}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                    paddingRight: "10px",
                                    height: "100%",
                                }}
                            >
                                <IconButton
                                    onClick={clearFilters}
                                    sx={{
                                        color: isFiltersApplied ? "white" : "#333",
                                        padding: 0,
                                        marginRight: 1,
                                        pointerEvents: isFiltersApplied ? "auto" : "none",
                                    }}
                                >
                                    <ClearIcon />
                                </IconButton>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: isFiltersApplied ? "white" : "#333",
                                        cursor: isFiltersApplied ? "pointer" : "default",
                                    }}
                                    onClick={clearFilters}
                                >
                                    Clear Filters
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Filters;
