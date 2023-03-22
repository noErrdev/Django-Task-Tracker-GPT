type DateTextProps = {
  due: string;
};

export default function DateText({ due }: DateTextProps) {
  const today = new Date().toLocaleDateString("en-CA").replace(/[/]/g, "-");
  due = due.split("T")[0];

  if (due < today) {
    return <h1 className="text-red-500">Due: {due}</h1>;
  }

  return <h1>Due: {due}</h1>;
}
