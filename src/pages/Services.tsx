import { motion } from "motion/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import { 
  Instagram, 
  Video, 
  Camera, 
  Palette, 
  Search, 
  TrendingUp,
  CheckCircle,
  Gem,
  Shirt
} from "lucide-react";

const services = [
  {
    id: "social-media",
    icon: Instagram,
    title: "Social Media Management",
    subtitle: "Instagram & Facebook Growth",
    description: "Complete management of your Instagram and Facebook presence with strategic content planning, consistent posting, and engagement optimization.",
    features: [
      "Monthly content calendar & planning",
      "Daily posting & scheduling",
      "Reels & stories creation",
      "Engagement & community management",
      "Page optimization (bio, CTA, highlights)",
      "Story highlights management",
      "1 paid boost per platform/month",
      "Monthly analytics & reporting",
    ],
    color: "from-pink-500 to-rose-500",
  },
  {
    id: "video-editing",
    icon: Video,
    title: "Video Editing & Reels",
    subtitle: "High-Impact Visual Content",
    description: "Professional video editing that captures attention, drives engagement, and makes your brand stand out in the crowded social media space.",
    features: [
      "Trending reels creation",
      "Story video editing",
      "Brand video production",
      "Ad video editing",
      "Motion graphics & effects",
      "Music & sound design",
      "Subtitles & captions",
      "Multiple format exports",
    ],
    color: "from-primary to-orange-400",
  },
  {
    id: "product-shoots",
    icon: Camera,
    title: "Product Photography",
    subtitle: "Professional Product Shoots",
    description: "High-quality product photography that showcases your products in the best light and drives sales.",
    features: [
      "Product photography",
      "Lifestyle product shots",
      "E-commerce ready images",
      "Multiple angle coverage",
      "Professional lighting",
      "Post-production editing",
      "High-resolution files",
      "Quick turnaround",
    ],
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: "jewellery-shoots",
    icon: Gem,
    title: "Jewellery Photography",
    subtitle: "Luxury Product Shoots",
    description: "Specialized jewellery photography that captures the brilliance and detail of your precious pieces.",
    features: [
      "Macro detail shots",
      "Reflective surface handling",
      "Color-accurate rendering",
      "Model hand shots",
      "Lifestyle styling",
      "360° product views",
      "Professional retouching",
      "Catalog-ready images",
    ],
    color: "from-amber-500 to-yellow-400",
  },
  {
    id: "textile-shoots",
    icon: Shirt,
    title: "Textile Photography",
    subtitle: "Fashion & Fabric Shoots",
    description: "Professional textile and fashion photography that brings out the texture, color, and quality of your fabrics.",
    features: [
      "Flat lay photography",
      "Mannequin styling",
      "Model photography",
      "Texture detail shots",
      "Color accuracy",
      "Ghost mannequin editing",
      "Lifestyle shoots",
      "Lookbook creation",
    ],
    color: "from-emerald-500 to-teal-400",
  },
  {
    id: "design",
    icon: Palette,
    title: "Creative Design",
    subtitle: "Visual Brand Assets",
    description: "Eye-catching designs that communicate your brand message and stand out in social media feeds.",
    features: [
      "Social media post designs",
      "Story templates",
      "Brand identity design",
      "Marketing collateral",
      "Infographics",
      "Promotional banners",
      "Packaging design",
      "Print-ready files",
    ],
    color: "from-purple-500 to-pink-400",
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO & Content Writing",
    subtitle: "Search & Conversion",
    description: "Strategic content that ranks on search engines, engages your audience, and converts visitors into customers.",
    features: [
      "Keyword research",
      "Blog writing & optimization",
      "Website content",
      "Product descriptions",
      "Social media captions",
      "SEO audit & strategy",
      "Meta tags optimization",
      "Content calendar",
    ],
    color: "from-green-500 to-emerald-400",
  },
  {
    id: "business-development",
    icon: TrendingUp,
    title: "Business Development",
    subtitle: "Strategic Growth",
    description: "Comprehensive growth strategies that position your brand for success and drive measurable business results.",
    features: [
      "Brand strategy",
      "Market positioning",
      "Competitor analysis",
      "Growth roadmap",
      "Page optimization",
      "Profile branding",
      "Bio & CTA optimization",
      "Link in bio strategy",
    ],
    color: "from-indigo-500 to-purple-400",
  },
];

const Services = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              What We Offer
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mt-3 mb-6">
              OUR SERVICES
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From content creation to brand growth, we provide comprehensive solutions 
              to transform your digital presence and drive real business results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-foreground" />
                  </div>
                  <span className="text-primary font-medium text-sm uppercase tracking-wider">
                    {service.subtitle}
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl text-foreground mt-2 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 rounded-3xl blur-xl`} />
                    <div className="relative card-gradient rounded-3xl border border-border/50 p-8 aspect-square flex items-center justify-center">
                      <service.icon className="w-32 h-32 text-muted-foreground/20" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
};

export default Services;
