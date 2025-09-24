import { Calendar, ChefHat, Users, Truck } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Calendar,
      title: "Online booking"
    },
    {
      icon: ChefHat,
      title: "Catering service"
    },
    {
      icon: Users,
      title: "Membership"
    },
    {
      icon: Truck,
      title: "Delivery"
    }
  ];

  return (
    <section className="w-full px-6 py-8 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6 text-center">Our services</h2>
      
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-muted rounded-full p-3 md:p-4 mb-2">
                  <Icon className="h-5 w-5 md:h-6 md:w-6 text-muted-foreground" />
                </div>
                <span className="text-xs md:text-sm text-muted-foreground">{service.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;