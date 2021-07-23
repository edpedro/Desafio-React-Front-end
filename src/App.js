import Container from "@material-ui/core/Container";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { Home } from "./Pages/Home";
import { Header } from "./Components/Header";

import { Provider } from "./Context/Context";

function App() {
  return (
    <>
      <Provider>
        <Container maxWidth="lg">
          <Header />
          <Home />
        </Container>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          className="toast-container"
        />
      </Provider>
    </>
  );
}

export default App;
