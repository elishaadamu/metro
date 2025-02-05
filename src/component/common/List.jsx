// import React from "react";

// function List({ items }) {
//   return (
//     <ul className="list-disc list-inside mb-8 ml-4">
//       {items.map((item, index) => (
//         <li key={index} className="mb-2">{item}</li>
//       ))}
//     </ul>
//   );
// }

// export default List;

function List({ items }) {
    return (
        <ul className="list-disc list-inside mb-8 ml-4">
            {items.map((item, index) => (
                <li key={index} className="mb-2">
                    {item.children.map((child, childIndex) => (
                        <span key={childIndex}>{child.text}</span>
                    ))}
                </li>
            ))}
        </ul>
    );
}

export default List;
