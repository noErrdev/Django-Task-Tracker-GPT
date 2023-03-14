import React from "react";
import { useNavigate } from "react-router-dom";
import AuthContainer from "../../components/Auth/AuthContainer";
import AuthTitle from "../../components/Auth/AuthTitle";
import AuthInput from "../../components/Auth/AuthInput";
import OvalButton from "../../components/Button/OvalButton";
import DividerWithText from "../../components/Divider/DividerWithText";
import AuthNavText from "../../components/Auth/AuthNavText";
import AuthNavLegal from "../../components/Auth/AuthNavLegal";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <AuthContainer>
        <AuthTitle text="Welcome back!" />
        <AuthInput
          label="Email"
          type="email"
          id="login-email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <AuthInput
          label="Password"
          type="password"
          id="login-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <OvalButton variant="primary" type="submit">
          Login
        </OvalButton>
        <DividerWithText text="OR" />
        <OvalButton variant="tertiary" type="button">
          Continue with demo
        </OvalButton>
        <AuthNavText
          text="Need an account?"
          navText="Register"
          onClick={() => navigate("/signup")}
        />
        <AuthNavLegal isLogin={true} />
      </AuthContainer>
    </div>
  );
}
