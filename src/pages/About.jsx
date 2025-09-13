import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Target, Shield, Globe, TrendingUp, Heart, Scale, Lightbulb, Crown } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { companyInfo, coreValues, competitiveAdvantages } from "../mock";

const iconMap = {
  Heart, Scale, Lightbulb, Users, Award, Crown,
  Target, Shield, Globe, TrendingUp
};

const About = () => {
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
  <section className="bg-gradient-to-br from-[#004fa3] via-[#004fa3] to-[#004fa3] dark:from-[#004fa3] dark:via-[#004fa3] dark:to-[#004fa3] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={itemVariants}
          >
            <Badge className="mb-6 bg-white/10 text-white border-white/20">
              {companyInfo.experience} Years of Excellence
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 dark:text-white">
              About Abigeo Agency
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Established in {companyInfo.founded}, we are a premier global logistics brand committed to delivering world-class services across Nigeria and internationally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <motion.section variants={itemVariants} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#004fa3] mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Abigeo Agency Services Ltd is an integrated logistics company with over 13 years of operational excellence in the Nigerian logistics sector. Our comprehensive service portfolio covers the entire logistics value chain from procurement to final delivery.
                </p>
                <p>
                  As a Licensed Customs Agent registered with the Corporate Affairs Commission (CAC) and the Council for the Regulation of Freight Forwarding in Nigeria (CRFFN), we provide comprehensive logistics solutions spanning the entire value chain.
                </p>
                <p>
                  Our management comprises seasoned professionals and retired customs officers with extensive industry experience, bringing deep industry knowledge and proven track record in transaction management.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              <Card className="text-center bg-gradient-to-br from-slate-50 to-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-[#004fa3] mb-2">
                    {companyInfo.experience}
                  </div>
                  <div className="text-slate-600">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="text-center bg-gradient-to-br from-slate-50 to-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-slate-900 mb-2 dark:text-white">15+</div>
                  <div className="text-slate-600">Major Projects</div>
                </CardContent>
              </Card>
              <Card className="text-center bg-gradient-to-br from-slate-50 to-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-slate-900 mb-2 dark:text-white">2</div>
                  <div className="text-slate-600">Office Locations</div>
                </CardContent>
              </Card>
              <Card className="text-center bg-gradient-to-br from-slate-50 to-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-slate-900 mb-2 dark:text-white">100%</div>
                  <div className="text-slate-600">Client Satisfaction</div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Vision & Mission */}
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
              Our Vision & Mission
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 flex items-center justify-center mb-4">
                    <Target className="w-8 h-8 text-[#004fa3]" />
                  </div>
                  <CardTitle className="text-2xl text-[#004fa3]">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 text-lg leading-relaxed">
                    {companyInfo.vision}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 flex items-center justify-center mb-4">
                    <Globe className="w-8 h-8 text-[#004fa3]" />
                  </div>
                  <CardTitle className="text-2xl text-[#004fa3]">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 text-lg leading-relaxed">
                    {companyInfo.mission}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Core Values */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              These values guide our every decision and interaction, ensuring we deliver exceptional service consistently.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const IconComponent = iconMap[value.icon];
              return (
                <motion.div
                  key={value.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-0 shadow-lg bg-white">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-[#004fa3]" />
                      </div>
                      <CardTitle className="text-xl text-[#004fa3]">
                        {value.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-600 text-center leading-relaxed">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Competitive Advantages */}
      <motion.section variants={itemVariants} className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#004fa3] mb-6">
              Why Choose Abigeo Agency?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our competitive advantages set us apart in the logistics industry, ensuring superior service delivery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {competitiveAdvantages.map((advantage, index) => {
              const IconComponent = iconMap[advantage.icon];
              return (
                <motion.div
                  key={advantage.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-0 shadow-lg bg-white">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-7 h-7 text-[#004fa3]" />
                        </div>
                        <CardTitle className="text-xl text-[#004fa3]">
                          {advantage.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-600 leading-relaxed">
                        {advantage.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Office Locations */}
      <motion.section variants={itemVariants} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#004fa3] mb-6">
              Our Locations
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Strategically positioned offices to serve our clients across Nigeria's key commercial centers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyInfo.offices.map((office, index) => (
              <motion.div
                key={office.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <Badge className="w-fit bg-slate-100 text-slate-700">
                      {office.type}
                    </Badge>
                    <CardTitle className="text-2xl text-[#004fa3]">
                      {office.city}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[#004fa3] mb-2">Address</h4>
                      <p className="text-slate-600">{office.address}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#004fa3] mb-2">Phone</h4>
                      <div className="space-y-1">
                        {office.phones.map((phone, idx) => (
                          <p key={idx} className="text-slate-600">{phone}</p>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#004fa3] mb-2">Email</h4>
                      <div className="space-y-1">
                        {office.emails.map((email, idx) => (
                          <p key={idx} className="text-slate-600">{email}</p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default About;