import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-blue-50 p-4">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">
          Account Settings
        </h1>

        <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
          <div className="w-16 h-16 bg-linear-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shrink-0">
            <span className="text-white text-2xl font-bold">M</span>
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900">Marry Doe</h2>
            <p className="text-gray-600 text-sm">Marry@gmail.Com</p>
          </div>
        </div>

        <div className="mt-6 mb-8">
          <p className="text-gray-700 text-sm leading-relaxed">
            Lorem Ipsum Dolor Sit Amet. Consectetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => navigate("/login")}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition"
          >
            Edit Profile
          </button>
          <button
            onClick={() => navigate("/")}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-3 px-6 rounded-lg transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
