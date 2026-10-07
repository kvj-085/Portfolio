const devicon = (name, variant = "original") => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${variant}.svg`;
const projectImage = (title) => `https://placehold.co/600x340/1d1836/854CE6?font=poppins&text=${encodeURIComponent(title)}`;
const initialsLogo = (name) => `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=854CE6&color=fff&size=128&bold=true`;

export const Bio = {
    name: "Veera Jeeshitha Kolla",
    image: "https://github.com/kvj-085.png",
    roles: ["Data Scientist.", "ML Engineer.", "Full Stack Developer."],
    description:
        "Data Science graduate student at Rutgers University with hands-on experience in Machine Learning, NLP, and full-stack development. I build end-to-end systems — from real-time data pipelines and fine-tuned transformer models to agentic LLM applications and production web apps — and love turning data into products people actually use.",
    github: "https://github.com/kvj-085",
    resume: "/Veera_Jeeshitha_Kolla_Resume.pdf",
    linkedin: "https://www.linkedin.com/in/veera-jeeshitha-kolla/",
    email: "vk536@scarletmail.rutgers.edu",
    // X: "https://twitter.com/USER_NAME",
    // insta: "https://www.instagram.com/USER_NAME/",
    // facebook: "https://www.facebook.com/USER_NAME/",
};

