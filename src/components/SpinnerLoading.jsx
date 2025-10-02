import React from "react";
import { FadeLoader } from "react-spinners";

const overide = (React.CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
});
function SpinnerLoading() {
  return (
    <div className="-mt-20 w-full h-full flex justify-center items-center">
      <FadeLoader
        color={"#748EE0"}
        loading={true}
        cssOverride={overide}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
export default SpinnerLoading;
