import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome to PopX
          </h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => navigate("/signup")}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition transform hover:scale-105"
          >
            Create Account
          </button>
          <button
            onClick={() => navigate("/login")}
            className="w-full bg-purple-200 hover:bg-purple-300 text-black font-bold py-3 px-6 rounded-lg transition transform hover:scale-105"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
