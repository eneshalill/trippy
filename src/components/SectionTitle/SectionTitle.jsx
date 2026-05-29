import "./sectionTitle.css"
const SectionTitle = ({
  title,
  subTitle,
  as: TitleTag = "h1",
}) => {
  return (
    <div>
      <TitleTag>{title}</TitleTag>
      <p>{subTitle}</p>
    </div>
  );
};
export default SectionTitle