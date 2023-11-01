import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import Home from "./Pages/Home";
import Issue from "./Pages/Issue";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:issueId" element={<Issue />} />
        </Route>
      </Routes>
    </>
  );
}

export default Router;
