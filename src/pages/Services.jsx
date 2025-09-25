import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Ship, Plane, Truck, Train, FileText, Fuel, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { services } from "../mock";
import Carousel from "../components/Carousel";

const iconMap = {
  Ship, Plane, Truck, Train, FileText, Fuel
};

const SERVICES = [
  {
    slug: "ocean",
    title: "Ocean Freight Services",
    // ...
  },
  {
    slug: "air",
    title: "Air Freight Services",
    // ...
  },
  {
    slug: "road",
    title: "Road Freight Services",
    // ...
  },
  {
    slug: "rail",
    title: "Rail Freight Services",
    // ...
  },
  {
    slug: "customs",
    title: "Customs Clearing Services",
    // ...
  },
  {
    slug: "oil",
    title: "Oil and Gas Transport Logistics",
    // ...
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

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
  <section id="hero" className="bg-gradient-to-br from-[#004fa3] via-[#004fa3] to-[#004fa3] dark:from-[#004fa3] dark:via-[#004fa3] dark:to-[#004fa3] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={itemVariants}
          >
            <Badge className="mb-6 bg-white/10 text-white border-white/20">
              Comprehensive Logistics Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 dark:text-white">
              Our Services
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              From ocean freight to customs clearing, we provide end-to-end logistics services tailored to your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="w-full py-12 bg-white dark:bg-[#004fa3]">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          
          <div id="service-accordion">
            <Carousel />
          </div>
        </div>
      </section>

      {/* Service Categories */}
  <motion.section variants={itemVariants} className="py-20 bg-gradient-to-br from-slate-50 to-white dark:from-[#004fa3] dark:to-[#004fa3]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Additional Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Beyond our core logistics services, we offer specialized solutions to meet diverse industry needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Procurement & Logistics",
                description: "Complete procurement solutions with integrated logistics management",
                features: ["Vendor management", "Quality assurance", "Cost optimization"]
              },
              {
                title: "Ship Chandler Services",
                description: "Comprehensive ship supply services for maritime operations",
                features: ["Provision supply", "Technical services", "Port services"]
              },
              {
                title: "Maritime Management",
                description: "Professional maritime operations and vessel management services",
                features: ["Vessel operations", "Crew management", "Port coordination"]
              },
              {
                title: "Custom Brokerage",
                description: "Expert customs clearance and trade compliance services",
                features: ["Documentation", "Duty management", "Compliance consulting"]
              },
              {
                title: "Haulage Services",
                description: "Reliable road transport and cargo haulage solutions",
                features: ["Interstate transport", "Heavy haulage", "Last-mile delivery"]
              },
              {
                title: "Agro Products Handling",
                description: "Specialized logistics for agricultural products and commodities",
                features: ["Cold chain", "Export documentation", "Quality preservation"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg bg-white dark:bg-[#004fa3]">
                  <CardHeader>
                    <CardTitle className="text-xl text-[#004fa3] dark:text-white">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 dark:text-white">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-600 dark:text-white">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
  <motion.section variants={itemVariants} className="py-20 bg-white dark:bg-[#004fa3]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Our Service Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A streamlined approach ensuring efficient and reliable logistics solutions for every client.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Understanding your specific logistics requirements and challenges"
              },
              {
                step: "02",
                title: "Planning",
                description: "Developing customized logistics solutions tailored to your needs"
              },
              {
                step: "03",
                title: "Execution",
                description: "Implementing the logistics plan with precision and expertise"
              },
              {
                step: "04",
                title: "Monitoring",
                description: "Continuous tracking and optimization throughout the process"
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#004fa3] to-[#004fa3] dark:bg-[#004fa3] rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-white">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold text-[#004fa3] mb-4 dark:text-white">{process.title}</h3>
                <p className="text-slate-600 leading-relaxed dark:text-white">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        variants={itemVariants}
        className="py-20 bg-gradient-to-br from-[#004fa3] via-[#004fa3] to-[#004fa3] dark:from-[#004fa3] dark:via-[#004fa3] dark:to-[#004fa3] text-white"
      >
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
              Ready to Optimize Your Logistics?
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed dark:text-white">
              Let our experts design a customized logistics solution that meets your specific business requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-slate-900 text-lg px-8 py-6"
              >
                <Link to="/contact">
                  Request Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white text-lg px-8 py-6"
              >
                <Link to="/projects">
                  View Projects
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Services;
// Ensure hero section has id="hero" for scroll targeting