export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm highly flexible with time zone communications.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Constantly evolving and improving.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Building AI-driven software solutions for real-world impact.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently refining predictive analytics for real estate investment.",
    description: "Enhancing market analysis with AI models.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Interested in working together?",
    description: "Let's collaborate on your next project.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Vrolio STR Predictive Pricing Model",
    des: "Developed an AI-powered pricing model for short-term rentals, optimizing nightly rates based on occupancy trends, seasonality, market conditions, and listing features. Used ClickHouse for rapid querying and FastAPI for model deployment.",
    img: "/vrolio-pricing.svg",
    iconLists: ["/python.svg", "/fastapi.svg", "/clickhouse.svg", "/pandas.svg"],
    link: "/vrolio-ai-pricing",
  },
  {
    id: 2,
    title: "Vrolio LTR Market Intelligence System",
    des: "Built a long-term rental (LTR) analytics platform that aggregates rental price trends, vacancy rates, and property valuation insights. Integrated with ClickHouse for scalable data storage and API-driven real-time insights.",
    img: "/ltr-market.svg",
    iconLists: ["/clickhouse.svg", "/fastapi.svg", "/pandas.svg", "/react.svg"],
    link: "/ltr-market-intelligence",
  },
  {
    id: 3,
    title: "Vrolio STR Occupancy Rate Prediction Model",
    des: "Engineered a machine learning model that predicts short-term rental occupancy rates using historical booking trends, listing details, and competitive market data. Deployed via FastAPI and monitored for model drift.",
    img: "/occupancy-prediction.svg",
    iconLists: ["/tensorflow.svg", "/scikit-learn.svg", "/pandas.svg", "/fastapi.svg"],
    link: "/occupancy-prediction",
  },
  {
    id: 4,
    title: "Automated Real Estate Data Pipeline (Vrolio)",
    des: "Built a data ingestion and transformation pipeline to clean, deduplicate, and store property market data in ClickHouse. Reduced data processing latency and enhanced investor decision-making through real-time analytics.",
    img: "/real-estate-pipeline.svg",
    iconLists: ["/python.svg", "/clickhouse.svg", "/sql.svg", "/airflow.svg"],
    link: "/real-estate-data-pipeline",
  },
  {
    id: 5,
    title: "Forecastable AI-Powered Email Deduplication & Sentiment Analysis",
    des: "Developed a PostgreSQL-backed system to ingest and deduplicate email conversations across teams, preventing redundant messages from CC chains. Applied NLP models to analyze email tone and predict the likelihood of a sales conversion.",
    img: "/forecastable-email.svg",
    iconLists: ["/postgresql.svg", "/huggingface.svg", "/pandas.svg", "/fastapi.svg"],
    link: "/forecastable-email-analysis",
  },
];

export const testimonials = [
  {
    quote:
      "Jared's AI-driven pricing models transformed how we analyze and predict rental market trends. His expertise in data science and machine learning was invaluable.",
    name: "Melissa Wright",
    title: "CEO of Vrolio",
  },
  {
    quote:
      "Jared developed a forecasting solution that improved our revenue predictions by 40%. His approach to data modeling and automation is top-tier.",
    name: "David Carter",
    title: "Lead Data Scientist at Forecastable",
  },
  {
    quote:
      "Jared's STR occupancy prediction model significantly improved our revenue projections. We now make better-informed pricing decisions that maximize occupancy and profitability.",
    name: "Sophia Anderson",
    title: "Head of Market Analytics, Vrolio",
  },
  {
    quote:
      "The data pipeline Jared built saved us hours of manual processing each week. His ClickHouse implementation gave us near real-time access to rental market data, allowing us to act faster on investment opportunities.",
    name: "Brian Mitchell",
    title: "Senior Data Engineer, Vrolio",
  },
  {
    quote:
      "Jared's NLP-powered email analysis helped us prioritize high-value leads and streamline sales outreach. His deduplication system eliminated redundancy, improving our efficiency by 30%.",
    name: "Emily Roberts",
    title: "VP of Sales, Forecastable",
  },
  {
    quote:
      "Before Jared's AI integration, our team manually reviewed thousands of emails for lead qualification. Now, with his sales prediction model, we know which prospects to focus on instantly.",
    name: "Daniel Kim",
    title: "Sales Operations Manager, Forecastable",
  },
];

export const companies = [
  {
    id: 1,
    name: "Vrolio",
    img: "/vrolio.png",
    nameImg: "/vrolio-name.svg",
  },
  {
    id: 2,
    name: "Forecastable",
    img: "/forecastable.svg",
    nameImg: "/forecastable-name.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "AI Engineer at Vrolio",
    desc: "Developed predictive models for optimizing rental pricing strategies and market forecasting.",
    className: "md:col-span-2",
    thumbnail: "/exp-vrolio.svg",
  },
  {
    id: 2,
    title: "Data Scientist at Forecastable",
    desc: "Designed and deployed revenue forecasting models for financial decision-making.",
    className: "md:col-span-2",
    thumbnail: "/exp-forecastable.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];