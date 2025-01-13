import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div>
      <img
        src="images/logo.png"
        alt="speaker"
        className="rounded-full w-16 h-16"
        onClick={() => navigate("/")}
      />
    </div>
  );
};
export default Logo;
