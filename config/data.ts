/* ─── Password for Certificate & Offer Letter ─────────────────────────── */
export const CERTIFICATE_PASSWORD = "password123";

/* ─── Navigation ───────────────────────────────────────────────────────── */
export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

/* ─── Hero Stats ────────────────────────────────────────────────────────── */
export const STATS = [
  { value: 6, label: "Projects", suffix: "+" },
  { value: 2, label: "Internships", suffix: "" },
  { value: 15, label: "Technologies", suffix: "+" },
  { value: 100, label: "Open Source Rank", suffix: " Top" },
  { value: 5, label: "Dashboards Built", suffix: "+" },
];

/* ─── Typing Roles ──────────────────────────────────────────────────────── */
export const TYPING_ROLES = [
  "Data Analyst",
  "Data Scientist",
  "AI/ML Engineer",
  "Python • SQL • Power BI",
  "Machine Learning Enthusiast",
  "Analytics Dashboard Developer",
];

/* ─── Projects ──────────────────────────────────────────────────────────── */
export interface Project {
  week: string;
  title: string;
  description: string;
  tools: string[];
  github: string;
  youtube: string;
  linkedin: string;
  accent: string;
  emoji: string;
}

export const PROJECTS: Project[] = [
  {
    week: "Featured Project",
    title: "IntelliSupply - AI Powered Supply Chain Analytics Platform",
    description:
      "Built an end-to-end supply chain analytics platform integrating ETL pipelines, SQL data warehouse, Power BI dashboards, demand forecasting, customer analytics, inventory optimization, and ML-driven business insights.",
    tools: [
      "Python",
      "SQL",
      "Power BI",
      "Machine Learning",
      "ETL",
      "FastAPI"
    ],
    github: "YOUR_GITHUB_LINK",
    youtube: "",
    linkedin: "",
    accent: "from-blue-500 to-indigo-500",
    emoji: "🚀",
  },
  {
    week: "AI Project",
    title: "Vision AI Studio - Image Captioning & Segmentation",
    description:
      "Developed an AI-powered computer vision application combining image captioning and semantic segmentation using BLIP and DeepLabV3 models with a Flask-based interface.",
    tools: [
      "PyTorch",
      "Transformers",
      "BLIP",
      "DeepLabV3",
      "OpenCV",
      "Flask"
    ],
    github: "YOUR_GITHUB_LINK",
    youtube: "",
    linkedin: "",
    accent: "from-purple-500 to-pink-500",
    emoji: "🤖",
  },
  {
    week: "Analytics Project",
    title: "Customer Segmentation & Target Market Analysis",
    description:
      "Performed customer behavior analysis using clustering techniques, PCA, and visualization to identify customer segments and generate actionable marketing insights.",
    tools: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "K-Means",
      "DBSCAN",
      "Power BI"
    ],
    github: "YOUR_GITHUB_LINK",
    youtube: "",
    linkedin: "",
    accent: "from-green-500 to-teal-500",
    emoji: "📊",
  },
  {
    week: "Data Science Project",
    title: "Walmart Sales Forecasting",
    description:
      "Built time-series forecasting models to predict weekly sales using feature engineering, seasonal analysis, and machine learning techniques for inventory planning.",
    tools: [
      "Python",
      "SARIMA",
      "Feature Engineering",
      "Time Series",
      "Machine Learning"
    ],
    github: "YOUR_GITHUB_LINK",
    youtube: "",
    linkedin: "",
    accent: "from-orange-500 to-red-500",
    emoji: "📈",
  },
];

/* ─── Skills ────────────────────────────────────────────────────────────── */
export interface Skill {
  name: string;
  color: string;
}

export const SKILLS_ROW_1: Skill[] = [
  { name: "Python", color: "bg-blue-100 text-blue-700" },
  { name: "SQL", color: "bg-orange-100 text-orange-700" },
  { name: "Power BI", color: "bg-yellow-100 text-yellow-700" },
  { name: "Pandas", color: "bg-purple-100 text-purple-700" },
  { name: "NumPy", color: "bg-cyan-100 text-cyan-700" },
  { name: "Matplotlib", color: "bg-pink-100 text-pink-700" },
  { name: "Microsoft Excel", color: "bg-emerald-100 text-emerald-700" },
  { name: "Data Cleaning", color: "bg-teal-100 text-teal-700" },
  { name: "EDA", color: "bg-indigo-100 text-indigo-700" },
  { name: "Excel", color: "bg-emerald-100 text-emerald-700" },
  { name: "Statistics", color: "bg-indigo-100 text-indigo-700" },
  { name: "TensorFlow", color: "bg-orange-100 text-orange-700" },
  { name: "PyTorch", color: "bg-red-100 text-red-700" },
  { name: "Machine Learning", color: "bg-violet-100 text-violet-700" },
];

