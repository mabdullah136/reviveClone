import React from "react";
import Header from "../../../components/header";
import DynamicTextContainer from "../../../components/dynamicTextContainer";
import TextImageBanner from "../../../components/textImageBanner";
import TextImageContainer from "../../../components/textImageContainer";
import Footer from "../../../components/footer";
import TextBanner from "../../../components/textBanner";
import "./fibers.scss";
import images from "../../../assets";
const Fibers = () => {
  return (
    <>
      <Header />
      <div className="container home__container__1">
        <DynamicTextContainer
          headerFontSize="40px"
          headerFontWeight="900"
          headerText={[
            { text: "Global Textile Fibers Production", color: "#249E86" },
            "break",
            { text: "Has Exceeded 120 Million Tons Per Annum", color: "black" },
          ]}
          textAlign="center"
          bodyFontSize="16px"
          bodyBullets={true}
          bodyText={[
            {
              text: "out of which 80% goes to waste, adding significant amounts to the Municipal solid waste (MSW). Moreover, post-consumed garments and clothing fiber end up in landfills as well. Incineration of textile fibers produces green-house gases leaving recycled fibers as the only option to reduce land pollution.",
              color: "black",
            },
          ]}
          gap="10px"
          bodyGap="15px"
          width="850px"
        />
      </div>
      <div className="home__container__2">
        <TextImageBanner
          backgroundColor="#EDF8F8"
          height="500px"
          image={images.layer111}
          textDetails={{
            width: "100%",
            headerFontSize: "40px",
            headerFontWeight: "900",
            bodyGap: "15px",
            //   imageWidth: "937px",
            imageHeight: "574px",
            headerText: [
              { text: "Our Legacy Drives", color: "black" },
              "break",
              { text: "Us To Revive Natur", color: "black" },
            ],
            // headerText: [{ text: "Closed-loop Processing", color: "black" }],
            bodyText: [
              {
                text: "Revive.eco aims to continue the legacy of its ancestors. Therefore, we have devised ways to reduce the piles of fiber waste to their minimum amounts. We are working to return the continuously producing textile fibers wastes back into their life cycle. Hence, we seek to utilize the clothing fiber to its maximum potential. We not only recycle the waste fiber but also process it to make an up-to-mark quality fabric for our clients.",
                color: "black",
              },
              {
                text: " Revive.eco works to preserve Mother Nature's beauty and save up the natural resources for coming generations. With this, we recognize our corporate social responsibility (CSR) well. Therefore, we have adopted sustainable development methods for fiber manufacturing to offer you products compliant with the quality standards. Hence, we ensure to make the world a cleaner and happier space.",
                color: "black",
              },
            ],
          }}
        />
      </div>
      <div className="container home__container__1">
        <DynamicTextContainer
          headerFontSize="40px"
          headerFontWeight="900"
          headerText={[
            { text: "Organic", color: "black" },
            { text: " Cotton", color: "#249E86" },
          ]}
          textAlign="center"
          bodyFontSize="16px"
          bodyText={[
            {
              text: "The world has relished the taste of synthetic polymers. Realizing the potential damages to the environment and extravagant use of natural resources, revive.eco emphasizes the sustainable development methods for cultivating the main raw material of fiber manufacturing.",
              color: "black",
            },
            {
              text: "We ensure the efficient utilization of the water resources and regularly practice crop rotation to avoid soil depletion and erosion. Abiding by corporate social responsibility laws, we use natural seeds of cotton for quality textile fibers rather than genetically modified cotton. The crops are grown with no pesticides, herbicides, or insecticides hence, keeping our waterways from pollution.",
              color: "black",
            },
          ]}
          gap="10px"
          bodyGap="15px"
          width="850px"
        />
      </div>
      <div className="container">
        <div>
          <TextImageContainer
            textDetails={{
              width: "100%",
              headerFontSize: "40px",
              headerFontWeight: "900",
              bodyGap: "15px",
              //   imageWidth: "937px",
              imageHeight: "574px",
              headerText: [
                { text: "Tencel", color: "black" },
                { text: " by Lenzing", color: "#249E86" },
              ],
              bodyText: [
                {
                  text: "Tencel is an amazing fabric by Lenzing that is soft, smooth, and luxurious in texture. It is the best-suited textile fabric for apparel attributing thermal regulation and moisture absorption. Hence, revive.eco brings you the enriched Tencel clothing fabric at the most nominal prices.",
                  color: "black",
                },
                {
                  text: " With Tencel fiber manufacturing, Revive.eco sticks to the sustainable development approach. We use one of the most sustainable resources for the fabric. For breathable and biodegradable Tencel, wood is used as the raw material. Not only the raw material but our fabric production follows the CSR rules as well.",
                  color: "black",
                },
              ],
            }}
            image={images.layer1611}
            layout="imageFirst"
            imageContainerWidth={"50%"}
            textContainerWidth={"50%"}
          />
        </div>
      </div>
      <div className="container">
        <div>
          <TextImageContainer
            textDetails={{
              width: "100%",
              headerFontSize: "40px",
              headerFontWeight: "900",
              bodyGap: "15px",
              //   imageWidth: "937px",
              imageHeight: "574px",
              headerText: [
                { text: "Plastic", color: "black" },
                { text: " to Polyester", color: "#249E86" },
              ],
              bodyText: [
                {
                  text: "381 million tons of plastic waste is produced per annum. Of which 50% of the plastic ends up in landfills. Acknowledging these alarming statistics, we aim to recycle this material into valuable and cost-efficient textile fibersfor you.",
                  color: "black",
                },
                {
                  text: "We repurpose the plastic waste by putting up with the Global recycle standards. Hence, revive.eco provides you the most durable, cost-efficient, moisture resistant, and strong polyester recycled fibers. Thus, we ensure to provide you with the best-suited recycled fiber for outdoor gears, especially for extreme environment, insulation, and bi-component fibers.",
                  color: "black",
                },
              ],
            }}
            image={images.layer131}
            layout="contentFirst"
            imageContainerWidth={"50%"}
            textContainerWidth={"50%"}
          />
        </div>
      </div>
      <TextBanner
        textDetails={{
          width: "100%",
          headerFontSize: "40px",
          headerFontWeight: "900",
          textAlign: "center",
          bodyGap: "15px",
          //   imageWidth: "937px",
          imageHeight: "574px",
          headerText: [{ text: "People & Planet", color: "white" }],
          bodyText: [
            {
              text: "We aim to continue a socially and environmentally responsible legacy of fiber manufacturing. We ensure the minimum waste production development methods. Further, the inferior textile waste produced during the manufacturing is utilized to fill in quilts, padding in furniture, and acoustic insulation. We devise sustainable development methods of textile products. Still, we are keen to keep the potential post-production and post-consumer material in the textile life cycle by reshaping and recycling it. Hence, we provide you the best quality at minimum costs.",
              color: "white",
            },
          ],
        }}
      />
      <Footer />
    </>
  );
};

export default Fibers;
