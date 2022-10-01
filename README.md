# Pexels Microservice
Node/Express wrapper for the Pexels API. Supports curated and search queries.

For more details: https://www.pexels.com/api/documentation/

Example route: http://localhost:3001/pexels/search/dog/2

## Quickstart
1. npm i
2. Create .env file in root
3. Add API_KEY
4. npm run start

### Routes
- /pexels
  - /curated/:page
  - /search/:query/:page

### Scripts
- npm run start (defaults to local env)
- npm run dev
- npm run prod

### Environment Vars
- API_KEY (Pexels API key https://www.pexels.com/api/new/)
- *PORT* (optional, defaults to 3001)

### Dev Dependencies
- cross-env (script env var support for powershell)