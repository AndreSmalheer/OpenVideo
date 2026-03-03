import "./Header.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate()

  return (
    <>
      <div className="Header">
        <img className="header-logo" src="/images/logo.png" onClick={() => navigate("/")}></img>
        <h1 onClick={() => navigate("/")}>Open<span className="text-highlight">Video</span></h1>
      </div>
    </>
  );
}
