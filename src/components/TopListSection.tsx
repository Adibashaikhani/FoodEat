import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import noodlesOne from "@/assets/noodles-one.jpg";
import noodlesTwo from "@/assets/noodles-two.jpg";
import noodlesThree from "@/assets/noodles-three.jpg";

const TopListSection = () => {
  const menuItems = [
    {
      id: 1,
      name: "Noodles three",
      description: "Wide pork with dried shrimp",
      price: 125,
      image: noodlesThree,
      rating: null
    },
    {
      id: 2,
      name: "Noodles one",
      description: "Noodles soup beef with Thai herbs hot pot",
      price: 205,
      image: noodlesOne,
      rating: 5
    },
    {
      id: 3,
      name: "Noodles two",
      description: "Noodles green bean soup",
      price: 145,
      image: noodlesTwo,
      rating: null
    }
  ];

  return (
    <section className="w-full px-6 py-8 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Top List</h2>
        <p className="text-muted-foreground">Our Wednesday menu</p>
      </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {menuItems.map((item) => (
          <div key={item.id} className="bg-card rounded-2xl p-4 md:p-6 shadow-sm border border-warm-peach">
            <div className="relative mb-3">
              <img 
                src={item.image}
                alt={item.name}
                className="w-full h-32 md:h-40 object-cover rounded-xl"
              />
              {item.rating && (
                <div className="absolute -top-2 -right-2 bg-warm-orange rounded-full p-1">
                  <Star className="h-3 w-3 text-white fill-white" />
                </div>
              )}
            </div>
            
            <h3 className="font-semibold text-sm md:text-base text-foreground mb-1">{item.name}</h3>
            <p className="text-xs md:text-sm text-muted-foreground mb-2 leading-relaxed">{item.description}</p>
            
            <div className="flex items-center justify-between">
              <span className="font-bold text-foreground md:text-lg">{item.price}</span>
              <Button size="sm" className="bg-warm-orange hover:bg-warm-orange-dark text-white rounded-full h-8 w-8 md:h-10 md:w-10 p-0">
                <span className="text-sm md:text-base">+</span>
              </Button>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default TopListSection;