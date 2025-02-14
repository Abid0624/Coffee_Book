import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Heading from "../Components/Heading";
import Categories from "../Components/Categories";

const Home = () => {
  const categories = useLoaderData();
  // console.log(categories);
  return (
    <div>
      {/* Banner */}
      <Banner></Banner>
      {/* Heading */}
      <Heading
        title={"Browse Coffees by Category"}
        subtitle={
          "Choose your desired coffee category to browse through specific coffees that fit in your taste"
        }
      ></Heading>
      {/* Categories tab section */}
      <Categories categories={categories}></Categories>
      {/* Dynamic Nested Section */}
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
