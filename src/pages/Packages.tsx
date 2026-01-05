import { motion } from "motion/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowRight, MessageCircle, Star } from "lucide-react";

const packages = [
  {
    name: "Starter",
    price: "₹15,000",
    period: "/month",
    description: "Perfect for small businesses starting their social media journey.",
    popular: false,
    features: [
      "15 social media posts/month",
      "8 reels/month",
      "10 stories/month",
      "Basic content calendar",
      "Caption writing",
      "Hashtag research",
      "1 platform (Instagram or Facebook)",
      "Monthly report",
    ],
    notIncluded: [
      "Paid boost",
      "Product shoots",
      "Custom graphics",
    ],
  },
  {
    name: "Growth",
    price: "₹25,000",
    period: "/month",
    description: "For growing businesses ready to scale their presence.",
    popular: true,
    features: [
      "25 social media posts/month",
      "15 reels/month",
      "20 stories/month",
      "Strategic content calendar",
      "Engaging caption writing",
      "Hashtag strategy",
      "2 platforms (Instagram + Facebook)",
      "1 paid boost per platform",
      "Story highlights management",
      "Bi-weekly reports",
      "Priority support",
    ],
    notIncluded: [
      "Product shoots",
    ],
  },
  {
    name: "Premium",
    price: "₹45,000",
    period: "/month",
    description: "Complete social media solution for serious brands.",
    popular: false,
    features: [
      "Unlimited posts/month",
      "25 reels/month",
      "Unlimited stories",
      "Full content strategy",
      "Professional copywriting",
      "Advanced hashtag strategy",
      "2 platforms (Instagram + Facebook)",
      "2 paid boosts per platform",
      "1 product shoot (up to 10 products)",
      "Custom graphic designs",
      "Story highlights management",
      "Weekly reports",
      "Dedicated account manager",
      "WhatsApp support",
    ],
    notIncluded: [],
  },
];

const Packages = () => {
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
              Pricing Plans
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mt-3 mb-6">
              MONTHLY PACKAGES
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the perfect plan for your business. All packages include 
              professional content creation and strategic management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-3xl border ${
                  pkg.popular
                    ? "border-primary bg-card"
                    : "border-border/50 card-gradient"
                } p-8 flex flex-col`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium">
                      <Star className="w-4 h-4 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="font-display text-2xl text-foreground mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {pkg.description}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="font-display text-4xl text-foreground">
                      {pkg.price}
                    </span>
                    <span className="text-muted-foreground">{pkg.period}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex-1 space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                  {pkg.notIncluded.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 opacity-50">
                      <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                        <div className="w-1.5 h-0.5 bg-muted-foreground" />
                      </div>
                      <span className="text-sm text-muted-foreground line-through">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  variant={pkg.popular ? "hero" : "outline"}
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <Link to="/contact" className="flex items-center justify-center gap-2">
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Custom Package Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-16"
          >
            <p className="text-muted-foreground mb-4">
              Need a custom package? We create tailored solutions for your unique needs.
            </p>
            <Button variant="whatsapp" size="lg" asChild>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Discuss Custom Package
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Packages;
