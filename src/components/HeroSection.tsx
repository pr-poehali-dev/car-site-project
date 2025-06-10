import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 to-slate-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)",
        }}
      ></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 font-montserrat tracking-tight">
          ЭЛИТНЫЕ
          <span className="block text-sky-400">АВТОМОБИЛИ</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Откройте для себя коллекцию премиальных автомобилей с непревзойденным
          дизайном и технологиями
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 text-lg"
          >
            Посмотреть коллекцию
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg"
          >
            Записаться на тест-драйв
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
