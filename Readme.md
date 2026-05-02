# Team Task Manager

Full-stack web app with role-based access (Admin/Member)

---

## 🚀 Live URL
https://team-task-manager-production-551d.up.railway.app

---

## 📌 Features
- Authentication (Signup/Login)
- Role-based access (Admin / Member)
- Project & Team management
- Task creation, assignment & tracking
- Dashboard (tasks, completed, pending, overdue)

---

## 🛠 Tech Stack
- Frontend: React
- Backend: Node.js, Express
- Database: MongoDB
- Deployment: Railway

---

## ⚙️ Setup Instructions

### 1. Clone repo
```bash
git clone https://github.com/your-username/team-task-manager.git
cd team-task-manager

cd backend
npm install
npm start

cd frontend
npm install
npm start

PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key

📡 API Endpoints (Basic)
POST /api/auth/register
POST /api/auth/login
GET /api/dashboard
CRUD /api/projects
CRUD /api/tasks

📦 Deployment

Deployed on Railway and fully functional.


---

# 🚀 Final Step

Run:

```bash
git add README.md
git commit -m "Updated README with full details"
git push
