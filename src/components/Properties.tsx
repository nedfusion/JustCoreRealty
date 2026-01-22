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
            <div className="image-zoom order-2 lg:order-1">
              <OptimizedImage
                src="/au2a0145_2.jpg"
                alt="Luxury Apartments"
                className="w-full h-full object-cover"
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
            <div className="image-zoom">
              <OptimizedImage
                src="/au2a0077.jpg"
                alt="Sky Residences"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
