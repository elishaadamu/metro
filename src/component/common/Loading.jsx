import React from "react";
import { BallTriangle } from "react-loader-spinner";

function Loading({ msg = "Loading" }) {
  return (
    <div className="flex items-center justify-center flex-col gap-4 ">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#00a6f4"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <p className="italic ">{msg}...</p>
    </div>
  );
}

export default Loading;
