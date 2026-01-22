import OptimizedImage from './OptimizedImage';

export default function Properties() {
  return (
    <section id="properties" className="py-28 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="h-0.5 w-20 bg-gold mb-8 mx-auto"></div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Portfolio
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Discover exceptional residences designed for those who demand the finest in luxury living.
          </p>
        </div>

        <div className="space-y-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden rounded-lg shadow-2xl aspect-[4/3] order-2 lg:order-1 bg-gray-100">
              <OptimizedImage
                src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Luxury Apartments"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="h-0.5 w-16 bg-gold"></div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Luxury Apartments
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                Our luxury apartments offer the perfect combination of space, style, and
                sophistication. Each residence features premium finishes, open-concept layouts,
                and floor-to-ceiling windows that flood the interiors with natural light.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 font-light">2-4 bedroom configurations available</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 font-light">Spacious living areas with premium finishes</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 font-light">Private balconies with stunning views</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 font-light">State-of-the-art kitchen appliances</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="h-0.5 w-16 bg-gold"></div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Sky Residences
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                Elevate your lifestyle with our exclusive sky residences and penthouses. These
                exceptional properties offer unparalleled luxury with panoramic city views,
                expansive terraces, and bespoke interior design.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 font-light">3-5 bedroom luxury penthouses</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 font-light">Private rooftop terraces and pools</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 font-light">Custom interior design services included</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 font-light">360-degree panoramic city views</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-2xl aspect-[4/3] bg-gray-100">
              <OptimizedImage
                src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Sky Residences"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden rounded-lg shadow-2xl aspect-[4/3] order-2 lg:order-1 bg-gray-100">
              <OptimizedImage
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Urban Estates"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="h-0.5 w-16 bg-gold"></div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Urban Estates
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                Experience contemporary living in the heart of the city. Our urban estates combine
                modern architecture with premium amenities, offering an unmatched lifestyle for
                discerning professionals and families.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 font-light">Prime city center locations</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 font-light">Smart home technology integration</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 font-light">Concierge and valet services</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 font-light">Walking distance to entertainment and dining</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="h-0.5 w-16 bg-gold"></div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Coastal Villas
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                Discover waterfront living at its finest. Our coastal villas offer breathtaking
                ocean views, private beach access, and sophisticated design that seamlessly blends
                indoor and outdoor luxury.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 font-light">Direct beach access</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 font-light">Infinity pools and outdoor lounges</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 font-light">Floor-to-ceiling glass walls</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 font-light">Sunset terraces and entertainment areas</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-2xl aspect-[4/3] bg-gray-100">
              <OptimizedImage
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Coastal Villas"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden rounded-lg shadow-2xl aspect-[4/3] order-2 lg:order-1 bg-gray-100">
              <OptimizedImage
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Garden Residences"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="h-0.5 w-16 bg-gold"></div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Garden Residences
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                Embrace tranquility in our garden residences. Surrounded by lush landscaping and
                serene outdoor spaces, these homes offer a peaceful retreat without sacrificing
                luxury and convenience.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 font-light">Private landscaped gardens</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 font-light">Outdoor dining and lounge areas</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 font-light">Eco-friendly design features</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 font-light">Tranquil water features</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="h-0.5 w-16 bg-gold"></div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Signature Estates
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                Our flagship properties represent the pinnacle of luxury real estate. Each signature
                estate is a masterpiece of design, featuring bespoke details, unparalleled amenities,
                and exclusive locations.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 font-light">Custom architectural design</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 font-light">Private elevators and entrances</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 font-light">Wine cellars and private cinemas</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 font-light">24/7 concierge and security</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-2xl aspect-[4/3] bg-gray-100">
              <OptimizedImage
                src="https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Signature Estates"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden rounded-lg shadow-2xl aspect-[4/3] order-2 lg:order-1 bg-gray-100">
              <OptimizedImage
                src="https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Metropolitan Towers"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="h-0.5 w-16 bg-gold"></div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Metropolitan Towers
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                Rise above the ordinary in our metropolitan towers. These architectural landmarks
                offer sophisticated urban living with unmatched amenities, stunning views, and a
                prestigious address in the city's most coveted neighborhoods.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 font-light">Panoramic city skyline views</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 font-light">Rooftop sky gardens and lounges</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 font-light">Exclusive resident amenities</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 font-light">High-speed elevators and smart building tech</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
