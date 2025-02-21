import React from "react";
import Header from "../../../components/header";
import DynamicTextContainer from "../../../components/dynamicTextContainer";
import TextImageBanner from "../../../components/textImageBanner";
import TextImageContainer from "../../../components/textImageContainer";
import Footer from "../../../components/footer";
import TextBanner from "../../../components/textBanner";
import "./home.scss";
import images from "../../../assets";
const Home = () => {
  return (
    <>
      <Header />
      <div className="container home__container__1">
        <DynamicTextContainer
          headerFontSize="40px"
          headerFontWeight="900"
          headerText={[
            { text: "Modern Problems,", color: "#249E86" },
            //   "break",
            { text: " Modern Solutions!", color: "black" },
          ]}
          textAlign="center"
          bodyFontSize="16px"
          bodyText={[
            {
              text: "There have been heaps of clothing landfills with the current extravagant fashion industry due to post-production and post-consumer waste. To address the issue, we recycle the waste fiber and process quality yarn.",
              color: "black",
            },
            {
              text: "Yarn processing mainly comprises spinning, weaving, and knitting. Here, spinning produces the major share of pollution, which accounts for 34% of all the pollution caused by the textile supply chain. Hence, revive.eco responds to the issue in the most efficient way. Rather than using conventional types of machinery, we use specialized textile spinning units for recycled yarn processing.",
              color: "black",
            },
            {
              text: "These modern spinning machines are compliant with the 3Rs (Reduce, Reuse, Recycle) and are efficient both in terms of productivity and cost. We process the recycled raw material to make a variety of yarn with different textures and specifications. Hence, revive.eco offers you prime quality & low-priced yarn.",
              color: "black",
            },
            {
              text: "With all the specialized yarn process units and smart engineering solutions, the top-tier textiles revive.eco capacitates to generate 25,000 kg of sustainable yarn in accent colors (Red, Blue, Green, and Brown).",
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
          height="450px"
          image={images.cotton}
          textDetails={{
            width: "100%",
            headerFontSize: "40px",
            headerFontWeight: "900",
            bodyGap: "15px",
            //   imageWidth: "937px",
            imageHeight: "574px",
            headerText: [{ text: "Recycled Red Yarn", color: "black" }],
            bodyText: [
              {
                text: "Revive.eco produces high-quality recycled yarn by repurposing the wastes. We make the finest red yarn; the most vibrant of primary colors. We collect the post-consumer plastic bottles, process them, repurpose them, and make certified Polyethylene polyester. Hence, by recycling only four bottles according to the Global Recycling Standards (GRS), we save significant amounts of water, energy and avoid greenhouse gas emissions.",
                color: "black",
              },
              {
                text: "Moreover, as we incorporate the processed yarn from the PET fiber, we offer you the textile best suitable for the outdoor gears due to its properties such as odor control, water-resistance, and wicking properties.",
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
            { text: "Recycled", color: "black" },
            //   "break",
            { text: " Blue Yarn", color: "#249E86" },
          ]}
          textAlign="center"
          bodyFontSize="16px"
          bodyText={[
            {
              text: "For revive.eco, innovation is the key to growth. We use the recycled raw materials to prepare recycled yarn that suits your needs and demands. Cotton and polyester are the most conventionally used blenfor bi-component yarn. Hence, to prepare the Blue yarn, first-class recycled cotton and recycled polyester are used to make innovative fabric blend with unique qualities.",
              color: "black",
            },
            {
              text: "At revive.eco, we blend our premium recycled cotton fiber and PET Bottles polyester to manufacture blue yarn. ",
              color: "black",
            },
            {
              text: "Thus, we offer you a fabric that is much softer, tear-resistant, breathable, abrasi on-resistant, and durable. Poly-Cotton fabric keeps its shape.",
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
                { text: "Recycled", color: "black" },
                { text: " Blue Yarn", color: "#249E86" },
              ],
              bodyText: [
                {
                  text: "Abiding by Corporate Social Responsibility (CSR), we make you the amazing cotton recycled yarn for the perfect smooth fabric. The fabric made from the recycled green yarn is one of its kind. Being lightweight, breathable, resistant to wrinkles, and quick-drying, the fabric would be the best for clothing.",
                  color: "black",
                },
                {
                  text: "Revive.eco brings you the fabric that makes you feel soft and smooth. We offer you the top-notch sustainable fabric material that serves you for the longest periods.",
                  color: "black",
                },
              ],
            }}
            image={images.reel}
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
                { text: "Recycled", color: "black" },
                { text: " Brown Yarn", color: "#249E86" },
              ],
              bodyText: [
                {
                  text: "Last but not least, revive.eco produces the revamp brown yarn incorporating state-of-the-art processes. As we focus on using sustainable development methods, we also ensure the quality of our yarn. We use hi-tech equipment to reduce energy usage. Moreover, rather than using natural resources, we repurpose the raw materials and bring about high-quality merged bi-component yarn.",
                  color: "black",
                },
                {
                  text: "For brown recycled yarn, we repurpose the PET bottles polystyrene as well as post-consumer and post-industrial cotton. Hence, we use the resources to their maximum potential. Consequently, revive.eco abiding being a socially and environmentally responsible company brings the best value to its customers in the form of its premium products at competitive prices.",
                  color: "black",
                },
              ],
            }}
            image={images.dagga}
            layout="contentFirst"
            imageContainerWidth={"50%"}
            textContainerWidth={"50%"}
          />
        </div>
      </div>
      <Footer />
      {/* <TextBanner
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
      /> */}
    </>
  );
};

export default Home;
