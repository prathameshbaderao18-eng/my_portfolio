
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Instagram,
  CalendarDays,
  ArrowUpRight,
  Sparkles
} from "lucide-react";

const industries = [
  {
    id: "beauty",
    name: "Beauty & Salon",
    brand: "LUXE STUDIO",
    handle: "@luxestudio.concept",
    initials: "LS",
    niche: "BEAUTY / LIFESTYLE",
    bio: "Your beauty. Your moment. Your glow.",
    posts: [
      { title: "Hair transformation", kind: "REEL", image: "/images/beauty/beauty-01.jpg" },
      { title: "The little details", kind: "POST", image: "/images/beauty/beauty-02.jpg" },
      { title: "Your glow starts here", kind: "REEL", image: "/images/beauty/beauty-03.jpg" },
      { title: "Meet your stylist", kind: "POST", image: "/images/beauty/beauty-04.jpg" },
      { title: "New season, new look", kind: "REEL", image: "/images/beauty/beauty-05.jpg" },
      { title: "Client love", kind: "POST", image: "/images/beauty/beauty-06.jpg" },
      { title: "Behind the chair", kind: "REEL", image: "/images/beauty/beauty-07.jpg" },
      { title: "The perfect finish", kind: "POST", image: "/images/beauty/beauty-08.jpg" },
      { title: "Book your moment", kind: "POST", image: "/images/beauty/beauty-09.jpg" }
    ],
    calendar: [
      ["MON", "Hair transformation", "REEL"],
      ["TUE", "Behind the scenes", "STORY"],
      ["WED", "Stylist introduction", "POST"],
      ["THU", "Beauty tip of the week", "REEL"],
      ["FRI", "Client transformation", "REEL"],
      ["SAT", "Appointment availability", "STORY"],
      ["SUN", "Weekly beauty inspiration", "POST"]
    ],
    strategy: "Build trust through transformations, beauty tips, stylist introductions and appointment-focused content."
  },
  {
    id: "fitness",
    name: "Gym & Fitness",
    brand: "IRON CULT",
    handle: "@ironcult.concept",
    initials: "IC",
    niche: "FITNESS / PERFORMANCE",
    bio: "Built through discipline. Defined by consistency.",
    posts: [
      { title: "Transformation journey", kind: "REEL", image: "/images/fitness/fitness-01.jpg" },
      { title: "The essentials", kind: "POST", image: "/images/fitness/fitness-02.jpg" },
      { title: "Workouts that work", kind: "REEL", image: "/images/fitness/fitness-03.jpg" },
      { title: "Meet your coach", kind: "POST", image: "/images/fitness/fitness-04.jpg" },
      { title: "Discipline builds results", kind: "REEL", image: "/images/fitness/fitness-05.jpg" },
      { title: "Real client results", kind: "POST", image: "/images/fitness/fitness-06.jpg" },
      { title: "Inside Iron Cult", kind: "REEL", image: "/images/fitness/fitness-07.jpg" },
      { title: "Fuel. Train. Recover.", kind: "POST", image: "/images/fitness/fitness-08.jpg" },
      { title: "Join Iron Cult today", kind: "POST", image: "/images/fitness/fitness-09.jpg" }
    ],
    calendar: [
      ["MON", "Workout tutorial", "REEL"],
      ["TUE", "Gym floor stories", "STORY"],
      ["WED", "Trainer introduction", "POST"],
      ["THU", "Fitness myth explained", "REEL"],
      ["FRI", "Member spotlight", "REEL"],
      ["SAT", "Membership enquiry", "STORY"],
      ["SUN", "Weekly motivation", "POST"]
    ],
    strategy: "Create a strong fitness identity through training videos, coach-led education, member stories and membership promotions."
  },
  {
    id: "cafe",
    name: "Cafe & Restaurant",
    brand: "BREW THEORY",
    handle: "@brewtheory.concept",
    initials: "BT",
    niche: "FOOD / HOSPITALITY",
    bio: "Good coffee. Great conversations.",
    posts: [
      { title: "The brew process", kind: "REEL", image: "/images/cafe/cafe-01.jpg" },
      { title: "Coffee & conversations", kind: "POST", image: "/images/cafe/cafe-02.jpg" },
      { title: "Fresh from our kitchen", kind: "REEL", image: "/images/cafe/cafe-03.jpg" },
      { title: "Meet our barista", kind: "POST", image: "/images/cafe/cafe-04.jpg" },
      { title: "A space to unwind", kind: "REEL", image: "/images/cafe/cafe-05.jpg" },
      { title: "Customer love", kind: "POST", image: "/images/cafe/cafe-06.jpg" },
      { title: "Signature picks", kind: "REEL", image: "/images/cafe/cafe-07.jpg" },
      { title: "New season menu", kind: "POST", image: "/images/cafe/cafe-08.jpg" },
      { title: "Visit Brew Theory", kind: "POST", image: "/images/cafe/cafe-09.jpg" }
    ],
    calendar: [
      ["MON", "Signature drink reel", "REEL"],
      ["TUE", "Cafe ambience", "STORY"],
      ["WED", "Menu highlight", "POST"],
      ["THU", "Behind the counter", "REEL"],
      ["FRI", "Weekend special", "REEL"],
      ["SAT", "Customer moments", "STORY"],
      ["SUN", "Food photography", "POST"]
    ],
    strategy: "Make the cafe experience desirable through food visuals, ambience, signature items and visit-focused promotions."
  },
  {
    id: "creator",
    name: "Personal Brand",
    brand: "CREATOR STUDIO",
    handle: "@creatorstudio.concept",
    initials: "CS",
    niche: "CREATOR / PERSONAL BRAND",
    bio: "Ideas worth sharing. Stories worth watching.",
    posts: [
      { title: "My content process", kind: "REEL", image: "/images/creator/creator-01.jpg" },
      { title: "The creator setup", kind: "POST", image: "/images/creator/creator-02.jpg" },
      { title: "How I edit my videos", kind: "REEL", image: "/images/creator/creator-03.jpg" },
      { title: "Lessons from my journey", kind: "POST", image: "/images/creator/creator-04.jpg" },
      { title: "A day in my life", kind: "REEL", image: "/images/creator/creator-05.jpg" },
      { title: "Creator growth tips", kind: "POST", image: "/images/creator/creator-06.jpg" },
      { title: "Behind the scenes", kind: "REEL", image: "/images/creator/creator-07.jpg" },
      { title: "Tools I use", kind: "POST", image: "/images/creator/creator-08.jpg" },
      { title: "Follow my journey", kind: "POST", image: "/images/creator/creator-09.jpg" }
    ],
    calendar: [
      ["MON", "Educational talking-head reel", "REEL"],
      ["TUE", "Daily creator stories", "STORY"],
      ["WED", "Personal insight carousel", "POST"],
      ["THU", "Podcast-style clip", "REEL"],
      ["FRI", "Behind-the-scenes reel", "REEL"],
      ["SAT", "Q&A stories", "STORY"],
      ["SUN", "Weekly reflection", "POST"]
    ],
    strategy: "Build authority through educational reels, personal storytelling, podcast clips and consistent audience engagement."
  }
];

