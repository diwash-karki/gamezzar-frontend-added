import { CardTitle } from "../TodaysPicks/styles";
import {
  TopTrendingCardContent,
  TopTrendingCardFooter,
  TopTrendingCardImage,
  CardType,
  TopTrendingCard,
  TopTrendingCardPhoto,
} from "./styles";
import { ICardData } from "./utils";

export interface TrendingCardProps {
  item: ICardData;
}

export const TrendingCard: React.FC<TrendingCardProps> = ({ item }) => (
  <TopTrendingCard>
    <TopTrendingCardContent>
      <TopTrendingCardImage>
        <img src={item.img} alt="avatar" />
      </TopTrendingCardImage>
      <TopTrendingCardPhoto>
        <CardTitle>{item.title}</CardTitle>
        <CardType>{item.subtitle}</CardType>
      </TopTrendingCardPhoto>
      <TopTrendingCardFooter>
        <img src={item.footerImg} alt="avatar" />
        <div>
          <span>{item.creatorLabel}</span>
          <p>{item.creatorName}</p>
        </div>
      </TopTrendingCardFooter>
    </TopTrendingCardContent>
  </TopTrendingCard>
);
