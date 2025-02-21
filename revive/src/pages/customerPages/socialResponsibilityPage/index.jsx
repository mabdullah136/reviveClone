import React from "react";
import Header from "../../../components/header";
import DynamicTextContainer from "../../../components/dynamicTextContainer";
import TextImageContainer from "../../../components/textImageContainer";
import Footer from "../../../components/footer";
import TextBanner from "../../../components/textBanner";
import "./socialResponsibilityPage.scss";
import images from "../../../assets";
const socialImageResponsibility = () => {
  return (
    <>
      <Header />
      <div className="container home__container__1">
        <DynamicTextContainer
          headerFontSize="40px"
          headerFontWeight="900"
          headerText={[
            { text: "To Abide by or Fulfill Our Corporate", color: "#249E86" },
            "break",
            {
              text: "Social Responsibility is in Our Instinct",
              color: "#249E86",
            },
          ]}
        />
      </div>
      <div className="home__container__2">
        <TextBanner
          textDetails={{
            headerFontSize: "30px",
            headerFontWeight: "900",
            headerText: [
              {
                text: "Let's Join Hands to Become ",
                color: "white",
              },
              "break",
              { text: " Socially More Responsible", color: "white" },
            ],
            bodyText: [
              {
                text: "Social Responsibility and manufacturing always run parallel in the newspapers, street walks, social gatherings, and even in courts as the most discussing topic. Revive. eco as the prominent manufacturer in textile manufacturers' list, has always contributed its sincere and serious participation in protecting the environment. The continuous efforts and check and balance are maintained since we have been in textile manufacturing. Our dynamic and trained people are always given a secure and healthy atmosphere for external and internal processes conduction.",
                color: "white",
              },
            ],
            // bodyBullets: true,
            gap: "20px",
            bodyGap: "15px",
            width: "50%",
          }}
          bannerImage={images.rectangle}
        />
      </div>
      <div className="container">
        <TextImageContainer
          textDetails={{
            headerFontSize: "30px",
            headerFontWeight: "900",
            headerText: [
              { text: "Our Distinguishing Support", color: "black" },
              "break",
              { text: "towards Our Corporate Social", color: "black" },
              "break",
              { text: "Responsibility", color: "#249E86" },
            ],
            headerBodySeparator: true,
            bodyText: [
              {
                text: "The followings are our most encouraging and appreciating steps towards the fulfillment of our social responsibility",
                color: "black",
              },
            ],
            gap: "10px",
            bodyGap: "15px",
            // width: "50%",
          }}
          image={images.layer162}
          imageContainerWidth="50%"
          textContainerWidth="50%"
          layout="imageFirst"
        />
      </div>
      <div className="parent-container">
        <div className="container ">
          <TextImageContainer
            // imageObjectFit={"unset"}
            textDetails={{
              headerFontSize: "30px",
              headerFontWeight: "900",
              headerText: [
                {
                  text: "Our Role for Clean & Green Pakistan-MOCC",
                  color: "black",
                },
              ],
              bodyText: [
                {
                  text: "Ministry of Climate Change Pakistan (MOCC) has been witnessing Revive’s efforts regarding clean and green Pakistan. We prioritize our role in fulfilling our social responsibility by managing textile waste in the form of manufacturing recycled clothes and applying sustainable development methods throughout manufacturing. We also create and run social campaigns by distributing promotional & catchy t-shirts to spread awareness about clean and green Pakistan.",
                  color: "black",
                },
              ],
              gap: "10px",
              bodyGap: "15px",
              textAlign: "right",
              //   width: "50%",
            }}
            image={images.layer281}
            imageContainerWidth="25%"
            textContainerWidth="75%"
            layout="textFirst"
          />
        </div>
        <div className="container ">
          <TextImageContainer
            textDetails={{
              headerFontSize: "30px",
              headerFontWeight: "900",
              headerText: [
                {
                  text: "Our Role to Protect Wildlife-WWF",
                  color: "black",
                },
              ],
              bodyText: [
                {
                  text: "Revive. Eco always seeks solutions to enhance and secure the lives of our planet. The animals have always been targeted and ignored regarding their environmental right. We from the platform of Revive. Eco do our hardest to protect and yield the animals' lives by minimizing the plastic and textile waste through our matchless sustainability efforts.",
                  color: "black",
                },
              ],
              gap: "10px",
              bodyGap: "15px",
              textAlign: "left",
              //   width: "50%",
            }}
            image={images.layer181}
            imageContainerWidth="25%"
            textContainerWidth="75%"
            layout="imageFirst"
          />
        </div>
        <div className="container ">
          <TextImageContainer
            textDetails={{
              headerFontSize: "30px",
              headerFontWeight: "900",
              headerText: [
                {
                  text: "Our Contribution for Special Children-Rising Sun",
                  color: "black",
                },
              ],
              bodyText: [
                {
                  text: "Revive makes society healthy by contributing its role to aligning the special children into the community. We have joined and helped the rising sun institute, which looks after many special children. Revive provides them fabric for handloom weaving training and the recycled material for manufacturing cloth bags.",
                  color: "black",
                },
              ],
              gap: "10px",
              bodyGap: "15px",
              textAlign: "right",
              //   width: "50%",
            }}
            imageObjectFit="unset"
            image={images.layer2811}
            imageContainerWidth="25%"
            textContainerWidth="75%"
            layout="textFirst"
          />
        </div>
        <div className="container ">
          <TextImageContainer
            textDetails={{
              headerFontSize: "30px",
              headerFontWeight: "900",
              headerText: [
                {
                  text: "Our efforts to reduce poverty-Rizq Foundation",
                  color: "black",
                },
              ],
              bodyText: [
                {
                  text: "Revive takes the individual as well as collaborative initiatives to reduce poverty and hunger in society. We fully support and admire all the Rizq foundation's efforts to strengthen our people by providing them clothes for their various projects.",
                  color: "black",
                },
              ],
              gap: "10px",
              bodyGap: "15px",
              textAlign: "left",
              //   width: "50%",
            }}
            image={images.layer1811}
            imageContainerWidth="25%"
            textContainerWidth="75%"
            layout="imageFirst"
          />
        </div>
        <div className="container ">
          <TextImageContainer
            textDetails={{
              headerFontSize: "30px",
              headerFontWeight: "900",
              headerText: [
                {
                  text: "Sustainable Development Support-Amal",
                  color: "black",
                },
              ],
              bodyText: [
                {
                  text: "Revive supports every effort that leads to sustainable development. Hence, we support and maintain a partnership with “AMAL” to bring sustainable development in the textile industry by sharing our sincere ideas and strategic plans as distinguishing solutions to implement sustainable development methods in manufacturing.",
                  color: "black",
                },
              ],
              gap: "10px",
              bodyGap: "15px",
              textAlign: "right",
              //   width: "50%",
            }}
            image={images.layer2812}
            imageContainerWidth="25%"
            textContainerWidth="75%"
            layout="textFirst"
          />
        </div>
        <div className="container ">
          <TextImageContainer
            textDetails={{
              headerFontSize: "30px",
              headerFontWeight: "900",
              headerText: [
                {
                  text: "Contribution towards free education- Rukh Foundation & DYA",
                  color: "black",
                },
              ],
              bodyText: [
                {
                  text: "Revive. Eco creates opportunities for those who cannot afford the high cost of our educational system as its most important social responsibility. We stand by Rukh foundation & DYA (Development Youth Aspirations) at every step they take to educate the people.",
                  color: "black",
                },
              ],
              gap: "10px",
              bodyGap: "15px",
              textAlign: "left",
              //   width: "50%",
            }}
            image={images.layer1812}
            imageContainerWidth="25%"
            textContainerWidth="75%"
            layout="imageFirst"
            imageObjectFit={"contain"}
          />
        </div>
        <div className="container ">
          <TextImageContainer
            textDetails={{
              headerFontSize: "30px",
              headerFontWeight: "900",
              headerText: [
                {
                  text: "Our Efforts to Plastic Free Pakistan-(PFP)",
                  color: "black",
                },
              ],
              bodyText: [
                {
                  text: "Revive has shown its sincere efforts to make Pakistan a plastic-free country to protect its environment. We take steps to stimulate the activities of PFP (Plastic-free Pakistan) by distributing our shining t-shirts to its activists. ",
                  color: "black",
                },
              ],
              gap: "10px",
              bodyGap: "15px",
              textAlign: "right",
              //   width: "50%",
            }}
            image={images.layer2813}
            imageContainerWidth="25%"
            textContainerWidth="75%"
            layout="textFirst"
          />
        </div>
        <div className="container ">
          <TextImageContainer
            textDetails={{
              headerFontSize: "30px",
              headerFontWeight: "900",
              headerText: [
                {
                  text: "Youth Environmentalists Forum",
                  color: "black",
                },
              ],
              bodyText: [
                {
                  text: "We support every effort made by the youth environmental forum of Pakistan to protect and spread awareness among the youth of Pakistan.",
                  color: "black",
                },
              ],
              gap: "10px",
              bodyGap: "15px",
              textAlign: "left",
              //   width: "50%",
            }}
            image={images.layer1813}
            imageContainerWidth="25%"
            textContainerWidth="75%"
            layout="imageFirst"
          />
        </div>
        <div className="container ">
          <TextImageContainer
            textDetails={{
              headerFontSize: "30px",
              headerFontWeight: "900",
              headerText: [
                {
                  text: "Our Support to save water- (water-wise)",
                  color: "black",
                },
              ],
              bodyText: [
                {
                  text: "Revive encourages an initiative taken by a woman to spread information to minimize water consumption (Water Wise). We promote its seminars and all the activities by offering free T-shirts and recycled materials to its workers.",
                  color: "black",
                },
              ],
              gap: "10px",
              bodyGap: "15px",
              textAlign: "right",
              //   width: "50%",
            }}
            image={images.layer2814}
            imageContainerWidth="25%"
            textContainerWidth="75%"
            layout="textFirst"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default socialImageResponsibility;
