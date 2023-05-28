import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "components/SharedLayout/SharedLayout";

const Home = lazy(() => import("components/pages/Home"));
const MovieDetails = lazy(() => import("components/pages/MovieDetails"));
const Movies = lazy(() => import("components/pages/Movies"));
const NotFound = lazy(() => import("components/pages/NotFound"));
const Cast = lazy(() => import("components/Cast/Cast"));
const Reviews = lazy(() => import("components/Reviews/Reviews"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
        <Route path="movies" element={<Suspense fallback={<div>Loading...</div>}><Movies /></Suspense>} />
        <Route path="movies/:movieId" element={<Suspense fallback={<div>Loading...</div>}><MovieDetails /></Suspense>}>
          <Route path="cast" element={<Suspense fallback={<div>Loading...</div>}><Cast /></Suspense>} />
          <Route path="reviews" element={<Suspense fallback={<div>Loading...</div>}><Reviews /></Suspense>} />
        </Route>
        <Route path="*" element={<Suspense fallback={<div>Loading...</div>}><NotFound /></Suspense>} />
      </Route>
    </Routes>
  );
};

export default App;
