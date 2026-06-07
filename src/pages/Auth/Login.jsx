import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const [formData, setFormData] = useState({ Email: "", Password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleChange = (e, fieldName) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
    setError("");
  };

  const handleLogin = async () => {
    if (!formData.Email || !formData.Password) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.Email,
        formData.Password
      );

      const user = userCredential.user;
      setUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      });

      setFormData({ Email: "", Password: "" });
      navigate("/");
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        setError("No account found with this email");
      } else if (err.code === "auth/wrong-password") {
        setError("Incorrect password");
      } else if (err.code === "auth/invalid-email") {
        setError("Invalid email address");
      } else {
        setError(err.message || "Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-[#0a0e27] via-[#1a1a3e] to-[#0f0b2e] flex items-center justify-center p-4 sm:p-6">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#a78bfa]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#a78bfa]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-sm md:max-w-md relative z-10">
        <div className="text-center mb-8 sm:mb-10">
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 bg-linear-to-br from-[#a78bfa] to-[#7c3aed] rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50">
              <span className="text-2xl font-bold text-[#0a0e27]">🔐</span>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#e0e7ff] mb-2">Welcome Back</h1>
          <p className="text-[#a5b4fc] text-sm sm:text-base">Sign in to your account to continue</p>
        </div>

        <div className="bg-[#16213e]/80 backdrop-blur-lg rounded-3xl border border-[#3730a3] p-6 sm:p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:border-[#a78bfa]/30 hover:shadow-purple-500/20">
          {error && (
            <div className="mb-6 p-4 bg-linear-to-r from-red-900/30 to-red-800/20 border border-red-500/50 rounded-xl backdrop-blur-sm animate-pulse">
              <p className="text-red-300 text-sm font-medium flex items-center">
                <span className="mr-2">⚠️</span>
                {error}
              </p>
            </div>
          )}

          <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
            <div className="relative">
              <InputField
                type="email"
                content="Email"
                placeholder="Enter your email"
                handleChange={handleChange}
              />
            </div>
            <div className="relative">
              <InputField
                type="password"
                content="Password"
                placeholder="Enter your password"
                handleChange={handleChange}
              />
            </div>
          </div>

          <div className="w-full">
            <Button
              content={loading ? "Logging in..." : "Login"}
              handleClick={handleLogin}
              variant="primary"
            />
          </div>

          <div className="my-6 sm:my-7 flex items-center gap-4">
            <div className="flex-1 h-px bg-linear-to-r from-[#3730a3] to-transparent"></div>
            <span className="text-[#a5b4fc] text-xs font-medium uppercase tracking-wider">Or</span>
            <div className="flex-1 h-px bg-linear-to-l from-[#3730a3] to-transparent"></div>
          </div>

          <div className="text-center">
            <p className="text-[#a5b4fc] text-sm">
              Don't have an account?{" "}
              <Link
                to="/auth/register"
                className="inline-block text-[#a78bfa] hover:text-[#c4b5fd] font-semibold transition-all duration-200 hover:underline underline-offset-2"
              >
                Create account
              </Link>
            </p>
          </div>

          <div className="mt-4 text-center">
            <Link
              to="/auth/forgot-password"
              className="text-[#818cf8] hover:text-[#a78bfa] text-xs font-medium transition-colors duration-200"
            >
              Forgot password?
            </Link>
          </div>
        </div>

        <p className="text-center text-[#818cf8]/70 text-xs mt-6 sm:mt-8">
          Your account is secure and protected
        </p>
      </div>
    </div>
  );
}