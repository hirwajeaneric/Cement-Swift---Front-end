import { Link } from "react-router-dom"
import CategoryCard from "../../components/sections/CategoryCard";
import { CEMENT_CATEGORIES } from "../../utils/CementCategories";

const Home = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {/* Banner  */}
      <section className="banner_section flex flex-col justify-center items-center">
        <div className="full_with_container flex-col gap-10">
          <h1 className="text-6xl font-bold" style={{ lineHeight: '5rem' }}>Get access to the <br />best quality cement</h1>
          <h2 className="text-2xl">Order it and get it delivered to your door</h2>
          <Link to={'/products'} className="custom_button_1">Order now</Link>
        </div>
      </section>

      {/* Shop by type */}
      <section className="w-full flex flex-col justify-center items-center pt-28">
        <div className="full_with_container justify-between items-center">
          <h2 className="text-3xl">Shop by Categories</h2>
          <Link to={'/products'} className="" >Show All</Link>
        </div>
        <div className="mt-12 full_with_container items-center justify-between">
          {
            CEMENT_CATEGORIES.map((category, index) => {
              if (index > 5) {
                return (<></>)
              }

              return (
                <CategoryCard key={index} category={category}/>
              )
            })
          }
        </div>
      </section>

    </div>
  );
}

export default Home