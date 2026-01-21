import { Users, Dumbbell, Briefcase, Waves, Wifi, Car, Shield, Home } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

export default function Amenities() {
  const amenities = [
    {
      icon: Users,
      title: "Residents' Club",
      image: "/au2a0050.jpg"
    },
    {
      icon: Dumbbell,
      title: "Private Fitness Center",
      image: "/au2a0077.jpg"
    },
    {
      icon: Briefcase,
      title: "Concierge Services",
      image: "/au2a0091.jpg"
    },
    {
      icon: Waves,
      title: "Rooftop Infinity Pool",
      image: "/au2a0145_2.jpg"
    },
    {
      icon: Briefcase,
      title: "Co-Working Spaces",
      image: "/front_view.jpeg"
    },
    {
      icon: Wifi,
      title: "Smart Home Integration",
      image: "/au2a0050.jpg"
    },
    {
      icon: Car,
      title: "Valet Parking",
      image: "/au2a0077.jpg"
    },
    {
      icon: Shield,
      title: "24/7 Security",
      image: "/au2a0091.jpg"
    }
  ];

  return (
    <section id="amenities" className="py-28 lg:py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="h-0.5 w-20 bg-gold mb-8 mx-auto"></div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            World-Class Amenities
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light">
            Experience an elevated lifestyle with our comprehensive range of luxury amenities
            designed to cater to your every need.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-square overflow-hidden bg-gray-900 mb-6">
                  <OptimizedImage
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    aspectRatio="aspect-square"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Icon className="w-12 h-12 text-gold" />
                  </div>
                </div>
                <h4 className="text-white font-semibold text-center group-hover:text-gold transition-colors duration-300">
                  {amenity.title}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
