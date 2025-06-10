import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface ProductCardProps {
  id: string;
  name: string;
  brand: string;
  image: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewsCount: number;
  power: string;
  color: string;
  discount?: number;
  isNew?: boolean;
  inStock: boolean;
}

const ProductCard = ({
  name,
  brand,
  image,
  price,
  oldPrice,
  rating,
  reviewsCount,
  power,
  color,
  discount,
  isNew = false,
  inStock = true,
}: ProductCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={12}
        className={
          i < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }
      />
    ));
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-200 bg-white border border-gray-200 max-w-sm">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover bg-gray-50"
        />

        {discount && (
          <Badge className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1">
            -{discount}%
          </Badge>
        )}

        {isNew && (
          <Badge className="absolute top-2 right-2 bg-purple-500 text-white text-xs px-2 py-1">
            NEW
          </Badge>
        )}

        <button className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
          <Icon name="Heart" size={16} className="text-gray-600" />
        </button>
      </div>

      <CardContent className="p-3">
        <div className="mb-2">
          <p className="text-xs text-gray-500 mb-1">{brand}</p>
          <h3 className="text-sm font-medium text-gray-900 line-clamp-2 leading-tight">
            {name}
          </h3>
        </div>

        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center gap-1">{renderStars(rating)}</div>
          <span className="text-xs text-gray-500">
            {rating} ({reviewsCount})
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-3 text-xs text-gray-600">
          <div className="flex items-center gap-1">
            <Icon name="Zap" size={12} />
            <span>{power}</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="Palette" size={12} />
            <span>{color}</span>
          </div>
        </div>

        <div className="mb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">
              {price.toLocaleString("ru-RU")} ₽
            </span>
            {oldPrice && (
              <span className="text-sm text-gray-500 line-through">
                {oldPrice.toLocaleString("ru-RU")} ₽
              </span>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-3 pt-0">
        <div className="w-full space-y-2">
          <Button
            className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            disabled={!inStock}
          >
            {inStock ? (
              <>
                <Icon name="ShoppingCart" size={16} />В корзину
              </>
            ) : (
              "Нет в наличии"
            )}
          </Button>

          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1 text-xs">
              <Icon name="BarChart3" size={14} />
              Сравнить
            </Button>
            <Button variant="outline" size="sm" className="flex-1 text-xs">
              <Icon name="Eye" size={14} />
              Быстрый просмотр
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
