import { ArrowUpRight, Edit } from "lucide-react";
import frenchFries from "@/assets/french-fries.jpg";

const BestPotatoesSection = () => {
  return (
    <section className="w-full px-6 py-8 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
        <div className="flex-1">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3">
            Best Potatoes For
            <br />
            French Fries
          </h2>
          
          <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed max-w-md">
            Russet potatoes are ideal. 
            Since they're dense, they 
            don't contain as much 
            water inside, which allows 
            them to get extra crispy.
          </p>
          
          <div className="flex items-center gap-2">
            <div className="bg-warm-orange rounded-full p-2">
              <ArrowUpRight className="h-4 w-4 text-white" />
            </div>
            <div className="bg-muted rounded-full p-2">
              <Edit className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </div>
        
        <div className="flex-shrink-0">
          <img 
            src={frenchFries}
            alt="Golden crispy french fries"
            className="w-32 h-24 md:w-48 md:h-36 lg:w-56 lg:h-40 object-cover rounded-2xl shadow-md"
          />
        </div>
      </div>
      </div>
    </section>
  );
};

export default BestPotatoesSection;