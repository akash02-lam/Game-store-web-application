# Game Store Web Application

A game store website built using Django, Python, HTML, CSS and JavaScript. This project provides a gaming-themed interface with separate pages for browsing games, viewing news, accessing forums and contacting support.

## Technologies Used

- Python
- Django 5.2
- HTML5
- CSS3
- JavaScript
- SQLite

## Project Pages

- **Store:** Game store landing page and game displays.
- **News:** Gaming news page.
- **Forum:** Gaming community interface.
- **Support:** Customer support page.
- **Login:** Login interface prototype.

## Project Structure

```text
Game-store-web-application/
│
├── customerid/
├── online/
├── static/
├── templates/
├── manage.py
├── requirements.txt
└── README.md
```

## Installation and Setup

1. Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

2. Enter the project directory:

```bash
cd Game-store-web-application
```

3. Install dependencies:

```bash
pip install -r requirements.txt
```

4. Apply database migrations:

```bash
python manage.py migrate
```

5. Start the development server:

```bash
python manage.py runserver
```

6. Open your browser:

```text
http://127.0.0.1:8000/
```

## Project Status

This is a learning and portfolio project. Backend authentication and additional database-driven features are planned improvements.

## Future Improvements

- Implement secure Django authentication.
- Add database-driven game management.
- Develop REST APIs using Django REST Framework.
- Add game search and filtering.
- Implement shopping cart functionality.

## Author

Developed as a personal Django learning project.
