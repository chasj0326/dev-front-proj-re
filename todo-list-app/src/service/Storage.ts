interface StorageInfo<I> {
  storage: Storage;
  key: string;
  defaultValue: I;
}

export default class _Storage<Item> {
  private storage: Storage;
  private key: string;
  private default: Item;

  constructor({
    storage,
    key,
    defaultValue,
  }: StorageInfo<Item>) {
    this.storage = storage;
    this.key = key;
    this.default = defaultValue;
  }

  setItem(value: Item) {
    this.storage.setItem(this.key, JSON.stringify(value));
  }

  getItem(): Item {
    const item = this.storage.getItem(this.key);
    return (item && JSON.parse(item)) || this.default;
  }
}
