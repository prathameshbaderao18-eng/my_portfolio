import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ServiceCard({ number, icon: Icon, title, description, items }) {
  return (
    <motion.article className="service-card" whileHover={{ y: -5 }} transition={{ duration: .2 }}>
      <div className="service-top"><span>{number}</span><Icon size={23} strokeWidth={1.5}/></div>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>
      <a href="#contact" className="text-link">Discuss a project <ArrowUpRight size={16}/></a>
    </motion.article>
  );
}
