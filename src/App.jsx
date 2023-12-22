import Landing from "./Components/Landing";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Review from "./Reviews/Review";
import Generate from "./Coupon/Generate";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={Landing()} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />   
            <Route path="review" element={<Review />} />
            <Route path="generate" element={<Generate />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
 