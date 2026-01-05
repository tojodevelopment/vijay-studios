import { motion } from "motion/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import { Play, Image, Palette } from "lucide-react";

const categories = [
  { id: "all", label: "All Work" },
  { id: "reels", label: "Reels & Videos" },
  { id: "product", label: "Product Shoots" },
  { id: "jewellery", label: "Jewellery" },
  { id: "textile", label: "Textile" },
  { id: "creatives", label: "Creatives" },
];

const portfolioItems = [
  { id: 1, category: "reels", type: "video", title: "Fashion Brand Reel" },
  { id: 2, category: "jewellery", type: "image", title: "Diamond Collection" },
  { id: 3, category: "textile", type: "image", title: "Summer Collection" },
  { id: 4, category: "product", type: "image", title: "Skincare Products" },
  { id: 5, category: "creatives", type: "design", title: "Social Media Campaign" },
  { id: 6, category: "reels", type: "video", title: "Restaurant Promo" },
  { id: 7, category: "jewellery", type: "image", title: "Gold Necklace Set" },
  { id: 8, category: "textile", type: "image", title: "Ethnic Wear Shoot" },
  { id: 9, category: "creatives", type: "design", title: "Brand Identity" },
  { id: 10, category: "product", type: "image", title: "Electronics" },
  { id: 11, category: "reels", type: "video", title: "Boutique Launch" },
  { id: 12, category: "jewellery", type: "image", title: "Silver Earrings" },
];

const Portfolio = () => {
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
              Our Work
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mt-3 mb-6">
              PORTFOLIO
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our creative work across reels, photography, and design. 
              Every project is crafted with precision and passion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="pb-8">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  cat.id === "all"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-secondary cursor-pointer"
              >
                {/* Placeholder Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
                  {item.type === "video" && (
                    <Play className="w-16 h-16 text-muted-foreground/30" />
                  )}
                  {item.type === "image" && (
                    <Image className="w-16 h-16 text-muted-foreground/30" />
                  )}
                  {item.type === "design" && (
                    <Palette className="w-16 h-16 text-muted-foreground/30" />
                  )}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <span className="text-primary text-xs uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="font-display text-xl text-foreground mt-1">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Video Play Icon */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 text-primary-foreground fill-primary-foreground ml-1" />
                    </div>
                  </div>
                )}
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

export default Portfolio;
