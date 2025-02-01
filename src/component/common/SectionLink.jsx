function SectionLink({ href, title }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-2 text-sky-500 hover:opacity-80 underline w-fit "
        >
            {title || href}
        </a>
    );
}

export default SectionLink;
