import "./FooterDatas.css"
const FooterDatas = ({title, links}) => {
  return (
    <div className="footerCol">
        <h4 className="footerTitle"> {title} </h4>

        <ul className="footerList">{links.map((link) =>
            <li key={link} className="footerItem">{link}</li>
        )}
        </ul>
    </div>
  )
}

export default FooterDatas