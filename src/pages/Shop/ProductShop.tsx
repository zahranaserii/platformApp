import { message } from "antd";
import { AxiosError, AxiosResponse } from "axios";
import { useEffect, useMemo, useState } from "react";
import LoadingCover from "../../components/LoadingCover";
import { httpInterseptedServise2 } from "../../core/http-servise";
import { IProducts } from "../../models/ShopModel";
import ProductItemCart from "./ProductItemCart";

const ProductShop = () => {
  //states
  const [products, setProducts] = useState<IProducts[] | undefined>([]);
  const [loading, setLoading] = useState<boolean>(false);
  //functions
  const getProducts = async () => {
    setLoading(true);
    await httpInterseptedServise2
      .get("/products")
      .then((res: AxiosResponse<IProducts[]>) => {
        setLoading(false);
        setProducts(res.data);
      })
      .catch((error: AxiosError) => {
        setLoading(false);
        message.error(error.message);
      });
  };
  //constants
  const productItemData = useMemo(() => {
    if (products) {
      return products.map((product) => {
        return <ProductItemCart key={product.id} data={product} />;
      });
    }
  }, [products]);
  //effects
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      {loading && <LoadingCover loading={loading} />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {productItemData}
      </div>
    </div>
  );
};

export default ProductShop;
