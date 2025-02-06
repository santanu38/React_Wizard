# React Wizard App - Component & State Management Report

## 1️⃣ Component Structure
The application is structured as follows:
- `Counter.jsx`: A simple counter component with local state.
- `RichTextEditor.jsx`: A rich text editor using TipTap.
- `UserForm.jsx`: A form for user input, stored in local storage.
- `Login.jsx`: Handles Google authentication with Firebase.
- `PrivateRoute.jsx`: Ensures protected routes for authenticated users.
- `App.jsx`: Main component that renders the layout.
- `Redux/`: Stores authentication state using Redux.

## 2️⃣ State Management
- **useState**: Used in `Counter.jsx` and `UserForm.jsx` for local state.
- **Local Storage**: Used in `UserForm.jsx` to persist user data.
- **Redux**: Used for authentication state (login/logout).
- **React Router**: Used for managing navigation.

## 3️⃣ Design Decisions
- **Local Storage** is used instead of Redux for form data to improve performance.
- **Redux is used for authentication** to maintain user session globally.
- **Framer Motion** is used for animations to enhance UI and user experience.

## 4️⃣ Deployment & Repository
- **GitHub Repository**: [GitHub Repo Link]
- **Live Deployment**: [Deployed App Link]
