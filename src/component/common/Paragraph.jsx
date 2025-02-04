// import React from 'react'

// function Paragraph({ text }) {
//   return (
//     <p className="mb-4 text-[1rem]">
//       {text}
//     </p>
//   )
// }

// export default Paragraph;

// =================================================================
// function Paragraph({ content }) {
//     console.log("Paragraph content:", content);

//     const renderContent = (children) => {
//         return children.map((child, index) => {
//             // if (child.type === "text") {
//             return <span key={index}>{child.text}</span>;
//             // }
//             // Add more conditions here if there are other types of content
//             return null;
//         });
//     };

//     return (
//         <p className="mb-4 text-[1rem]">{renderContent(content.children)}</p>
//     );
// }

// export default Paragraph;

// ================================================================================
function Paragraph({ content }) {
    // console.log("Paragraph content:", content)
  
    const renderContent = (children) => {
      return children.map((child, index) => {
        if (child.type === "text") {
          return <span key={index}>{child.text}</span>
        }
        // Add more conditions here if there are other types of content
        return null
      })
    }
  
    return <p className="mb-4 text-[1rem]">{renderContent(content.children)}</p>
  }
  
  export default Paragraph
  
  