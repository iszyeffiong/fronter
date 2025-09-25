import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp, Ship, Plane, Truck, Train, FileText, Fuel, CheckCircle } from "lucide-react";
import { useLocation } from "react-router-dom";

const SERVICES = [
    {
        slug: "ocean",
        title: "Ocean Freight Services",
        icon: <Ship className="w-6 h-6 text-white" />,
        description:
            "Ocean freight is one of the key elements of the multi-modal transportation service, and we are dedicated to offering the following services:",
        checklist: [
            "Issuance and verification of shipping documentation.",
            "Letter of credit processing.",
            "Conventional shipment.",
            "Sea/ road & sea/rail inter modal services.",
            "Full container load (fcl) & less than container load (lcl) import & export.",
            "Shipping services.",
            "Cargo husbandry.",
            "In-bound vessel clearing.",
            "Out-bound vessel clearing.",
            "Ship chandlers.",
        ],
        details: "",
    },
    {
        slug: "air",
        title: "Air Freight Services",
        icon: <Plane className="w-6 h-6 text-white" />,
        description: [
            "In line with the importance attached to air freight and time pressures, we plan a comprehensive air freight service, fashioned to meet our client's requirements, with our strategic operational handling procedures hinged on high quality services.",
            "Our team follow through on each shipment to assure our clients & ascertain real time status report on all import & export of air freight shipments at all times.",
            "Our air freight services includes:",
        ],
        checklist: [
            "Customs clearance services.",
            "Import & export documentation.",
            "Door to door services.",
            "Pick-up & delivery services.",
            "Sea/air & road/air services.",
        ],
        details: {
            paragraph: "We handle all type of freight services such as:",
            bullets: [
                "Agro products.",
                "Fashion & luxury goods.",
                "Pharmaceutical goods.",
                "Auto & automotive parts.",
                "Precious metals goods.",
                "Oil & gas industry goods etc.",
            ],
        },
    },
    {
        slug: "road",
        title: "Road Freight Services",
        icon: <Truck className="w-6 h-6 text-white" />,
        description:
            "Most transportation linkages include trucking at either the beginning or the end. Abigeo Agency Services Limited integrated logistics modal services includes road transportation service across all major cities in the nation with our affiliation to most transport & freight forwarding unions & organizations. We access & provide sound & quality trucks in movement or our cargos to our clients destination. Our road freight services includes:",
        checklist: [
            "Transportation of less truck load (ltl), full truck load (ftl) & bulk cargo.",
            "Haulage of all types of cargo.",
            "Contract logistics, procurement & distribution.",
            "Tracing & tracking & distribution of cargo.",
            "Special transportation of household goods & personal effects.",
            "Customs bonded transportation.",
            "And other value added services.",
        ],
        details: "",
    },
    {
        slug: "rail",
        title: "Rail Freight Services",
        icon: <Train className="w-6 h-6 text-white" />,
        description:
            "With the services of development in the rail sector & the recent approval of the cargo rail network & activities, our rail services includes:",
        checklist: [
            "Guaranteed 20ft, 40ft fcl & lcl in Nigeria.",
            "Rail terminal handling & door delivery service.",
            "Pre & post cargo surveying.",
        ],
        details: "",
    },
    {
        slug: "customs",
        title: "Customs Clearing Services",
        icon: <FileText className="w-6 h-6 text-white" />,
        description:
            "In line with global best demands for timely delivery of cargo, increasing responsibility is placed on customs brokers to provide expected customs clearing services. AASL is known for her commitment to rendering quality & prompt cargo management & customs clearance services with her good professional relationship with customs and other relevant government agencies, when it comes to negotiating difficult consignments & dealing with the challenges of bureaucratic procedures. Irrespective of the prompt arrival of a consignment to the port of destination, complex customs requirements can result in indefinite delays, costing huge storage & demurrage charges to consignee. Abigeo Agency Services Ltd customs agents are well trained to understand complex customs procedures of each specific area of operation. Our team of customs agents takes full responsibility to ensure that correct documentation is prepared well in advance of all import & export deadlines in order to avoid expensive & time consuming delays. Our customs agent services are:",
        checklist: [
            "Import and export customs clearing services.",
            "Classification of goods and hs codes.",
            "Customs examination.",
            "Payment of import duties on clients behalf.",
            "Facilitate temporal import/export procedures and permits.",
            "Facilitate permanent import/export procedures and permits.",
            "In-bound vessel clearing & out-bound vessel clearing.",
            "Consultancy services.",
        ],
        details: "",
    },
    {
        slug: "oil",
        title: "Oil and Gas Transport Logistics",
        icon: <Fuel className="w-6 h-6 text-white" />,
        description:
            "We offer a comprehensive and unmatched service which encompasses but, not limited to the following aspects of cross-industry petroleum product supply, oil supply chain delivery as distributors of quality, clean petroleum products to the commercial, industrial, construction, mining and transport sectors. Transportation is typically performed by heavy duty trucks and oil tankers that deliver products/consignments to our client's destination. Transportation of oil and gas tools, equipments and pipelines, we offer the following oil and gas logistics services viz:",
        checklist: [
            "Supply of petroleum products e.g. pms, dpk, ago, slop oil.",
            "Supply of heavy fuel oil, bitumen, industrial diesel oil and other specialist industrial fuels.",
            "Haulage of industrial equipments and oil tools like flanges, bolts, valves and a range of lubricants etc.",
            "Supply and haulage of superior quality petrochemicals, additives and stabilizers for a wide variety of industries.",
            "Supply of petroleum/oil products to cross section of key commercial and industrial establishments including manufacturing firms, road construction companies, transport companies, major hospitality industry players among a host of other companies.",
        ],
        details: "",
    },
];

