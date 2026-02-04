# PopX - Authentication & Profile Management App

A modern, responsive authentication and profile management application built with **Vite**, **React**, **JavaScript**, and **Tailwind CSS**. Features a pixel-perfect mobile interface with seamless navigation between landing, login, signup, and profile pages.

## Features

- Landing Page - Welcome screen with signup and login options
- Login Page - Email and password authentication form with validation
- Signup Page - Complete registration form with all required fields
- Profile Page - User account settings and information display
- Mobile-First Design - Responsive layout for all screen sizes
- Form Validation - Email format and password validation
- Pixel-Perfect UI - Matches design specifications exactly
- Fast Performance - Vite with instant HMR

## Links

- **GitHub Repository**: [VIEW GIT-CODE](https://github.com/vishnuu5/popx-app_Educase_India.git)
- **Live Demo**: [View DEMO]()
- **Design Reference**: Adobe XD Design

## Quick Start

### Installation

1. Clone the repository

```bash
git clone https://github.com/vishnuu5/popx-app_Educase_India.git
cd popx-app
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Open in browser**
   - The app will automatically open at `http://localhost:5173`
   - Navigate between pages using the buttons

## Available Scripts

- **`npm run dev`** - Start Vite development server (opens at http://localhost:5173)
- **`npm run build`** - Create production build in `dist/` folder
- **`npm run preview`** - Preview production build locally

## Pages Overview

### 1. Landing Page (`/`)

- Welcome greeting with PopX branding
- Two main action buttons:
  - "Create Account" → navigates to signup
  - "Already Registered? Login" → navigates to login
- Centered mobile phone frame design

### 2. Login Page (`/login`)

- Email input field with validation
- Password input field
- Error message display
- Login button with form submission
- Link to signup page for new users

### 3. Signup Page (`/signup`)

- Full Name input
- Phone Number input
- Email Address input with validation
- Password input (minimum 6 characters)
- Company Name input
- "Are you an Agency?" radio buttons (Yes/No)
- Create Account button
- Form validation with error messages

### 4. Profile Page (`/profile`)

- User avatar with verification badge
- Display user information (Name, Email, Phone, Company)
- Account type indicator (Agency/Individual)
- User bio/description
- Edit Profile button
- Logout button with redirect to landing

## Navigation Flow

```
Landing Page (/)
    ├── Create Account -> Signup Page
    └── Login → Login Page

Signup Page (/signup)
    ├── Create Account -> Profile Page (if authenticated)
    └── Login here -> Login Page

Login Page (/login)
    ├── Login -> Profile Page (if authenticated)
    └── Sign up here -> Signup Page

Profile Page (/profile)
    ├── Logout -> Landing Page
    └── Edit Profile -> Profile Page (future feature)
```

## Form Validation

### Email Validation

- Standard email format: `user@example.com`
- Regex pattern: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`

### Password Validation

- Minimum length: 6 characters
- Required field

### Required Fields

- **Signup**: Full Name, Phone, Email, Password, Company Name
- **Login**: Email, Password

## Dependencies

- **react** - JavaScript UI library
- **react-dom** - React DOM rendering
- **react-router-dom** - Client-side routing

## License

MIT License - feel free to use this project for personal or commercial purposes.
