export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private port: number,
    private user: string,
    private password: string,
    private table?: BtcWallet[],
  ) {
    this.table = [];
  }

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

  saveInTable(wallet: BtcWallet): void {
    this.table.push(wallet);
  }

  getTable(): BtcWallet[] {
    return this.table;
  }
}

export class BtcWallet {
  private static btcwallet: BtcWallet;

  private constructor(private key: string, private hash: string) {}

  getWallet(): string {
    return `${this.key} - ${this.hash}`;
  }

  static generateWallet(key: string, hash: string): BtcWallet {
    if (BtcWallet.btcwallet) return BtcWallet.btcwallet;
    BtcWallet.btcwallet = new BtcWallet(key, hash);
    return BtcWallet.btcwallet;
  }
}

// creating db instance
const database = Database.getDatabase(
  'localhost',
  7755,
  'root',
  '4d5sa4s57bhpka',
);
database.connect();
/**
 * Showing how the singleton functions,
 * when trying to instantiate the db again,
 * returns the instantiated db first
 */
const database2 = Database.getDatabase(
  'localhost',
  7777,
  'root',
  '4d5sa4s57bhpka',
);
database2.connect();
// checking if db1 is equal to db2
console.log(database === database2);

// creating btc wallet instance
const btc1 = BtcWallet.generateWallet('a5a54a', 'as458s84656asd6s54da');
console.log(btc1);
/**
 * Showing how the singleton functions,
 * when trying to instantiate the db again,
 * returns the instantiated db first
 */
const btc2 = BtcWallet.generateWallet('99as9', 'zIaukajsk58954');
console.log(btc2);
// save wallet in db
database.saveInTable(btc1);

// Show database
console.log(database);
