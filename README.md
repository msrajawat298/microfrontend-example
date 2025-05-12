
# Microfrontend Example with Webpack Module Federation

This project demonstrates how to build a simple microfrontend setup using React and Webpack 5 Module Federation.

## Apps

- `container` – Shell application that hosts other microfrontends.
- `home` – A standalone microfrontend exposing a Home page.
- `player` – Another microfrontend exposing a Player page.

## Getting Started

### 1. Install dependencies

Go into each folder and run:

```bash
npm install
```

### 2. Run the applications

In three separate terminals:

```bash
cd home && npm start
cd player && npm start
cd container && npm start
```

### 3. Open in Browser

Visit: [http://localhost:3000](http://localhost:3000)

You should see both the Home and Player pages loaded dynamically.

## Notes

- Uses Webpack 5 Module Federation
- React-based apps
- Simple local development setup
