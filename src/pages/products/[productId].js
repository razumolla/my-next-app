import { useRouter } from "next/router";

const ProductDetailsPage = () => {
  const router = useRouter();

  return (
    <div>This is dynamic Product Details Page : {router.query.productId} </div>
  );
};

export default ProductDetailsPage;
