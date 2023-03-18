interface AuthErrorMessageProps {
  text: string;
}

export default function AuthErrorMessage({ text }: AuthErrorMessageProps) {
  return <h2 className="pt-2 text-center text-xs text-red-500">{text}</h2>;
}
