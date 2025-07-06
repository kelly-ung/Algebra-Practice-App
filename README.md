# <img src="https://github.com/user-attachments/assets/154369f0-e400-420f-a315-07693d21c07b" alt="bee" width="70"/>  Algebee - Algebra Practice App

Algebee is an interactive web application designed to help practice solving linear algebra equations. With a friendly interface, it provides instant feedback and offers a gamified learning experience.

**Try it out**: [algebee.vercel.app/](https://algebee.vercel.app/)

![image](https://github.com/user-attachments/assets/2ea34e62-55ea-44ff-bcae-89b1ef0c4904)

## Features

- **Random Equation Generation**: Dynamically creates basic linear algebra problems.
- **Interactive Practice**: Users can input their answers and receive immediate feedback.
- **Gamified Learning**: A "lives" system with three attempts per question, represented by honeycombs.
- **Progress Tracking**: A visual progress bar shows the results of the last five questions.
- **Detailed Solutions**: If a user is unable to solve a problem after three tries, a step-by-step solution is displayed using KaTeX for clear mathematical formatting.
- **Session Summary**: After completing a set of five questions, users see a summary of their performance.
- **Engaging UI**: Features celebratory confetti and audio cues for correct and incorrect answers to make practicing more enjoyable.

## Tech Stack

-   **Frontend (Client)**:
    -   ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
    -   ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
    -   ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
    -   ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

-   **Backend (Server)**:
    -   ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
    -   ![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)

- **Deployment**:
    - ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
    
## Setup and Installation

To run this project locally, follow the steps below.

### Prerequisites

-   Node.js and npm
-   Python 3 and pip

### Clone the Repository

```bash
git clone https://github.com/kelly-ung/Algebra-Practice-App.git
```

### To Run
<details>
  <summary>See Instructions</summary>
  
  ### Backend (Server)

  1.  **Navigate to the server directory:**
      ```bash
      cd server
      ```
  
  2.  **Create and activate a virtual environment (recommended):**
  
      For Unix/macOS:
      ```bash
      python3 -m venv venv
      source venv/bin/activate
      ```
      
      For Windows:
      ```bash
      python -m venv venv
      .\venv\Scripts\activate
      ```
  
  4.  **Install the required Python packages:**
      ```bash
      pip install -r requirements.txt
      ```
  
  5.  **Run the Flask server:**
      ```bash
      flask run
      ```
      The backend will be running on `http://127.0.0.1:5000`.
  
  ### Frontend (Client)
  
  1.  **Open a new terminal and navigate to the client directory:**
      ```bash
      cd client
      ```
  
  2.  **Install the necessary npm packages:**
      ```bash
      npm install
      ```
  
  3.  **Create a `.env` file in the `client` directory and add the server URL:**
      ```
      VITE_SERVER_URL=http://127.0.0.1:5000
      ```
      This tells the frontend where to send API requests.
  
  4.  **Start the development server:**
      ```bash
      npm run dev
      ```
      The application will be available at `http://localhost:5173`.
</details> 

## Acknowledgements

- **Bee Illustration** by [Manuela Langella on Blush](https://blush.design/illustration/i/PvjBXNxFV5aXIlkbsF-g)
- **Landscape Illustration** by [Tasha Kostyuk on Unsplash](https://unsplash.com/illustrations/a-landscape-with-trees-and-clouds-in-the-background-UFFb7nGTTiA)
- **Honeycomb Design** by [Freepik](https://www.freepik.com/free-vector/honeycomb-hexagons-with-golden-honey_375129873.htm#fromView=keyword&page=1&position=2&uuid=692d334c-1c50-4bf3-83b8-ad583a468f01&query=Honeycomb+Clipart)
- **Level Up Sound Effect** by [Universfield from Pixabay](https://pixabay.com/sound-effects/level-up-02-199574/)
- **Error Sound Effect** by [Universfield from Pixabay](https://pixabay.com/sound-effects/error-03-125761/)
- **SVG icons** by [the makers of Tailwind CSS on Heroicons](https://heroicons.com/)
