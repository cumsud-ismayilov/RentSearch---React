
import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Detail from "./pages/Detail/Detail";

function App() {
  return (
   
    <Routes>
   
      <Route index path="/" element={<Home />}/>
      <Route  path="/about" element={<About />}/>
      <Route  path="/blog" element={<Blog />}/>
      <Route  path="/detail" element={<Detail/>}/>
  
        </Routes>
   
  );
}

export default App;
