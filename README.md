# 🩺 Doctor Appointment & Help — Full Stack Web App

A full-stack doctor appointment booking web application where users can explore doctors, book appointments, manage their profile, and contact support/help. Built using **React + Tailwind CSS** for frontend and **Django + PostgreSQL** for backend.(STILL IN THE LEARNING  BUILDING PROCESS FRONTEND NEED TOUCH BACKEND NEEDS COMPLETELY WORK )

---

## 🚀 Features

### 👤 User Features
- Register / Login (JWT Auth)
- Browse doctors list
- Search + filter doctors (specialty, location, fees, rating)
- View doctor details page
- Book appointment (date + time slot)
- View upcoming & past appointments
- Cancel appointment
- Profile management

### 🧑‍⚕️ Doctor Features (Optional)
- Doctor dashboard
- View appointment bookings
- Manage availability / slots

### 🆘 Help / Support
- FAQ section
- Contact support form
- Submit issue/feedback

---

## 🧰 Tech Stack

### Frontend
- React + Vite
- Tailwind CSS
- React Router DOM
- Axios

### Backend
- Django
- Django REST Framework (DRF)
- PostgreSQL
- JWT Authentication (SimpleJWT)

---

## 📂 Project Structure

doctor-appointment-app/
│
├── client/ # React Frontend
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── routes/
│ │ ├── api/
│ │ └── App.jsx
│ └── package.json
│
├── server/ # Django Backend
│ ├── config/ # settings.py, urls.py
│ ├── apps/
│ │ ├── accounts/ # auth + user profile
│ │ ├── doctors/ # doctors + specialties
│ │ ├── appointments/ # booking system
│ │ └── support/ # help/contact
│ ├── manage.py
│ └── requirements.txt
│
└── README.md
