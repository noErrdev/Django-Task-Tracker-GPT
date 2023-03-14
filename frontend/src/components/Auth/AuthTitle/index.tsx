type AuthTitleProps = {
  text: string;
};

export default function AuthTitle({ text }: AuthTitleProps) {
  return <h1 className="text-2xl font-medium">{text}</h1>;
}
