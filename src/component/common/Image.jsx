import React from "react";
import { baseURL } from "../../utils/apiClient";

function Image({ src }) {
    return (
        <div className="mb-4 h-[20rem] sm:h-[30rem] md:h-[24rem] lg:h-[30rem] rounded-2xl  overflow-hidden">
            <img
                src={src}
                // src={baseURL + src} //for local server
                className="object-cover w-full mb-8  h-full "
                alt="section image"
            />
        </div>
    );
}

export default Image;
