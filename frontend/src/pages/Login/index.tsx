import React from "react";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../../redux/api/userAPI";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import AuthContainer from "../../components/Auth/AuthContainer";
import AuthTitle from "../../components/Auth/AuthTitle";
import AuthInput from "../../components/Auth/AuthInput";
import OvalButton from "../../components/Button/OvalButton";
import DividerWithText from "../../components/Divider/DividerWithText";
import AuthNavText from "../../components/Auth/AuthNavText";
import AuthNavLegal from "../../components/Auth/AuthNavLegal";
import AuthErrorMessage from "../../components/Auth/AuthErrorMessage";
import { clearStatusAndError } from "../../redux/slices/userSlice";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { status, error } = useSelector((state: any) => state.user);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  React.useEffect(() => {
    dispatch(clearStatusAndError());
  }, []);

  React.useEffect(() => {
    if (status === "succeeded") {
      navigate("/dashboard");
    }
  }, [status]);

  function submitLoginHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(loginAPI({ username, password }));
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <AuthContainer onSubmit={submitLoginHandler}>
        <AuthTitle text="Welcome back!" />
        <AuthErrorMessage text={error} />
        <AuthInput
          label="Username"
          type="text"
          id="login-username"
          onChange={(e) => setUsername(e.target.value)}
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
