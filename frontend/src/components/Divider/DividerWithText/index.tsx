type DividerProps = {
  text: string;
};

export default function DividerWithText({ text }: DividerProps) {
  return (
    <div className="flex w-full items-center">
      <hr className="mr-4 inline-block flex-1 border-t border-gray-300 align-middle" />
      <h2 className="text-sm text-gray-500">{text}</h2>
      <hr className="ml-4 inline-block flex-1 border-t border-gray-300 align-middle" />
    </div>
  );
}
