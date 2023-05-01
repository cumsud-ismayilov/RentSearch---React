import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Detail from "./pages/Detail/Detail";

function App() {
  return (
   <BrowserRouter>
   <Layout>
   <Routes>
      <Route index path="/" element={<Home />}/>
      <Route  path="/about" element={<About />}/>
      <Route  path="/blog" element={<Blog />}/>
      <Route  path="/detail" element={<Detail/>}/>
      </Routes>
   </Layout>
   </BrowserRouter>
     );
}

export default App;
