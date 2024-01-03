import { Route, Routes } from "react-router-dom";
import NewPage from "./pages/NewPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element ={<NewPage/>}/>
      <Route path="/:category" element={<NewPage/>}/>
    </Routes>
  );
};

export default App;
