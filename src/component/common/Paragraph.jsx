function Paragraph({ content }) {
    const renderContent = (children) => {
        return children.map((child, index) => {
            if (child.type === "text") {
                return (
                    <span
                        key={index}
                        className={`
                          ${child.bold ? "font-bold" : ""} 
                          ${child.underline ? "underline" : ""} 
                          ${child.italic ? "italic" : ""}
                        `}
                    >
                        {child.text}
                    </span>
                );
            } else if (child.type === "link") {
                return (
                    <a
                        key={index}
                        href={child.url}
                        className="text-sky-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {renderContent(child.children)}
                    </a>
                );
            }
            // Add more conditions here if there are other types of content
            return null;
        });
    };

    const getHeadingClass = (level) => {
        switch (level) {
            case 1:
                return "text-4xl font-bold mb-4 ";
            case 2:
                return "text-3xl font-bold mb-3";
            case 3:
                return "text-2xl font-bold mb-2";
            default:
                return "text-xl font-bold mb-2";
        }
    };

    if (content.type === "heading") {
        const HeadingTag = `h${content.level}`;
        return (
            <HeadingTag className={getHeadingClass(content.level)}>
                {renderContent(content.children)}
            </HeadingTag>
        );
    }

    return (
        <p className="mb-4 text-[1rem]">{renderContent(content.children)}</p>
    );
}

export default Paragraph;