export const SKILLS_ROW_2: Skill[] = [
  { name: "Dashboard Design", color: "bg-rose-100 text-rose-700" },
  { name: "Business Analysis", color: "bg-amber-100 text-amber-700" },
  { name: "Seaborn", color: "bg-sky-100 text-sky-700" },
  { name: "Data Visualization", color: "bg-fuchsia-100 text-fuchsia-700" },
  { name: "VS Code", color: "bg-blue-100 text-blue-800" },
  { name: "KPI Analysis", color: "bg-green-100 text-green-700" },
  { name: "Scikit-learn", color: "bg-green-100 text-green-700" },
  { name: "Deep Learning", color: "bg-purple-100 text-purple-700" },
  { name: "Flask", color: "bg-slate-100 text-slate-700" },
  { name: "FastAPI", color: "bg-teal-100 text-teal-700" },
  { name: "MySQL", color: "bg-blue-100 text-blue-700" },
  { name: "Tableau", color: "bg-yellow-100 text-yellow-700" },
  { name: "ETL", color: "bg-orange-100 text-orange-700" },
  { name: "Data Warehousing", color: "bg-indigo-100 text-indigo-700" },
  { name: "Streamlit", color: "bg-red-100 text-red-700" },
  { name: "Git", color: "bg-red-100 text-red-700" },
  { name: "GitHub", color: "bg-gray-100 text-gray-700" },
];
/* ─── Challenges ────────────────────────────────────────────────────────── */
export interface Challenge {
  week: string;
  challenge: string;
  solution: string;
  icon: string;
}

export const CHALLENGES: Challenge[] = [
  {
    week: "Starting Point",
    challenge: "Started this internship with ZERO practical Data Analytics experience",
    solution:
      "Committed to a one-tool-per-week learning plan, starting from Excel fundamentals and progressively advancing to Python EDA, SQL analytics, and Power BI — building a complete, portfolio-ready skill set in 4 weeks.",
    icon: "🎯",
  },
  {
    week: "Week 1",
    challenge: "Understanding raw data and building a professional multi-sheet Excel workbook from scratch",
    solution:
      "Researched Excel Table features, pivot table design, and professional formatting standards. Delivered 8 well-structured sheets with live formulas, currency formatting, and freeze panes.",
    icon: "📊",
  },
  {
    week: "Week 2",
    challenge: "Connecting Excel analysis to Power BI and creating interactive KPI dashboards",
    solution:
      "Learned DAX calculated columns, KPI card design, and dashboard layout principles. Built a clean dashboard with 4 KPI cards and 3 business-ready charts in Power BI Desktop.",
    icon: "📈",
  },
  {
    week: "Week 3",
    challenge: "Configuring the Python environment — kernel connection failures and library installation errors",
    solution:
      "Systematically debugged the VS Code Python interpreter path, installed Pandas/NumPy/Matplotlib with pip, and resolved version conflicts — gaining critical real-world environment troubleshooting skills.",
    icon: "🐍",
  },
  {
    week: "Week 3",
    challenge: "Cleaning a messy real-world supply chain dataset with 10,000+ rows and missing/text-encoded numeric columns",
    solution:
      "Used pd.to_numeric(errors='coerce') to handle non-numeric freight and weight values, filled missing values using mode and median logic, and validated results with COUNTBLANK checks.",
    icon: "🧹",
  },
  {
    week: "Week 4",
    challenge: "Installing and configuring SQLite and DB Browser for SQLite on Windows",
    solution:
      "Downloaded DB Browser for SQLite which bundles SQLite without manual PATH configuration. Imported the CSV through the GUI import wizard and verified the table structure before writing queries.",
    icon: "🗄️",
  },
  {
    week: "Week 4",
    challenge: "Writing complex SQL queries — aggregate functions, GROUP BY, and conversion rate calculations",
    solution:
      "Built queries progressively from simple SELECT statements to multi-level GROUP BY aggregations, studying each output carefully and documenting all commands in SQL-Command.md for future reference.",
    icon: "🔍",
  },
  {
    week: "All Weeks",
    challenge: "Writing professional GitHub READMEs and maintaining a clean, organised repository structure",
    solution:
      "Developed a consistent README template using capsule-render headers, typing SVG animations, Shields.io badges, and professional section layouts — resulting in portfolio-quality documentation for every project.",
    icon: "📝",
  },
];

/* ─── Social Links ──────────────────────────────────────────────────────── */
export const SOCIAL_LINKS = {
  github:    "https://github.com/YasirAwan4831",
  linkedin:  "https://www.linkedin.com/in/yasirawan4831",
  portfolio: "https://yasirawaninfo.vercel.app",
  email:     "my3154831409@gmail.com",
};
