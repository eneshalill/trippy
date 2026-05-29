import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import PopularContainer from "../components/PopularContainer/PopularContainer";
import Card from "../components/Card/Card";
import Containers from "../components/Containers/Containers";
import Footer from "../components/footer/footer";
import FooterDatas from "../components/footerDatas/FooterDatas";

const Home = () => {
    // مصفوفه تحفط في متغير ليتم استدعاء عناصر ناف بار مع ايقوناته ديناميكيا


  const cards = [
    {
        photo:"/assets/4.jpg",
            title1:"Trip in France",
            text1:"France, officially the French Republic, is a transcontinental country predominantly located in Western Europe and spanning overseas regions and territories in the Americas and the Atlantic, Pacific, and Indian Oceans."
    },
    {  photo:"/assets/5.jpg",
            title1:"Trip in Malaysia",
            text1:"Malaysia, is a country in Southeast Asia. The federal constitutional monarchy consists of thirteen states and three federal territories, separated by the South China Sea into two regions, Peninsular Malaysia and Borneo's East Malaysia."
    },
     {  photo:"/assets/1.jpg",
            title1:"Anas Khalil",
            text1:"Malaysia, is a country in Southeast Asia. The federal constitutional monarchy consists of thirteen states and three federal territories, separated by the South China Sea into two regions, Peninsular Malaysia and Borneo's East Malaysia."
    }
  ]
const informations = [
  {
    title: "Project",
    links: ["Changelog", "Status", "License", "All Versions"],
  },
  {
    title: "Community",
    links: ["GitHub", "Issues", "Project", "Twitter"],
  },
  {
    title: "Help",
    links: ["Support", "Troubleshooting", "Contact us"],
  },
  {
    title: "Others",
    links: ["Terms of Service", "Privacy Policy", "License"],
  },
];

  return (
    <div>
        <>
      <Header>
        <Hero
          img="/assets/herobg.jpg"
          title="Your Journey Your Story"
          text="Choose Your Favourite Destination"
          btn="Travel Now"
        />
      </Header>
      
{/* ==================================== */}
      <main>
        <Section>
          <SectionTitle
            title="Your Journey Your Story"
            subTitle="Choose Your Favourite Destination."/>

{/* ==================================== */}
          <PopularContainer
            title="Mt. Daguldul, Batangas"
            text="One of the most iconic views in luzon, Mt. Taal boosts a Volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!"
            firstImg="/assets/1.jpg"
            secImg="/assets/2.jpg" />

{/* ==================================== */}
          <PopularContainer
            title="Taal Volcano, Batangas"
            text="A nice trek in southern Batangas is the coastal mountain of San Juan, Mt. Daguldul. The name ‘Daguldul’ or ‘Daguldol’ has been used since olden days. It has an onomatopoeic feeling – that of suspense and grandness. Maybe it describes the grandeur of the range and the abrupt rolling of its slopes.Actually a small mountain range, Mt. Daguldul has several ‘gems’ to offer. First, there is the unique seascape that greets the hiker on the intial beach trail. Then, there is trail, moderate in difficulty, passing by woodlands and light forests. In some parts, the greenery is total."
            firstImg="/assets/3.jpg"
            secImg="/assets/2.jpg"
            reverse={true}/>
        </Section>

{/* ==================================== */}
        <Section>
          <SectionTitle
            title="Recent Trips"
            subTitle="You can discover unique destination using Google Maps." />
            <Containers>
                <Containers>
  {cards?.map((card,index) => (
    <Card
      key={index}
      photo={card.photo}
      title1={card.title1}
      text1={card.text1}
    />
  ))}
</Containers>
            </Containers>
        </Section>

<Footer>
<div className="footerLog">
  <SectionTitle
title="Trippy"
subTitle="Choose your favorite destination."
as="h3"
/>
</div>


  <div className="footerRow">
    {informations?.map((information)=>(
 <FooterDatas
    key={information.title}
    title={information.title}
links={information.links}


    />
    ))}
</div>
</Footer>





        {/* =========== 1 ==========
        <Containers>
          <Card
            photo="/assets/4.jpg"
            title1="Trip in France"
            text1="France, officially the French Republic, is a transcontinental country predominantly located in Western Europe and spanning overseas regions and territories in the Americas and the Atlantic, Pacific, and Indian Oceans."
          />
          =========== 2 ==========
          <Card
            photo="/assets/5.jpg"
            title1="Trip in Malaysia  "
            text1="Malaysia, is a country in Southeast Asia. The federal constitutional monarchy consists of thirteen states and three federal territories, separated by the South China Sea into two regions, Peninsular Malaysia and Borneo's East Malaysia."
          />
          =========== 3 ==========
          <Card
            photo="/assets/2.jpg"
            title1="Anas Hkalil  "
            text1="France, officially the French Republic, is a transcontinental country predominantly located in Western Europe and spanning overseas regions and territories in the Americas and the Atlantic, Pacific, and Indian Oceans."
          />
        </Containers> */}
      </main>
    </>
    </div>
  )
}

export default Home