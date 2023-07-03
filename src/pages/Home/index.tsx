import { Container } from "./styles";
import { TopTrending } from "./components/TopTrending";
import { TopSellers } from "./components/TopSeller";
import { PromoContent } from "./components/PromoContent";
import { TodaysDeals } from "./components/TodaysPicks";
import { PopularCollection } from "./components/PopularCollection";
import { CardOptionList } from "./components/CardOptionList";

export function Home() {
  return (
    <Container>
      <PromoContent />
      <section>
        <TopTrending />
        <TopSellers />
        <TodaysDeals />
        <PopularCollection />
        <CardOptionList />
      </section>
    </Container>
  );
}
