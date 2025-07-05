# Contact Manager

This is a basic contact manager application built using Laravel for the backend and React with Bootstrap for the frontend. The app is designed to store and display a list of contacts.

## Backend (Laravel)


### Installation
1. git clone the github repo
2. Navigate to the backend directory:
   cd contact-manager-backend
3. Install dependencies:
   composer install

4. Update the `.env` file to use SQLite:

   DB_CONNECTION=sqlite

5. Run migrations:
   php artisan migrate

6. Start the Laravel development server:
   php artisan serve

## Frontend (React)

### Requirements
- Node.js 14+
- npm

### Installation
1. Navigate to the frontend directory:
   cd contact-manager-frontend
2. Install dependencies:
   npm install
   ```
3. Start the Vite development server:
   npm run dev

## Using the Application
- Navigate to `http://localhost:5173` to access the React frontend.
- Use the form to add new contacts. Contacts will be listed below the form.

## Features
- Add new contacts with name, email, and phone number.
- List all contacts with search functionality.
- could not finish up the responsiveness 
- Toast notifications for user feedback.

## Development 
- Backend API is built using Laravel.
- Frontend is styled with Bootstrap and uses Axios for API requests.

