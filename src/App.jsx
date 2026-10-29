import { useEffect, useMemo, useRef, useState } from "react";
import {
  Button,
  Chip,
  IconButton,
  InputAdornment,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowUp,
  faArrowUpRightFromSquare,
  faBars,
  faBolt,
  faBrain,
  faBriefcase,
  faBullhorn,
  faCalculator,
  faCertificate,
  faCheck,
  faGraduationCap,
  faChevronRight,
  faClock,
  faCloud,
  faCode,
  faComments,
  faDesktop,
  faEnvelope,
  faLaptopCode,
  faLocationDot,
  faMagnifyingGlass,
  faMicrochip,
  faMobileScreenButton,
  faNetworkWired,
  faPalette,
  faPhone,
  faRobot,
  faShieldHalved,
  faUserGraduate,
  faUsers,
  faWifi,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGoogle,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const whatsappNumber = "917060677927";
const whatsappUrl = (message) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi UZERO Solutions! ${message}`)}`;
const Icon = ({ icon }) => <FontAwesomeIcon icon={icon} aria-hidden="true" focusable="false" />;

const contact = {
  phone: "+91 706 067 7927",
  phoneLink: `+${whatsappNumber}`,
  email: "uzerosolutions@gmail.com",
  address: "Civil Lines, Roorkee - 247667",
  city: "Uttarakhand, India",
};
const ecosystemItems = [
  { icon: faCode, title: "MERN Stack, Flutter & AI Courses", description: "Web, mobile, AI/ML, cloud, cyber security, Tally & programming", href: "#courses" },
  { icon: faBriefcase, title: "IT & Digital Agency Services", description: "Custom web and app development, digital marketing & graphic design", href: "#services" },
  { icon: faRobot, title: "Workshops, Seminars & Internships", description: "Hands-on IoT, chatbot & AI seminars with industrial training", href: "#programs" },
];

const navigation = [
  ["Home", "#home"],
  ["IT Services", "#services"],
  ["Courses", "#courses"],
  ["Workshops & Internships", "#programs"],
  ["Why Us", "#about"],
  ["Contact", "#contact"],
];

const courses = [
  { title: "MERN Stack Development", category: "Development & Coding", badge: "Bestseller · Full-Stack", duration: "3–6 months", icon: faCode, footer: true, description: "Build complete, production-ready web applications from database to deployment.", topics: ["MongoDB, Express.js, React.js & Node.js", "Authentication with JWT", "REST APIs and modern frontend patterns", "Build and deploy 3 live applications"] },
  { title: "Flutter & Android App Development", shortTitle: "App Development", category: "Development & Coding", badge: "High Demand · Mobile", duration: "3–4 months", icon: faMobileScreenButton, footer: true, description: "Create polished Android and iOS apps with Flutter and Dart.", topics: ["Dart fundamentals and Flutter widgets", "Responsive layouts and state management", "Firebase and REST API integration", "App testing and Play Store publishing"] },
  { title: "Web Development", category: "Development & Coding", badge: "Banner Core Domain", duration: "2–4 months", icon: faLaptopCode, description: "Turn ideas into responsive websites with the foundations of the modern web.", topics: ["HTML5, CSS3 and JavaScript ES6+", "Responsive design and accessibility", "Interactive websites and deployment", "Hosting and domain essentials"] },
  { title: "Programming Languages", shortTitle: "Languages", category: "Development & Coding", badge: "Coding Foundation", duration: "1.5–3 months", icon: faCode, footer: true, description: "Build a strong programming foundation and problem-solving skills.", topics: ["C, C++, Java and Python", "HTML, CSS and JavaScript essentials", "Object-oriented programming", "Data structures and algorithms"] },
  { title: "AI / ML & Chatbots", category: "AI, IoT, Cloud & Security", badge: "Future Tech", duration: "3–5 months", icon: faBrain, footer: true, description: "Explore machine learning and build useful AI-powered chatbot experiences.", topics: ["Python, NumPy and Pandas", "Machine learning foundations", "Natural language processing", "LLM and custom chatbot projects"] },
  { title: "IoT (Internet of Things)", category: "AI, IoT, Cloud & Security", badge: "Smart Hardware", duration: "2–3 months", icon: faMicrochip, footer: true, description: "Connect hardware, sensors, and cloud services to create smart devices.", topics: ["Arduino and NodeMCU / ESP32", "Sensors, relays and embedded basics", "Device-to-cloud communication", "Live dashboards and practical projects"] },
  { title: "Cloud Computing", category: "AI, IoT, Cloud & Security", badge: "Cloud Infrastructure", duration: "2–3 months", icon: faCloud, description: "Understand cloud platforms and the building blocks of modern infrastructure.", topics: ["IaaS, PaaS and SaaS", "Cloud compute and storage", "Architecture and deployment", "CI/CD fundamentals"] },
  { title: "Cyber Security", category: "AI, IoT, Cloud & Security", badge: "Defense & Ethical Hacking", duration: "2–4 months", icon: faShieldHalved, footer: true, description: "Learn defensive security principles and how to assess systems responsibly.", topics: ["Ethical hacking fundamentals", "Kali Linux and security tools", "OWASP Top 10 awareness", "Network defense and safe lab practice"] },
  { title: "Networking", category: "AI, IoT, Cloud & Security", badge: "IT Infrastructure", duration: "2–3 months", icon: faNetworkWired, description: "Build practical networking knowledge for connected systems and IT roles.", topics: ["OSI and TCP/IP models", "IPv4 / IPv6 subnetting", "Routing and switching concepts", "Cisco Packet Tracer exercises"] },
  { title: "Digital Marketing (Meta)", shortTitle: "Digital Marketing", category: "Digital Marketing & Design", badge: "Meta Specialist", duration: "2–3 months", icon: faBullhorn, description: "Reach the right people and grow brands with data-led digital campaigns.", topics: ["Meta Ads Manager", "Pixel and campaign measurement", "Retargeting and lead funnels", "SEO and content strategy"] },
  { title: "Graphic Designing", category: "Digital Marketing & Design", badge: "Creative Studio", duration: "2–3 months", icon: faPalette, description: "Create memorable visual identities and engaging digital content.", topics: ["Photoshop and Illustrator", "CorelDRAW and Canva Pro", "Brand identity and design basics", "Social creatives and campaign assets"] },
  { title: "Tally (Accounting & GST)", shortTitle: "Tally", category: "Foundation, Tally & Career", badge: "Business & Finance", duration: "1.5–3 months", icon: faCalculator, footer: true, description: "Learn day-to-day accounting workflows with Tally Prime and GST.", topics: ["Tally Prime essentials", "GST invoicing and filing", "Inventory management", "Payroll fundamentals"] },
  { title: "Computer Basics", category: "Foundation, Tally & Career", badge: "Digital Literacy", duration: "1–2 months", icon: faDesktop, description: "Get comfortable with computers, everyday productivity, and digital skills.", topics: ["Windows operating system", "MS Word and PowerPoint", "Excel essentials", "Practical digital literacy"] },
  { title: "Career Counselling", category: "Foundation, Tally & Career", badge: "1-on-1 Mentorship", duration: "Personalized Sessions", icon: faComments, description: "Get one-to-one guidance to choose a direction and prepare for opportunities.", topics: ["Personalized domain mapping", "ATS-friendly resume review", "LinkedIn profile guidance", "Mock interview practice"] },
];

const courseCount = courses.length;
const categories = ["All courses", ...new Set(courses.map(({ category }) => category))];
const socialIcons = [
  [faInstagram, "Instagram", "https://www.instagram.com/uzerosolutions"],
  [faFacebookF, "Facebook", "https://www.facebook.com/uzerosolutions"],
  [faGoogle, "Google Business", "https://share.google/Y05Ryli1fCCa5vywu"],
  [faLinkedinIn, "LinkedIn", "https://in.linkedin.com/company/uzerosolutions"],
];

function getCourseTags(topics) {
  return topics
    .flatMap((topic) => topic.split(/,\s*|\s*&\s*|\s+\/\s+|\s+and\s+|\s+or\s+/i))
    .map((tag) => {
      const cleanTag = tag.trim();
      return cleanTag.length <= 20 ? cleanTag : cleanTag.split(/\s+/).slice(0, 2).join(" ");
    })
    .filter((tag) => tag.length > 0)
    .slice(0, 4);
}

const services = [
  { icon: faLaptopCode, label: "FULL-STACK WEB SOLUTIONS", title: "Web Development", description: "Custom business websites, dynamic e-commerce stores, CMS platforms, and scalable full-stack web applications engineered using modern MERN Stack technologies.", features: ["Responsive corporate & portfolio websites", "Custom MERN Stack web applications", "E-commerce & payment gateway integration"], inquiry: "Web development" },
  { icon: faMobileScreenButton, label: "ANDROID & CROSS-PLATFORM", title: "App Development", description: "High-performance native Android applications and cross-platform Flutter apps with intuitive UI/UX, real-time APIs, and Play Store deployment support.", features: ["Native Android app development", "Cross-platform Flutter apps (Android & iOS)", "REST API, Firebase & cloud backend"], inquiry: "App development" },
  { icon: faBullhorn, label: "ROI-DRIVEN GROWTH", title: "Digital Marketing (Meta)", description: "Targeted Meta Ads, local and technical SEO, social media management, and lead-generation funnels that grow your customer base.", features: ["Meta Ads campaigns & lead generation", "Search engine optimization (SEO)", "Social media branding & content strategy"], inquiry: "Digital marketing" },
  { icon: faPalette, label: "VISUAL BRAND IDENTITY", title: "Graphic Designing", description: "Eye-catching visual assets including custom logo design, brand kits, promotional banners, print media, social creatives, and modern UI/UX prototypes.", features: ["Custom logos & complete brand identity", "Social media creatives & ad banners", "Brochures, flyers & UI/UX wireframes"], inquiry: "Graphic design" },
  { icon: faMicrochip, label: "COLLEGES, SCHOOLS & TEAMS", title: "Seminars & Workshops", description: "Interactive, hands-on technical workshops and expert seminars on IoT, AI, chatbots, cyber security, and career counselling for schools and colleges.", features: ["Live AI & chatbot building workshops", "Hands-on IoT & smart hardware demos", "Student career counselling seminars"], inquiry: "Workshops and seminars" },
  { icon: faUserGraduate, label: "BRIDGING COLLEGE & INDUSTRY", title: "Internship & Training", description: "Structured summer and winter internships with industrial training programs for students, built around practical work and live projects.", features: ["Work on real client and in-house projects", "Verified internship completion certificate", "Placement and career counselling support"], inquiry: "Industrial internship", featured: true },
];

const workshopPrograms = [
  { icon: faRobot, badge: "1–3 Days Hands-On", title: "AI & Custom Chatbot Workshop", description: "Learn how modern LLMs, NLP, and conversational AI work. Participants build and deploy their own smart AI chatbot.", takeaways: ["Prompt engineering & API integration", "Building automated customer support bots", "Participation certificate for every student"], inquiry: "AI chatbot workshop" },
  { icon: faWifi, badge: "Live Hardware Kit Demo", title: "IoT & Smart Hardware Seminar", description: "Dive into the Internet of Things. Connect microcontrollers, sensors, and cloud dashboards to build real-time smart automation systems.", takeaways: ["Sensor interfacing & cloud IoT control", "Smart home & industrial IoT use-cases", "Ideal for engineering and school STEM clubs"], inquiry: "IoT seminar" },
  { icon: faShieldHalved, badge: "Student Guidance & Security", title: "Cyber Security, Cloud & Career Seminar", description: "Explore technology career paths through structured seminars and practical guidance from our experts.", takeaways: ["Personalized domain selection", "Live cyber security & cloud demos", "Insights into high-demand IT jobs"], inquiry: "Cyber security, cloud and career seminar" },
];

const internshipOptions = [
  { icon: faCode, badge: "45 Days", title: "Project Internship", description: "Get started with a focused, project-based track guided by active developers.", takeaways: ["Choose from available technology tracks", "Build and present a practical project", "Mentor feedback throughout the program"], inquiry: "45-day internship" },
  { icon: faBriefcase, badge: "3 Months", title: "Industrial Training", description: "Build stronger fundamentals and hands-on experience through structured training.", takeaways: ["Work on real client and in-house projects", "Regular one-to-one mentoring", "Verified completion certificate"], inquiry: "3-month industrial training" },
  { icon: faUserGraduate, badge: "6 Months", title: "Career-Ready Internship", description: "Develop practical skills and a portfolio with longer-term project experience.", takeaways: ["Advanced track and portfolio projects", "Placement and career counselling support", "Certificate and interview preparation"], inquiry: "6-month career-ready internship" },
];

const contactInquiries = [
  { icon: faGraduationCap, action: "Enquire Now", title: "Course Enrollment Inquiry", description: `Get fees, syllabus, and batch timings for our ${courseCount}+ courses.`, message: "I'd like details about course enrollment, fees, and upcoming batches." },
  { icon: faLaptopCode, action: "Get Quote", title: "IT Project / Website Quote", description: "Discuss custom web development, apps, digital marketing, or branding.", message: "I'd like to discuss an IT project and request a quote." },
  { icon: faRobot, action: "Book / Join", title: "Host / Join a Workshop", description: "Hands-on sessions on AI, custom chatbots, IoT, and career guidance.", message: "I'd like to host or join a workshop or seminar." },
  { icon: faUserGraduate, action: "Book / Join", title: "Apply for Industrial Internship", description: "Project-based training for students across our available tracks.", message: "I'd like to apply for an industrial internship. Please share available tracks, durations, and batch dates." },
];

const advantages = [
  [faCode, "Learn from Active Developers", "Train directly under professionals who build production web, Flutter, and AI solutions for real clients."],
  [faBriefcase, "Agency + Academy Ecosystem", "Get exposure to live web development, app development, and digital marketing projects."],
  [faUsers, "Small Batches & 1-on-1 Mentoring", "Get individual attention, doubt-clearing sessions, and tailored career counselling."],
  [faCertificate, "Recognized Certifications", "Receive verifiable course, workshop, and internship certificates for your resume and LinkedIn profile."],
];

function Logo({ light = false }) {
  return (
    <a className={`brand${light ? " brand-light" : ""}`} href="#home" aria-label="UZERO Solutions home">
      <img className="brand-logo" src="/uzero-logo.png" alt="" />
    </a>
  );
}

function Eyebrow({ children, light = false }) {
  return <span className={`eyebrow${light ? " eyebrow-light" : ""}`}><span className="eyebrow-line" />{children}</span>;
}

function App() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All courses");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [programTab, setProgramTab] = useState("workshops");
  const [toast, setToast] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const dialogRef = useRef(null);

  const filteredCourses = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return courses.filter((course) => {
      const matchesCategory = activeCategory === "All courses" || course.category === activeCategory;
      const searchableText = `${course.title} ${course.category} ${course.topics.join(" ")}`.toLowerCase();
      return matchesCategory && (!normalizedQuery || searchableText.includes(normalizedQuery));
    });
  }, [activeCategory, query]);

  useEffect(() => {
    if (!selectedCourse) return undefined;

    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    const dialog = dialogRef.current;
    const closeButton = dialog?.querySelector(".modal-close");
    const focusableElements = dialog?.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])');
    closeButton?.focus();
    document.body.style.overflow = "hidden";

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setSelectedCourse(null);
        return;
      }

      if (event.key === "Tab" && focusableElements?.length) {
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement) previousFocus.focus();
    };
  }, [selectedCourse]);

  useEffect(() => {
    if (!toast) return undefined;
    const timeout = window.setTimeout(() => setToast(""), 5000);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  function connect(message, context) {
    closeMenu();
    setToast(`Opening WhatsApp · ${context}`);
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleNavigationKeyDown(event) {
    if (event.key === "Escape") closeMenu();
  }

  const activePrograms = programTab === "workshops" ? workshopPrograms : internshipOptions;

  return (
    <>
      <div className="utility-bar">
        <div className="container utility-inner">
          <a href={`tel:${contact.phoneLink}`}><Icon icon={faPhone} />{contact.phone}</a>
          <a href={`mailto:${contact.email}`}><Icon icon={faEnvelope} />{contact.email}</a>
          <span><Icon icon={faLocationDot} />{contact.address}</span>
          <div className="social-links" aria-label="Social media">{socialIcons.map(([icon, name, url]) => <a key={name} href={url} title={name} aria-label={`Visit UZERO Solutions on ${name}`} target="_blank" rel="noopener noreferrer"><Icon icon={icon} /></a>)}</div>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-inner">
          <Logo />
          <IconButton className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)} onKeyDown={handleNavigationKeyDown}><Icon icon={menuOpen ? faXmark : faBars} /></IconButton>
          <nav id="main-navigation" className={menuOpen ? "main-nav nav-open" : "main-nav"} aria-label="Main navigation">
            {navigation.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}{label === "Courses" && <span className="nav-count">{courseCount}+</span>}</a>)}
            <a className="nav-internship" href="#programs" onClick={() => { setProgramTab("internships"); closeMenu(); }}>Apply Internship</a>
            <Button className="nav-cta" type="button" variant="contained" onClick={() => connect("I'd like to enquire about enrollment or a project quote.", "Enrollment or project quote")}>Enroll / Get Quote <Icon icon={faArrowUpRightFromSquare} /></Button>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid" aria-hidden="true" />
          <div className="container hero-layout">
            <div className="hero-copy">
              <span className="eyebrow hero-badge"><span className="status-dot" />Roorkee’s Premier Tech Training & IT Hub</span>
              <p className="hero-script">Your Tech Journey Starts Here</p>
              <h1>Skills Today,<br /><span>Brighter</span> Tomorrow</h1>
              <p className="hero-intro"><strong>UZERO Solutions</strong> empowers aspiring developers, students, and growing businesses with industry-focused courses alongside full-scale IT and digital services.</p>
              <div className="hero-actions">
                <Button component="a" className="button button-green" href="#courses" variant="contained">Explore {courseCount}+ Courses <Icon icon={faArrowRight} /></Button>
                <Button className="button button-lime" type="button" variant="contained" onClick={() => connect("I'd like to know more about your courses and services.", "General enquiry")}><Icon icon={faWhatsapp} /> Enquire Now on WhatsApp</Button>
              </div>
              <div className="hero-proof">
                <div><strong>{courseCount}+</strong><span>Career-ready courses</span></div>
                <div><strong>100%</strong><span>Practical live projects</span></div>
                <div><strong>3-in-1</strong><span>Services, training & internships</span></div>
              </div>
            </div>
            <div className="hero-art">
              <div className="hero-card-main">
                <div className="ecosystem-heading"><span className="ecosystem-icon"><Icon icon={faMicrochip} /></span><span><strong>All-in-One Tech Ecosystem</strong><small>{contact.address} · Learn or Build With Us</small></span><b>SKILLS TODAY<br />BRIGHTER TOMORROW</b></div>
                {ecosystemItems.map(({ icon, title, description, href }) => <a className="ecosystem-item" href={href} key={title}><span><Icon icon={icon} /></span><div><strong>{title}</strong><small>{description}</small></div><b aria-hidden="true"><Icon icon={faChevronRight} /></b></a>)}
                <div className="language-row"><strong><Icon icon={faChevronRight} /> &nbsp;CORE LANGUAGES:</strong>{["C", "C++", "Java", "Python", "HTML/CSS", "JS"].map((language) => <span key={language}>{language}</span>)}</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-heading heading-split"><div><Eyebrow>SOLUTIONS FOR BUSINESSES & INSTITUTIONS</Eyebrow><h2>Our Professional<br /><span className="heading-accent">IT & Digital Services</span></h2></div><p>From high-converting websites and cross-platform mobile apps to Meta ad campaigns and creative branding, enquire about any service to discuss your project.</p></div>
            <div className="service-grid">
              {services.map((service) => <article className={`service-card${service.featured ? " service-featured" : ""}`} key={service.title}>
                <div className="service-card-top"><span className="service-icon"><Icon icon={service.icon} /></span><span className="service-label">{service.label}</span></div>
                <h3>{service.title}</h3><p>{service.description}</p>
                <ul className="service-features">{service.features.map((feature) => <li key={feature}><Icon icon={faCheck} />{feature}</li>)}</ul>
                <Button className="service-cta" type="button" variant="outlined" onClick={() => connect(`I'd like to enquire about ${service.inquiry}.`, service.title)}><Icon icon={faWhatsapp} /> Enquire Now — {service.title} <Icon icon={faArrowRight} /></Button>
              </article>)}
            </div>
          </div>
        </section>

        <section className="section courses-section" id="courses">
          <div className="container">
            <div className="course-heading">
              <div><Eyebrow>SKILLS TODAY, BRIGHTER TOMORROW</Eyebrow><h2>Industry-Aligned <span className="heading-accent">Courses & Certifications</span></h2><p>Explore all {courseCount} specialized programs featuring hands-on coding, mentorship, and project portfolio building.</p></div>
              <TextField
                type="search"
                className="search-field"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search MERN, Python, AI, Tally..."
                size="small"
                fullWidth
                slotProps={{
                  htmlInput: { "aria-label": "Search courses" },
                  input: {
                    startAdornment: <InputAdornment position="start"><Icon icon={faMagnifyingGlass} /></InputAdornment>,
                    endAdornment: query ? <InputAdornment position="end"><IconButton size="small" aria-label="Clear search" onClick={() => setQuery("")}><Icon icon={faXmark} /></IconButton></InputAdornment> : null,
                  },
                }}
              />
            </div>
            <div className="category-list" role="group" aria-label="Filter courses by category">{categories.map((category) => <Button key={category} className={activeCategory === category ? "category-chip active" : "category-chip"} type="button" aria-pressed={activeCategory === category} onClick={() => setActiveCategory(category)}>{category}{category === "All courses" ? ` (${courses.length})` : ` (${courses.filter((course) => course.category === category).length})`}</Button>)}</div>
            {filteredCourses.length ? <div className="course-grid">{filteredCourses.map((course) => <article className="course-card" key={course.title}>
              <div className="course-card-head"><span className="course-category">{course.badge}</span><span className="course-duration"><Icon icon={faClock} /> &nbsp;{course.duration}</span></div>
              <div className="course-title-row"><span className="course-icon"><Icon icon={course.icon} /></span><h3>{course.title}</h3></div>
              <p>{course.description}</p>
              <div className="course-topics">{getCourseTags(course.topics).map((tag) => <Chip className="course-topic" size="small" label={tag} key={tag} />)}</div>
              <div className="course-actions"><Button type="button" className="course-details" onClick={() => setSelectedCourse(course)}>Syllabus & Info</Button><Button type="button" className="course-enquire" onClick={() => connect(`I'm interested in the ${course.title} course (${course.duration}). Please share the syllabus, fees, and batch timings.`, course.title)}><Icon icon={faWhatsapp} />&nbsp; Enquire Now</Button></div>
            </article>)}</div> : <div className="empty-state"><span><Icon icon={faMagnifyingGlass} /></span><h3>No courses found</h3><p>Try a different search or choose another category.</p><Button type="button" onClick={() => { setQuery(""); setActiveCategory("All courses"); }}>Show all courses</Button></div>}
          </div>
        </section>

        <section className="program-section" id="programs">
          <div className="container">
            <div className="program-heading"><Eyebrow>HANDS-ON PRACTICAL PROGRAMS</Eyebrow><h2>Workshops, Seminars & <span className="heading-accent">Internship Programs</span></h2><p>We host high-impact technical workshops and seminars alongside project-based internships for students.</p>
              <Tabs className="program-tabs" value={programTab} onChange={(_, value) => setProgramTab(value)} aria-label="Programs" variant="standard" centered>
                <Tab id="workshops-tab" value="workshops" aria-controls="program-panel" className="program-tab" icon={<Icon icon={faBolt} />} iconPosition="start" label="Workshops & Seminars" />
                <Tab id="internships-tab" value="internships" aria-controls="program-panel" className="program-tab" icon={<Icon icon={faBriefcase} />} iconPosition="start" label="Internships & Industrial Training" />
              </Tabs>
            </div>
            <div className="program-grid" id="program-panel" role="tabpanel" aria-labelledby={`${programTab}-tab`}>
              {activePrograms.map((program, index) => <article className="program-card" key={program.title}>
                <div className="program-card-top"><span className="program-badge">{program.badge}</span><span className={`program-icon program-icon-${index}`}><Icon icon={program.icon} /></span></div>
                <h3>{program.title}</h3><p>{program.description}</p>
                <div className="takeaways"><strong>KEY TAKEAWAYS:</strong><ul>{program.takeaways.map((takeaway) => <li key={takeaway}><Icon icon={faCheck} />{takeaway}</li>)}</ul></div>
                <Button className="program-cta" type="button" variant="contained" onClick={() => connect(`I'd like to book or join the ${program.inquiry}. Please share details and available dates.`, program.title)}><Icon icon={faWhatsapp} />&nbsp; Book / Join {program.inquiry} <Icon icon={faArrowRight} /></Button>
              </article>)}
            </div>
          </div>
        </section>

        <section className="why-section" id="about">
          <div className="container why-layout">
            <div className="why-copy"><Eyebrow light>THE UZERO ADVANTAGE</Eyebrow><h2>Why Students & Businesses in Roorkee Trust <span className="heading-accent">UZERO Solutions</span></h2><p>Located in Civil Lines, we combine a real software and digital marketing agency environment with personalized classroom and lab training.</p><Button className="button button-lime" type="button" variant="contained" onClick={() => connect("I'd like to schedule a visit to UZERO Solutions in Civil Lines, Roorkee.", "Schedule a visit")}>Schedule a Visit <Icon icon={faArrowRight} /></Button></div>
            <div className="advantage-grid">{advantages.map(([icon, title, description]) => <article className="advantage-card" key={title}><span><Icon icon={icon} /></span><h3>{title}</h3><p>{description}</p></article>)}</div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-layout">
            <div className="contact-intro"><Eyebrow>GET IN TOUCH WITH US</Eyebrow><h2>Start Your Tech Journey or Project Today</h2><p>No long forms needed. Connect with our team at <strong>{contact.address}</strong> directly via WhatsApp, phone, or email for responses on courses, internships, workshops, and IT services.</p>
              <a className="contact-info-card" href={`tel:${contact.phoneLink}`}><span className="contact-info-icon"><Icon icon={faPhone} /></span><span><small>CALL OR WHATSAPP</small><strong>{contact.phone}</strong></span></a>
              <a className="contact-info-card" href={`mailto:${contact.email}`}><span className="contact-info-icon"><Icon icon={faEnvelope} /></span><span><small>OFFICIAL EMAIL</small><strong>{contact.email}</strong></span></a>
              <div className="contact-info-card"><span className="contact-info-icon"><Icon icon={faLocationDot} /></span><span><small>CENTER ADDRESS</small><strong>{contact.address}</strong><small>{contact.city}</small></span></div>
              <div className="follow-card"><span><small>FOLLOW US ONLINE</small><strong>@uzerosolutions</strong></span><div className="follow-links" aria-label="Social media">{socialIcons.map(([icon, name, url]) => <a key={name} href={url} title={name} aria-label={`Visit UZERO Solutions on ${name}`} target="_blank" rel="noopener noreferrer"><Icon icon={icon} /></a>)}</div></div>
            </div>
            <div className="contact-hub">
              <div className="contact-hub-heading"><span className="whatsapp-icon"><Icon icon={faWhatsapp} /></span><div><h3>Direct WhatsApp Instant Connect Hub</h3><p>Choose a topic to launch WhatsApp with a ready-made inquiry message.</p></div></div>
              <span className="phone-pill">{contact.phone}</span>
              <div className="contact-inquiries">{contactInquiries.map((inquiry) => <Button className="inquiry-card" key={inquiry.title} type="button" onClick={() => connect(inquiry.message, inquiry.title)}><span className="inquiry-top"><span className="inquiry-icon"><Icon icon={inquiry.icon} /></span><small><Icon icon={faWhatsapp} /> {inquiry.action}</small></span><strong>{inquiry.title}</strong><span>{inquiry.description}</span></Button>)}</div>
              <div className="counselling-callout"><span><small>FREE 1-ON-1 GUIDANCE</small><strong>Not sure which course or tech stack suits you best?</strong><span>Chat directly with our mentors for personalized career counselling.</span></span><Button className="button button-lime" type="button" variant="contained" onClick={() => connect("I'd like to book free career counselling.", "Career counselling")}><Icon icon={faWhatsapp} /> Book Free Career Counselling</Button></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-about"><Logo light /><p>Your tech journey starts here. Empowering students and businesses with industry-grade IT solutions, job-ready courses, workshops, and internships.</p><span>Skills Today, Brighter Tomorrow</span></div>
          <div><h2>COURSES & TRAINING</h2>{courses.filter((course) => course.footer).map((course) => <a href="#courses" key={course.title}>{course.shortTitle || course.title}</a>)}</div>
          <div><h2>SERVICES & PROGRAMS</h2>{services.map((service) => <a href={service.title.includes("Workshop") || service.title.includes("Internship") ? "#programs" : "#services"} key={service.title}>{service.title}</a>)}</div>
          <div className="footer-contact"><h2>REACH US</h2><a href={`https://maps.google.com/?q=${encodeURIComponent(contact.address)}`} target="_blank" rel="noreferrer"><Icon icon={faLocationDot} /> &nbsp;{contact.address}, Uttarakhand</a><a href={`tel:${contact.phoneLink}`}><Icon icon={faPhone} /> &nbsp;{contact.phone}</a><a href={`mailto:${contact.email}`}><Icon icon={faEnvelope} /> &nbsp;{contact.email}</a><strong>@uzerosolutions</strong></div>
        </div>
        <div className="container footer-bottom"><span>© UZERO Solutions, {contact.address}. All rights reserved.</span><a className="back-top" href="#home">BACK TO TOP <Icon icon={faArrowUp} /></a><span>MADE FOR WHAT’S NEXT <b>✳</b></span></div>
      </footer>

      {selectedCourse && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedCourse(null); }}><section ref={dialogRef} className="course-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><IconButton className="modal-close" type="button" aria-label="Close course details" onClick={() => setSelectedCourse(null)}><Icon icon={faXmark} /></IconButton><span className="course-category">{selectedCourse.category}</span><h2 id="modal-title">{selectedCourse.title}</h2><p>{selectedCourse.description}</p><div className="modal-duration"><Icon icon={faClock} /> &nbsp;{selectedCourse.duration}</div><h3>What You’ll Explore</h3><ul>{selectedCourse.topics.map((topic) => <li key={topic}><Icon icon={faCheck} />{topic}</li>)}</ul><Button type="button" className="button button-green modal-cta" variant="contained" onClick={() => connect(`I'm interested in the ${selectedCourse.title} course (${selectedCourse.duration}). Please share the syllabus, fees, and batch timings.`, selectedCourse.title)}>Ask About This Course <Icon icon={faArrowUpRightFromSquare} /></Button></section></div>}

      {toast && <div className="toast" role="status"><span><Icon icon={faWhatsapp} /></span><div><strong>{toast}</strong><small>Your message is ready in WhatsApp.</small></div><IconButton type="button" aria-label="Dismiss notification" onClick={() => setToast("")}><Icon icon={faXmark} /></IconButton></div>}
    </>
  );
}

export default App;
