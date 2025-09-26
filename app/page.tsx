"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Star,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react"

export default function LuxuryHairSalon() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
const [expandedTeamMembers, setExpandedTeamMembers] = useState<number[]>([]);

  const services = [
    {
      title: "Classic Haircut",
      description: "Precision cutting tailored to your face shape and lifestyle",
      price: "$85",
      image: "/luxury-salon-haircut.png",
    },
    {
      title: "Color Transformation",
      description: "Expert color services from subtle highlights to bold transformations",
      price: "$150",
      image: "/blonde-to-purple-ombre.png",
    },
    {
      title: "Hair Extensions",
      description: "Premium quality extensions for length and volume",
      price: "$300",
      image: "/luxury-hair-extensions.png",
    },
    {
      title: "Bridal Styling",
      description: "Complete bridal hair packages for your special day",
      price: "$200",
      image: "/bridal-updo-flowers.png",
    },
    {
      title: "Deep Conditioning",
      description: "Intensive treatments to restore hair health and shine",
      price: "$65",
      image: "/hair-treatment-application.png",
    },
    {
      title: "Styling & Blowout",
      description: "Professional styling for any occasion",
      price: "$55",
      image: "/salon-blowout.png",
    },
  ]
  const teamMembers = [
    {
      name: "Isabella Rodriguez",
      role: "Master Stylist & Owner",
      image: "/isabella.jpg",
      bio: "With over 15 years of experience in luxury hair artistry, Isabella has trained with top stylists in Paris and New York. She specializes in color transformations and precision cutting.",
      specialization: "Color Correction, Precision Cutting",
      experience: "15+ years",
      certifications: "Vidal Sassoon Academy, L'Oréal Master Colorist",
    },
    {
      name: "Marcus Chen",
      role: "Senior Colorist",
      image: "/marcus.jpg",
      bio: "Marcus brings 8 years of expertise in advanced coloring techniques. His artistic eye and technical precision make him sought after for complex color transformations.",
      specialization: "Balayage, Fantasy Colors",
      experience: "8+ years",
      certifications: "Redken Color Specialist, Olaplex Certified",
    },
    {
      name: "Sofia Martinez",
      role: "Bridal Specialist",
      image: "/team1.jpg",
      bio: "Sofia's passion for bridal styling has made her the go-to artist for weddings. She creates timeless, elegant styles that photograph beautifully.",
      specialization: "Bridal Styling, Updos",
      experience: "6+ years",
      certifications: "Bridal Hair Academy, Extension Specialist",
    },
    {
      name: "David Kim",
      role: "Cutting Specialist",
      image: "/david.jpg",
      bio: "David's precision cutting techniques and modern approach to classic styles have earned him a loyal following. He excels at creating personalized looks.",
      specialization: "Precision Cutting, Men's Styling",
      experience: "7+ years",
      certifications: "Toni & Guy Advanced Cutting",
    },
    {
      name: "Emma Thompson",
      role: "Extension Expert",
      image: "/emma.jpg",
      bio: "Emma specializes in seamless extension applications and natural-looking volume enhancement. Her attention to detail ensures flawless results.",
      specialization: "Extensions, Volume Enhancement",
      experience: "5+ years",
      certifications: "Great Lengths Certified, Tape-in Specialist",
    },
    {
      name: "Alex Rivera",
      role: "Texture Specialist",
      image: "/alex.jpg",
      bio: "Alex's expertise in working with all hair textures and curl patterns makes them invaluable for diverse styling needs and natural hair care.",
      specialization: "Curly Hair, Natural Textures",
      experience: "6+ years",
      certifications: "DevaCurl Certified, Ouidad Trained",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      image: "/sarah.jpg",
      rating: 5,
      text: "Isabella transformed my hair completely! The color is exactly what I envisioned and the cut is perfect. I've never felt more confident.",
    },
    {
      name: "Michael Brown",
      image: "/mic.jpg",
      rating: 5,
      text: "The team here is incredible. David gave me the best haircut I've ever had. The attention to detail is unmatched.",
    },
    {
      name: "Emily Davis",
      image: "/emily.jpg",
      rating: 5,
      text: "Sofia did my bridal hair and it was absolutely stunning. She made me feel like a princess on my wedding day!",
    },
  ]

  const pricingTiers = [
    {
      name: "Essential",
      price: "$120",
      features: ["Consultation", "Shampoo & Cut", "Basic Styling", "Hair Care Tips"],
      recommended: false,
    },
    {
      name: "Premium",
      price: "$200",
      features: ["Consultation", "Cut & Color", "Deep Conditioning", "Professional Styling", "Take-home Products"],
      recommended: true,
    },
    {
      name: "Luxury",
      price: "$350",
      features: [
        "Full Consultation",
        "Complete Transformation",
        "Premium Treatments",
        "Styling Session",
        "Product Package",
        "Follow-up Care",
      ],
      recommended: false,
    },
  ]

  const faqs = [
    {
      question: "How far in advance should I book my appointment?",
      answer:
        "We recommend booking 2-3 weeks in advance for regular services and 4-6 weeks for special occasions like weddings or major color transformations.",
    },
    {
      question: "What should I bring to my consultation?",
      answer:
        "Please bring inspiration photos and be prepared to discuss your lifestyle, hair goals, and maintenance preferences. We'll provide expert guidance on what's achievable.",
    },
    {
      question: "Do you offer hair care product recommendations?",
      answer:
        "We carry premium professional products and will recommend the best routine for your specific hair type and style.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "We require 24-hour notice for cancellations. Same-day cancellations may incur a fee. We understand emergencies happen and will work with you when possible.",
    },
    {
      question: "Do you offer bridal packages?",
      answer:
        "Yes! We offer comprehensive bridal packages including trial runs, wedding day styling, and services for the bridal party. Contact us for custom pricing.",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-gradient">Isabella</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["Hero", "About", "Services", "Portfolio", "Team", "Testimonials", "Pricing", "FAQ", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-foreground hover:text-primary transition-colors duration-200 hover:underline underline-offset-4"
                  >
                    {item}
                  </a>
                ),
              )}
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              {["Hero", "About", "Services", "Portfolio", "Team", "Testimonials", "Pricing", "FAQ", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block py-2 text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ),
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
           backgroundImage: "url('/studio.jpg')"
          }}
        />
        <div className="absolute inset-0 hero-gradient-overlay" />

        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-fade-in tracking-tight">Luxury Hair Artistry</h1>
          <p className="text-xl md:text-3xl mb-12 animate-fade-in animation-delay-300 font-light leading-relaxed">
            Transform your look with our expert stylists and premium services in an atmosphere of pure elegance
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in animation-delay-600">
        <Button
        size="lg"
        className="gradient-purple-luxury hover:scale-105 hover-glow transition-all duration-300 text-xl px-12 py-4 rounded-xl font-semibold"
        onClick={() => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        }}
        >
          Book Appointment
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-2 border-white/80 text-white hover:bg-white hover:text-primary text-xl px-12 py-4 bg-transparent rounded-xl font-semibold backdrop-blur-sm"
          onClick={() => {
            document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          View Services
        </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 section-gradient-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src="/isabella.jpg"
                alt="Isabella Rodriguez"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
            <div className="animate-fade-in animation-delay-300">
              <h2 className="text-4xl font-bold mb-6 text-gradient">Meet Isabella</h2>
              <p className="text-lg text-muted-foreground mb-6 text-lg font-light leading-relaxed">
                With over 15 years of experience in luxury hair artistry, Isabella Rodriguez has established herself as
                one of the city's premier stylists. Trained at prestigious academies in Paris and New York, she brings
                international expertise to every client.
              </p>
              <p className="text-lg text-muted-foreground mb-8 text-lg font-light leading-relaxed">
                Isabella's passion for hair artistry goes beyond just cutting and coloring – she creates personalized
                experiences that leave clients feeling confident and beautiful.
              </p>

              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-primary mb-2">2500+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Awards Won</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 section-gradient-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive range of premium hair services designed to enhance your natural beauty
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover-lift overflow-hidden animate-fade-in card-gradient-purple border-0"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gradient flex-1">{service.title}</h3>
                    <span className="text-2xl font-bold text-purple-600 ml-4">{service.price}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">{service.description}</p>
                  <div className="mt-6">
                    <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-1">
                      Book Now
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

{/* Portfolio Section */}
<section id="portfolio" className="py-20 section-gradient-3">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4 text-gradient">Our Portfolio</h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        Explore our gallery of stunning transformations and artistic creations
      </p>
    </div>

    <div className="grid grid-cols-4 grid-rows-4 gap-4 h-[800px]">
      {/* Large featured image */}
      <div className="col-span-2 row-span-2 group relative overflow-hidden rounded-xl hover:shadow-xl transition-all duration-300 animate-fade-in">
        <img
          src="/bridal-updo-salon.png"
          alt="Featured Portfolio 1"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6 text-white">
            <p className="text-lg font-semibold">Color Transformation</p>
            <p className="text-sm">Blonde to Purple Ombre</p>
          </div>
        </div>
      </div>

      {/* Tall image */}
      <div className="col-span-1 row-span-2 group relative overflow-hidden rounded-xl hover:shadow-xl transition-all duration-300 animate-fade-in">
        <img
          src="/bridal-updo-flowers.png"
          alt="Portfolio 2"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 text-white">
            <p className="text-sm font-medium">Bridal Styling</p>
          </div>
        </div>
      </div>

      {/* Square image */}
      <div className="col-span-1 row-span-1 group relative overflow-hidden rounded-xl hover:shadow-xl transition-all duration-300 animate-fade-in">
        <img
          src="/luxury-salon-haircut.png"
          alt="Portfolio 3"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-3 text-white">
            <p className="text-xs font-medium">Pixie Cut</p>
          </div>
        </div>
      </div>

      {/* Square image */}
      <div className="col-span-1 row-span-1 group relative overflow-hidden rounded-xl hover:shadow-xl transition-all duration-300 animate-fade-in">
        <img
          src="/alex.jpg"
          alt="Portfolio 5"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-3 text-white">
            <p className="text-xs font-medium">Men's Cut</p>
          </div>
        </div>
      </div>

      {/* Tall image */}
      <div className="col-span-1 row-span-2 group relative overflow-hidden rounded-xl hover:shadow-xl transition-all duration-300 animate-fade-in">
        <img
          src="/marcus.jpg"
          alt="Portfolio 6"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 text-white">
            <p className="text-sm font-medium">Curly Hair Care</p>
          </div>
        </div>
      </div>

      {/* Large featured image (merged with Portfolio 7) */}
      <div className="col-span-2 row-span-2 group relative overflow-hidden rounded-xl hover:shadow-xl transition-all duration-300 animate-fade-in">
        <img
          src="/blonde-to-purple-ombre.png"
          alt="Featured Portfolio 1"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6 text-white">
            <p className="text-lg font-semibold">Color Transformation & Hair Extensions</p>
            <p className="text-sm">Blonde to Purple Ombre | Length & Volume Enhancement</p>
          </div>
        </div>
      </div>
          {/* Slightly shorter Tall Portfolio Card */}
      <div className="col-span-1 row-span-1 group relative overflow-hidden rounded-xl hover:shadow-xl transition-all duration-300 animate-fade-in h-[400px]">
        <img
          src="/mic.jpg"
          alt="Portfolio 8"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-3 text-white">
            <p className="text-xs font-medium">Creative Color</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Team Section */}
<section id="team" className="py-20 section-gradient-1">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4 text-gradient">Meet Our Expert Team</h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        Our talented stylists bring years of experience and passion to every appointment
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="group [perspective:1000px] cursor-pointer"
          onClick={() => {
            setExpandedTeamMembers(prev =>
              prev.includes(index)
                ? prev.filter(i => i !== index) // unflip
                : [...prev, index] // flip this card
            );
          }}
        >
          {/* Flip container */}
          <div
            className={`relative w-full h-92 transition-transform duration-700 [transform-style:preserve-3d] ${
              expandedTeamMembers.includes(index) ? "[transform:rotateY(180deg)]" : ""
            }`}
          >
{/* FRONT */}
<Card
  className={`absolute inset-0 rounded-2xl [backface-visibility:hidden] transition-shadow duration-500 ${
    expandedTeamMembers.includes(index)
      ? "shadow-[0_10px_30px_rgba(128,90,248,0.4)]"
      : "shadow-lg"
  }`}
>
  <CardContent className="p-5">
    <div className="relative mb-4">
      <img
        src={member.image || "/placeholder.svg"}
        alt={member.name}
        className="w-full h-52 object-cover rounded-xl"
      />
    </div>
    <h3 className="text-xl font-bold mb-1 text-purple-500">{member.name}</h3>
    <p className="text-muted-foreground mb-1">{member.role}</p>
    <p className="text-muted-foreground text-sm text-purple-500 italic">
       {member.experience} experience
     </p>
  </CardContent>
</Card>

            {/* BACK */}
            <Card
              className={`absolute inset-0 rounded-2xl [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-y-auto max-h-[550px] transition-shadow duration-500 ${
                expandedTeamMembers.includes(index)
                  ? "shadow-[0_15px_40px_rgba(128,90,248,0.5)]"
                  : "shadow-lg"
              }`}
            >
              <CardContent className="p-5">
                <h3 className="text-lg font-bold mb-2 text-purple-500">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{member.bio}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-muted/50">
                    <h4 className="font-semibold text-primary mb-1">Specialization</h4>
                    <p className="text-sm">{member.specialization}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50">
                    <h4 className="font-semibold text-primary mb-1">Experience</h4>
                    <p className="text-sm">{member.experience}</p>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-muted/50 mb-4">
                  <h4 className="font-semibold text-primary mb-1">Certifications</h4>
                  <p className="text-sm">{member.certifications}</p>
                </div>

                <Button
                  className="w-full py-3 rounded-xl font-semibold gradient-purple-luxury hover:scale-105 transition-transform"
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandedTeamMembers(prev => prev.filter(i => i !== index));
                  }}
                >
                  Book with {member.name.split(" ")[0]}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 section-gradient-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it – hear from our satisfied clients
            </p>
          </div>

          <div className="relative">
            <Card className="p-12 text-center shadow-2xl card-gradient-purple border-0 rounded-3xl">
              <div className="flex justify-center mb-6">
                <img
                  src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full object-cover shadow-lg border-4 border-white"
                />
              </div>

              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400 mx-1" />
                ))}
              </div>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed italic font-light max-w-3xl mx-auto">
                "{testimonials[currentTestimonial].text}"
              </p>

              <p className="font-bold text-primary text-xl">{testimonials[currentTestimonial].name}</p>
            </Card>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 gradient-purple-luxury text-white rounded-full p-4 hover:scale-110 hover-glow transition-all duration-300 shadow-xl"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 gradient-purple-luxury text-white rounded-full p-4 hover:scale-110 hover-glow transition-all duration-300 shadow-xl"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 section-gradient-3">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Pricing Packages</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect package for your hair transformation needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative p-10 text-center transition-all duration-500 hover-lift ${
                  tier.recommended ? "border-primary border-3 shadow-2xl scale-105" : "card-gradient-purple border-0"
                } animate-fade-in rounded-3xl`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {tier.recommended && (
                  <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 gradient-gold text-white text-lg px-6 py-2 rounded-full shadow-lg">
                    Most Popular
                  </Badge>
                )}

                <h3 className="text-3xl font-bold mb-6 text-gradient">{tier.name}</h3>
                <div className="text-5xl font-bold mb-8 text-gradient">{tier.price}</div>

                <ul className="space-y-4 mb-10">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-muted-foreground text-lg flex items-center justify-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full text-lg py-4 rounded-xl font-semibold ${
                    tier.recommended
                      ? "gradient-purple-luxury hover:scale-105 hover-glow"
                      : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                  } transition-all duration-300`}
                  variant={tier.recommended ? "default" : "outline"}
                >
                  Choose {tier.name}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 section-gradient-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about our services and policies
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="text-left hover:text-primary">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 section-gradient-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Book Your Appointment</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready for your transformation? Get in touch with us today
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <Card className="p-10 animate-fade-in card-gradient-purple border-0 rounded-3xl shadow-xl">
              <h3 className="text-3xl font-bold mb-8 text-gradient">Send us a message</h3>
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lg font-semibold mb-3 text-primary">First Name</label>
                    <Input
                      placeholder="Your first name"
                      className="text-lg py-4 rounded-xl border-2 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-semibold mb-3 text-primary">Last Name</label>
                    <Input
                      placeholder="Your last name"
                      className="text-lg py-4 rounded-xl border-2 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-semibold mb-3 text-primary">Email</label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    className="text-lg py-4 rounded-xl border-2 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold mb-3 text-primary">Phone</label>
                  <Input
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="text-lg py-4 rounded-xl border-2 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold mb-3 text-primary">Service Interested In</label>
                  <Input
                    placeholder="e.g., Color transformation, Haircut, Bridal styling"
                    className="text-lg py-4 rounded-xl border-2 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold mb-3 text-primary">Message</label>
                  <Textarea
                    placeholder="Tell us about your hair goals and any specific requests..."
                    rows={5}
                    className="text-lg rounded-xl border-2 focus:border-primary"
                  />
                </div>

                <Button className="w-full gradient-purple-luxury hover:scale-105 hover-glow transition-all duration-300 text-xl py-5 rounded-xl font-semibold">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Info & Map */}
            <div className="space-y-10 animate-fade-in animation-delay-300">
              <Card className="p-10 card-gradient-purple border-0 rounded-3xl shadow-xl">
                <h3 className="text-3xl font-bold mb-8 text-gradient">Visit Our Salon</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-lg">Address</p>
                      <p className="text-muted-foreground text-lg">
                        123 Luxury Lane
                        <br />
                        Beverly Hills, CA 90210
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-semibold text-lg">Phone</p>
                      <p className="text-muted-foreground text-lg">(555) 123-HAIR</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-semibold text-lg">Email</p>
                      <p className="text-muted-foreground text-lg">hello@isabellahair.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h4 className="font-semibold mb-6 text-lg text-primary">Hours</h4>
                  <div className="space-y-3 text-lg">
                    <div className="flex justify-between">
                      <span>Monday - Tuesday</span>
                      <span className="text-muted-foreground">Closed</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Wednesday - Friday</span>
                      <span className="text-muted-foreground">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="text-muted-foreground">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-muted-foreground">10:00 AM - 4:00 PM</span>
                    </div>
                  </div>
                </div>
              </Card>
             {/* Map Section */}
              <Card className="p-6 card-gradient-purple border-0 rounded-3xl shadow-xl">
                <div className="rounded-3xl h-72 overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.123456789!2d-118.40035618478254!3d34.07362068060194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bebc1234567%3A0xabcdef1234567890!2s123%20Luxury%20Lane%2C%20Beverly%20Hills%2C%20CA!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-3xl"
                  ></iframe>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-gradient mb-4">Isabella</div>
              <p className="text-muted-foreground mb-4">
                Luxury hair artistry and premium styling services in the heart of Beverly Hills.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Haircuts
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Color Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Extensions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Bridal Styling
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#about" className="hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#team" className="hover:text-primary transition-colors">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-primary transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>123 Luxury Lane</li>
                <li>Beverly Hills, CA 90210</li>
                <li>(555) 123-HAIR</li>
                <li>hello@isabellahair.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Isabella Hair Artistry. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
