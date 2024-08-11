export default function Writeup(props: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="px-6 pb-6 md:px-10 md:pb-10">
      <h1 className="text-center text-3xl pb-6 font-bold">{props.title}</h1>
      <p>{props.children}</p>
    </div>
  );
}
