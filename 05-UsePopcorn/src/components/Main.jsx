import Box from "./Box";
import MovieList from "./MovieList";
import WatchedList from "./WatchedList";
import WatchedSummary from "./WatchedSummary";

const Main = () => {
  return (
    <main className="main">
      <Box>
        <MovieList />
      </Box>
      <Box>
        <WatchedSummary />
        <WatchedList />
      </Box>
    </main>
  );
};

export default Main;
