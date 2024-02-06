import BlurhashImg from "./components/Image/BlurhashImg";
import "./style.css";

const IMG_SRC = "https://ychef.files.bbci.co.uk/3840x2160/p0b926m6.jpg";

export default function App() {
  return (
    <div className="blurhash-wrapper">
      <BlurhashImg src={IMG_SRC} />
    </div>
  );
}
