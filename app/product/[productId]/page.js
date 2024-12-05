function Random(count) {
  return Math.floor(Math.random() * count);
}

function Details({ params }) {
  const random = Random(2);
  if (random === 1) {
    throw new Error("Error loading random number");
  }
  return (
    <div>
      <h1>This is product Details page!</h1>
      <h1>Product id : {params.productId}</h1>
    </div>
  );
}
export default Details;
