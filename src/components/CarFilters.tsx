import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CarFiltersProps {
  selectedBrand: string;
  selectedType: string;
  onBrandChange: (brand: string) => void;
  onTypeChange: (type: string) => void;
}

const CarFilters = ({
  selectedBrand,
  selectedType,
  onBrandChange,
  onTypeChange,
}: CarFiltersProps) => {
  const brands = ["Все", "BMW", "Mercedes", "Audi", "Tesla", "Porsche"];
  const types = ["Все", "Седан", "Кроссовер", "Спорткар", "Электро"];

  return (
    <div className="bg-white py-8 px-6 rounded-lg shadow-lg mb-8">
      <h3 className="text-xl font-semibold mb-6 text-slate-900 font-montserrat">
        Фильтры
      </h3>

      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium text-slate-700 mb-3">МАРКА:</h4>
          <div className="flex flex-wrap gap-2">
            {brands.map((brand) => (
              <Button
                key={brand}
                variant={selectedBrand === brand ? "default" : "outline"}
                size="sm"
                onClick={() => onBrandChange(brand)}
                className={
                  selectedBrand === brand ? "bg-sky-500 hover:bg-sky-600" : ""
                }
              >
                {brand}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-slate-700 mb-3">
            ТИП КУЗОВА:
          </h4>
          <div className="flex flex-wrap gap-2">
            {types.map((type) => (
              <Badge
                key={type}
                variant={selectedType === type ? "default" : "outline"}
                className={`cursor-pointer transition-colors ${
                  selectedType === type
                    ? "bg-sky-500 hover:bg-sky-600 text-white"
                    : "hover:bg-slate-100"
                }`}
                onClick={() => onTypeChange(type)}
              >
                {type}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarFilters;
