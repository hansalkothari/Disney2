import CarouselBanner from "@/components/CarouselBanner";
import { getDiscoverMovies } from "@/lib/getMovies";

type Props = {
  id?: string;
  keywords?: string;
};

const CarouselBannerWrapper = async ({ id, keywords }: Props) => {
  const movies = await getDiscoverMovies(id, keywords);
  return <CarouselBanner movies={movies} />;
};

export default CarouselBannerWrapper;
