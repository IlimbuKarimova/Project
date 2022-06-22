import "./App.css";
import Toastify from "./Components/Tostify/Toastify";
import ProductContextProvider from "./Context/ProductContextProvider";
import MyRoutes from "./MyRoutes";
import AuthContextProvider from "./Context/AuthContextProvider";
import ComContextProvider from "./Context/ComContextProvider";
import LikeContextProvider from "./Context/LikeContextProvider";
import FeedbackContextProvider from "./Context/FeedbackContextProvider";

function App() {
  return (
    <AuthContextProvider>
      <FeedbackContextProvider>
      <LikeContextProvider>
        <ComContextProvider>
              <ProductContextProvider>
                <Toastify />
                <MyRoutes />
              </ProductContextProvider>
        </ComContextProvider>
      </LikeContextProvider>
      </FeedbackContextProvider>
    </AuthContextProvider>
  );
}
export default App;
