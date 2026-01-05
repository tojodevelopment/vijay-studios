import { motion } from "motion/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import { Target, Lightbulb, TrendingUp, Eye } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Growth Focused",
    description: "Every piece of content is designed with growth in mind. We don't just post—we strategize for results.",
  },
  {
    icon: Lightbulb,
    title: "Creative Excellence",
    description: "We bring fresh, innovative ideas to every project. Your brand deserves content that stands out.",
  },
  {
    icon: TrendingUp,
    title: "Consistency",
    description: "Regular, strategic posting keeps your audience engaged and your brand top of mind.",
  },
  {
    icon: Eye,
    title: "Visual Quality",
    description: "From photography to design, we maintain the highest standards of visual excellence.",
  },
];

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Story
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mt-3 mb-6">
              ABOUT US
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A creative growth agency dedicated to transforming brands through 
              strategic content and visual excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                WE BUILD BRANDS
                <br />
                <span className="text-gradient">THAT GROW</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Vijay Studios was founded with a simple mission: to help businesses 
                  unlock their full potential on social media. In a world where digital 
                  presence is everything, we understood that many brands struggle to 
                  stand out in the crowded social media landscape.
                </p>
                <p>
                  What started as a passion for visual storytelling has grown into a 
                  full-service creative agency. Today, we combine strategic thinking 
                  with creative excellence to deliver content that doesn't just look 
                  good—it drives real business results.
                </p>
                <p>
                  From stunning product photography to viral reels, from engaging 
                  social media management to comprehensive business development, we 
                  offer everything a brand needs to thrive in the digital age.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-xl" />
              <div className="relative card-gradient rounded-3xl border border-border/50 p-10 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="font-display text-8xl text-gradient mb-4">5+</div>
                  <div className="text-xl text-foreground">Years of Excellence</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              What Drives Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mt-3">
              OUR VALUES
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border/50 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "150+", label: "Happy Clients" },
              { value: "1M+", label: "Total Views" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl md:text-5xl text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
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

export default About;
