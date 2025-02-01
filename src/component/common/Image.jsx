import React from "react";

function Image({ src }) {
    return (
        <div className="mb-4">
            <img
                src={src}
                className="object-cover w-full mb-8 rounded-2xl h-[20rem] sm:h-[30rem] md:h-[35rem]"
                alt="section image"
            />
        </div>
    );
}

export default Image;
