# ZeroBite

ZeroBite is a Full Stack MERN application that helps reduce food wastage by connecting food donors with NGOs. Donors can create food donations, while NGOs can browse and claim available food for distribution to communities in need.

## Live Demo

Frontend: https://zero-bite-tvlp.vercel.app/

## Features

### Authentication & Authorization
- User Registration
- User Login
- JWT Authentication
- Role-Based Access Control
- Donor and NGO Roles

### Food Donation Management
- Create Food Donations
- Add Food Details
- Add Food Images
- Set Expiry Time
- Pickup Location Management

### Food Feed
- Browse Available Donations
- View Donor Information
- View Food Details
- Claim Available Donations

### Claims Management
- NGOs can claim food donations
- Prevent users from claiming their own donations
- Track claim status

### User Dashboard
- Personalized Dashboard
- Quick Actions
- Donation Statistics
- Claim Tracking

### UI Features
- Responsive Design
- Dark Mode / Light Mode
- Modern Black & White Theme
- Clean Card-Based Layout

---

## Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Inline CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- JWT (JSON Web Token)

### Deployment
- Frontend: Vercel
- Backend: Node.js + Express

---

## Project Structure

```bash
ZeroBite/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   └── package.json
│
└── README.md
```

## Installation

### Clone Repository

```bash
git clone https://github.com/Suryanshgupta1234/ZeroBite.git
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_URI
JWT_SECRET=YOUR_SECRET_KEY
```

Run backend:

```bash
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## API Endpoints

### User Routes

```http
POST /api/users/register
POST /api/users/login
```

### Food Routes

```http
POST /api/food
GET /api/food
GET /api/food/my-donations
```

### Claim Routes

```http
POST /api/claims
GET /api/claims
GET /api/claims/my-claims
PUT /api/claims/:id/approve
```

---

## Future Improvements

- Cloudinary Image Uploads
- Email Notifications
- Real-Time Updates
- Geolocation-Based Search
- Analytics Dashboard
- Food Recommendation System
- Mobile Application

---

## Learning Outcomes

This project helped me gain hands-on experience with:

- Full Stack MERN Development
- REST API Development
- Authentication & Authorization
- MongoDB Data Modeling
- React State Management
- Backend Architecture
- Deployment Workflows
- Git & GitHub

---

## Author

**Suryansh Gupta**

LinkedIn: www.linkedin.com/in/suryansh-gupta-b9152a255

GitHub: https://github.com/Suryanshgupta1234

---

## Project Vision

"Save Food. Feed Lives."

ZeroBite aims to bridge the gap between surplus food providers and organizations that can distribute food to those who need it most, reducing food waste while helping communities.
