import React from "react";
import Header from "../../../components/header";
import DynamicTextContainer from "../../../components/dynamicTextContainer";
import TextImageContainer from "../../../components/textImageContainer";
import Footer from "../../../components/footer";
import TextBanner from "../../../components/textBanner";
import LandMarks from "../../../components/landMarks";
import "./sustainability.scss";
import images from "../../../assets";

const Sustainability = () => {
  return (
    <>
      <Header />
      <div className="container home__container__1">
        <DynamicTextContainer
          headerFontSize="40px"
          headerFontWeight="900"
          headerText={[
            { text: "Why do we need to make", color: "#249E86" },
            "break",
            {
              text: "Sustainability efforts in Textile Industry?",
              color: "#249E86",
            },
          ]}
          textAlign="center"
          bodyFontSize="16px"
          bodyBullets={true}
          bodyText={[
            {
              text: "It is a true fact that the textile industry is being questioned heavily from everywhere due to its major contribution to damaging today’s environment. We from the platform of Revive.Eco join hands with those who make sustainability efforts to redefine and revive the textile industry yet by applying technological and sustainable development methods. The following are the major causes of conventional methods that harm the global atmosphere. We also feel pride in disclosing our role to tackle all these conventional obstacles in achieving global UN goals by applying eco-friendly processes.",
              color: "black",
            },
          ]}
          gap="10px"
          bodyGap="15px"
          width="800px"
        />
      </div>
      <div className="home__container__2">
        <TextBanner
          textDetails={{
            bodyText: [
              {
                text: "Both textile and garment industries are squandering many resources from nature and disposing of them in the form of Waste.",
                color: "white",
              },
              {
                text: "The water usage and wastage throughout the process of textile manufacturing add approximately 20% to the global water pollution.",
                color: "white",
              },
              {
                text: "If we just look at cotton farming, we will come to know that 4% of global freshwater resources (nearly 93 billion cubic meters of water) go wasted worldwide.",
                color: "white",
              },
              {
                text: "Large sums of energy are being swallowed for Cotton to polyester and synthetic materials transformation, e.g., 70 million barrels of oil are eaten up only in polyester production yearly.",
                color: "white",
              },
              {
                text: "Polyester, which plays a vital role in destroying our planet’s atmosphere, takes about 200 years to decay.",
                color: "white",
              },
            ],
            bulletImage: images.bullets,
            bodyBullets: true,
            gap: "10px",
            bodyGap: "15px",
            width: "50%",
          }}
          textDetails1={{
            bodyText: [
              {
                text: "Microfibers, Toxic chemicals, and dyes eventually generate Greenhouse Gases, especially CO2 emissions, and these are threatening human lives.",
                color: "white",
              },
              {
                text: "n a nutshell, we may conclude that rapid and unsatisfactory behavior towards the clothing and fashion industry as a whole is causing a lot to regeneration and manufacturing of textiles worldwide.",
                color: "white",
              },
              {
                text: "Hence, it becomes the unavoidable fact that we all should collaborate to minimize the Waste and manufacturing of textiles or search the ways that lead to the least disaster to the environment. This has lead us to adopt eco-friendly processes throughout textile manufacturing. ",
                color: "white",
              },
            ],
            bulletImage: images.bullets,
            bodyBullets: true,
            gap: "10px",
            bodyGap: "15px",
            width: "50%",
          }}
          bannerImage={images.rectangle231}
        />
      </div>
      <div className="container home__container__1">
        <DynamicTextContainer
          headerFontSize="40px"
          headerFontWeight="900"
          headerText={[
            { text: "Revive’s Critical Approach", color: "black" },
            "break",
            {
              text: "& Steps as Sustainability Efforts",
              color: "#249E86",
            },
          ]}
          textAlign="center"
          gap="10px"
          bodyGap="15px"
          //   width="800px"
        />
      </div>
      <div className="container home__container__1">
        <TextImageContainer
          textDetails={{
            bodyText: [
              {
                text: "The management of Revive. Eco has acknowledged and appreciated every effort that brings sustainability in the textile industry.",
                color: "black",
              },
              {
                text: "Our agenda to make sustainability efforts through sustainable development methods has been transformed from documents to reality as we have been producing and contributing a major role in manufacturing recycled clothes through eco-friendly processes in Pakistan.",
                color: "black",
              },
              {
                text: "To accomplish and strengthen our forefathers’ vision of sustainable development in textile manufacturing, we are the company that strictly follows the global recycle standards (GRS’s) too.",
                color: "black",
              },
            ],
            bulletImage: images.bullets,
            bodyBullets: true,
            gap: "10px",
            bodyGap: "15px",
            // width: "50%",
          }}
          image={images.layer91}
          imageContainerWidth="50%"
          textContainerWidth="50%"
          layout="imageFirst"
        />
      </div>
      <div className="container home__container__1">
        <TextImageContainer
          textDetails={{
            bodyText: [
              {
                text: "The management of Revive. Eco has acknowledged and appreciated every effort that brings sustainability in the textile industry.",
                color: "black",
              },
              {
                text: "Our agenda to make sustainability efforts through sustainable development methods has been transformed from documents to reality as we have been producing and contributing a major role in manufacturing recycled clothes through eco-friendly processes in Pakistan.",
                color: "black",
              },
              {
                text: "To accomplish and strengthen our forefathers’ vision of sustainable development in textile manufacturing, we are the company that strictly follows the global recycle standards (GRS’s) too.",
                color: "black",
              },
            ],
            bulletImage: images.bullets,
            bodyBullets: true,
            gap: "10px",
            bodyGap: "15px",
            // width: "50%",
          }}
          image={images.layer101}
          imageContainerWidth="50%"
          textContainerWidth="50%"
          layout="textFirst"
        />
      </div>
      <div className="sus__container_parent ">
        <div className="container text_alignment">
          <DynamicTextContainer
            headerFontSize="40px"
            headerFontWeight="900"
            textAlign="center"
            headerText={[
              {
                text: "As the resultant of our abovesustainability efforts, we have achieved thefollowing distinguishing landmarks.",
                color: "black",
              },
            ]}
            bodyGap="15px"
            width="850px"
          />
        </div>
      </div>
      <div className="sus__container_parent">
        <div className="container sus__container_1">
          <div className="landmarks__container">
            <LandMarks image={images.rectangle1} />
            <DynamicTextContainer
              bodyFontSize="16px"
              textAlign="center"
              bodyText={[
                {
                  text: "38+ milliton Waste has been reprocessed so far",
                  color: "black",
                },
              ]}
              bodyGap="15px"
              width="200px"
            />
          </div>
          <div className="landmarks__container">
            <LandMarks image={images.rectangle2} />
            <DynamicTextContainer
              bodyFontSize="16px"
              textAlign="center"
              bodyText={[
                {
                  text: "230+ million plastic orpet bottles have been repurposed",
                  color: "black",
                },
              ]}
              bodyGap="15px"
              width="200px"
            />
          </div>
          <div className="landmarks__container">
            <LandMarks image={images.rectangle3} />
            <DynamicTextContainer
              bodyFontSize="16px"
              textAlign="center"
              bodyText={[
                {
                  text: "380+ billions of fresh waterhave been preserved",
                  color: "black",
                },
              ]}
              bodyGap="15px"
              width="200px"
            />
          </div>
        </div>
        <div className="container sus__container_1">
          <div className="landmarks__container">
            <LandMarks image={images.rectangle4} />
            <DynamicTextContainer
              bodyFontSize="16px"
              textAlign="center"
              bodyText={[
                {
                  text: "Zero Pesticides Usage fromscratch to end throughout themanufacturing of the products",
                  color: "black",
                },
              ]}
              bodyGap="15px"
              width="220px"
            />
          </div>
          <div className="landmarks__container">
            <LandMarks image={images.rectangle5} />
            <DynamicTextContainer
              bodyFontSize="16px"
              textAlign="center"
              bodyText={[
                {
                  text: "Zero contribution to greenhousegases and CO2 emissions",
                  color: "black",
                },
              ]}
              bodyGap="15px"
              width="220px"
            />
          </div>
        </div>
      </div>
      <div className="sus__container">
        <div className="container text_alignment">
          <DynamicTextContainer
            textAlign="center"
            gap="10px"
            bodyFontSize="16px"
            bodyText={[
              {
                text: "Other than what we have mentioned above all as the partner of UN global goals to save the environment. Revive endorses a secure and efficient lifestyle that includes a supportive living to wildlife, not engaging the children in working, more than the minimum wages or right allocation of salaries amongst all the employees.",
                color: "black",
              },
            ]}
            bodyGap="15px"
            width="850px"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Sustainability;
