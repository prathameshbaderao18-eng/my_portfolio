
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Clapperboard,
  CalendarDays,
  Palette,
  TrendingUp,
  Sparkles
} from "lucide-react";

import Navbar from "./components/Navbar";
import MorphOrb from "./components/MorphOrb";
import SectionHeading from "./components/SectionHeading";
import VideoGallery from "./components/VideoGallery";
import ServiceCard from "./components/ServiceCard";
import IndustryShowcase from "./components/IndustryShowcase";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};
// WHATSAPP ENQUIRY LINKS
const whatsappNumber = "919370982551";

const whatsappLink = (message) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
function App() {
  return (
    <>
      <div className="noise" />

      <Navbar />

      <main id="top">

        {/* HERO SECTION */}
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">

            <motion.p
              className="eyebrow hero-eyebrow"
              initial="hidden"
              animate="show"
              variants={fadeUp}
            >
              INDEPENDENT CREATIVE STUDIO · INDIA
            </motion.p>

            <motion.h1
              initial="hidden"
              animate="show"
              variants={fadeUp}
            >
              Make your
              <br />
              <span>brand</span> move.
            </motion.h1>

            <motion.p
              className="hero-description"
              initial="hidden"
              animate="show"
              transition={{ delay: 0.12 }}
              variants={fadeUp}
            >
              We turn ideas into scroll-stopping content through
              thoughtful video editing, creative direction and
              social media management.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial="hidden"
              animate="show"
              transition={{ delay: 0.2 }}
              variants={fadeUp}
            >
              <a className="button button-primary" href="#work">
                Explore our work <ArrowUpRight size={17} />
              </a>

              <a className="button button-quiet" href="#contact">
                Let's talk <ArrowDown size={16} />
              </a>
            </motion.div>

            <div className="hero-footnote">
              <span className="live-dot" />
              AVAILABLE FOR SELECT PROJECTS
              <span className="footnote-line" />
            </div>
          </div>

          <MorphOrb />

          <div className="hero-index">
            FT—001 / CREATIVE THAT CONNECTS
          </div>
        </section>

        {/* SERVICES TICKER */}
        <section className="ticker" aria-label="Studio services">
          <div className="ticker-track">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i}>
                VIDEO EDITING <b>✳</b>
                SOCIAL MEDIA <b>✳</b>
                MOTION DESIGN <b>✳</b>
                CREATIVE STRATEGY <b>✳</b>
                CONTENT THAT CONNECTS <b>✳</b>
              </span>
            ))}
          </div>
        </section>

        {/* PORTFOLIO */}
        <section
          className="section-wrap work-section"
          id="work"
        >
          <SectionHeading
            eyebrow="01 / SELECTED WORK"
            title={
              <>
                Good work.
                <br />
                <span>Better stories.</span>
              </>
            }
            note="A selection of edits, motion experiments and promotional concepts. More projects coming soon."
          />

          <VideoGallery />

          <p className="portfolio-note">
            <Sparkles size={15} />
            Replace these placeholders with your own exported work
            before publishing.
          </p>
        </section>

        {/* SERVICES */}
        <section className="services-section" id="services">
          <div className="section-wrap">

            <SectionHeading
              eyebrow="02 / WHAT WE DO"
              title={
                <>
                  Creative from
                  <br />
                  <span>every angle.</span>
                </>
              }
              note="From a single high-impact edit to a consistent monthly content system, choose the level of support your brand needs."
            />

            <div className="services-grid">

              <ServiceCard
                number="01"
                icon={Clapperboard}
                title="Video editing"
                description="Purposeful edits designed to hold attention and tell your story."
                items={[
                  "Short-form reels",
                  "Promotional videos",
                  "Talking-head & podcast edits",
                  "Motion graphics"
                ]}
              />

              <ServiceCard
                number="02"
                icon={CalendarDays}
                title="Social management"
                description="A more consistent presence, planned and published with care."
                items={[
                  "Monthly content calendars",
                  "Captions & publishing",
                  "Stories & post scheduling",
                  "Performance reporting"
                ]}
              />

              <ServiceCard
                number="03"
                icon={Palette}
                title="Creative design"
                description="A visual identity that makes every post feel like your brand."
                items={[
                  "Campaign creatives",
                  "Carousels & static posts",
                  "Offer announcements",
                  "Story templates"
                ]}
              />

              <ServiceCard
                number="04"
                icon={TrendingUp}
                title="Content direction"
                description="A clear plan for what to create, why it matters and what comes next."
                items={[
                  "Content pillars",
                  "Monthly ideas",
                  "Audience-led themes",
                  "Performance improvements"
                ]}
              />

            </div>
          </div>
        </section>

        {/* INDUSTRY SHOWCASE */}
        <IndustryShowcase />

        {/* OUR APPROACH */}
        <section
          className="section-wrap approach-section"
          id="approach"
        >
          <SectionHeading
            eyebrow="03 / THE APPROACH"
            title={
              <>
                Plan it. Make it.
                <br />
                <span>Put it out there.</span>
              </>
            }
          />

          <div className="steps-grid">
            {[
              [
                "01",
                "Discover",
                "We learn about your business, audience and goals."
              ],
              [
                "02",
                "Plan",
                "We map out content ideas and a practical publishing calendar."
              ],
              [
                "03",
                "Create",
                "We edit, design and prepare content for your approval."
              ],
              [
                "04",
                "Publish",
                "We schedule, publish and review what is working."
              ]
            ].map(([n, title, desc]) => (
              <div className="step" key={n}>
                <span>{n}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section className="pricing-section" id="pricing">
          <div className="section-wrap">

            <SectionHeading
              eyebrow="04 / WAYS TO WORK TOGETHER"
              title={
                <>
                  The right support
                  <br />
                  <span>for your next stage.</span>
                </>
              }
              note="Starting packages. Final scope and pricing are confirmed after we understand your content needs."
            />

            <div className="pricing-grid">

              <article className="price-card">
                <p className="eyebrow">01 / CONTENT EDITING</p>

                <h3>
                  Content
                  <br />
                  Starter
                </h3>

                <p className="price">
                  ₹4,999 <small>/ month</small>
                </p>

                <p className="price-desc">
                  For brands that handle their own posting.
                </p>

                <ul>
                  <li>8 edited reels</li>
                  <li>Captions & basic hashtags</li>
                  <li>Weekly delivery batches</li>
                  <li>1 revision per reel</li>
                </ul>

                <a
                  className="text-link"
                  href={whatsappLink(
                    "Hi! I visited FRAME THEORY and I'm interested in the Content Starter package (₹4,500/month). I'd like to know more."
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Enquire about this <ArrowUpRight size={16} />
                </a>
              </article>

              <article className="price-card featured">
                <span className="popular-pill">
                  MOST POPULAR
                </span>

                <p className="eyebrow">02 / SOCIAL PRESENCE</p>

                <h3>
                  Consistent
                  <br />
                  Presence
                </h3>

                <p className="price">
                  ₹7,499 <small>/ month</small>
                </p>

                <p className="price-desc">
                  For brands that want content planned and published.
                </p>

                <ul>
                  <li>8 edited reels</li>
                  <li>2 static posts / carousels</li>
                  <li>12 stories</li>
                  <li>Monthly content calendar</li>
                  <li>Captions, scheduling & publishing</li>
                  <li>Monthly insights summary</li>
                </ul>

                <a
                  className="button button-primary full-button"
                  href={whatsappLink(
                    "Hi! I visited FRAME THEORY and I'm interested in the Consistent Presence package (₹7,500/month). I'd like to discuss social media management for my business."
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Let's work together <ArrowUpRight size={16} />
                </a>
              </article>

              <article className="price-card">
                <p className="eyebrow">03 / SOCIAL GROWTH</p>

                <h3>
                  Creative
                  <br />
                  Partner
                </h3>

                <p className="price">
                  ₹10,999 <small>/ month</small>
                </p>

                <p className="price-desc">
                  For brands that need a more complete content partner.
                </p>

                <ul>
                  <li>12 edited reels</li>
                  <li>4 static posts / carousels</li>
                  <li>20 stories</li>
                  <li>Calendar & publishing</li>
                  <li>Basic comment / DM handling</li>
                  <li>Monthly performance review</li>
                </ul>

                <a
                  className="text-link"
                  href={whatsappLink(
                    "Hi! I visited FRAME THEORY and I'm interested in the Creative Partner package (₹11,000/month). I'd like to discuss complete content and social media management."
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Enquire about this <ArrowUpRight size={16} />
                </a>
              </article>

            </div>

            <p className="pricing-footnote">
              Packages are starting points. Raw footage and timely
              approvals are supplied by the client. Shooting, ad spend,
              extensive community management and extra revisions are
              quoted separately.
            </p>

          </div>
        </section>

        {/* CONTACT */}
        <section className="contact-section" id="contact">
          <div className="section-wrap">

            <p className="eyebrow">
              LET'S WORK TOGETHER
            </p>

            <h2>
              Have a project?
              <br />
              <span>Let's create.</span>
            </h2>

            <p className="contact-copy">
              Looking for professional video editing or consistent
              social media management? Let's build something
              worth remembering.
            </p>

            <div className="contact-actions">

              <a
                className="button button-primary"
                href={whatsappLink(
                  "Hi! I visited FRAME THEORY and I'm interested in your video editing and social media services. I'd like to discuss a project."
                )}
                target="_blank"
                rel="noreferrer"
              >
                Start a WhatsApp conversation ↗
              </a>

              <a
                className="button button-quiet"
                href="mailto:prathameshbaderao0518@gmail.com"
              >
                Send an email ↗
              </a>

            </div>

            <div className="contact-socials">

              <a
                href="https://instagram.com/prathamesh_baderao18"
                target="_blank"
                rel="noreferrer"
              >
                Instagram ↗
              </a>

              <a href="mailto:prathameshbaderao0518@gmail.com">
                prathameshbaderao0518@gmail.com
              </a>

            </div>
          </div>

          <div className="contact-orb" />
        </section>

      </main>

      {/* FOOTER */}
      <footer className="site-footer">

        <div className="footer-top">

          <div className="footer-brand">
            <a href="#top" className="footer-logo">
              FRAME<span>THEORY.</span>
            </a>

            <p>
              Creative editing. Thoughtful content.
              Digital presence that stands out.
            </p>
          </div>

          <div className="footer-column">
            <h4>EXPLORE</h4>
            <a href="#services">Services</a>
            <a href="#work">Our Work</a>
            <a href="#industry-showcase">Industries</a>
            <a href="#approach">Our Approach</a>
            <a href="#pricing">Pricing</a>
          </div>

          <div className="footer-column">
            <h4>CONNECT</h4>

            <a href="mailto:prathameshbaderao0518@gmail.com">
              Email
            </a>

            <a
              href="https://instagram.com/prathamesh_baderao18"
              target="_blank"
              rel="noreferrer"
            >
              Instagram ↗
            </a>

            <a href="#contact">
              Start a Project
            </a>
          </div>

        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} FRAME THEORY. ALL RIGHTS RESERVED.
          </span>

          <span>
            INDEPENDENT CREATIVE STUDIO · INDIA
          </span>

          <a href="#top">
            BACK TO TOP ↑
          </a>
        </div>

      </footer>
    </>
  );
}

export default App;
