import Heading from "../common/Heading";
import SubHeading from "../common/SubHeading";
import Paragraph from "../common/Paragraph";
import Image from "../common/Image";
import SectionLink from "../common/SectionLink";
import List from "../common/List";

function PageSection({ content }) {
    const renderContent = () => {
        return Object.entries(content).map(([key, value], index) => {
            switch (key) {
                case "heading":
                    return <Heading key={index}>{value}</Heading>;
                case "sub_heading":
                    return <SubHeading key={index} text={value} />;
                case "paragraphs":
                    return value.map((paragraph, i) => (
                        <Paragraph key={`${index}-${i}`} text={paragraph} />
                    ));
                case "image":
                    return (
                        <Image key={index} src={value || "/placeholder.svg"} />
                    );
                case "list":
                    return <List key={index} items={value} />;
                case "links":
                    return value.map((link, i) => (
                        <SectionLink
                            key={`${index}-${i}`}
                            href={link.link}
                            title={link.title}
                        />
                    ));
                default:
                    return null;
            }
        });
    };

    return (
        <div>
            {renderContent()}
        </div>
    );
}

export default PageSection;
