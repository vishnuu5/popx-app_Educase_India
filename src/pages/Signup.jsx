import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FloatingInput from "../components/FloatingInput";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (!formData.company) newErrors.company = "Company name is required";

    if (Object.keys(newErrors).length === 0) {
      navigate("/profile");
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Create your</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">PopX account</h2>

        <form onSubmit={handleSubmit}>
          <FloatingInput
            label="Marry Doe"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
          />

          <FloatingInput
            label="Marry Doe"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
          />

          <FloatingInput
            label="Marry Doe"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />

          <FloatingInput
            label="Marry Doe"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />

          <FloatingInput
            label="Marry Doe"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            error={errors.company}
            required={false}
          />

          <div className="mt-8 mb-6">
            <p className="text-sm text-gray-700 font-medium mb-3">
              Are you an Agency?
            </p>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === "yes"}
                  onChange={handleChange}
                  className="w-4 h-4 accent-purple-600"
                />
                <span className="text-gray-700">Yes</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === "no"}
                  onChange={handleChange}
                  className="w-4 h-4 accent-purple-600"
                />
                <span className="text-gray-700">No</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6 text-sm">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-purple-600 hover:text-purple-700 font-semibold"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}

export default Signup;
