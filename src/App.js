import Home from "./home"
import {
  Navigate,
  Routes,
  Route
} from "react-router-dom";

export default () => {
  return (
    <Routes>
      <Route exact path="/">
        <Route path="/" element={ <Navigate to="/home" /> } />
      </Route>
      <Route
        exact
        path="/home"
        element={<Home />}
      />
    </Routes>
  );
}