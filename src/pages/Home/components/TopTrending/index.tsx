import {
  CarouselContainer,
  Navigation,
  NavigationButton,
  Ellipsis,
  CircleDot,
  CarouselList,
} from "./styles";
import { useState } from "react";
import { ICardData, importImages } from "./utils";
import { TrendingCard } from "./TopTrendingCard";

export function TopTrending() {
  const data = importImages(); // Move image importing and data into a utility function

  return (
    <>
      <header>
        <h1>Top Trending</h1>
      </header>
      <Carousel data={data} />
    </>
  );
}

interface CarouselProps {
  data: ICardData[];
}

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const [current, setCurrent] = useState(0);
  const pages = Math.ceil(data.length / 5);

  const next = () => {
    setCurrent(current === data.length - 5 ? 0 : current + 1);
  };

  const prev = () => {
    setCurrent(current === 0 ? data.length - 5 : current - 1);
  };

  return (
    <CarouselContainer>
      <CarouselList>
        {data.slice(current, current + 5).map((item, index) => (
          <TrendingCard key={index} item={item} />
        ))}
      </CarouselList>

      <Navigation>
        <NavigationButton onClick={prev} disabled={current === 0}>
          &#8612;
        </NavigationButton>
        <Ellipsis>
          {Array.from({ length: pages }, (_, index) => (
            <CircleDot key={index} active={current === index} />
          ))}
        </Ellipsis>
        <NavigationButton onClick={next} disabled={current === data.length - 4}>
          &#8614;
        </NavigationButton>
      </Navigation>
    </CarouselContainer>
  );
};
