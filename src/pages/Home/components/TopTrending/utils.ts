import avatarTwoImage from "../../../../assets/avatar2.svg";
import zeldaImg from "../../../../assets/zelda.svg";
import tlofImage from "../../../../assets/tlof.svg";
import gowImage from "../../../../assets/gow.svg";
import callistImage from "../../../../assets/callist.svg";

export interface ICardData {
  img: string;
  title: string;
  subtitle: string;
  footerImg: string;
  creatorLabel: string;
  creatorName: string;
}

export const importImages = (): ICardData[] => [
  {
    img: zeldaImg,
    title: "Hamlet Contemplates",
    subtitle: "BSC",
    footerImg: avatarTwoImage,
    creatorLabel: "Creator",
    creatorName: "Salvador Dali",
  },
  {
    img: tlofImage,
    title: "Hamlet Contemplates",
    subtitle: "BSC",
    footerImg: avatarTwoImage,
    creatorLabel: "Creator",
    creatorName: "Salvador Dali",
  },
  {
    img: gowImage,
    title: "Hamlet Contemplates",
    subtitle: "BSC",
    footerImg: avatarTwoImage,
    creatorLabel: "Creator",
    creatorName: "Salvador Dali",
  },
  {
    img: callistImage,
    title: "Hamlet Contemplates",
    subtitle: "BSC",
    footerImg: avatarTwoImage,
    creatorLabel: "Creator",
    creatorName: "Salvador Dali",
  },
  {
    img: gowImage,
    title: "Hamlet Contemplates",
    subtitle: "BSC",
    footerImg: avatarTwoImage,
    creatorLabel: "Creator",
    creatorName: "Salvador Dali",
  },
  {
    img: callistImage,
    title: "Hamlet Contemplates",
    subtitle: "BSC",
    footerImg: avatarTwoImage,
    creatorLabel: "Creator",
    creatorName: "Salvador Dali",
  },
  {
    img: zeldaImg,
    title: "Hamlet Contemplates",
    subtitle: "BSC",
    footerImg: avatarTwoImage,
    creatorLabel: "Creator",
    creatorName: "Salvador Dali",
  },
];
