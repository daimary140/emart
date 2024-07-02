import { HeroBanner, Footer, Product, FooterBanner } from "@/components";
import { client } from "@/lib/client";

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={ bannerData.length && bannerData[0] } />

      <div className="products-heading">
        <h2>Best selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className="products-container">
        {
          products?.map((product) => <Product key={product._id} product={product} />)
        }
      </div>

      <FooterBanner footerBanner={ bannerData && bannerData[0]} />
    </>
  )
}


export async function getServerSideProps() {

  const products = await client.fetch('*[_type == "product"]');

  const bannerData = await client.fetch('*[_type == "banner"]');


  return {
    props: {
      products,
      bannerData
    }
  }
}

export default Home;