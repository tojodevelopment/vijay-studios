import { motion } from "motion/react";
import { CheckCircle, Zap, Users, Award, Clock, Shield } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Quick delivery without compromising on quality. Your content, on time, every time.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "A creative team focused entirely on your brand's growth and success.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Track record of growing brands with measurable engagement and follower growth.",
  },
  {
    icon: Clock,
    title: "Consistent Posting",
    description: "Regular, strategic content that keeps your audience engaged and growing.",
  },
  {
    icon: Shield,
    title: "Brand Protection",
    description: "We maintain your brand voice and visual identity across all content.",
  },
  {
    icon: CheckCircle,
    title: "All-in-One Solution",
    description: "From shoots to posts to strategy—everything under one roof.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Why Vijay Studios
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-3 mb-6">
              YOUR GROWTH IS
              <br />
              <span className="text-gradient">OUR MISSION</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We don't just create content—we craft growth strategies. Every reel, 
              every post, every shoot is designed with one goal: to grow your brand 
              and drive real business results.
            </p>
            
            {/* Highlight Box */}
            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-foreground mb-1">
                    Monthly Social Media Packages
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Complete Instagram & Facebook management with reels, posts, 
                    stories, and 1 paid boost included per platform.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card rounded-xl p-5 border border-border/50 hover:border-primary/30 transition-colors duration-300"
              >
                <reason.icon className="w-8 h-8 text-primary mb-3" />
                <h4 className="font-display text-base text-foreground mb-1">
                  {reason.title}
                </h4>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
