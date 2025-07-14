# xkcd-api

A simple Node.js API that serves random xkcd comics with CORS enabled for web applications.

## Features

- 🎲 Get random xkcd comics
- 🌐 CORS enabled for cross-origin requests
- ⚡ Lightweight Express.js server
- 🚀 Easy to deploy and run

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yysun/xkcd-api.git
cd xkcd-api
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Starting the Server

```bash
npm start
```

The server will start on port 3000 by default, or on the port specified by the `PORT` environment variable.

### API Endpoints

#### GET /

Returns a random xkcd comic in JSON format.

**Response Format:**
```json
{
  "month": "12",
  "num": 2534,
  "link": "",
  "year": "2021",
  "news": "",
  "safe_title": "Probability",
  "transcript": "",
  "alt": "60% of the time, it works every time.",
  "img": "https://imgs.xkcd.com/comics/probability.png",
  "title": "Probability",
  "day": "13"
}
```

### Example Usage

#### Using curl:
```bash
curl http://localhost:3000/
```

#### Using JavaScript (fetch):
```javascript
fetch('http://localhost:3000/')
  .then(response => response.json())
  .then(comic => {
    console.log(comic.title);
    console.log(comic.img);
    console.log(comic.alt);
  });
```

#### Using the provided test file:
The project includes a `test.http` file that you can use with REST client extensions in VS Code or similar tools.

## Environment Variables

- `PORT`: Server port (default: 3000)

## Dependencies

- **express**: Web framework for Node.js
- **cors**: CORS middleware for Express

## Development

### Testing the API

You can test the API using:

1. The included `test.http` file with a REST client
2. Browser: Navigate to `http://localhost:3000/`
3. curl: `curl http://localhost:3000/`

### How it Works

1. The API fetches the latest comic info from `https://xkcd.com/info.0.json` to get the current comic number
2. Generates a random number between 1 and the current comic number
3. Fetches the random comic data from `https://xkcd.com/{num}/info.0.json`
4. Returns the comic data as JSON

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Repository

[https://github.com/yysun/xkcd-api](https://github.com/yysun/xkcd-api)

---

*Built with ❤️ for xkcd fans everywhere*