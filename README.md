# PrimaWeb - Modern Full-Stack Architecture

Application web moderne, modulaire et conteneurisée pour le centre éducatif **Brighton**, migrée depuis un site web statique HTML/CSS/JS.

---

## 🛠 Stack Technique

- **Base de données :** PostgreSQL 16 (persistance avec volume Docker)
- **Backend :** Django 5 + Django REST Framework (Python 3.11)
- **Frontend :** Next.js 14 (App Router, React 18, TypeScript)
- **Reverse Proxy :** Nginx 1.25 Alpine
- **Orchestration :** Docker & Docker Compose

---

## 🚀 Démarrage Rapide

### 1. Variables d'environnement
Un fichier `.env` a été généré avec les configurations par défaut. Vous pouvez l'adapter au besoin :
```bash
cp .env.example .env
```

### 2. Lancement avec Docker Compose
Pour construire et lancer l'ensemble des conteneurs (`db`, `backend`, `frontend`, `nginx`) :
```bash
docker compose up --build -d
```

### 3. Accès aux Services
- **Site Web Public (Nginx) :** [http://localhost:8085](http://localhost:8085)
- **Frontend Next.js direct :** [http://localhost:3001](http://localhost:3001)
- **API Django DRF :** [http://localhost:8002/api/](http://localhost:8002/api/)
- **Administration Django :** [http://localhost:8002/admin/](http://localhost:8002/admin/)
- **PostgreSQL externe :** `localhost:5436` (base `primaweb_db`)

---

## 📂 Endpoints API REST

| Méthode | Route | Description |
| :--- | :--- | :--- |
| `GET` | `/api/configuration/` | Coordonnées et configuration du site |
| `GET` | `/api/slides/` | Diapositives actives du carrousel d'accueil |
| `GET` | `/api/programs/` | Liste des offres et programmes pédagogiques |
| `GET` | `/api/about/` | Présentation de l'institution |
| `GET` | `/api/testimonials/` | Avis et retours de parents |
| `POST` | `/api/contact/` | Soumission du formulaire "Request A call Back" |
| `POST` | `/api/newsletter/subscribe/` | Inscription à la newsletter |

---

## 👥 Création d'un Superutilisateur Django
```bash
docker compose exec backend python manage.py createsuperuser
```