export const skills = [
    {
        title: "Languages",
        skills: [
            { name: "Python", image: devicon("python") },
            { name: "TypeScript", image: devicon("typescript") },
            { name: "JavaScript", image: devicon("javascript") },
            { name: "Java", image: devicon("java") },
            { name: "R", image: devicon("r") },
            { name: "C", image: devicon("c") },
            { name: "SQL", image: devicon("azuresqldatabase") },
            { name: "Bash", image: devicon("bash") },
            { name: "HTML", image: devicon("html5") },
            { name: "CSS", image: devicon("css3") },
        ],
    },
    {
        title: "ML, NLP & Data",
        skills: [
            { name: "scikit-learn", image: devicon("scikitlearn") },
            { name: "PyTorch", image: devicon("pytorch") },
            { name: "HuggingFace Transformers", image: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
            { name: "spaCy", image: "https://upload.wikimedia.org/wikipedia/commons/8/88/SpaCy_logo.svg" },
            { name: "CatBoost", image: "https://avatars.githubusercontent.com/u/29043415?s=200&v=4" },
            { name: "pandas", image: devicon("pandas") },
            { name: "Matplotlib", image: devicon("matplotlib") },
            { name: "Power BI", image: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
            { name: "Tableau", image: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg" },
        ],
    },
    {
        title: "Frameworks & Web",
        skills: [
            { name: "FastAPI", image: devicon("fastapi") },
            { name: "Node.js", image: devicon("nodejs") },
            { name: "Express.js", image: "data:image/png;base64,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" },
            { name: "React", image: devicon("react") },
            { name: "React Native (Expo)", image: devicon("reactnative") },
            { name: "Next.js", image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII=" },
            { name: "SQLAlchemy", image: devicon("sqlalchemy") },
            { name: "Prisma", image: devicon("prisma") },
            { name: "Zod", image: "https://raw.githubusercontent.com/colinhacks/zod/main/logo.svg" },
            { name: "WordPress", image: devicon("wordpress", "plain") },
        ],
    },
    {
        title: "Databases",
        skills: [
            { name: "PostgreSQL", image: devicon("postgresql") },
            { name: "MongoDB Atlas", image: devicon("mongodb") },
            { name: "SQLite", image: devicon("sqlite") },
        ],
    },
    {
        title: "DevOps, Testing & Tools",
        skills: [
            { name: "Docker", image: devicon("docker") },
            { name: "Kubernetes", image: devicon("kubernetes", "plain") },
            { name: "Apache Kafka", image: devicon("apachekafka") },
            { name: "Jest", image: devicon("jest", "plain") },
            { name: "Swagger UI", image: devicon("swagger") },
            { name: "GitHub Actions", image: devicon("githubactions") },
            { name: "Git", image: devicon("git") },
        ],
    },
    {
        title: "AI-Assisted Development",
        skills: [
            { name: "Claude Code", image: "https://avatars.githubusercontent.com/u/76263028?s=200&v=4" },
            { name: "GitHub Copilot", image: "https://avatars.githubusercontent.com/u/9919?s=200&v=4" },
            { name: "Cursor AI", image: "https://avatars.githubusercontent.com/u/126759922?s=200&v=4" },
            { name: "ChatGPT", image: "https://avatars.githubusercontent.com/u/14957082?s=200&v=4" },
        ],
    },
];

export const experiences = [
    {
        id: 0,
        img: initialsLogo("Sentari AI"),
        role: "SDE Intern",
        company: "Sentari AI",
        date: "Jul 2025 - Aug 2025",
        desc: "Built NLP-based contradiction and thought detection using spaCy, and created a Contradiction & Conflict Insight Card with a Python backend and React/TypeScript frontend. Implemented the delete-account feature in the iOS app using React Native (Expo) and maintained the WordPress website with custom pages and scheduled blog posts. Shipped production code to GitHub through pull requests, iterating on code review feedback.",
        skills: ["Python", "spaCy", "React Native (Expo)", "TypeScript", "React", "WordPress", "REST APIs", "GitHub"],
    },
    {
        id: 1,
        img: initialsLogo("Enterprise Building Training Solutions"),
        role: "AI & Data Intern",
        company: "Enterprise Building Training Solutions",
        date: "Oct 2023 - Jun 2024",
        desc: "Built and evaluated machine learning models in Python (scikit-learn, pandas) for classification and prediction tasks, benchmarking multiple algorithms to select the best-performing approach. Designed data pipelines for cleaning, preprocessing, and feature engineering on real-world business datasets, significantly reducing manual data preparation effort. Developed AI-driven solutions to automate internal workflows and presented model results to non-technical stakeholders through visualizations and reports.",
        skills: ["Python", "scikit-learn", "pandas", "NumPy", "Matplotlib", "Jupyter Notebook", "SQL", "Excel", "Git"],
    },
];

export const education = [
    {
        id: 0,
        img: "https://www.google.com/s2/favicons?domain=rutgers.edu&sz=128",
        school: "Rutgers University, New Brunswick, NJ",
        date: "Sep 2024 - May 2026",
        grade: "3.8/4.0 GPA",
        desc: "Master's in Data Science at Rutgers University, focusing on Machine Learning, Natural Language Processing, and data engineering. Projects include FEVER fact verification with fine-tuned transformers (~87% accuracy), a real-time Kafka-based sentiment analysis dashboard, and an agentic job-matching assistant built on the Claude API.",
        degree: "Master of Science in Data Science",
    },
    {
        id: 1,
        img: "https://www.google.com/s2/favicons?domain=bit-bangalore.edu.in&sz=128",
        school: "Bangalore Institute of Technology, Bangalore, India",
        date: "Sep 2020 - May 2024",
        grade: "8.8/10.0 CGPA",
        desc: "Bachelor of Engineering in Computer Science. Coursework in Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, and Machine Learning. Co-authored a paper on Network Intrusion Detection using Federated Learning, published in the Compliance Engineering Journal.",
        degree: "Bachelor of Engineering - BE, Computer Science",
    },
];

export const projects = [
    {
        id: 0,
        title: "Aeropanel: DIBBS + SAM.gov Opportunity Feed",
        date: "2026",
        description:
            "Repeatable data pipeline that finds federal solicitations matching a manufacturer's product keywords across DIBBS and SAM.gov. Browser automation collects and archives every results page, PDFs are parsed for line items and price history, and records are filtered by sourcing code, de-duplicated across amendments and sites, valued, and reported in a formula-driven Excel workbook with run logs and failed-source tests.",
        image: projectImage("Aeropanel Opportunity Feed"),
        tags: ["Python", "Playwright", "pandas", "SQLite", "pypdf", "openpyxl", "ETL"],
        category: "data engineering",
        github: "https://github.com/kvj-085/aeropanel",
    },
    {
        id: 1,
        title: "Job Match Assistant",
        date: "2026",
        description:
            "Full-stack app that analyzes job descriptions against a candidate profile using an agentic Claude tool-use pipeline, returning a match score, gap analysis, and tailored resume bullets. Strict TypeScript Express API with Zod validation, Jest/Supertest tests with a mocked Anthropic SDK, and GitHub Actions CI.",
        image: projectImage("Job Match Assistant"),
        tags: ["TypeScript", "Node.js", "Express", "React", "Claude API", "Zod", "Jest", "Vite"],
        category: "web app",
        github: "https://github.com/kvj-085/job-match-assistant",
    },
    {
        id: 2,
        title: "Bank Portal",
        date: "2026",
        description:
            "Full-stack banking portal with JWT authentication, role-based access control, and protected routes. Money transfers use idempotency keys and audit logging for safe retries and a traceable history, on a normalized PostgreSQL schema containerized with Docker Compose.",
        image: projectImage("Bank Portal"),
        tags: ["FastAPI", "React", "PostgreSQL", "JWT", "Docker Compose"],
        category: "web app",
        github: "https://github.com/kvj-085/learning",
    },
    {
        id: 3,
        title: "Travel Agency Portal",
        date: "2026",
        description:
            "Travel booking platform on Next.js 14 (App Router) with PostgreSQL and Prisma. Stripe Payment Intents with webhooks for bookings and refunds, NextAuth (Credentials + Google OAuth) with role-based middleware, signed Cloudinary uploads, and per-IP rate limiting.",
        image: projectImage("Travel Agency Portal"),
        tags: ["Next.js 14", "TypeScript", "PostgreSQL", "Prisma", "Stripe", "NextAuth"],
        category: "web app",
        github: "https://github.com/kvj-085/travel_agency",
    },
    {
        id: 4,
        title: "Real-Time Sentiment Analysis Dashboard",
        date: "2026",
        description:
            "End-to-end streaming pipeline that ingests text through Apache Kafka, classifies sentiment with a DistilBERT model in a Kafka consumer, serves live and historical metrics from PostgreSQL via FastAPI, and visualizes them in a React dashboard — all containerized with Docker Compose.",
        image: projectImage("Sentiment Dashboard"),
        tags: ["Apache Kafka", "FastAPI", "React", "PostgreSQL", "DistilBERT", "Docker"],
        category: "machine learning",
        github: "https://github.com/kvj-085/sentiment_dashboard",
    },
    {
        id: 5,
        title: "FEVER Fact Verification",
        date: "2025",
        description:
            "Fact verification pipeline classifying claims as SUPPORTS, REFUTES, or NOT ENOUGH INFO using Wikipedia evidence. TF-IDF baselines reached 71.9% (SVM); fine-tuned BERT, DistilBERT, and RoBERTa improved this to ~87% accuracy and macro-F1, with detailed error analysis.",
        image: projectImage("FEVER Fact Verification"),
        tags: ["Python", "PyTorch", "HuggingFace", "BERT", "RoBERTa", "scikit-learn"],
        category: "machine learning",
        github: "https://github.com/kvj-085/NLP_project",
    },
    {
        id: 6,
        title: "Global COVID-19 Dashboard",
        date: "2025",
        description:
            "Real-time ETL pipeline that extracts COVID-19 data from public APIs, transforms it with pandas, and loads it into PostgreSQL via SQLAlchemy, feeding an interactive Power BI dashboard with map visuals, time-series graphs, and daily refreshes.",
        image: projectImage("COVID-19 Dashboard"),
        tags: ["SQLAlchemy", "PostgreSQL", "pandas", "Power BI", "REST APIs"],
        category: "data engineering",
        github: "https://github.com/kvj-085/covid_etl_dashboard",
    },
    {
        id: 7,
        title: "Network Intrusion Detection using Federated Learning",
        date: "2024",
        description:
            "Team project building a decentralized intrusion detection system with CatBoost local models and a Bagging Classifier global model. SMOTE-balanced data and feature engineering led to 98% test accuracy; published in the Compliance Engineering Journal.",
        image: projectImage("Federated Intrusion Detection"),
        tags: ["Python", "CatBoost", "Federated Learning", "SMOTE", "scikit-learn"],
        category: "machine learning",
        github: "https://github.com/kvj-085",
    },
    {
        id: 8,
        title: "Insurance Claim Prediction",
        date: "2023",
        description:
            "Cleaned and preprocessed 1,338 samples (17% less noise), handled class imbalance with SMOTE, and benchmarked six ML models — Gradient Boosting performed best on F1-score. Results visualized and interpreted with Matplotlib.",
        image: projectImage("Insurance Claim Prediction"),
        tags: ["Python", "scikit-learn", "pandas", "SMOTE", "Matplotlib"],
        category: "machine learning",
        github: "https://github.com/kvj-085",
    },
];
