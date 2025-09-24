import { Button } from "@/components/ui/button";
import heroBowl from "@/assets/hero-bowl.jpg";

const HeroSection = () => {
  return (
    <section className="w-full px-6 py-8 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
            Delicious Food Is
            <br />
            Waiting For You
          </h1>
          
          <p className="text-muted-foreground mb-6 leading-relaxed md:text-lg max-w-md">
            Our team of registered nurses and skilled healthcare 
            professionals provide in-home nursing
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="bg-warm-orange hover:bg-warm-orange-dark text-white px-6 py-3 rounded-full font-medium">
              Food Menu
            </Button>
            <Button variant="outline" className="border-warm-orange text-warm-orange hover:bg-warm-orange hover:text-white px-6 py-3 rounded-full font-medium">
              Book a Table
            </Button>
          </div>
          </div>
        
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <img 
                src={heroBowl} 
                alt="Colorful food bowl with rice, vegetables and shrimp" 
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;