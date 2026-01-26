import OptimizedImage from './OptimizedImage';

export default function Properties() {
  const signatureImages = [
    '/img_9848 copy.jpg',
    '/img_9857 copy.jpg',
    '/img_9863 copy.jpg',
    '/img_9866 copy.jpg',
    '/img_9870 copy.jpg'
  ];

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
                src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800"
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
                src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Sky Residences"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden rounded-lg shadow-2xl aspect-[4/3] order-2 lg:order-1 bg-gray-100">
              <div className="grid grid-cols-2 gap-2 w-full h-full p-2">
                {signatureImages.map((img, idx) => (
                  <div key={idx} className={`relative overflow-hidden rounded ${idx === 0 ? 'col-span-2' : ''}`}>
                    <OptimizedImage
                      src={img}
                      alt={`Signature Project ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="h-0.5 w-16 bg-gold"></div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Signature Projects
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
                  <p className="text-gray-700 font-light">Premium finishes throughout</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 font-light">24/7 concierge and security</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
