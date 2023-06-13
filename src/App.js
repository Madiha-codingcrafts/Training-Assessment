import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./components/Layout/Layout";
import { ThemeProvider} from "@mui/material";
import { theme } from './theme/theme';
import ProductsPage from "./pages/ProductsPage";
import Signup from "./components/Signup";


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
          <Router>
            <Layout>
            <Routes>
                <Route exact path="/" Component={() => <Home/>} />
                <Route exact path='/products' Component={() => <ProductsPage/>} />
                {/* <Route exact path='/signup' Component={() => <Signup/>} /> */}
                <Route path='*' Component={() => <PageNotFound/>} />
            </Routes>
            </Layout>
          </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
