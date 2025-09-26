import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Gallery images data
  const galleryImages = [
    {
      id: 1,
      src: "/onsite.png",
      alt: "Logistics operations onsite",
      category: "ocean",
      title: "Ocean Freight Operations",
      description: "Large container vessel loading operations at Lagos Port"
    },
    {
      id: 2,
      src: "/onsite1.png",
      alt: "Cargo operations",
      category: "air",
      title: "Air Cargo Loading",
      description: "Commercial cargo aircraft being loaded with freight"
    },
    {
      id: 3,
      src: "/onsite2.png",
      alt: "Transport fleet operations",
      category: "road",
      title: "Road Transport Fleet",
      description: "Our modern truck fleet ready for interstate delivery"
    },
    {
      id: 4,
      src: "/onsite3.png",
      alt: "Rail cargo operations",
      category: "rail",
      title: "Rail Freight Terminal",
      description: "Efficient rail cargo operations and container handling"
    },
    {
      id: 5,
      src: "/onsite4.png",
      alt: "Warehouse management",
      category: "warehouse",
      title: "Warehouse Management",
      description: "State-of-the-art warehouse and inventory management"
    },
    {
      id: 6,
      src: "/onsite5.png",
      alt: "Customs operations",
      category: "customs",
      title: "Customs Operations",
      description: "Professional customs clearance and documentation"
    },
    {
      id: 7,
      src: "/onsite6.png",
      alt: "Port operations",
      category: "ocean",
      title: "24/7 Port Operations",
      description: "Round-the-clock port operations and cargo handling"
    },
    {
      id: 8,
      src: "/onsite7.png",
      alt: "Industrial logistics",
      category: "warehouse",
      title: "Industrial Logistics",
      description: "Heavy industrial equipment and machinery transport"
    },
    {
      id: 9,
      src: "/onsite8.png",
      alt: "Highway transport",
      category: "road",
      title: "Highway Logistics",
      description: "Long-haul transportation across Nigerian highways"
    },
    {
      id: 10,
      src: "/onsite9.png",
      alt: "Container operations",
      category: "ocean",
      title: "Container Terminal Operations",
      description: "Advanced container handling and storage facilities"
    },
    {
      id: 11,
      src: "/onsite10.png",
      alt: "Air cargo terminal",
      category: "air",
      title: "Air Cargo Terminal",
      description: "Modern air freight processing and handling facilities"
    },
    {
      id: 12,
      src: "/onsite11.png",
      alt: "Fleet management",
      category: "road",
      title: "Fleet Management Center",
      description: "Centralized fleet monitoring and dispatch operations"
    },
    {
      id: 13,
      src: "/onsite12.png",
      alt: "Railway logistics hub",
      category: "rail",
      title: "Railway Logistics Hub",
      description: "Multi-modal rail transport coordination center"
    },
    {
      id: 14,
      src: "/onsite13.png",
      alt: "Cold storage facility",
      category: "warehouse",
      title: "Cold Storage Facility",
      description: "Temperature-controlled storage for perishable goods"
    },
    {
      id: 15,
      src: "/onsite14.png",
      alt: "Documentation center",
      category: "customs",
      title: "Documentation Center",
      description: "Comprehensive trade documentation and compliance services"
    },
    {
      id: 16,
      src: "/onsite15.png",
      alt: "Heavy machinery transport",
      category: "warehouse",
      title: "Heavy Machinery Handling",
      description: "Specialized equipment for oversized cargo operations"
    },
     {
      id: 17,
      src: "/onsite17.png",
      alt: "Container operations",
      category: "ocean",
      title: "Container Terminal Operations",
      description: "Advanced container handling and storage facilities"
    },
    {
      id: 18,
      src: "/onsite18.png",
      alt: "Air cargo terminal",
      category: "air",
      title: "Air Cargo Terminal",
      description: "Modern air freight processing and handling facilities"
    },
    {
      id: 19,
      src: "/onsite19.png",
      alt: "Fleet management",
      category: "road",
      title: "Fleet Management Center",
      description: "Centralized fleet monitoring and dispatch operations"
    },
    {
      id: 20,
      src: "/onsite20.png",
      alt: "Railway logistics hub",
      category: "rail",
      title: "Railway Logistics Hub",
      description: "Multi-modal rail transport coordination center"
    },
    {
      id: 21,
      src: "/onsite21.png",
      alt: "Cold storage facility",
      category: "warehouse",
      title: "Cold Storage Facility",
      description: "Temperature-controlled storage for perishable goods"
    },
    {
      id: 22,
      src: "/onsite22.png",
      alt: "Documentation center",
      category: "customs",
      title: "Documentation Center",
      description: "Comprehensive trade documentation and compliance services"
    },
    {
      id: 23,
      src: "/onsite23.png",
      alt: "Heavy machinery transport",
      category: "warehouse",
      title: "Heavy Machinery Handling",
      description: "Specialized equipment for oversized cargo operations"
    },
     {
      id: 24,
      src: "/onsite24.png",
      alt: "Heavy machinery transport",
      category: "warehouse",
      title: "Heavy Machinery Handling",
      description: "Specialized equipment for oversized cargo operations"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pt-16"
    >
      {/* Hero Section */}
      <section id="hero" className="bg-gradient-to-br from-[#004fa3] via-[#004fa3] to-[#004fa3] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={itemVariants}
          >
            <Badge className="mb-6 bg-white/10 text-white border-white/20">
              Visual Portfolio
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Gallery
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Explore our logistics operations through images showcasing our capabilities across ocean, air, road, and rail freight services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <motion.section variants={itemVariants} className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {galleryImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  layout
                >
                  <Card 
                    className="relative overflow-hidden cursor-pointer border-0 shadow-lg"
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <ZoomIn className="w-8 h-8 text-white opacity-0 hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
        </div>
      </motion.section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white font-bold text-2xl mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-white/90 text-lg">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;