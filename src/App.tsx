import BlurhashImg from "./components/Image/BlurhashImg";
import "./style.css";

const IMG_SRC =
  "https://lh3.googleusercontent.com/05JfZ1ZdyzrRNvhJosUFdcjjJRFE7k2KhmeM2ujqeCbrcrCb1hkq7O_JdUBpQ3r9hi0YeSn4WgmKx3Ai8LHdM2SucxSzl9TRZ4fCAqETJ6WtHgE=w1440-e365";

export default function App() {
  return (
    <div className="blurhash-wrapper">
      <BlurhashImg src={IMG_SRC} />
    </div>
  );
}
