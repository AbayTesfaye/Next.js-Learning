import { notfound } from "next/navigation";
function ReviewDetails({ params }) {
  {
    if (parseInt(params.reviewId > 100)) {
      notfound();
    }
  }
  return (
    <div>
      <h1>This is Review Details page!</h1>
      <h1>Review Id : {params.reviewId}</h1>
      <h1>Product Id : {params.productId}</h1>
    </div>
  );
}

export default ReviewDetails;