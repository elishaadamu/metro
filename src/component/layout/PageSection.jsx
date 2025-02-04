// // import Heading from "../common/Heading";
// // import SubHeading from "../common/SubHeading";
// // import Paragraph from "../common/Paragraph";
// // import Image from "../common/Image";
// // import SectionLink from "../common/SectionLink";
// // import List from "../common/List";

// // function PageSection({ content }) {
// //     const renderContent = () => {
// //         return Object.entries(content).map(([key, value], index) => {
// //             switch (key) {
// //                 case "heading":
// //                     return <Heading key={index}>{value}</Heading>;
// //                 case "sub_heading":
// //                     return <SubHeading key={index} text={value} />;
// //                 case "paragraphs":
// //                     return value.map((paragraph, i) => (
// //                         <Paragraph key={`${index}-${i}`} text={paragraph} />
// //                     ));
// //                 case "image":
// //                     return (
// //                         <Image key={index} src={value || "/placeholder.svg"} />
// //                     );
// //                 case "list":
// //                     return <List key={index} items={value} />;
// //                 case "links":
// //                     return value.map((link, i) => (
// //                         <SectionLink
// //                             key={`${index}-${i}`}
// //                             href={link.link}
// //                             title={link.title}
// //                         />
// //                     ));
// //                 default:
// //                     return null;
// //             }
// //         });
// //     };

// //     return (
// //         <div>
// //             {renderContent()}
// //         </div>
// //     );
// // }

// // export default PageSection;

// import Heading from "../common/Heading";
// import SubHeading from "../common/SubHeading";
// import Paragraph from "../common/Paragraph";
// import Image from "../common/Image";
// import SectionLink from "../common/SectionLink";
// import List from "../common/List";

// function PageSection({ content }) {
//     const renderContent = () => {
//         return Object.entries(content).map(([key, value], index) => {
//             switch (key) {
//                 case "heading":
//                     return <Heading key={index}>{value}</Heading>;
//                 case "sub_heading":
//                     return value && <SubHeading key={index} text={value} />;
//                 case "paragraphs": //Updated to "paragraph" in the updates
//                     return value.map((paragraph, i) => (
//                         <Paragraph key={`${index}-${i}`} content={paragraph} /> //Updated prop name from "text" to "content"
//                     ));
//                 case "image":
//                     return (
//                         <Image key={index} src={value || "/placeholder.svg"} />
//                     );
//                 case "list":
//                     return value && <List key={index} items={value} />;
//                 case "links":
//                     return (
//                         value &&
//                         value.map((link, i) => (
//                             <SectionLink
//                                 key={`${index}-${i}`}
//                                 href={link.link}
//                                 title={link.title}
//                             />
//                         ))
//                     );
//                 default:
//                     return null;
//             }
//         });
//     };

//     return <div className="mb-8">{renderContent()}</div>;
// }

// export default PageSection;
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";
import Image from "../common/Image";
import SectionLink from "../common/SectionLink";
import List from "../common/List";

function PageSection({ content }) {
    console.log("content:", content);

    return (
        <div className="mb-8">
            {content.heading && <Heading>{content.heading}</Heading>}

            {content.paragraph &&
                content.paragraph.map((para, index) => (
                    <Paragraph key={index} content={para} />
                ))}

            {content.list && <List items={content.list} />}

            {content?.section_image && (
                <Image src={content.section_image.url || "/placeholder.svg"} />
            )}

            {content?.link &&
                content?.link?.map((link, index) => (
                    <SectionLink
                        key={index}
                        href={link.link}
                        title={link.title}
                    />
                ))}
        </div>
    );
}

export default PageSection;
