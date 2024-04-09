import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Link to="/dashboard" className="text-blue-500 hover:text-blue-700">
        Go to Dashboard
      </Link>
    </div>
  );
};

export default Home;