export default function IndustryShowcase() {
  const [active, setActive] = useState("beauty");
  const [view, setView] = useState("feed");

  const selected = industries.find(item => item.id === active);

  return (
    <section className="industry-section" id="industry-showcase">
      <div className="section-wrap">

        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / INDUSTRY CONCEPT LAB</p>
            <h2>
              One studio.<br />
              <span>Different stories.</span>
            </h2>
          </div>
          <p className="section-note">
            Explore how we approach content and social media
            for different types of businesses.
          </p>
        </div>

        <div className="industry-tabs">
          {industries.map(item => (
            <button
              key={item.id}
              onClick={() => {
                setActive(item.id);
                setView("feed");
              }}
              className={active === item.id ? "industry-tab active" : "industry-tab"}
            >
              {item.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="industry-panel"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >

            <div className="industry-profile">
              <div className="profile-avatar">
                {selected.initials}
              </div>

              <div className="profile-main">
                <p className="eyebrow">{selected.niche}</p>
                <h3>{selected.brand}</h3>
                <span>{selected.handle}</span>
              </div>

              <div className="concept-label">
                <Sparkles size={13} />
                CONCEPT BRAND
              </div>

              <p className="profile-bio">{selected.bio}</p>

              <div className="profile-stats">
                <div><strong>09</strong><span>Sample posts</span></div>
                <div><strong>03</strong><span>Content pillars</span></div>
                <div><strong>01</strong><span>Monthly plan</span></div>
              </div>
            </div>

            <div className="industry-workspace">

              <div className="industry-workspace-head">
                <div>
                  <p className="eyebrow">SOCIAL PRESENCE PREVIEW</p>
                  <h3>{selected.name}</h3>
                </div>

                <div className="showcase-switch">
                  <button
                    className={view === "feed" ? "active" : ""}
                    onClick={() => setView("feed")}
                  >
                    <Instagram size={15} /> Feed
                  </button>

                  <button
                    className={view === "calendar" ? "active" : ""}
                    onClick={() => setView("calendar")}
                  >
                    <CalendarDays size={15} /> Calendar
                  </button>
                </div>
              </div>

              {view === "feed" ? (
                <>
                  <div className="concept-grid">
                    {selected.posts.map((post, index) => (
                      <motion.div
                        key={post.title}
                        className="concept-post"
                        role="img"
                        aria-label={`${selected.brand}: ${post.title}`}
                        style={{
                          backgroundImage: `url("${post.image}")`
                        }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.025 }}
                      />
                    ))}
                  </div>

                  <p className="concept-disclaimer">
                    Independent creative concept · Fictional brand · Not a client account
                  </p>
                </>
              ) : (
                <div className="calendar-preview">
                  {selected.calendar.map(([day, title, type]) => (
                    <div className="calendar-row" key={day}>
                      <span className="calendar-day">{day}</span>
                      <span className="calendar-title">{title}</span>
                      <span className={`calendar-type type-${type.toLowerCase()}`}>
                        {type}
                      </span>
                    </div>
                  ))}

                  <p className="concept-disclaimer">
                    Example weekly schedule · Content subject to client approval
                  </p>
                </div>
              )}
            </div>

            <div className="industry-strategy">
              <div>
                <p className="eyebrow">OUR CREATIVE DIRECTION</p>
                <h3>What we'd focus on</h3>
                <p>{selected.strategy}</p>
              </div>

              <a href="#contact" className="text-link">
                Discuss a similar project <ArrowUpRight size={16} />
              </a>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
