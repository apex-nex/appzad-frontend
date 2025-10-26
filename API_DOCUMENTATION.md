# Resume API Documentation

This portfolio includes a REST API to access resume data stored in JSON format.

## Base URL
```
http://localhost:3000/api
```

## Endpoints

### 1. Get Full Resume Data
**Endpoint:** `GET /api/resume`

**Description:** Returns complete resume data including personal info, experience, projects, skills, certifications, and education.

**Example Request:**
```bash
curl http://localhost:3000/api/resume
```

**Example Response:**
```json
{
  "personal": {
    "name": "Abdul Raheman Anas",
    "title": "Software Engineer | Frontend Developer",
    "email": "aranas0876@gmail.com",
    "phone": "+91-7276026626",
    "linkedin": "https://linkedin.com/in/abdul-raheman-anas-307860210",
    "github": "https://github.com/anasmomin143",
    "location": "Hyderabad, Telangana, India"
  },
  "summary": "Software Engineer with 2+ years...",
  "experience": [...],
  "projects": [...],
  "technicalSkills": {...},
  "certifications": [...],
  "education": [...]
}
```

---

### 2. Get Experience
**Endpoint:** `GET /api/resume/experience`

**Description:** Returns work experience data only.

**Example Request:**
```bash
curl http://localhost:3000/api/resume/experience
```

**Example Response:**
```json
[
  {
    "id": "exp-1",
    "position": "Software Engineer II",
    "company": "Elemica",
    "location": "Hyderabad, Telangana, India",
    "workMode": "Hybrid",
    "startDate": "2025-07-01",
    "endDate": null,
    "current": true,
    "responsibilities": [...],
    "technologies": [...]
  }
]
```

---

### 3. Get Projects
**Endpoint:** `GET /api/resume/projects`

**Description:** Returns project portfolio data.

**Example Request:**
```bash
curl http://localhost:3000/api/resume/projects
```

**Example Response:**
```json
[
  {
    "id": "proj-1",
    "name": "Capture Product",
    "company": "Elemica",
    "startDate": "2025-07-01",
    "endDate": null,
    "current": true,
    "description": "Order management and data capture dashboard...",
    "highlights": [...],
    "technologies": [...],
    "imageUrl": "/images/projects/capture.jpg",
    "demoUrl": null,
    "githubUrl": null
  }
]
```

---

### 4. Get Technical Skills
**Endpoint:** `GET /api/resume/skills`

**Description:** Returns categorized technical skills.

**Example Request:**
```bash
curl http://localhost:3000/api/resume/skills
```

**Example Response:**
```json
{
  "frontendFrameworks": ["React.js", "Vue.js", "Next.js", "Vue.js"],
  "languages": ["TypeScript", "JavaScript ES6+", "HTML5", "CSS3"],
  "styling": ["Tailwind CSS", "SCSS", "Material UI", "Bootstrap"],
  "stateManagement": ["Redux", "Context API", "RxJS", "Zustand"],
  "webTechnologies": [...],
  "performance": [...],
  "tools": [...],
  "methodologies": [...],
  "backendFoundation": [...]
}
```

---

### 5. Get Certifications
**Endpoint:** `GET /api/resume/certifications`

**Description:** Returns certifications and training.

**Example Request:**
```bash
curl http://localhost:3000/api/resume/certifications
```

**Example Response:**
```json
[
  {
    "id": "cert-1",
    "name": "Advanced React Patterns and Performance Optimization",
    "issuer": "Udemy",
    "date": "2024-11-01",
    "credentialUrl": null
  }
]
```

---

## Usage in React Components

### Using Custom Hooks

```typescript
import { useResumeData, useExperience, useProjects } from '@/hooks/useResumeData';

function MyComponent() {
  const { data, loading, error } = useResumeData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>{data?.personal.name}</h1>
      <p>{data?.summary}</p>
    </div>
  );
}

// For specific data
function ExperienceComponent() {
  const { data: experience, loading, error } = useExperience();

  return (
    <div>
      {experience?.map(exp => (
        <div key={exp.id}>
          <h3>{exp.position} at {exp.company}</h3>
        </div>
      ))}
    </div>
  );
}
```

### Using Fetch API

```typescript
async function fetchResumeData() {
  const response = await fetch('/api/resume');
  const data = await response.json();
  return data;
}
```

---

## TypeScript Types

All API responses are fully typed. Import types from:

```typescript
import type {
  ResumeData,
  Experience,
  Project,
  TechnicalSkills,
  Certification
} from '@/types/resume';
```

---

## Caching

All endpoints include cache headers for optimal performance:
- Public cache: 1 hour (3600 seconds)
- Stale-while-revalidate: 24 hours (86400 seconds)

---

## Data Source

Resume data is stored in `/data/resume.json`. To update your resume:
1. Edit the JSON file directly
2. Changes will be reflected immediately in the API
3. No database required!

---

## Error Handling

All endpoints return appropriate HTTP status codes:
- `200 OK` - Successful request
- `500 Internal Server Error` - Failed to fetch data

Error response format:
```json
{
  "error": "Failed to fetch resume data"
}
```
