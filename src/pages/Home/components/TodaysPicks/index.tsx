// Components.js
import {
  Container,
  CardList,
  CardContainer,
  CardSection,
  CardFooterContent,
  CardTitle,
  CardType,
  CardOwner,
  OwnerDetails,
  ShowMoreButton
} from "./styles";
import { Button } from "../../../../components/Button";

import zeldaImg from "../../../../assets/zelda.svg";
import tlofImage from "../../../../assets/tlof.svg";
import gowImage from "../../../../assets/gow.svg";
import callistImage from "../../../../assets/callist.svg";
import avatarTwoImage from "../../../../assets/avatar2.svg";
import { useState } from "react";

export function TodaysDeals() {
  const [visibleRows, setVisibleRows] = useState(2);

  const cards = [
    // Array of card data (you can replace this with actual data)
    {
      src: zeldaImg,
      alt: "Product",
      title: "The Legend Of Zelda: Breath of the Wild",
      owner: "SalvadorDali",
    },
    {
      src: tlofImage,
      alt: "Product",
      title: "The Legend Of Zelda: Breath of the Wild",
      owner: "SalvadorDali",
    },
    {
      src: gowImage,
      alt: "Product",
      title: "The Legend Of Zelda: Breath of the Wild",
      owner: "SalvadorDali",
    },
    {
      src: callistImage,
      alt: "Product",
      title: "The Legend Of Zelda: Breath of the Wild",
      owner: "SalvadorDali",
    },
    {
      src: zeldaImg,
      alt: "Product",
      title: "The Legend Of Zelda: Breath of the Wild",
      owner: "SalvadorDali",
    },
    {
      src: zeldaImg,
      alt: "Product",
      title: "The Legend Of Zelda: Breath of the Wild",
      owner: "SalvadorDali",
    },
    {
      src: zeldaImg,
      alt: "Product",
      title: "The Legend Of Zelda: Breath of the Wild",
      owner: "SalvadorDali",
    },
    {
      src: zeldaImg,
      alt: "Product",
      title: "The Legend Of Zelda: Breath of the Wild",
      owner: "SalvadorDali",
    },
    {
      src: zeldaImg,
      alt: "Product",
      title: "The Legend Of Zelda: Breath of the Wild",
      owner: "SalvadorDali",
    },
    {
      src: zeldaImg,
      alt: "Product",
      title: "The Legend Of Zelda: Breath of the Wild",
      owner: "SalvadorDali",
    },
    {
      src: zeldaImg,
      alt: "Product",
      title: "The Legend Of Zelda: Breath of the Wild",
      owner: "SalvadorDali",
    },
    // Other cards
  ];

  const visibleCards = cards.slice(0, visibleRows * 4); // Show 4 cards per row

  return (
    <Container>
      <h1>Today's Picks</h1>
      <CardList>
        {visibleCards.map((card, i) => (
          <Card
            key={i}
            src={card.src}
            alt={card.alt}
            title={card.title}
            owner={card.owner}
          />
        ))}
      </CardList>
      {visibleRows * 4 < cards.length && (
        <ShowMoreButton onClick={() => setVisibleRows(visibleRows + 1)}>
          Show more
        </ShowMoreButton>
      )}
    </Container>
  );
}

interface CardProps {
  src: string;
  alt: string;
  title: string;
  owner: string;
}

const Card = ({ src, alt, title, owner }: CardProps) => (
  <CardContainer>
    <img src={src} alt={alt} />
    <CardSection>
      <div>
        <CardTitle>{title}</CardTitle>
        <CardType>BSC</CardType>
      </div>
      <CardFooterContent>
        <CardOwner>
          <img src={avatarTwoImage} alt="Owner" />
          <OwnerDetails>
            <h3>Owned by</h3>
            <h4>{owner}</h4>
          </OwnerDetails>
        </CardOwner>
        <div>
          <Button primary>Trade</Button>
          <button>View History</button>
        </div>
      </CardFooterContent>
    </CardSection>
  </CardContainer>
);
