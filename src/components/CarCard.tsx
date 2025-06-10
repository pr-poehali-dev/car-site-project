import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface CarCardProps {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: string;
  image: string;
  fuelType: string;
  transmission: string;
  enginePower: string;
  acceleration: string;
  isNew?: boolean;
}

const CarCard = ({
  brand,
  model,
  year,
  price,
  image,
  fuelType,
  transmission,
  enginePower,
  acceleration,
  isNew = false,
}: CarCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white">
      <div className="relative">
        <img
          src={image}
          alt={`${brand} ${model}`}
          className="w-full h-64 object-cover"
        />
        {isNew && (
          <Badge className="absolute top-4 left-4 bg-sky-500 text-white">
            НОВИНКА
          </Badge>
        )}
      </div>

      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 font-montserrat">
              {brand} {model}
            </h3>
            <p className="text-slate-600">{year} год</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-sky-600">{price}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <Icon name="Zap" size={16} />
            <span>{enginePower}</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Gauge" size={16} />
            <span>{acceleration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Fuel" size={16} />
            <span>{fuelType}</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Settings" size={16} />
            <span>{transmission}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <div className="flex gap-3 w-full">
          <Button className="flex-1 bg-sky-500 hover:bg-sky-600">
            Подробнее
          </Button>
          <Button variant="outline" className="flex-1">
            Тест-драйв
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
