import React from "react";
import Header from "../../../components/header";
import DynamicTextContainer from "../../../components/dynamicTextContainer";
import TextImageBanner from "../../../components/textImageBanner";
import TextImageContainer from "../../../components/textImageContainer";
import Footer from "../../../components/footer";
import TextBanner from "../../../components/textBanner";
import "./textileWipers.scss";
import images from "../../../assets";
const TextileWiper = () => {
  return (
    <>
      <Header />
      <div className="container home__container__1">
        <DynamicTextContainer
          headerFontSize="40px"
          headerFontWeight="900"
          headerText={[
            { text: "Attributing To Ever", color: "black" },
            "break",
            { text: " Changing Fashion Trends", color: "#249E86" },
          ]}
          textAlign="center"
          bodyFontSize="16px"
          bodyBullets={true}
          bodyText={[
            {
              text: "An average person purchases 60% more clothing than the actual need. Only some of this clothing ends up in charity and the rest produces huge amounts of textile waste adding to the clothing landfills. Revive.eco has brought in the optimum strategies to recycle the textile wipers for good. We are not only concerned with the textile industry burden on environment but economy as well. Processing the textile wipers according to the Global Recycle Standards we offer best quality textile at competitive prices.",
              color: "black",
            },
          ]}
          gap="10px"
          bodyGap="15px"
          width="742px"
        />
      </div>
      <div className="home__container__2">
        <TextImageBanner
          backgroundColor="#EDF8F8"
          height="500px"
          image={images.color}
          textDetails={{
            width: "100%",
            headerFontSize: "40px",
            headerFontWeight: "900",
            bodyGap: "15px",
            //   imageWidth: "937px",
            imageHeight: "574px",
            headerText: [
              { text: "Revive.eco ", color: "black" },
              "break",
              { text: "Closed-loop Processing", color: "black" },
            ],
            // headerText: [{ text: "Closed-loop Processing", color: "black" }],
            bodyText: [
              {
                text: "We at revive.eco realizes the potential of sustainable development methods. Optimum sustainable strategies can recover up to 93% - 98% of the clothing waste every year which is roughly 1,250,000 tons of post-customer textiles every year.",
                color: "black",
              },
              {
                text: "Hence, revive.eco, a novel name in the secondary textiles industry of Pakistan, has taken up the responsibility to wear off the burden of the clothing landfills. Our novelty lies in our closed-loop processing that keeps the textile products regulating within the life cycle for as long as possible. The closed-loop system comprises of some simple steps such as disassembling, cleaning, quality check, repairing, replacing, and reassembling according to the end products.",
                color: "black",
              },
              {
                text: "To conserve nature, our main focus is to use the natural resources as minimal as possible. Hence, we ensure the product's maximum usability with no adverse impacts on the environment and least textile waste production.",
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
            { text: "We abide by the ", color: "black" },
            //   "break",
            { text: "CSR model!", color: "#249E86" },
          ]}
          textAlign="center"
          bodyFontSize="16px"
          bodyText={[
            {
              text: "The textile wipers is classified into production and post-production textile wastes. To make the best of the clothing waste, we regularly collect both types of waste from various textile factories for recycling purposes. Another source of the waste is worn-out and unusable clothes. We obtain such kind of waste from National and international Charities around the globe. These charities play their best part of Corporate Social Responsibility (CSR) by handing over such waste for recycling rather than dumping it on the landfills. Ultimately, as this textile waste goes through the recycling process, the tattered post-consumer clothing waste also enter the loop of textile life cycle.",
              color: "black",
            },
            {
              text: "Revive.eco embraces its CSR by promoting the trend of recycling clothes via its incentivized exchange program nationwide.",
              color: "#249E86",
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
                { text: "Textile", color: "black" },
                { text: "Wipers Recycling", color: "black" },
              ],
              bodyText: [
                {
                  text: "After collecting all sorts of the textile wipers, we sort out the waste according to the sizes, shades, and qualities. We ensure to send the usable textile back into a garment's life cycle without any processing. For example, the large-sized cloth is used for baby garments, small-sized and absorbent wipers are used for industrial cleaning. The leftovers are segregated and graded for re-use, recycling, waste, and wipers to further process solid waste recovery.",
                  color: "black",
                },
              ],
            }}
            image={images.colorTriangle}
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
          headerText: [{ text: "What’s New?", color: "white" }],
          bodyText: [
            {
              text: "We envision our forefathers’ motto. Therefore, we utilize the most eco-friendly strategies to reduce the vast landfill spaces abiding by the Global Recycled Standards. Revive.eco acknowledges the pros of recycling textile waste and emphasizes the novel textile recycling methods. Therefore, we have reshaped conventional commercial methods with the purpose of sustainable development. Clothing waste dumped via traditional methods has raised several environmental issues. For example, Synthetic fibers do not decompose at all. Whereas, the decomposition of woolen significantly produces the greenhouse gases such as methane.",
              color: "white",
            },
            {
              text: "Our utmost priority is to serve you with the best quality material abiding by the regulations of sustainable development. Though the textile wipers are mixed, we ensure you the balanced quality and colors of recycled cloth. Recycling the textile wastes, revive.eco reduces the pressure on natural resources. Moreover, our strategies for environment-friendly products cut the overall costs of manufacturing garments, such as the costs for dyes.",
              color: "white",
            },
            {
              text: "Therefore, revive.eco facilitates you with the best quality textile products at competitive market prices in compliance with the CSR and GRS rules.",
              color: "white",
            },
          ],
        }}
      />
      <Footer />
    </>
  );
};

export default TextileWiper;
