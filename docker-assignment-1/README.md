# 🚀 Docker Containerization Assignment

## 📌 Overview

This project demonstrates the containerization of a web application using **Docker, Docker Compose, and PostgreSQL**. The system follows a multi-container architecture with a Node.js backend and PostgreSQL database, designed for production-ready deployment.

---

## 🎯 Objective

* Containerize a full-stack application
* Use **Docker Compose** for orchestration
* Implement **Ipvlan networking** for LAN access
* Ensure **data persistence using volumes**
* Optimize images using **multi-stage builds**

---

## 🏗️ Project Structure

```
docker-assignment-1/
│── backend/              # Node.js + Express API
│── database/             # PostgreSQL Docker setup
│── screenshots/          # Output proof
│── docker-compose.yml    # Orchestration file
│── index.html            # Testing frontend
│── README.md             # Documentation
│── Short Report.pdf      # Final report
```

---

## ⚙️ Technologies Used

* Docker & Docker Compose
* Node.js + Express
* PostgreSQL
* Ipvlan Networking

---

## 🔧 Setup Instructions

### Step 1: Clone Repository

```
git clone https://github.com/rishiraj570/containerization-devops.git
cd containerization-devops/docker-assignment-1
```

### Step 2: Run Containers

```
docker-compose up -d --build
```

### Step 3: Check Running Containers

```
docker ps
```

---

## 🌐 API Endpoints

* **Health Check**

```
GET /health
```

* **Insert Data**

```
POST /api/records
Body: { "data": "value" }
```

* **Fetch Data**

```
GET /api/records
```

---

## 🌍 Access Application

Open in browser:

```
http://<backend-ip>:3000/health
```

---

## 🔥 Key Features

* Multi-container architecture
* Static IP using **Ipvlan network**
* Persistent storage using Docker volumes
* Lightweight images using Alpine
* Secure container (non-root user)

---

## 📸 Screenshots

Refer to `screenshots/` folder for:

* Network inspection
* Container running proof
* Data persistence test

---

## 📊 Results

* Reduced image size using optimization techniques
* Successfully achieved LAN accessibility
* Data persisted even after container restart

---

## 📌 Conclusion

This project successfully demonstrates containerization, networking, and orchestration using Docker. It follows best practices like multi-stage builds, volume persistence, and secure configurations, making it suitable for real-world deployment.

---

## 👨‍💻 Author

Rishiraj Singh
B.Tech CSE (CCVT)
