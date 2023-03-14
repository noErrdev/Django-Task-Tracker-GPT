type TitleProps = {
  text: string;
};

export default function Title({ text }: TitleProps) {
  return <h1 className="text-xl font-medium">{text}</h1>;
}
