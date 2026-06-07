import { useNavigate } from "react-router";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser({});
      navigate("/auth/login");
    } catch (err) {
      console.error("Logout failed:", err.message);
    }
  };

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-[#0a0e27] via-[#1a1a3e] to-[#0f0b2e]">

      <nav className="bg-[#16213e]/50 backdrop-blur-lg border-b border-[#3730a3] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-linear-to-br from-[#a78bfa] to-[#7c3aed] rounded-full flex items-center justify-center">
              <span className="text-lg font-bold text-[#0a0e27]">🚀</span>
            </div>
            <span className="text-[#e0e7ff] font-bold text-lg hidden sm:inline">
              Firebase App
            </span>
          </div>
          <button
            onClick={handleLogout}
            className="text-[#a5b4fc] hover:text-[#a78bfa] font-medium transition-colors text-sm sm:text-base" 
            >
            Logout
          </button>
        </div>
      </nav>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-10 w-96 h-96 bg-[#a78bfa]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-[#7c3aed]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

          <div className="bg-[#16213e]/80 backdrop-blur-lg rounded-3xl border border-[#3730a3] p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:border-[#a78bfa]/30 hover:shadow-purple-500/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-linear-to-br from-[#a78bfa] to-[#7c3aed] rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-4xl">👤</span>
              </div>
              <div>
                <h2 className="text-[#e0e7ff] font-bold text-2xl">
                  {user?.displayName || "Welcome"}
                </h2>
                <p className="text-[#a5b4fc] text-sm">{user?.email || "User"}</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-[#0a0e27]/50 border border-[#3730a3] rounded-lg p-4">
                <p className="text-[#a5b4fc] text-xs uppercase tracking-wider mb-1">
                  User ID
                </p>
                <p className="text-[#e0e7ff] font-mono text-sm break-all">
                  {user?.uid || "Not available"}
                </p>
              </div>
              <div className="bg-[#0a0e27]/50 border border-[#3730a3] rounded-lg p-4">
                <p className="text-[#a5b4fc] text-xs uppercase tracking-wider mb-1">
                  Email
                </p>
                <p className="text-[#e0e7ff] font-mono text-sm break-all">
                  {user?.email || "Not available"}
                </p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="w-full bg-linear-to-r from-red-600/80 to-red-700/80 hover:from-red-600 hover:to-red-700 text-white font-semibold py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-red-600/30"
              >
              Logout
            </button>
          </div>

          <div className="space-y-6">

            <div className="bg-[#16213e]/80 backdrop-blur-lg rounded-3xl border border-[#3730a3] p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:border-[#a78bfa]/30">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-[#a5b4fc] text-sm uppercase tracking-wider mb-2">
                    Account Status
                  </p>
                  <h3 className="text-[#e0e7ff] text-2xl font-bold">Active</h3>
                </div>
                <div className="w-12 h-12 bg-linear-to-br from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-xl">✅</span>
                </div>
              </div>
              <p className="text-[#818cf8] text-xs">Your account is active and secure</p>
            </div>

            <div className="bg-[#16213e]/80 backdrop-blur-lg rounded-3xl border border-[#3730a3] p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:border-[#a78bfa]/30">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-[#a5b4fc] text-sm uppercase tracking-wider mb-2">
                    Last Login
                  </p>
                  <h3 className="text-[#e0e7ff] text-2xl font-bold">Now</h3>
                </div>
                <div className="w-12 h-12 bg-linear-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-xl">🕐</span>
                </div>
              </div>
              <p className="text-[#818cf8] text-xs">You just logged in successfully</p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#e0e7ff] mb-8">
            Your Dashboard
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#16213e]/80 backdrop-blur-lg rounded-2xl border border-[#3730a3] p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-[#a78bfa]/30 hover:-translate-y-1">
              <div className="w-12 h-12 bg-linear-to-br from-[#a78bfa] to-[#7c3aed] rounded-xl flex items-center justify-center mb-4">
                <span className="text-xl">🔒</span>
              </div>
              <h3 className="text-[#e0e7ff] font-bold text-lg mb-2">Secure</h3>
              <p className="text-[#a5b4fc] text-sm">
                Your data is protected with Firebase security
              </p>
            </div>

            <div className="bg-[#16213e]/80 backdrop-blur-lg rounded-2xl border border-[#3730a3] p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-[#a78bfa]/30 hover:-translate-y-1">
              <div className="w-12 h-12 bg-linear-to-br from-[#a78bfa] to-[#7c3aed] rounded-xl flex items-center justify-center mb-4">
                <span className="text-xl">⚡</span>
              </div>
              <h3 className="text-[#e0e7ff] font-bold text-lg mb-2">Fast</h3>
              <p className="text-[#a5b4fc] text-sm">
                Lightning-fast authentication and data sync
              </p>
            </div>

            <div className="bg-[#16213e]/80 backdrop-blur-lg rounded-2xl border border-[#3730a3] p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-[#a78bfa]/30 hover:-translate-y-1">
              <div className="w-12 h-12 bg-linear-to-br from-[#a78bfa] to-[#7c3aed] rounded-xl flex items-center justify-center mb-4">
                <span className="text-xl">🌍</span>
              </div>
              <h3 className="text-[#e0e7ff] font-bold text-lg mb-2">Global</h3>
              <p className="text-[#a5b4fc] text-sm">
                Access your account from anywhere worldwide
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#16213e]/50 backdrop-blur-lg rounded-2xl border border-[#3730a3] p-8 text-center">
          <p className="text-[#a5b4fc] mb-2">
            Welcome to your Firebase powered application
          </p>
          <p className="text-[#818cf8]/70 text-sm">
            Built with React, Firebase, and Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
}