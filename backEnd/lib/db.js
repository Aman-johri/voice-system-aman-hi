import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const DB_PATH = path.join(__dirname, '..', 'db.json');
export function readDB() {
    try {
        if (!fs.existsSync(DB_PATH)) {
            const defaultData = { balance: 5000, contacts: [], transactions: [], users: [] };
            fs.writeFileSync(DB_PATH, JSON.stringify(defaultData, null, 2));
            return defaultData;
        }
        const data = fs.readFileSync(DB_PATH, 'utf-8');
        return JSON.parse(data || '{}');
    } catch (err) {
        console.error('Error reading DB:', err);
        return { balance: 5000, contacts: [], transactions: [], users: [] };
    }
}
export function writeDB(data) {
    try {
        fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
    } catch (err) {
        console.error('Error writing DB:', err);
    }
}