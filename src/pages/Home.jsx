import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Ship, Plane, Truck, Train, FileText, Fuel,
  ArrowRight, CheckCircle, Award, Users, Target,
  Calendar, MapPin, ThumbsUp, Quote, Star
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { 
  companyInfo, 
  services, 
  projects, 
  testimonials, 
  stats, 
  competitiveAdvantages 
} from "../mock";

const iconMap = {
  Ship, Plane, Truck, Train, FileText, Fuel,
  CheckCircle, Calendar, MapPin, ThumbsUp,
  Target, Award
};

const heroSlides = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1678182451047-196f22a4143e?auto=format&fit=crop&w=1200&q=80",
    alt: "Shipping containers at port"
  },
  {
    type: "image",
    src: "https://i.ibb.co/6RSdgCY8/photo-1697733363916-961acc6bacee.jpg",
    alt: "Cargo ship at sea"
  },
  {
    type: "image",
    src: "https://i.ibb.co/bjcyYDrC/truck.jpg",
    alt: "Freight train on tracks"
  },
  {
    type: "video",
    src: "https://youtu.be/-kBIwbS3ECk",
    alt: "Cargo shipping video"
  }
];

function HeroCarousel() {
  const [current, setCurrent] = React.useState(0);
  const timeoutRef = React.useRef(null);
  const slideCount = heroSlides.length;

  React.useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slideCount);
    }, 5000);
    return () => clearTimeout(timeoutRef.current);
  }, [current, slideCount]);

  return (
    <div className="w-full h-full relative">
      {heroSlides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          {slide.type === "image" ? (
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover opacity-20"
              draggable="false"
            />
          ) : (
            // Support YouTube links as well as direct MP4s
            slide.src.includes('youtu') ? (
              <div className="absolute inset-0 w-full h-full">
                <iframe
                  src={`https://www.youtube.com/embed/${slide.src.split('/').pop()}?autoplay=1&mute=1&loop=1&playlist=${slide.src.split('/').pop()}&controls=0&disablekb=1&modestbranding=1&rel=0&showinfo=0`}
                  title={slide.alt}
                  className="w-full h-full object-cover opacity-20 pointer-events-none"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  frameBorder="0"
                  tabIndex={-1}
                />
              </div>
            ) : (
              <video
                src={slide.src}
                className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                autoPlay
                loop
                muted
                playsInline
                controls={false}
              />
            )
          )}
        </div>
      ))}
      {/* Carousel indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full border-2 border-white bg-white/60 transition-all ${current === idx ? 'bg-[#004fa3] border-[#004fa3]' : ''}`}
            aria-label={`Go to slide ${idx + 1}`}
            style={{ outline: 'none' }}
          />
        ))}
      </div>
    </div>
  );
}

const Home = () => {
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

  const heroVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="overflow-hidden"
    >
      {/* Hero Section */}
  <section id="hero" className="relative bg-gradient-to-br from-[#004fa3] via-[#004fa3] to-[#004fa3] dark:from-[#004fa3] dark:via-[#004fa3] dark:to-[#004fa3] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <HeroCarousel />
        </div>
        {/* Overlay moved below, so it does not cover the buttons */}
  <div className="relative max-w-7xl mx-auto px-4 md:px-6 z-30">
          <motion.div
            variants={heroVariants}
            className="max-w-4xl mx-auto text-center space-y-8 relative z-30"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Badge className="mb-4 bg-white/10 text-white border-white/20 hover:bg-white/20">
                Licensed Customs Agent | CAC & CRFFN Registered
              </Badge>
            </motion.div>
            
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Global Logistics
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#004fa3] to-cyan-400">
                Excellence
              </span>
              Since 2011
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {companyInfo.mission}
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center z-30 relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-white text-[#004fa3] hover:bg-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-lg px-8 py-6"
                onClick={() => {
                  localStorage.setItem("openQuoteTab", "true");
                }}
              >
                <Link to="/contact#hero">
                  Get Quote Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#004fa3] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-lg px-8 py-6"
              >
                <Link to="/services">
                  Our Services
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        {/* Overlay moved here, below the buttons and content, so buttons are always on top */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="w-full h-full bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 flex items-center justify-center"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Plane className="w-16 h-16 text-white/70 drop-shadow-lg" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 w-20 h-20 flex items-center justify-center"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Ship className="w-16 h-16 text-[#004fa3] drop-shadow-lg" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <motion.section
        variants={itemVariants}
  className="py-16 bg-white dark:bg-[#004fa3]"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = iconMap[stat.icon];
              return (
                <motion.div
                  key={stat.id}
                  className="text-center group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-slate-700 dark:text-slate-200" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-[#004fa3] dark:text-slate-100 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 dark:text-slate-300 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        variants={itemVariants}
  className="py-20 bg-gradient-to-br from-slate-50 to-white dark:from-[#004fa3] dark:to-[#004fa3]"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#004fa3] dark:text-slate-100 mb-6">
              Comprehensive Logistics Solutions
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              From ocean freight to customs clearing, we provide end-to-end logistics services tailored to your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-0 shadow-lg bg-white dark:bg-[#004fa3] overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                    <CardHeader className="space-y-4">
                      <CardTitle className="text-xl text-[#004fa3] dark:text-slate-100 group-hover:text-[#004fa3] dark:group-hover:text-slate-200 transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                        {service.description}
                      </CardDescription>
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button asChild size="lg" className="bg-[#004fa3] hover:bg-[#003366] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Projects */}
      <motion.section
        variants={itemVariants}
  className="py-20 bg-white dark:bg-[#004fa3]"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#004fa3] dark:text-slate-100 mb-6">
              Recent Project Successes
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Showcasing our expertise through successful project deliveries across various industries and cargo types.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 6).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-0 shadow-lg bg-white dark:bg-[#004fa3] overflow-hidden">
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.description}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge variant="secondary" className="bg-white/90 text-slate-700">
                        {project.year}
                      </Badge>
                      <Badge variant="outline" className="bg-white/20 border-white/30 text-white">
                        {project.mode}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg text-[#004fa3] dark:text-slate-100">
                      {project.client}
                    </CardTitle>
                    <Badge className="w-fit bg-[#e6f0fa] dark:bg-[#003366]/30 text-[#004fa3] dark:text-[#7cc4fa] border-[#b3d1f2] dark:border-[#004fa3]">
                      {project.category}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 dark:text-slate-300 mb-4">
                      {project.description}
                    </CardDescription>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-slate-600 dark:text-slate-300">
                        <MapPin className="w-4 h-4 mr-2 text-slate-400 dark:text-slate-500" />
                        {project.origin || project.destination}
                      </div>
                      <div className="flex items-center text-slate-600 dark:text-slate-300">
                        <Award className="w-4 h-4 mr-2 text-slate-400 dark:text-slate-500" />
                        {project.volume}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button asChild size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <Link to="/projects">
                View All Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        variants={itemVariants}
        className="py-20 bg-gradient-to-br from-slate-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#004fa3] mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Trusted by businesses across Nigeria and internationally for reliable logistics solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-slate-300 mb-4" />
                    <p className="text-slate-600 leading-relaxed mb-6">
                      "{testimonial.quote}"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-[#004fa3]">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-slate-500">
                        {testimonial.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        variants={itemVariants}
  className="py-20 bg-gradient-to-br from-[#004fa3] via-[#004fa3] text-white  "
      >
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 ">
              Ready to Ship Your Cargo?
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Get a customized logistics solution for your business. Our team of experts is ready to handle your cargo with care and precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-lg px-8 py-6"
                onClick={() => {
                  localStorage.setItem("openQuoteTab", "true");
                }}
              >
                <Link to="/contact#hero">
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-lg px-8 py-6"
              >
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Home;