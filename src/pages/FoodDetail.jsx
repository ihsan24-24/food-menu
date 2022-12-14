import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Detail from "../components/detail";
import FoodCards from "../components/foodCards";

const FoodDetail = ({ setReviewedFoods, reviewedFoods }) => {
  const { state: data } = useLocation();
  const { id } = useParams();
  console.log("data : ", data);
  console.log("id : ", id);
  // const food = data.filter((item) => item)
  return (
    <div className="detail">
      <Detail
        data={data}
        id={id}
        setReviewedFoods={setReviewedFoods}
        reviewedFoods={reviewedFoods}
      />
    </div>
  );
};

export default FoodDetail;
