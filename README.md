# Countries Info App (backend)

This repository contains one of two separate applications: a backend built with Express.js and a frontend built with React.js. Together, they provide information about countries, including available countries, border countries, population data, and flags.

## Tech Stack

- Node.js
- Express.js
- TypeScript
- Axios
- dotenv

## Installation & Setup

Prerequisites

- Node.js installed
- npm or yarn installed

1. Clone the Repository

   git clone https://github.com/yourusername/countries-info-app-backend.git

   cd countries-info-app-backend

2. Backend Setup

   npm install # or yarn install

## Configure Environment Variables

Create a .env file in the backend folder:

PORT=5000

BASE_URL_DATE_NAGER=https://date.nager.at/api/v3

BASE_URL_COUNTRIES_NOW=https://countriesnow.space/api/v0.1/countries

3. Start the Backend Server

   npm run dev # or yarn dev

The backend will run on http://localhost:5000.
