import { useRouter } from "next/router";
import React from "react";

const ErrorPage = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 4000);

  return (
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROmioWNCWLBqpT-O_z0Lp6yE3hNioAdqHR4Jo-iionAw&s"
        alt=""
        width="100%"
      />
    </div>
  );
};

export default ErrorPage;
