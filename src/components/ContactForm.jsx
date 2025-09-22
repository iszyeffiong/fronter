import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Button } from "../components/ui/button";
import { Send } from "lucide-react";
import { Mail, Clipboard } from "lucide-react";

// Multi-step quote form fields and steps
const steps = [
  "Client Information",
  "Service Type",
  "Shipment Details",
  "Pickup and Delivery Details",
  "Customs/Regulatory Needs",
  "Insurance",
  "Additional Services",
  "Additional Comments or Questions"
];

const initialQuoteData = {
  // 1. Client Information
  name: "",
  company: "",
  email: "",
  phone: "",
  contactMethod: "",
  // 2. Service Type
  logisticsServices: [],
  logisticsOther: "",
  // 3. Shipment Details
  goodsNature: "",
  shipmentWeight: "",
  shipmentVolume: "",
  goodsLength: "",
  goodsWidth: "",
  goodsHeight: "",
  goodsValue: "",
  // 4. Pickup and Delivery
  pickupLocation: "",
  deliveryLocation: "",
  pickupDate: "",
  deliveryDate: "",
  transportMode: "",
  specialInstructions: "",
  // 5. Customs/Regulatory
  customsClearance: "",
  importExportDocs: "",
  specialPermits: "",
  specialPermitsDetails: "",
  // 6. Insurance
  insurance: "",
  insuranceValue: "",
  // 7. Additional Services
  warehousing: "",
  inventory: "",
  tempControl: "",
  packaging: "",
  // 8. Comments
  comments: ""
};

