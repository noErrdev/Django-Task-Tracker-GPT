import React from "react";
import { useNavigate } from "react-router-dom";
import AuthContainer from "../../components/Auth/AuthContainer";
import AuthTitle from "../../components/Auth/AuthTitle";
import AuthInput from "../../components/Auth/AuthInput";
import OvalButton from "../../components/Button/OvalButton";
import AuthNavText from "../../components/Auth/AuthNavText";
import AuthNavLegal from "../../components/Auth/AuthNavLegal";

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <AuthContainer>
        <AuthTitle text="Create an account" />
        <h2 className="mt-2 text-center text-xs text-red-600">
          This is a demo website. Feels free to use a fake email address.
        </h2>
        <AuthInput
          label="Name"
          type="text"
          id="signup-name"
          onChange={(e) => setName(e.target.value)}
        />
        <AuthInput
          label="Email"
          type="email"
          id="signup-email"
          onChange={(e) => setEmail(e.target.value)}
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
