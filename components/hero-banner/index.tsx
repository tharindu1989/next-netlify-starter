import { HeroBanner } from "graphql/types/HeroBanner";

interface Props {
  data: HeroBanner;
}
export default function HeroBannerView({ data }: Props) {
  return <h1>{data.title}</h1>;
}
