import { motion } from "motion/react";
import { Gem, Shirt, ShoppingBag, Store, Rocket, Building } from "lucide-react";

const clientTypes = [
  { icon: Gem, label: "Jewellery Brands" },
  { icon: Shirt, label: "Textile Brands" },
  { icon: ShoppingBag, label: "Boutiques" },
  { icon: Store, label: "Local Businesses" },
  { icon: Rocket, label: "Startups" },
  { icon: Building, label: "Online Sellers" },
];

const ClientTypes = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Who We Work With
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mt-3">
            CLIENTS WE SERVE
          </h2>
        </motion.div>

        {/* Client Types Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {clientTypes.map((client, index) => (
            <motion.div
              key={client.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-secondary rounded-xl p-6 text-center border border-border/50 hover:border-primary/30 hover:bg-card transition-all duration-300"
            >
              <client.icon className="w-10 h-10 text-muted-foreground group-hover:text-primary mx-auto mb-3 transition-colors duration-300" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {client.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTypes;
