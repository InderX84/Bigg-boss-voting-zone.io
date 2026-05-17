# ⭐ Bigg Boss Voting Zone

A fully responsive web-based voting platform for Bigg Boss fans to vote for their favourite contestants, view live results, and manage the show from an admin panel.

---

## 🚀 Live Demo

Open `index.html` in your browser to get started.

---

## 📁 Project Structure

```
Bigg-boss-voting-zone.io/
├── index.html                    # Login page (entry point)
├── 404.html                      # Page not found
├── pages/
│   ├── signup.html               # User registration
│   ├── forgot-password.html      # Forgot password
│   ├── reset-password.html       # Reset password
│   ├── voting.html               # Main voting page
│   ├── results.html              # User results page
│   ├── about.html                # About us
│   ├── feedback.html             # Feedback form
│   ├── membership.html           # Membership plans
│   ├── admin-login.html          # Admin login
│   ├── admin-dashboard.html      # Admin dashboard
│   ├── admin-add-contestant.html # Add contestant
│   └── admin-results.html        # Admin results & publish
├── css/
│   ├── shared.css                # Global styles, navbar, layout, toast, loader
│   ├── auth.css                  # Login, signup, forgot, reset forms
│   ├── voting.css                # Voting page & contestant cards
│   ├── results.css               # Results page, podium, rankings
│   ├── about.css                 # About page sections
│   ├── membership.css            # Pricing/plan cards
│   ├── admin-dashboard.css       # Admin dashboard cards
│   └── app.js                    # Shared JS: toast, loader, logout modal, nav toggle
└── assets/
    ├── image.jpg                 # Default contestant photo
    └── logo.png                  # Project logo
```

---

## ✨ Features

### User
- 🔐 Register & login with email and password
- 🗳️ Vote for one contestant per account (one vote per user enforced)
- 📊 View live vote percentage bars on the voting page
- 🏆 View final results with podium (top 3) and full rankings after admin publishes
- 💬 Submit feedback
- 📋 View membership plans
- 🔑 Forgot & reset password flow

### Admin
- 🛡️ Secure admin login with hardcoded credentials
- ➕ Add new contestants with photo upload
- 📈 View real-time vote counts and standings
- 📢 Publish results — makes them visible to all users
- 🔒 Publish button disables after publishing to prevent duplicate publishes

### UI / UX
- 🌟 Branded loading screen on every page
- 🍞 Toast notifications replacing all browser alerts
- 🚪 Logout confirmation modal on all pages
- 📱 Fully mobile responsive with hamburger navigation
- 🎨 Consistent dark glass design across all pages

---

## 🔑 Credentials

### User Login
Register a new account via the **Sign Up** page.

> **Example:**
> - Email: `user@example.com`
> - Password: `password123`

### Admin Login
| Field    | Value                  |
|----------|------------------------|
| Email    | `admin@biggboss.com`   |
| Password | `admin123`             |

---

## 🗺️ Page Flow

```
index.html (Login)
├── pages/signup.html
├── pages/forgot-password.html → pages/reset-password.html
├── pages/admin-login.html → pages/admin-dashboard.html
│                               ├── pages/admin-add-contestant.html
│                               └── pages/admin-results.html (Publish Results)
└── pages/voting.html (after login)
    ├── pages/results.html
    ├── pages/about.html
    ├── pages/feedback.html
    └── pages/membership.html
```

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Page structure |
| CSS3 | Styling, animations, responsive layout |
| Vanilla JavaScript | Voting logic, localStorage, UI interactions |
| Google Fonts | Bruno Ace, Poppins |
| localStorage | User data, votes, session state |

> No frameworks, no backend, no dependencies — runs entirely in the browser.

---

## 💾 localStorage Keys

| Key | Description |
|---|---|
| `formData` | Array of registered users `[{ email, pwd }]` |
| `email` | Currently logged-in user's email |
| `votes` | Vote counts per contestant `{ name: count }` |
| `voted_<email>` | Contestant name the user voted for |
| `resultsPublished` | `"true"` when admin has published results |

---

## 📱 Responsive Breakpoints

| Breakpoint | Behaviour |
|---|---|
| `> 768px` | Full desktop layout, side-by-side split panels |
| `≤ 768px` | Stacked layout, hamburger navbar, full-width cards |
| `≤ 480px` | Compact text, full-width toasts |

---

## 🚧 Known Limitations

- Data is stored in `localStorage` — clears when browser data is cleared
- Admin credentials are hardcoded in the frontend (not suitable for production)
- No real backend or database — votes are not persistent across devices

---

## 📸 Screenshots

| Page | Description |
|---|---|
| Login | Split layout with branding and sign-in form |
| Voting | Banner with live stats + horizontal contestant cards |
| Results | Podium for top 3 + full animated rankings |
| Admin Dashboard | Card-based dashboard with quick actions |

---

## 👨‍💻 Author

Built with ❤️ for Bigg Boss fans.

---

## 📄 License

This project is for educational and personal use only.
