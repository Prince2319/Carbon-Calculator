import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const Link = styled.a`
  color: #0072c6;
  text-decoration: none;
  &:hover {
    color: #005fb3;
    text-decoration: underline;
  }
`;

function Secc() {
  return (
    <>
      <Navbar />

      <div className=" card" style={{ margin: "20px" }}>
        <h3
          className="card-header "
          style={{ textAlign: "center", fontWeight: "bold" }}
        >
          GREEN PREMIUM
        </h3>
        <div className="card-body">
          <div>
            {/* <div class="card">
              <div class="card-header">
                <Typography variant="h6" style={{ backgroundColor: "#F2EFE9" }}>
                  INTRODUCTION
                </Typography>
              </div>
              <div class="card-body">
                <p class="card-text">
                  <Typography style={{ backgroundColor: "#F2EFE9" }}>
                    In recent years, there has been a growing interest in
                    environmental sustainability, and businesses are now being
                    held accountable for their carbon footprint. Consumers are
                    increasingly choosing eco-friendly products, and as a
                    result, companies are recognizing the importance of
                    incorporating sustainability into their business strategies.
                    One-way companies can demonstrate their commitment to the
                    environment is by offering "green premiums," or a price
                    premium for environmentally friendly products.
                  </Typography>
                </p>
              </div>
            </div> */}

            <div className="container mt-3">
              <Typography variant="h6" style={{ backgroundColor: "#F2EFE9" }}>
                INTRODUCTION
              </Typography>
              <Typography
                style={{
                  backgroundColor: "#F2EFE9",
                  borderRadius: "3px",
                  textAlign: "justify",
                }}
              >
                In recent years, there has been a growing interest in
                environmental sustainability, and businesses are now being held
                accountable for their carbon footprint. Consumers are
                increasingly choosing eco-friendly products, and as a result,
                companies are recognizing the importance of incorporating
                sustainability into their business strategies. One-way companies
                can demonstrate their commitment to the environment is by
                offering "green premiums," or a price premium for
                environmentally friendly products.
              </Typography>
            </div>

            <div className=" container  mt-3">
              <Typography variant="h6" style={{ backgroundColor: "#C4F6D9" }}>
                WHAT IS GREEN PREMIUM?
              </Typography>
              <Typography
                style={{
                  backgroundColor: "#C4F6D9",
                  borderRadius: "3px",
                  textAlign: "justify",
                }}
              >
                The Green Premium is the additional cost of choosing a clean
                technology over one that emits more greenhouse gases. Right now,
                clean solutions are usually more expensive than high-emissions
                ones, in part because we don’t factor the true economic and
                environmental costs of existing options like fossil fuels into
                the price, we pay for them.
              </Typography>
            </div>

            <div className=" container  mt-3">
              <Typography
                variant="h6"
                style={{
                  backgroundColor: "#E3E9EA",
                  textTransform: "uppercase",
                }}
              >
                Why is the Green Premium useful?
              </Typography>
              <Typography
                style={{
                  backgroundColor: "#E3E9EA",
                  borderRadius: "3px",
                  textAlign: "justify",
                }}
              >
                <ol>
                  <li>
                    Encourages sustainability: The green premium encourages
                    companies to prioritize sustainable practices in their
                    business operations. By offering environmentally friendly
                    products, companies can reduce their carbon footprint,
                    conserve natural resources, and contribute to a healthier
                    planet
                  </li>
                  <li>
                    Increases consumer awareness: The green premium helps to
                    raise awareness among consumers about the importance of
                    sustainability
                  </li>
                  <li>
                    Promotes innovation: The green premium can stimulate
                    innovation by encouraging companies to develop new products
                    that are more environmentally friendly. This can lead to the
                    development of new technologies, materials, and processes
                    that can help to reduce the environmental impact of
                    manufacturing and production.
                  </li>
                  <li>
                    Builds brand reputation: Companies that offer eco-friendly
                    products and prioritize sustainability can build a positive
                    brand reputation. This can help to attract and retain
                    customers who are environmentally conscious and who value
                    companies that prioritize sustainability.
                  </li>
                </ol>
                In summary, the green premium is important because it promotes
                sustainability, raises consumer awareness, encourages
                innovation, builds brand reputation, and creates a competitive
                advantage. By offering environmentally friendly products,
                companies can demonstrate their commitment to sustainability and
                contribute to a healthier planet
              </Typography>
            </div>

            <div className=" container  mt-3">
              <Typography
                variant="h6"
                style={{
                  backgroundColor: "#F6E5F9",
                  textTransform: "uppercase",
                }}
              >
                HOW CAN WE REDUCGREEN PREMIUM-
              </Typography>
              <Typography
                style={{
                  backgroundColor: "#F6E5F9",
                  borderRadius: "3px",
                  textAlign: "justify",
                }}
              >
                <ul>
                  <li>
                    Government can implement public policies that make
                    carbon-based technologies more expensive, or make the clean
                    counterparts cheaper. These policies can include rules about
                    how much carbon a technology can emit, regulations that
                    shape financial markets, and public investments in R&D.
                  </li>
                  <li>
                    Companies can commit to buying and using cleaner
                    alternatives, investing in research and development,
                    supporting clean-energy entrepreneurs and startups, and
                    advocating for helpful government policies.
                  </li>
                  <li>
                    Education and awareness - Education and awareness campaigns
                    can help consumers understand the importance of
                    sustainability and the long-term benefits of eco-friendly
                    products. This can help change consumer behaviour and
                    encourage more people to purchase eco-friendly products,
                    which can increase demand and reduce prices of eco-friendly
                    products.
                  </li>
                </ul>
                Ultimately, the most effective way to reduce the green premium
                is through consumer demand. As more people demand eco-friendly
                products, companies will be motivated to produce them at a lower
                cost to meet the demand. By making sustainable choices,
                consumers can drive change and help to reduce the green premium
                over time.
              </Typography>
            </div>

            <div className="container mt-3 mb-2">
              <Typography
                variant="h6"
                style={{
                  backgroundColor: "#B5D5D6",
                  borderRadius: "3px",
                }}
              >
                CONCLUSION –
              </Typography>
              <Typography
                style={{
                  backgroundColor: "#B5D5D6",
                  borderRadius: "3px",
                  textAlign: "justify",
                }}
              >
                The concept of the green premium is gaining importance as we
                face the global climate crisis. Consumers are becoming
                increasingly conscious of their impact on the environment and
                are willing to pay a premium for products that align with their
                values. The green premium not only promotes sustainability, but
                also encourages innovation, builds brand reputation, and creates
                a competitive advantage for companies. However, it can pose
                challenges for consumers who may find it difficult to afford
                eco-friendly products. Therefore, reducing the green premium
                requires a collaborative effort between governments, businesses,
                and
              </Typography>
            </div>

            <div className="container">
              <h4>Resources</h4>
              <ul>
                <li>
                  <Link href="https://fortune.com/2021/02/16/bill-gates-climate-change-research-green-premiums/">
                    Bill Gates: How ‘Green Premiums’ can help us solve climate
                    change
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Secc;
