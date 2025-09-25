import { Api } from "@/api/config/Api";
import Carousel from "./_page/Carousel";
import Category from "./_page/Category";
import FeaturedProducts from "./_page/FeaturedProducts";



const getAllHomePageData = async () => {
  const response = await Api.getAllHomePageData();
  console.log(response.data.data)
  return response.data.data
};

// console.log(banners)

export default async function Home() {


  const Homepage = await getAllHomePageData();

  return (
    <>
      <Carousel gallery = {Homepage.banners} />
      <Category CategoryData = {Homepage.categories}/>
      <FeaturedProducts featuredProductsData = {Homepage.featured}/>
    </>
  );
}
