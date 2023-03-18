import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { signupAPI } from "../../redux/api/userAPI";
import AuthContainer from "../../components/Auth/AuthContainer";
import AuthTitle from "../../components/Auth/AuthTitle";
import AuthInput from "../../components/Auth/AuthInput";
import OvalButton from "../../components/Button/OvalButton";
import AuthNavText from "../../components/Auth/AuthNavText";
import AuthNavLegal from "../../components/Auth/AuthNavLegal";
import AuthErrorMessage from "../../components/Auth/AuthErrorMessage";

export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { status, error } = useSelector((state: RootState) => state.user);
  const [name, setName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState(
    "This is a demo website. Feels free to use a fake email address."
  );

  React.useEffect(() => {
    if (status === "succeeded") {
      navigate("/dashboard");
    } else if (status === "failed") {
      setErrorMessage(String(error));
    }
  }, [status, error]);

  function submitSignupHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(signupAPI({ name, username, password }));
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <AuthContainer onSubmit={submitSignupHandler}>
        <AuthTitle text="Create an account" />
        <AuthErrorMessage text={errorMessage} />
        <AuthInput
          label="Name"
          type="text"
          id="signup-name"
          onChange={(e) => setName(e.target.value)}
        />
        <AuthInput
          label="Username"
          type="text"
          id="signup-username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <AuthInput
          label="Password"
          type="password"
          id="signup-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <OvalButton type="submit" variant="secondary">
          Create
        </OvalButton>
        <AuthNavText
          text=""
          navText="Already have an Account?"
          onClick={() => navigate("/")}
        />
        <AuthNavLegal isLogin={true} />
      </AuthContainer>
    </div>
  );
}
