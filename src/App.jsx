import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PageContent from "./layout/PageContent";
import ShopPage from "./pages/ShopPage/ShopPage";
import ProductDetailPage from "./pages/ProductPage/ProductDetailPage";
import ContactPage from "./pages/ContactPage/ContactPage";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <PageContent>
            <HomePage />
          </PageContent>
        </Route>
        <Route path="/shop">
          <PageContent>
            <ShopPage />
          </PageContent>
        </Route>
        <Route path="/product/:id" exact>
          <PageContent>
            <ProductDetailPage />
          </PageContent>
        </Route>
        <Route path="/contact">
          <PageContent>
            <ContactPage />
          </PageContent>
        </Route>
      </Switch>
      <ToastContainer />
    </>
  );
}

export default App;