const ContactForm = ({ services, onSubmit, isSubmitting, formData, setFormData, formType: externalFormType, setFormType: setExternalFormType }) => {
  // default to "enquiry" so the Enquiries button is active on initial load.
  // If parent supplies formType (externalFormType) we'll sync to it.
  const [internalFormType, setInternalFormType] = useState(
    typeof externalFormType === "string" && externalFormType ? externalFormType : "enquiry"
  );
  useEffect(() => {
    if (typeof externalFormType === "string" && externalFormType) {
      setInternalFormType(externalFormType);
    }
  }, [externalFormType]);
  const formType = typeof externalFormType === "string" && externalFormType ? externalFormType : internalFormType;
  const setFormType = typeof setExternalFormType === "function" ? setExternalFormType : setInternalFormType;
  const [step, setStep] = useState(0);
  const [quoteData, setQuoteData] = useState(() => {
    const saved = localStorage.getItem("quoteForm");
    return saved ? JSON.parse(saved) : initialQuoteData;
  });
  const [sendingQuote, setSendingQuote] = useState(false);

  useEffect(() => {
    if (formType === "quote") {
      localStorage.setItem("quoteForm", JSON.stringify(quoteData));
    }
  }, [quoteData, formType]);

  const handleQuoteChange = (field, value) => {
    setQuoteData(prev => ({ ...prev, [field]: value }));
  };

  const handleServiceTypeChange = (service) => {
    setQuoteData(prev => {
      const exists = prev.logisticsServices.includes(service);
      return {
        ...prev,
        logisticsServices: exists
          ? prev.logisticsServices.filter(s => s !== service)
          : [...prev.logisticsServices, service]
      };
    });
  };

  // Validation for required fields in each step
  const requiredFields = [
    // Step 0: Client Information
    ["name", "email", "phone", "contactMethod"],
    // Step 1: Service Type
    ["logisticsServices"],
    // Step 2: Shipment Details
    ["goodsNature", "shipmentWeight", "shipmentVolume", "goodsLength", "goodsWidth", "goodsHeight", "goodsValue"],
    // Step 3: Pickup and Delivery
    ["pickupLocation", "deliveryLocation", "pickupDate", "deliveryDate", "transportMode"],
    // Step 4: Customs/Regulatory
    ["customsClearance", "importExportDocs", "specialPermits"],
    // Step 5: Insurance
    ["insurance"],
    // Step 6: Additional Services
    ["warehousing", "inventory", "tempControl", "packaging"],
    // Step 7: Comments
    ["comments"]
  ];

  const isStepValid = () => {
    const fields = requiredFields[step];
    for (let field of fields) {
      if (Array.isArray(quoteData[field])) {
        if (!quoteData[field] || quoteData[field].length === 0) return false;
      } else if (!quoteData[field] || quoteData[field].toString().trim() === "") {
        return false;
      }
    }
    // Special case: if specialPermits is Yes, details required
    if (step === 4 && quoteData.specialPermits === "Yes" && (!quoteData.specialPermitsDetails || quoteData.specialPermitsDetails.trim() === "")) {
      return false;
    }
    // Special case: if insurance is Yes, value required
    if (step === 5 && quoteData.insurance === "Yes" && (!quoteData.insuranceValue || quoteData.insuranceValue.trim() === "")) {
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (isStepValid()) setStep(s => Math.min(s + 1, steps.length - 1));
  };
  const handleBack = () => setStep(s => Math.max(s - 1, 0));

  // Render multi-step form for quote
  const renderQuoteStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-4">
            <Label>Full Name *</Label>
            <Input value={quoteData.name} onChange={e => handleQuoteChange("name", e.target.value)} placeholder="Your full name" required />
            <Label>Company Name</Label>
            <Input value={quoteData.company} onChange={e => handleQuoteChange("company", e.target.value)} placeholder="Your company name" />
            <Label>Email Address *</Label>
            <Input value={quoteData.email} onChange={e => handleQuoteChange("email", e.target.value)} placeholder="your.email@company.com" required type="email" />
            <Label>Phone Number *</Label>
            <Input value={quoteData.phone} onChange={e => handleQuoteChange("phone", e.target.value)} placeholder="+234 (0) 800 000 0000" required />
            <Label>Preferred Method of Contact *</Label>
            <Select value={quoteData.contactMethod} onValueChange={v => handleQuoteChange("contactMethod", v)} required>
              <SelectTrigger><SelectValue placeholder="Select method" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Email">Email</SelectItem>
                <SelectItem value="Phone">Phone</SelectItem>
                <SelectItem value="WhatsApp">WhatsApp</SelectItem>
              </SelectContent>
            </Select>
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            <Label>What type of logistics service do you need? *</Label>
            <div className="flex flex-col gap-2">
              {[
                "Air Freight",
                "Sea Freight",
                "Land Freight (e.g., Trucks, Rail)",
                "Oil & Gas Logistics",
                "Supply Chain Management",
                "Customs Brokerage",
                "Warehousing & Distribution"
              ].map(service => (
                <label key={service} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={quoteData.logisticsServices.includes(service)}
                    onChange={() => handleServiceTypeChange(service)}
                    required={true}
                  />
                  {service}
                </label>
              ))}
              {/* Other service field is optional */}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <Label>Nature of Goods *</Label>
            <Textarea value={quoteData.goodsNature} onChange={e => handleQuoteChange("goodsNature", e.target.value)} placeholder="e.g., Electronics, Machinery, Chemicals, etc." required />
            <Label>Weight of Shipment (kg) *</Label>
            <Input type="number" value={quoteData.shipmentWeight} onChange={e => handleQuoteChange("shipmentWeight", e.target.value)} required />
            <Label>Volume of Shipment (m³ or Cubic Feet) *</Label>
            <Input type="number" value={quoteData.shipmentVolume} onChange={e => handleQuoteChange("shipmentVolume", e.target.value)} required />
            <Label>Dimensions of Goods (if applicable) *</Label>
            <div className="flex gap-2">
              <Input type="number" value={quoteData.goodsLength} onChange={e => handleQuoteChange("goodsLength", e.target.value)} placeholder="Length (cm)" required />
              <Input type="number" value={quoteData.goodsWidth} onChange={e => handleQuoteChange("goodsWidth", e.target.value)} placeholder="Width (cm)" required />
              <Input type="number" value={quoteData.goodsHeight} onChange={e => handleQuoteChange("goodsHeight", e.target.value)} placeholder="Height (cm)" required />
            </div>
            <Label>Value of Goods (in your currency) *</Label>
            <Input value={quoteData.goodsValue} onChange={e => handleQuoteChange("goodsValue", e.target.value)} placeholder="e.g., 10000 USD" required />
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <Label>Pickup Location *</Label>
            <Textarea value={quoteData.pickupLocation} onChange={e => handleQuoteChange("pickupLocation", e.target.value)} required />
            <Label>Delivery Location *</Label>
            <Textarea value={quoteData.deliveryLocation} onChange={e => handleQuoteChange("deliveryLocation", e.target.value)} required />
            <Label>Preferred Pickup Date *</Label>
            <Input type="date" value={quoteData.pickupDate} onChange={e => handleQuoteChange("pickupDate", e.target.value)} required />
            <Label>Preferred Delivery Date *</Label>
            <Input type="date" value={quoteData.deliveryDate} onChange={e => handleQuoteChange("deliveryDate", e.target.value)} required />
            <Label>Preferred Mode of Transport *</Label>
            <Select value={quoteData.transportMode} onValueChange={v => handleQuoteChange("transportMode", v)} required>
              <SelectTrigger><SelectValue placeholder="Select mode" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Air">Air</SelectItem>
                <SelectItem value="Sea">Sea</SelectItem>
                <SelectItem value="Land">Land</SelectItem>
                <SelectItem value="Oil Tanker">Oil Tanker</SelectItem>
              </SelectContent>
            </Select>
            <Label>Special Instructions or Requirements</Label>
            <Textarea value={quoteData.specialInstructions} onChange={e => handleQuoteChange("specialInstructions", e.target.value)} />
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <Label>Do you need Customs Clearance services? *</Label>
            <div className="flex gap-4">
              <label><input type="radio" name="customsClearance" value="Yes" checked={quoteData.customsClearance === "Yes"} onChange={() => handleQuoteChange("customsClearance", "Yes")} required /> Yes</label>
              <label><input type="radio" name="customsClearance" value="No" checked={quoteData.customsClearance === "No"} onChange={() => handleQuoteChange("customsClearance", "No")} required /> No</label>
            </div>
            <Label>Do you need help with Import/Export Documentation? *</Label>
            <div className="flex gap-4">
              <label><input type="radio" name="importExportDocs" value="Yes" checked={quoteData.importExportDocs === "Yes"} onChange={() => handleQuoteChange("importExportDocs", "Yes")} required /> Yes</label>
              <label><input type="radio" name="importExportDocs" value="No" checked={quoteData.importExportDocs === "No"} onChange={() => handleQuoteChange("importExportDocs", "No")} required /> No</label>
            </div>
            <Label>Are there any special permits or regulations involved? *</Label>
            <div className="flex gap-4">
              <label><input type="radio" name="specialPermits" value="Yes" checked={quoteData.specialPermits === "Yes"} onChange={() => handleQuoteChange("specialPermits", "Yes")} required /> Yes</label>
              <label><input type="radio" name="specialPermits" value="No" checked={quoteData.specialPermits === "No"} onChange={() => handleQuoteChange("specialPermits", "No")} required /> No</label>
            </div>
            {quoteData.specialPermits === "Yes" && (
              <Textarea value={quoteData.specialPermitsDetails} onChange={e => handleQuoteChange("specialPermitsDetails", e.target.value)} placeholder="Please specify" required />
            )}
          </div>
        );
      case 5:
        return (
          <div className="space-y-4">
            <Label>Would you like to insure your shipment? *</Label>
            <div className="flex gap-4">
              <label><input type="radio" name="insurance" value="Yes" checked={quoteData.insurance === "Yes"} onChange={() => handleQuoteChange("insurance", "Yes")} required /> Yes</label>
              <label><input type="radio" name="insurance" value="No" checked={quoteData.insurance === "No"} onChange={() => handleQuoteChange("insurance", "No")} required /> No</label>
            </div>
            {quoteData.insurance === "Yes" && (
              <div>
                <Label>Insurance Value (if applicable) *</Label>
                <Input value={quoteData.insuranceValue} onChange={e => handleQuoteChange("insuranceValue", e.target.value)} placeholder="e.g., 10000 USD" required />
              </div>
            )}
          </div>
        );
      case 6:
        return (
          <div className="space-y-4">
            <Label>Do you need warehousing services? *</Label>
            <div className="flex gap-4">
              <label><input type="radio" name="warehousing" value="Yes" checked={quoteData.warehousing === "Yes"} onChange={() => handleQuoteChange("warehousing", "Yes")} required /> Yes</label>
              <label><input type="radio" name="warehousing" value="No" checked={quoteData.warehousing === "No"} onChange={() => handleQuoteChange("warehousing", "No")} required /> No</label>
            </div>
            <Label>Do you need inventory management? *</Label>
            <div className="flex gap-4">
              <label><input type="radio" name="inventory" value="Yes" checked={quoteData.inventory === "Yes"} onChange={() => handleQuoteChange("inventory", "Yes")} required /> Yes</label>
              <label><input type="radio" name="inventory" value="No" checked={quoteData.inventory === "No"} onChange={() => handleQuoteChange("inventory", "No")} required /> No</label>
            </div>
            <Label>Do you require temperature-controlled transport? *</Label>
            <div className="flex gap-4">
              <label><input type="radio" name="tempControl" value="Yes" checked={quoteData.tempControl === "Yes"} onChange={() => handleQuoteChange("tempControl", "Yes")} required /> Yes</label>
              <label><input type="radio" name="tempControl" value="No" checked={quoteData.tempControl === "No"} onChange={() => handleQuoteChange("tempControl", "No")} required /> No</label>
            </div>
            <Label>Do you need packaging assistance? *</Label>
            <div className="flex gap-4">
              <label><input type="radio" name="packaging" value="Yes" checked={quoteData.packaging === "Yes"} onChange={() => handleQuoteChange("packaging", "Yes")} required /> Yes</label>
              <label><input type="radio" name="packaging" value="No" checked={quoteData.packaging === "No"} onChange={() => handleQuoteChange("packaging", "No")} required /> No</label>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="space-y-4">
            <Label>Please provide any additional information or ask any questions *</Label>
            <Textarea value={quoteData.comments} onChange={e => handleQuoteChange("comments", e.target.value)} placeholder="Additional comments or questions..." required />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Card className="bg-white border-0 shadow-xl">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <div className="inline-flex rounded-md bg-slate-100 p-1">
              <button
                type="button"
                onClick={() => setFormType("enquiry")}
                aria-pressed={formType === "enquiry"}
                aria-label="Enquiry"
                className={`flex items-center px-3 py-2 rounded ${formType === "enquiry" ? "bg-[#004fa3] text-white shadow" : "bg-white text-slate-600 hover:bg-slate-50"}`}
              >
                <Mail className="w-4 h-4" />
                <span className="ml-2">Enquiries</span>
              </button>
              <button
                type="button"
                onClick={() => setFormType("quote")}
                aria-pressed={formType === "quote"}
                aria-label="Quote"
                className={`flex items-center px-3 py-2 rounded ${formType === "quote" ? "bg-[#004fa3] text-white shadow" : "bg-white text-slate-600 hover:bg-slate-50"}`}
              >
                <Clipboard className="w-4 h-4" />
                <span className="ml-2">Request a Quote</span>
              </button>
            </div>
          </div>
        </div>
        <CardDescription className="text-slate-600 mt-2">
          {formType === "quote"
            ? "Fill out the form below and we'll get back to you with a detailed quote within 24 hours."
            : "Fill out the form below and we'll respond to your enquiry as soon as possible."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {formType === "quote" ? (
          <>
            <div className="mb-4">
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300">
                <div
                  className="bg-[#004fa3] h-2.5 rounded-full transition-all duration-300"
                  style={{ width: `${((step + 1) / steps.length) * 100}%` }}
                ></div>
              </div>
              <div className="text-right text-xs text-slate-500 mt-1">
                Step {step + 1} of {steps.length}: {steps[step]}
              </div>
            </div>
            <form
              className="space-y-6"
              onSubmit={async (e) => {
                e.preventDefault();
                if (typeof onSubmit !== "function") return;
                try {
                  setSendingQuote(true);
                  // support onSubmit returning a promise (e.g. sending email)
                  await onSubmit(quoteData);
                  // clear local state and storage on success
                  setQuoteData(initialQuoteData);
                  localStorage.removeItem("quoteForm");
                  setStep(0);
                  // close the quote tab if using internal formType
                  try { setFormType(""); } catch (err) { /* noop if parent controls formType */ }
                } catch (err) {
                  // preserve data on failure; parent should surface errors
                  console.error("Quote submit failed:", err);
                } finally {
                  setSendingQuote(false);
                }
              }}
            >
              {renderQuoteStep()}
              <div className="flex justify-between mt-6">
                <Button type="button" onClick={handleBack} disabled={step === 0} className="bg-gray-200 text-slate-700 hover:bg-gray-300">Back</Button>
                {step < steps.length - 1 ? (
                  <Button type="button" onClick={handleNext} className="bg-[#004fa3] text-white" disabled={!isStepValid()}>Next</Button>
                ) : (
                  <Button type="submit" className="bg-[#004fa3] text-white" disabled={!isStepValid() || sendingQuote}>
                    {sendingQuote ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Submitting...
                      </>
                    ) : (
                      "Submit"
                    )}
                  </Button>
                )}
              </div>
            </form>
          </>
        ) : (
          <form onSubmit={onSubmit} className="space-y-6">
            {/* ...existing enquiry form fields... */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Your full name"
                  required
                  className="transition-all duration-200 focus:ring-2 focus:ring-[#004fa3]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="your.email@company.com"
                  required
                  className="transition-all duration-200 focus:ring-2 focus:ring-[#004fa3]"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="+234 (0) 800 000 0000"
                  required
                  className="transition-all duration-200 focus:ring-2 focus:ring-[#004fa3]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                  placeholder="Your company name"
                  className="transition-all duration-200 focus:ring-2 focus:ring-[#004fa3]"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Service Required *</Label>
                <div className="relative">
                  <button
                    type="button"
                    className="w-full border rounded px-3 py-2 text-left bg-white focus:outline-none focus:ring-2 focus:ring-[#004fa3]"
                    onClick={() => setFormData(prev => ({ ...prev, showServiceDropdown: !prev.showServiceDropdown }))}
                  >
                    {Array.isArray(formData.service) && formData.service.length > 0
                      ? formData.service.join(", ")
                      : "Select one or more services"}
                  </button>
                  {formData.showServiceDropdown && (
                    <div className="absolute z-10 mt-1 w-full bg-white border rounded shadow-lg max-h-56 overflow-y-auto">
                      {services.map(service => (
                        <label key={service.id} className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={Array.isArray(formData.service) && formData.service.includes(service.title)}
                            onChange={e => {
                              setFormData(prev => {
                                let arr = Array.isArray(prev.service) ? prev.service : [];
                                if (e.target.checked) {
                                  return { ...prev, service: [...arr, service.title] };
                                } else {
                                  return { ...prev, service: arr.filter(s => s !== service.title) };
                                }
                              });
                            }}
                          />
                          {service.title}
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Project Details *</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                placeholder="Please provide details about your cargo, origins, destinations, timeline, and any special requirements..."
                rows={6}
                required
                className="transition-all duration-200 focus:ring-2 focus:ring-[#004fa3]"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-[#004fa3] hover:bg-[#003570] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Submitting...
                </>
              ) : (
                <>
                  Send Enquiry
                  <Send className="ml-2 w-5 h-5" />
                </>
              )}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
};

export default ContactForm;
