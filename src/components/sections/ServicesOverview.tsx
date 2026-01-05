import { motion } from "motion/react";
import { 
  Instagram, 
  Video, 
  Camera, 
  Palette, 
  Search, 
  TrendingUp,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Instagram,
    title: "Social Media Management",
    description: "Complete Instagram & Facebook handling with monthly content planning, posting, and engagement strategies.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Video,
    title: "Video Editing & Reels",
    description: "High-quality reels, stories, and video content that captures attention and drives engagement.",
    color: "from-primary to-orange-400",
  },
  {
    icon: Camera,
    title: "Professional Shoots",
    description: "Product, jewellery, and textile photography that showcases your products in the best light.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Palette,
    title: "Creative Design",
    description: "Eye-catching social media posters, brand assets, and visual content that stands out.",
    color: "from-purple-500 to-pink-400",
  },
  {
    icon: Search,
    title: "SEO & Content Writing",
    description: "Strategic content that ranks on search engines and converts visitors into customers.",
    color: "from-green-500 to-emerald-400",
  },
  {
    icon: TrendingUp,
    title: "Business Development",
    description: "Growth strategies, brand positioning, and page optimization for maximum impact.",
    color: "from-amber-500 to-yellow-400",
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">What We Do</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-3 mb-4">
            OUR SERVICES
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From content creation to brand growth, we provide end-to-end solutions 
            to elevate your digital presence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group card-gradient rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 h-full">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
