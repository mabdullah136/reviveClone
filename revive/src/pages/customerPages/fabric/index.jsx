import React from "react";
import Header from "../../../components/header";
import DynamicTextContainer from "../../../components/dynamicTextContainer";
import TextImageBanner from "../../../components/textImageBanner";
import TextImageContainer from "../../../components/textImageContainer";
import Footer from "../../../components/footer";
import TextBanner from "../../../components/textBanner";
import "./fabric.scss";
import images from "../../../assets";
const Fabric = () => {
  return (
    <>
      <Header />
      <div className="container home__container__1">
        <DynamicTextContainer
          headerFontSize="40px"
          headerFontWeight="900"
          headerText={[
            { text: "Eco-Friendly", color: "#249E86" },
            { text: " Fabric", color: "black" },
          ]}
          textAlign="center"
          bodyFontSize="16px"
          bodyBullets={true}
          bodyText={[
            {
              text: "Utilizing smart engineering solutions and optimized, sustainable development methods, revive.eco offers the best quality eco-friendly fabrics.",
              color: "black",
            },
            {
              text: "As we aim to make the earth a better living space, we aim to reduce the yearly waste production and the heaps of landfills. We being a socially and environmentally responsible company, emphasize on sustainable textile production.",
              color: "black",
            },
            {
              text: "To fulfill our corporate social responsibility (CSR), revive.eco has a wide network of textile production industries and charities to provide us with the post-production and post-consumer clothing. Hence, we keep the clothing waste from adding to already escalating landfills and bring the potential textile material back into the life cycle.",
              color: "black",
            },
            {
              text: "Moreover, we use modern hi-tech machinery to process the clothing waste with the minimal use of natural resources to manufacture wholesale sustainable fabrics for you, such as recycled polyester fabric.",
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
          image={images.layer182}
          textDetails={{
            width: "100%",
            headerFontSize: "40px",
            headerFontWeight: "900",
            bodyGap: "15px",
            //   imageWidth: "937px",
            imageHeight: "574px",
            headerText: [{ text: "Single-knit Jersey", color: "black" }],
            // headerText: [{ text: "Closed-loop Processing", color: "black" }],
            bodyText: [
              {
                text: "Revive.eco provides you the high-quality single-knit jersey eco-friendly fabrics. As the fabric name indicates, it is made by using one set of needles with reprocessed sustainable fabrics. Hence, our single-knit jersey makes a premium fabric. We ensure our knit structure brings up the perfect areal density, fabric thickness, and air permeability. Consequently, revive.eco aims at manufacturing the best choice fabric for you to process the T-shirts, tank tops, pajamas, bedlinen, sportswear, athleisure, and sweatshirts.",
                color: "black",
              },
              {
                text: "This premium sustainable textile is soft in touch and stretchy in texture. The fabric complies with the quality standards and gives a nice and cool drape. This sustainable textile is attributes various qualities such as being opaque, absorbent, and breathable.",
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
            { text: "Knitted", color: "black" },
            { text: " Pique", color: "#249E86" },
          ]}
          textAlign="center"
          bodyFontSize="16px"
          bodyText={[
            {
              text: "Revive.eco believes in delivering value to its customers. We truly acknowledge that variety is the spice of life. Hence, along with abiding by the Global Recycled Standards (GRS), utilize our recycled fiber and yarn to offer you various eco-friendly fabrics.",
              color: "black",
            },
            {
              text: "The main raw material for such medium-weighted amazing fabrics with ribbing or cording patterns is the recycled yarn such as cotton and polyester. At revive.eco, we make the perfect blend of both the fabrics that bring about the knitted pique sustainable fabric with an overall waffle weave look. Thus, we have the best quality fabric for you as a staple fabric of sportswear. We render the material for you to make dress shirts, knit skirts, tennis skirts, and various other golf wear.",
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
                { text: "Knitted Terry", color: "black" },
                { text: " Fleece", color: "#249E86" },
              ],
              bodyText: [
                {
                  text: "Both the fabrics, terry, and fleece are single knit fabrics, and we provide you with both as wholesale fabrics. We deal in such eco-friendly fabrics because the material is known for yarn processing in loops and rings for fabric processing. It makes the fabric feel soft with an amazing texture. The fabric is well-known for its heat retention and absorption qualities due to its thick texture.",
                  color: "black",
                },
                {
                  text: "Hence, revive.eco manufactures knitted terry fleece with the state-of-the-art knitting machinery. The machinery function in full accordance with the corporate social responsibility of a textile company.",
                  color: "black",
                },
              ],
            }}
            image={images.layer1612}
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
                { text: "Woven", color: "black" },
                { text: " Canvas", color: "#249E86" },
              ],
              bodyText: [
                {
                  text: "We provide you with prime quality eco-friendly fabrics at nominal prices. For the premium woven canvas fabric, revive.eco utilizes recycled cotton, linen, or PVC fiber yarn. Made with the recycled raw material, the woven canvas fabric is best suited for various application. The main products that employ woven canvas fabric include the bags, tents, pants, art supplies, shoes, and backpacks.",
                  color: "black",
                },
                {
                  text: "Revive.eco focuses on 3Ps (Planet, People, and Production quality). We are keen to minimize the environmental footprints due to the textile industries. In this regard, our first and foremost step is to recycle textile waste. Further, we ensure the least utilization of natural resources by employing modern hi-tech machinery. Hence, we bring you the best quality sustainable textile wholesale fabrics. Revive.eco brings value!",
                  color: "black",
                },
              ],
            }}
            image={images.layer1311}
            layout="contentFirst"
            imageContainerWidth={"50%"}
            textContainerWidth={"50%"}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Fabric;
