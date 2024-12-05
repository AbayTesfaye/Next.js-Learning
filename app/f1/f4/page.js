import Link from "next/link";

function F4() {
  return (
    <div>
      <h1>This is F4 page!</h1>
      <Link href="/f1/f3">F3</Link>
      <Link href="/about">About</Link>
    </div>
  );
}

export default F4;
