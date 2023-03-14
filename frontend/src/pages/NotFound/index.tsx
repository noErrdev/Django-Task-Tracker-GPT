import { useNavigate } from "react-router-dom";
import OvalButton from "../../components/Button/OvalButton";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="p-5 text-8xl font-medium">404</div>
      <div className="whitespace-nowrap p-5 text-4xl font-medium">
        Sorry, Page not Found
      </div>
      <OvalButton
        variant="tertiary"
        size="small"
        onClick={() => navigate("/dashboard")}
      >
        Back to Home
      </OvalButton>
    </div>
  );
}
