import Link from "next/link";

function F1() {
  return (
    <div>
      <h1>This is F1 page!</h1>
      <Link href="f1/f2">F2</Link>
    </div>
  );
}

export default F1;
