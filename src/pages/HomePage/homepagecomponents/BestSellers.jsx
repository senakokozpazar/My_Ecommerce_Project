import ColorCircle from "@/components/ColorCircle";
import { products } from "@/mockdatas/product";

export default function BestSellers() {
  const filteredProducts = products.filter((_, index) =>
    [0, 1, 2, 3, 7, 8, 9, 10].includes(index),
  );

  return (
    <div className="mx-5 flex flex-col items-center font-montserrat">
      <p className="mt-24">Featured Products</p>
      <h2 className="m-5 max-w-48 text-center text-2xl font-bold leading-[32px] tracking-[0.1px] lg:max-w-96">
        BESTSELLERS PRODUCTS
      </h2>
      <p className="max-w-48 text-center text-sm font-light leading-[20px] tracking-[0.2px] text-[#737373] lg:mb-10 lg:max-w-96">
        Problems trying to resolve the conflict between
      </p>
      {products.slice(0, 6).map((product) => (
        <div
          key={product.id}
          className="m-10 flex flex-col items-center justify-center gap-3 lg:hidden"
        >
          <img src={product.imageSrc} alt={product.title} />
          <p className="mt-4 text-center text-base font-semibold">
            {product.title}
          </p>
          <p className="text-center text-sm font-semibold text-gray-500">
            {product.subtitle}
          </p>
          <div className="mt-2 flex items-center justify-center">
            <p className="mr-2 text-base font-semibold text-[#BDBDBD]">
              {product.oldPrice}
            </p>
            <p className="text-base font-semibold text-[#23856D]">
              {product.newPrice}
            </p>
          </div>
          <ColorCircle />
        </div>
      ))}
      <div className="hidden lg:flex lg:flex-wrap lg:justify-center lg:gap-3">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="my-5 mb-24 flex-col justify-center gap-3"
          >
            <img
              src={product.imageSrc}
              alt={product.title}
              className="h-[427px] w-[239px]"
            />
            <p className="mt-4 text-center text-base font-semibold">
              {product.title}
            </p>
            <p className="text-center text-sm font-semibold text-gray-500">
              {product.subtitle}
            </p>
            <div className="mt-2 flex items-center justify-center">
              <p className="mr-2 text-base font-semibold text-[#BDBDBD]">
                {product.oldPrice}
              </p>
              <p className="text-base font-semibold text-[#23856D]">
                {product.newPrice}
              </p>
            </div>
            <ColorCircle />
          </div>
        ))}
      </div>
    </div>
  );
}
