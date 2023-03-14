import { useNavigate } from "react-router-dom";

export default function AuthNavLegal({ isLogin }: { isLogin: boolean }) {
  const navigate = useNavigate();

  return (
    <div className="mt-7 text-xs">
      By {isLogin ? "Logging into TaskTracker" : "Signing up for TaskTracker"}{" "}
      you agree to our{" "}
      <span
        className="cursor-pointer text-blue-600 hover:underline"
        onClick={() => navigate("/legal")}
      >
        Terms of Services
      </span>{" "}
      and{" "}
      <span
        className="cursor-pointer text-blue-600 hover:underline"
        onClick={() => navigate("/privacy")}
      >
        Privacy Policy.
      </span>
    </div>
  );
}
