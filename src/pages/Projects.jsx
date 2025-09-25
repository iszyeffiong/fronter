import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Award, Calendar, Filter, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { projects } from "../mock";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");

  const years = [...new Set(projects.map(project => project.year))].sort().reverse();
  const categories = [...new Set(projects.map(project => project.category))];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = filter === "all" || project.category === filter;
    const matchesYear = selectedYear === "all" || project.year === selectedYear;
    return matchesCategory && matchesYear;
  });

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
              55+ Major Projects Completed
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 dark:text-white">
              Our Project Portfolio
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Showcasing our expertise through successful project deliveries across various industries and cargo types from 2020 to 2025.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <motion.section variants={itemVariants} className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-slate-600" />
              <span className="text-slate-600 font-medium">Filter Projects:</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="All Years" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Years</SelectItem>
                  {years.map(year => (
                    <SelectItem key={year} value={year}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects Grid */}
  <motion.section variants={itemVariants} className="py-20 bg-gradient-to-br from-slate-50 to-white dark:from-[#004fa3] dark:to-[#004fa3]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${filter}-${selectedYear}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  layout
                >
                  <Card className="h-full group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-0 shadow-lg bg-white">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-4">
                        <Badge variant="secondary" className="bg-[#e6f0fa] text-[#004fa3]">
                          {project.year}
                        </Badge>
                        <Badge variant="outline" className="border-[#b3d1f2]">
                          {project.mode}
                        </Badge>
                      </div>
                      
                      <CardTitle className="text-lg text-[#004fa3] line-clamp-2 dark:text-white">
                        {project.client}
                      </CardTitle>
                      
                      <Badge className="w-fit bg-[#e6f0fa] text-[#004fa3] border-[#b3d1f2]">
                        {project.category}
                      </Badge>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <CardDescription className="text-slate-600 font-medium dark:text-white">
                        {project.description}
                      </CardDescription>
                      
                      <div className="space-y-3">
                        {(project.origin || project.destination) && (
                          <div className="flex items-center text-sm text-slate-600">
                            <MapPin className="w-4 h-4 mr-2 text-slate-400 flex-shrink-0" />
                            <span>{project.origin ? `From: ${project.origin}` : `To: ${project.destination}`}</span>
                          </div>
                        )}
                        
                        <div className="flex items-center text-sm text-slate-600">
                          <Award className="w-4 h-4 mr-2 text-slate-400 flex-shrink-0" />
                          <span>{project.volume}</span>
                        </div>
                        
                        <div className="flex items-center text-sm text-slate-600">
                          <Calendar className="w-4 h-4 mr-2 text-slate-400 flex-shrink-0" />
                          <span>Completed in {project.year}</span>
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t">
                        <Button variant="ghost" size="sm" className="w-full group-hover:bg-slate-100 transition-colors">
                          View Details
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="text-slate-400 text-6xl mb-6">📦</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">No Projects Found</h3>
              <p className="text-slate-600 mb-8">
                No projects match your current filter criteria. Try adjusting your filters.
              </p>
              <Button 
                onClick={() => {
                  setFilter("all");
                  setSelectedYear("all");
                }}
                variant="outline"
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Project Stats */}
  <motion.section variants={itemVariants} className="py-20 bg-white dark:bg-[#004fa3]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#004fa3] mb-6 dark:text-white">
              Project Statistics
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our track record demonstrates consistent growth and diversification across industries and cargo types.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                number: projects.length.toString(),
                label: "Total Projects",
                description: "Successfully completed"
              },
              {
                number: categories.length.toString(),
                label: "Industry Sectors",
                description: "Served across"
              },
              {
                number: years.length.toString(),
                label: "Years Active",
                description: "Recent portfolio"
              },
              {
                number: "92%",
                label: "Success Rate",
                description: "On-time delivery"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#004fa3] to-[#004fa3] dark:bg-[#004fa3] rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                  <span className="text-2xl font-bold text-white">{stat.number}</span>
                </div>
                <div className="text-xl font-bold text-[#004fa3] mb-2 dark:text-white">
                  {stat.label}
                </div>
                <div className="text-slate-600 text-sm dark:text-white">
                  {stat.description}
                </div>
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
              Start Your Next Project
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed dark:text-white">
              Join our growing list of satisfied clients. Let us handle your logistics needs with the same expertise and dedication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-lg px-8 py-6"
              >
                <Link to="/contact#hero">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-lg px-8 py-6"
              >
                <Link to="/services#hero">
                  View Services
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Projects;