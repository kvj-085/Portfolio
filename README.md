# Veera Jeeshitha Kolla — Portfolio

Personal portfolio website showcasing my work in **Data Science, Machine Learning, NLP, and Full-Stack Development**.

I'm a Data Science graduate student at **Rutgers University** (MS, 3.8/4.0) with a Computer Science background from **Bangalore Institute of Technology**. I like building end-to-end systems — real-time data pipelines, fine-tuned transformer models, agentic LLM applications, and the web apps that put them in front of people.

[![GitHub](https://img.shields.io/badge/GitHub-kvj--085-181717?logo=github)](https://github.com/kvj-085)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Veera%20Jeeshitha%20Kolla-0A66C2?logo=linkedin)](https://www.linkedin.com/in/veera-jeeshitha-kolla/)
[![Email](https://img.shields.io/badge/Email-vk536%40scarletmail.rutgers.edu-854CE6?logo=gmail&logoColor=white)](mailto:vk536@scarletmail.rutgers.edu)

---

## What's inside

| Section | Highlights |
|---|---|
| **Skills** | Python, TypeScript, Java, SQL · scikit-learn, PyTorch, HuggingFace · FastAPI, React, Node.js · Kafka, Docker, PostgreSQL |
| **Experience** | SDE Intern @ Sentari AI · AI & Data Intern @ Enterprise Building Training Solutions |
| **Projects** | Job Match Assistant (Claude agent), Real-Time Sentiment Dashboard, FEVER Fact Verification, Aeropanel Opportunity Feed, and more — filterable by Web Apps / Machine Learning / Data Engineering |
| **Education** | Rutgers University (MS Data Science) · Bangalore Institute of Technology (BE Computer Science) |

## Built with

- **React 18** (Create React App)
- **styled-components** and **Material UI** for styling and icons
- **Three.js** via `@react-three/fiber` + `@react-three/drei` for the 3D canvas
- **framer-motion**, `react-tilt`, `typewriter-effect`, and `react-vertical-timeline-component` for animation

## Run it locally

```bash
git clone https://github.com/kvj-085/Portfolio.git
cd Portfolio
npm install
npm start
```

The site opens at [http://localhost:3000](http://localhost:3000). Build a production bundle with `npm run build`.

## Updating content

Everything shown on the site lives in one file: [`src/data/constants.js`](src/data/constants.js).

- **Bio / links** → `Bio`
- **Skills** → `skills`
- **Jobs** → `experiences`
- **Schools** → `education`
- **Projects** → `projects` (set `category` to `web app`, `machine learning`, or `data engineering` so the filter buttons pick it up)

### Updating the resume

The **Check Resume** button serves [`public/Veera_Jeeshitha_Kolla_Resume.pdf`](public/Veera_Jeeshitha_Kolla_Resume.pdf). To publish a new version, overwrite that file with the new PDF (keep the same filename), then commit and redeploy — no code changes needed.

## Credits

Based on the open-source 3D portfolio template by [Mann Savani](https://github.com/Alpha-Stark), used with permission.
