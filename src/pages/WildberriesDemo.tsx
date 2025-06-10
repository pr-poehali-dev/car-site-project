import ProductCard from "@/components/ProductCard";

const WildberriesDemo = () => {
  const ironProduct = {
    id: "iron-001",
    name: "Утюг паровой с антипригарным покрытием, автоотключение, вертикальное отпаривание",
    brand: "REDMOND",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    price: 2890,
    oldPrice: 3490,
    rating: 4.3,
    reviewsCount: 247,
    power: "300 Вт",
    color: "Красный",
    discount: 17,
    isNew: false,
    inStock: true,
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Карточка товара Wildberries
        </h1>

        <div className="flex justify-center">
          <ProductCard {...ironProduct} />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard {...ironProduct} />
          <ProductCard
            {...ironProduct}
            name="Утюг паровой профессиональный с керамической подошвой"
            price={4590}
            oldPrice={5290}
            rating={4.7}
            reviewsCount={156}
            power="280 Вт"
            color="Синий"
            discount={13}
          />
          <ProductCard
            {...ironProduct}
            name="Утюг дорожный компактный складной с чехлом"
            price={1890}
            rating={4.1}
            reviewsCount={89}
            power="250 Вт"
            color="Черный"
            isNew={true}
          />
          <ProductCard
            {...ironProduct}
            name="Утюг беспроводной на подставке с парогенератором"
            price={7890}
            oldPrice={9990}
            rating={4.8}
            reviewsCount={324}
            power="320 Вт"
            color="Белый"
            discount={21}
          />
        </div>
      </div>
    </div>
  );
};

export default WildberriesDemo;
