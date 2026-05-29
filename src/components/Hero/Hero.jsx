import "./hero.css"

const Hero = ({img, title, text, btn}) => {
  return (
    <div className="hero">
      <img src={img} alt="hero background img" />
      <h1>{title}</h1>
      <p>{text}</p>
      {/* نضع شرط اذا كان موجود الزر ضعه مع تنسيقه واذا ما موجود اتركه فارغ */}
      {btn?<button>{btn}</button> :""}      
        
    </div>
  )
}

export default Hero