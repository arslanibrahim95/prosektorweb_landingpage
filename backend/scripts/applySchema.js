"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = __importDefault(require("node:fs"));
const node_path_1 = __importDefault(require("node:path"));
const dotenv_1 = __importDefault(require("dotenv"));
const pg_1 = __importDefault(require("pg"));
dotenv_1.default.config();
const { Client } = pg_1.default;
function getEnv(name) {
    const v = process.env[name];
    if (!v)
        throw new Error(`Missing ${name}`);
    return v;
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let databaseUrl = getEnv('DATABASE_URL').trim();
        // Users sometimes paste Supabase's placeholder format like:
        // postgresql://postgres:[YOUR-PASSWORD]@db.<ref>.supabase.co:5432/postgres
        // Strip brackets and trim the password segment if present.
        databaseUrl = databaseUrl.replace(/:\[(.*?)\]@/g, (_m, pw) => `:${encodeURIComponent(String(pw).trim())}@`);
        const sqlPath = node_path_1.default.resolve(process.cwd(), 'supabase_schema.sql');
        const sql = node_fs_1.default.readFileSync(sqlPath, 'utf8');
        const client = new Client({
            connectionString: databaseUrl,
            ssl: { rejectUnauthorized: false },
        });
        yield client.connect();
        try {
            yield client.query('begin');
            yield client.query(sql);
            yield client.query('commit');
        }
        catch (err) {
            try {
                yield client.query('rollback');
            }
            catch (_a) {
                // ignore rollback errors
            }
            throw err;
        }
        finally {
            yield client.end();
        }
        console.log('Schema applied successfully:', sqlPath);
    });
}
main().catch((err) => {
    const msg = err instanceof Error ? err.message : String(err);
    if (/ENOTFOUND db\./.test(msg) || /ENOTFOUND.*supabase\.co/.test(msg)) {
        console.error([
            msg,
            '',
            'Hint: Your Supabase direct DB host (db.<ref>.supabase.co) may be IPv6-only.',
            'If your environment has no IPv6 route, use the Supabase "connection pooler" DATABASE_URL instead.',
        ].join('\n'));
    }
    else {
        console.error(err);
    }
    process.exit(1);
});