function getServiceIndexByTitle(title) {
    return SERVICES.findIndex((s) => s.title === title);
}

const Carousel = () => {
  const location = useLocation();
  const hash = location.hash.replace("#", "");
  const initialIndex = hash
    ? SERVICES.findIndex(s => s.slug === hash)
    : 0;
  const [openIndex, setOpenIndex] = useState(initialIndex >= 0 ? initialIndex : 0);

  const cardRefs = useRef([]);

  // Scroll to the tab's title bar when hash or openIndex changes
  useEffect(() => {
    if (hash && cardRefs.current[openIndex]) {
      setTimeout(() => {
        const el = cardRefs.current[openIndex];
        const yOffset = -80; // Adjust for your fixed header height
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }, 100);
    }
  }, [hash, openIndex]);

    useEffect(() => {
        if (hash && SERVICES.findIndex(s => s.slug === hash) !== openIndex) {
            setOpenIndex(SERVICES.findIndex(s => s.slug === hash));
        }
    }, [hash]);

    const handleToggle = (idx) => {
  const willOpen = idx !== openIndex;
  setOpenIndex(willOpen ? idx : null);

  if (willOpen) {
    window.history.replaceState(null, "", `#${SERVICES[idx].slug}`);
    setTimeout(() => {
      const el = cardRefs.current[idx];
      const yOffset = -80; // Adjust for your header
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }, 100);
  }
};

    return (
        <div className="max-w-2xl mx-auto space-y-4">
            {SERVICES.map((item, idx) => (
                <div
                    key={item.title}
                    className="bg-white rounded-xl shadow-md transition-all duration-300"
                >
                    {/* Title Bar */}
                    <button
                      id={`service-tab-${item.slug}`}
                      ref={el => (cardRefs.current[idx] = el)}
                      className="w-full flex items-center justify-between px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#004fa3] rounded-xl"
                      aria-expanded={openIndex === idx}
                      aria-controls={`accordion-content-${idx}`}
                      onClick={() => handleToggle(idx)}
                    >
                        <span className="flex items-center gap-3">
                            <span className="bg-[#004fa3] rounded-lg p-2 flex items-center justify-center">
                                {item.icon}
                            </span>
                            <span className="font-bold text-[#004fa3] text-lg">{item.title}</span>
                        </span>
                        {openIndex === idx ? (
                            <ChevronUp className="w-5 h-5 text-[#004fa3]" />
                        ) : (
                            <ChevronDown className="w-5 h-5 text-[#004fa3]" />
                        )}
                    </button>
                    {/* Expanded Content */}
                    <div
                        id={`accordion-content-${idx}`}
                        className={`overflow-hidden transition-all duration-500 ${openIndex === idx ? "max-h-[1000px] py-4 px-6" : "max-h-0 px-6"
                            }`}
                        aria-hidden={openIndex !== idx}
                    >
                        {openIndex === idx && (
                            <div>
                                {/* Description: support array or string */}
                                {Array.isArray(item.description)
                                    ? item.description.map((desc, i) => (
                                        <p key={i} className="text-slate-600 mb-4">{desc}</p>
                                    ))
                                    : <p className="text-slate-600 mb-4">{item.description}</p>
                                }
                                {/* First checklist */}
                                <ul className="space-y-2 mb-4">
                                    {item.checklist.map((feature, i) => (
                                        <li key={i} className="flex items-center text-sm text-slate-600">
                                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                {/* Extra details: paragraph and bullets if present */}
                                {item.details && typeof item.details === "object" && (
                                    <>
                                        {item.details.paragraph && (
                                            <p className="text-slate-600 mb-2">{item.details.paragraph}</p>
                                        )}
                                        {item.details.bullets && (
                                            <ul className="space-y-2 mb-4">
                                                {item.details.bullets.map((feature, i) => (
                                                    <li key={i} className="flex items-center text-sm text-slate-600">
                                                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                )}
                                {/* If details is a string and not empty, show it as a paragraph */}
                                {item.details && typeof item.details === "string" && item.details.trim() !== "" && (
                                    <p className="text-slate-600 mb-2">{item.details}</p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

const ServicesSection = () => {
    return (
        <section className="w-full py-12 bg-white dark:bg-[#004fa3]">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#004fa3] dark:text-white text-center">
                    Explore Our Service Highlights
                </h2>
                <div id="service-accordion">
                    <Carousel />
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;