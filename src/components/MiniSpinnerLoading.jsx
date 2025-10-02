import React from "react";
import { ClipLoader } from "react-spinners";

const overide = (React.CSSProperties = {
  display: "block",
  margin: "0 auto",
});
function MiniSpinnerLoading() {
  return (
    <div className="w-full h-full flex  gap-2 justify-center items-center">
      <ClipLoader
        color={"#ffffff"}
        loading={true}
        cssOverride={overide}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      Loading
    </div>
  );
}
export default MiniSpinnerLoading;
