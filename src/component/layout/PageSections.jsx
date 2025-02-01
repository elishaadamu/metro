import PageSection from "./PageSection"

function PageSections({sections}) {
  return (
    <div className="py-8 px-4 rounded-xl md:bg-[#1e2a3a] mt-[6rem]">
      {sections.map((sectionContent, index) => (
        <PageSection key={index} content={sectionContent} />
      ))}
    </div>
  )
}

export default PageSections

