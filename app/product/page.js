import Link from "next/link";

function Product({ params }) {
  const productId = 100;
  return (
    <div className="flex flex-col gap-3">
      <h1>Welcome to product page!</h1>
      <Link href="/product/1">Product 1</Link>
      <Link href="/product/2">Product 2</Link>
      <Link href="/product/3">Product 3</Link>
      <Link href={`/product/${productId}`}>Product {productId}</Link>
      <Link href="/">Back to home</Link>
    </div>
  );
}
export default Product;
