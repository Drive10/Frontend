import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPaymentStatus } from "../services/paymentApi";

export default function Processing() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await getPaymentStatus(id);

      if (res.data.status === "SUCCESS") {
        navigate("/receipt");
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return <h2>Processing Payment...</h2>;
}
