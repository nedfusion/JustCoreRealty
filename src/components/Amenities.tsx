import { Users, Dumbbell, Briefcase, Waves, Wifi, Car, Shield } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Amenities() {
  const amenities = [
    {
      icon: Users,
      title: "Residents' Club",
      image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Dumbbell,
      title: "Private Fitness Center",
      image: "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Briefcase,
      title: "Concierge Services",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Waves,
      title: "Rooftop Infinity Pool",
      image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Briefcase,
      title: "Co-Working Spaces",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Wifi,
      title: "Smart Home Integration",
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Car,
      title: "Valet Parking",
      image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Shield,
      title: "24/7 Security",
      image: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section id="amenities" className="py-28 lg:py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-20">
          <div className="h-0.5 w-20 bg-gold mb-8 mx-auto"></div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            World-Class Amenities
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light">
            Experience an elevated lifestyle with our comprehensive range of luxury amenities
            designed to cater to your every need.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <ScrollReveal key={index} delay={index * 50}>
              <div className="group cursor-pointer">
                <div className="relative aspect-square overflow-hidden bg-gray-900 mb-6">
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-full h-full object-cover image-hover-effect"
                    loading="lazy"
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
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
