/**
 *
 *
 * @param {string} props.title title of the writeup
 * @param {React.ReactNode} props.children body of the writeup
 * @return {JSX.Element} writeup component - used for consistent long blocks of text
 */
export default function Writeup(props: {
  title: string;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="px-6 pb-6 md:px-10 md:pb-10">
      <h1 className="text-center text-3xl pb-6 font-bold">{props.title}</h1>
      <div>{props.children}</div>
    </div>
  );
}
