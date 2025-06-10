import { useState } from "react";
import CarCard from "./CarCard";
import CarFilters from "./CarFilters";

const CarShowcase = () => {
  const [selectedBrand, setSelectedBrand] = useState("Все");
  const [selectedType, setSelectedType] = useState("Все");

  const cars = [
    {
      id: "1",
      brand: "BMW",
      model: "X5 M Competition",
      year: 2024,
      price: "8 900 000 ₽",
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      fuelType: "Бензин",
      transmission: "Автомат",
      enginePower: "625 л.с.",
      acceleration: "3.8 сек",
      isNew: true,
    },
    {
      id: "2",
      brand: "Mercedes",
      model: "AMG GT 63 S",
      year: 2024,
      price: "12 500 000 ₽",
      image:
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      fuelType: "Бензин",
      transmission: "Автомат",
      enginePower: "630 л.с.",
      acceleration: "3.2 сек",
      isNew: false,
    },
    {
      id: "3",
      brand: "Tesla",
      model: "Model S Plaid",
      year: 2024,
      price: "7 200 000 ₽",
      image:
        "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      fuelType: "Электро",
      transmission: "Автомат",
      enginePower: "1020 л.с.",
      acceleration: "2.1 сек",
      isNew: true,
    },
    {
      id: "4",
      brand: "Porsche",
      model: "911 Turbo S",
      year: 2024,
      price: "15 800 000 ₽",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      fuelType: "Бензин",
      transmission: "Автомат",
      enginePower: "650 л.с.",
      acceleration: "2.7 сек",
      isNew: false,
    },
    {
      id: "5",
      brand: "Audi",
      model: "RS e-tron GT",
      year: 2024,
      price: "9 800 000 ₽",
      image:
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      fuelType: "Электро",
      transmission: "Автомат",
      enginePower: "646 л.с.",
      acceleration: "3.3 сек",
      isNew: true,
    },
    {
      id: "6",
      brand: "BMW",
      model: "M4 Competition",
      year: 2024,
      price: "6 700 000 ₽",
      image:
        "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      fuelType: "Бензин",
      transmission: "Автомат",
      enginePower: "510 л.с.",
      acceleration: "3.9 сек",
      isNew: false,
    },
  ];

  const filteredCars = cars.filter((car) => {
    const brandMatch = selectedBrand === "Все" || car.brand === selectedBrand;
    const typeMatch =
      selectedType === "Все" ||
      (selectedType === "Спорткар" &&
        ["911 Turbo S", "AMG GT 63 S", "M4 Competition"].includes(car.model)) ||
      (selectedType === "Кроссовер" &&
        ["X5 M Competition"].includes(car.model)) ||
      (selectedType === "Седан" &&
        ["Model S Plaid", "RS e-tron GT"].includes(car.model)) ||
      (selectedType === "Электро" && car.fuelType === "Электро");

    return brandMatch && typeMatch;
  });

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-montserrat">
            НАША КОЛЛЕКЦИЯ
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Каждый автомобиль в нашей коллекции — это произведение искусства и
            инженерного мастерства
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <CarFilters
              selectedBrand={selectedBrand}
              selectedType={selectedType}
              onBrandChange={setSelectedBrand}
              onTypeChange={setSelectedType}
            />
          </div>

          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCars.map((car) => (
                <CarCard key={car.id} {...car} />
              ))}
            </div>

            {filteredCars.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-slate-500">
                  По выбранным фильтрам ничего не найдено
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarShowcase;
