
# 💪 FitLog - Workout Library

## 🌐 Live Website

Vercel Deployment:

https://vercel.com/solymanwasif/fitlog


## 📂 GitHub Repository

Source Code:

https://github.com/Solymanwasif/fitlog


---

# 📌 Project Overview

FitLog is a modern workout library web application built with Next.js. It allows users to explore different workouts, view detailed exercise information, create their daily workout plan, and save workouts for future use.

The application follows a dark gym-focused design with a simple and responsive user interface that works across desktop, tablet, and mobile devices.

---

# 🚀 Features

## 🏋️ Workout Library

- Fetches workout data from an API.
- Displays workout cards with:
  - Workout image
  - Muscle groups
  - Equipment
  - Duration
  - Calories
  - Rating
- Responsive workout grid layout.

---

## 📄 Workout Details Page

Users can view complete workout details including:

- Large workout image
- Workout name
- Description
- Muscle groups
- Equipment
- Difficulty
- Sets
- Reps
- Duration
- Calories
- Rating
- Step-by-step instructions

Users can:

- Add workouts to today's plan
- Save workouts for later

---

## 📋 My Plan Page

The My Plan page allows users to manage workouts.

Features:

- Today's Plan tab
- Saved workout tab
- Exercise counter
- Total workout minutes
- Total calories
- View workout details
- Mark workout as completed
- Remove workouts

---

## ✅ Workout Completion

Users can mark planned workouts as completed.

After clicking:

- Button changes to completed status
- Toast notification appears

---

## 🔖 Saved Workout System

Users can save workouts and manage them separately.

Features:

- Save workouts
- View saved workouts
- Remove saved workouts
- Saved counter updates automatically

---

## 🔔 Notifications

Toast notifications are provided for:

- Adding workouts
- Saving workouts
- Removing workouts
- Completing workouts

---

## 📱 Responsive Design

The application is optimized for:

- Desktop
- Tablet
- Mobile devices

The layout automatically adjusts for different screen sizes.

---

# 🛠 Technologies Used

- Next.js
- React.js
- JavaScript
- Tailwind CSS
- Next.js App Router
- REST API
- Local Storage
- React Hot Toast
- Lucide React Icons
- Vercel

---

# 🔗 API Used

## All Workout Data


https://api.api-store.workers.dev/api/fitlog


## Single Workout Details


https://api.api-store.workers.dev/api/fitlog/:id


---

# 📂 Project Structure


app
│
├── components
│   ├── Navbar.jsx
│   ├── footer.jsx
│   ├── Hero.jsx
│   ├── Loading.jsx
│   └── Workout.jsx
│
├── context
│   └── FitlogContext.jsx
│
├── my-plan
│   └── page.jsx
│
├── workout
│   └── [id]
│       └── page.jsx
│
├── page.jsx
├── layout.jsx
├── globals.css
└── not-found.jsx

---

# ⚙️ Installation and Setup

Clone the repository:

```bash
git clone https://github.com/Solymanwasif/fitlog.git
```

Go to the project folder:

bash
cd fitlog


Install dependencies:

bash
npm install


Run development server:
 https://fitlog-kappa-swart.vercel.app/
bash
npm run dev


Open:


http://localhost:3000


---

# 🌍 Deployment

The project is deployed using Vercel.

Deployment platform:


https://fitlog-kappa-swart.vercel.app/


---
