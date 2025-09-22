import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import ContactForm from "../components/ContactForm";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { useToast } from "../hooks/use-toast";
import { companyInfo, services } from "../mock";
import emailjs from "@emailjs/browser";

const Contact = () => {
  // EmailJS IDs from env (Vite uses import.meta.env)
  const SERVICE_ID =
    import.meta.env.VITE_EMAILJS_SERVICE_ID || import.meta.env.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID_ENQUIRY =
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ENQUIRY ||
    import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const TEMPLATE_ID_QUOTE =
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID_QUOTE ||
    import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY =
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY || import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  // Initialize EmailJS in browser
  if (typeof window !== "undefined" && PUBLIC_KEY) {
    try {
      emailjs.init(PUBLIC_KEY);
    } catch (e) {
      /* ignore init error; send can still accept key */
    }
  }

  // Check if we should open the quote tab
  const [formType, setFormType] = useState(() => {
    if (typeof window !== "undefined" && localStorage.getItem("openQuoteTab") === "true") {
      localStorage.removeItem("openQuoteTab");
      return "quote";
    }
    return "";
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    urgency: "standard"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (payload) => {
    // handle either: (A) event from enquiry form or (B) quoteData object from quote form
    // If payload is an event, preventDefault and send enquiry using formData; otherwise send payload as quote
    let templateParams = null;
    if (payload && typeof payload.preventDefault === "function") {
      payload.preventDefault();
      templateParams = {
        type: "enquiry",
        ...formData
      };
    } else if (payload && typeof payload === "object") {
      templateParams = {
        type: "quote",
        ...payload
      };
    } else {
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID_ENQUIRY || !TEMPLATE_ID_QUOTE || !PUBLIC_KEY) {
      toast({ title: "EmailJS not configured", description: "Missing EmailJS keys in environment." });
      return;
    }

    // normalize arrays for template (comma-separated)
    if (Array.isArray(templateParams.logisticsServices)) {
      templateParams.logisticsServices = templateParams.logisticsServices.join(", ");
    }

    setIsSubmitting(true);
    try {
      const templateId =
        templateParams.type === "quote" ? TEMPLATE_ID_QUOTE : TEMPLATE_ID_ENQUIRY;
      await emailjs.send(SERVICE_ID, templateId, templateParams);

      toast({
        title: templateParams.type === "quote" ? "Quote Request Submitted!" : "Enquiry Sent!",
        description: templateParams.type === "quote"
          ? "We'll get back to you within 24 hours with a detailed quote."
          : "We'll respond to your enquiry shortly."
      });

      // Reset enquiry form state if this was an enquiry
      if (templateParams.type === "enquiry") {
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
          urgency: "standard"
        });
      }

      // Clear any persisted quote draft
      if (templateParams.type === "quote") {
        localStorage.removeItem("quoteForm");
        // close the quote tab
        setFormType("");
      }
    } catch (err) {
      console.error("EmailJS send error:", err);
      toast({
        title: "Send failed",
        description: "There was a problem sending your message. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
      <section className="bg-gradient-to-br from-[#004fa3] via-[#004fa3] to-[#004fa3] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={itemVariants}
          >
            <Badge className="mb-6 bg-white/10 text-white border-white/20">
              Get Your Free Quote
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Ready to ship? Get a customized logistics solution for your business. Our experts are here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <motion.section variants={itemVariants} className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <ContactForm
                  services={services}
                  onSubmit={handleSubmit}
                  isSubmitting={isSubmitting}
                  formData={formData}
                  setFormData={setFormData}
                  formType={formType}
                  setFormType={setFormType}
                />
              </motion.div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card className="bg-white border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-[#004fa3]">
                      Quick Response Guarantee
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-slate-600">Response within 24 hours</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-slate-600">Free detailed quote</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-slate-600">Expert consultation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-slate-600">No commitment required</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Office Locations */}
              {companyInfo.offices.map((office, index) => (
                <motion.div
                  key={office.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 * (index + 1) }}
                >
                  <Card className="bg-white border-0 shadow-lg">
                    <CardHeader>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary" className="bg-[#e6f0fa] text-[#004fa3]">
                          {office.type}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl text-[#004fa3]">
                        {office.city}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" />
                        <span className="text-slate-600 text-sm leading-relaxed">
                          {office.address}
                        </span>
                      </div>
                      
                      <div className="space-y-2">
                        {office.phones.map((phone, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <Phone className="w-5 h-5 text-slate-400" />
                            <span className="text-slate-600 text-sm">{phone}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="space-y-2">
                        {office.emails.map((email, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <Mail className="w-5 h-5 text-slate-400" />
                            <span className="text-slate-600 text-sm">{email}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Card className="bg-white border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-[#004fa3] flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Monday - Friday</span>
                      <span className="text-[#004fa3] font-medium">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Saturday</span>
                      <span className="text-[#004fa3] font-medium">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Sunday</span>
                      <span className="text-[#004fa3] font-medium">Closed</span>
                    </div>
                    <div className="pt-2 border-t">
                      <p className="text-xs text-slate-500">
                        Emergency logistics support available 24/7
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Contact;