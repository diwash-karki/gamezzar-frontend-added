import { TopSellersCard, Container, TopSellerProfile } from "./styles";
import avatarOneImage from "../../../../assets/avatar1.svg";
import avatarTwoImage from "../../../../assets/avatar2.svg";
import avatarThreeImage from "../../../../assets/avatar3.svg";
import avatarFourImage from "../../../../assets/avatar4.svg";
import avatarFiveImage from "../../../../assets/avatar5.svg";
import avatarSixImage from "../../../../assets/avatar6.svg";
import avatarSevenImage from "../../../../assets/avatar7.svg";
import avatarEightImage from "../../../../assets/avatar8.svg";
import avatarNineImage from "../../../../assets/avatar9.svg";

// Top Sellers Section
export function TopSellers() {
  return (
    <Container>
      <h3>Top Sellers</h3>
      <TopSellersCard>
        <TopSellerProfile>
          <img src={avatarOneImage} alt="avatar" />
          <p>Crispin Berry</p>
        </TopSellerProfile>
        <TopSellerProfile>
          <img src={avatarTwoImage} alt="avatar" />
          <p>Tommy Alvarez</p>
        </TopSellerProfile>
        <TopSellerProfile>
          <img src={avatarThreeImage} alt="avatar" />
          <p>Samson Frost</p>
        </TopSellerProfile>
        <TopSellerProfile>
          <img src={avatarFourImage} alt="avatar" />
          <p>Samson Frost</p>
        </TopSellerProfile>
        <TopSellerProfile>
          <img src={avatarFiveImage} alt="avatar" />
          <p>Samson Frost</p>
        </TopSellerProfile>
        <TopSellerProfile>
          <img src={avatarSixImage} alt="avatar" />
          <p>Samson Frost</p>
        </TopSellerProfile>
        <TopSellerProfile>
          <img src={avatarSevenImage} alt="avatar" />
          <p>Samson Frost</p>
        </TopSellerProfile>
        <TopSellerProfile>
          <img src={avatarEightImage} alt="avatar" />
          <p>Samson Frost</p>
        </TopSellerProfile>
        <TopSellerProfile>
          <img src={avatarNineImage} alt="avatar" />
          <p>Samson Frost</p>
        </TopSellerProfile>
      </TopSellersCard>
    </Container>
  );
}
