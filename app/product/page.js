function Product({ params }) {
  console.log(params);
  return (
    <div>
      <h1>Welcome to product page!</h1>
      <p>{params.product}</p>
    </div>
  );
}
export default Product;
