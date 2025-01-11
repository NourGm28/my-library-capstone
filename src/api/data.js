import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  // Load the db.json file
  const filePath = path.join(process.cwd(), 'db.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);

  res.status(200).json(data); // Respond with the JSON data
}

if (typeof process === 'undefined') {
  globalThis.process = import('process');
}
