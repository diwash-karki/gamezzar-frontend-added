import { useState } from "react";
import {
  Container,
  LeftSideMenuContainer,
  ImageContainer,
  NavigationContainer,
  SpanOptionButton,
  RightSideContainer,
} from "./styles";
import { Opportunities } from "./components/Opportunities";
import { Proposal } from "./components/Proposals";

export function Dashboard() {
  const [activeTab, setActiveTab] = useState("Opportunities");
  return (
    <Container>
      <LeftSideMenuContainer>
        <ImageContainer>
          <img
            src="https://gamezzar-images.s3.us-east-2.amazonaws.com/avatar/avatar1.svg"
            alt=""
          />
          <p>Wellington Santos</p>
        </ImageContainer>
        <NavigationContainer>
          <SpanOptionButton onClick={() => setActiveTab("Opportunities")}>
            Opportunities
          </SpanOptionButton>
          <SpanOptionButton onClick={() => setActiveTab("Proposals")}>
            Proposals
          </SpanOptionButton>
          <SpanOptionButton onClick={() => setActiveTab("Trades")}>Ongoing Trades</SpanOptionButton>
          <SpanOptionButton onClick={() => setActiveTab("Wishlist")}>Wishlist</SpanOptionButton>
          <SpanOptionButton onClick={() => setActiveTab("Collection")}>My Collection</SpanOptionButton>
          <SpanOptionButton onClick={() => setActiveTab("History")}>Trade History</SpanOptionButton>
          <SpanOptionButton onClick={() => setActiveTab("Following")}>Following</SpanOptionButton>
          <SpanOptionButton onClick={() => setActiveTab("Preferences")}>Preferences</SpanOptionButton>
          <SpanOptionButton onClick={() => setActiveTab("Profile")}>Edit Profile</SpanOptionButton>
        </NavigationContainer>
      </LeftSideMenuContainer>
      <RightSideContainer>
        {(() => {
          switch (activeTab) {
            case "Opportunities":
              return <Opportunities />;
            case "Proposals":
              return <Proposal />;
            case "Trades":
              return <div>This is the Trades content.</div>;
            case "Wishlist":
              return <div>This is the Wishist content.</div>;
            case "Collection":
              return <div>This is the Collection content.</div>;
            case "History":
              return <div>This is the History content.</div>;
            case "Following":
              return <div>This is the Following content.</div>;
            case "Preferences":
              return <div>This is the Preferences content.</div>;
            case "Profile":
              return <div>This is the Profile content.</div>;
            default:
              return null;
          }
        })()}
      </RightSideContainer>
    </Container>
  );
}
