export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private port: number,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(
      `Database on in: ${this.host}:${this.port} - by ${this.user} - ${this.password}`,
    );
  }

  static getDatabase(
    host: string,
    port: number,
    user: string,
    password: string,
  ): Database {
    if (Database.database) return Database.database;
    Database.database = new Database(host, port, user, password);
    return Database.database;
  }
}

const database = Database.getDatabase(
  'localhost',
  7755,
  'root',
  '4d5sa4s57bhpka',
);
database.connect();

const database2 = Database.getDatabase(
  'localhost',
  7777,
  'root',
  '4d5sa4s57bhpka',
);
database2.connect();

console.log(database === database2);
