export class CustomArray {
  public length: number;
  private items: number[];
  public count: number;

  constructor(length: number) {
    this.length = length;
    this.items = new Array<number>(length);
    this.count = 0;
  }

  public removeAt(index: number) {
    if (index < 0 || index >= this.count) {
      throw new Error("Index out of bound exception");
    }
    for (let i = index; i < this.count; i++) {
      this.items[i] = this.items[i + 1];
    }
    this.count--;
  }

  public insert(item: number) {
    if (this.items.length === this.count) {
      let newItems: number[] = new Array<number>(this.length * 2);

      for (let i = 0; i < this.items.length; i++) {
        newItems[i] = this.items[i];
      }

      this.items = newItems;
    }

    this.items[this.count++] = item;
  }

  public indexOf(item: number): number {
    for (let i = 0; i < this.items.length; i++) {
      if (item === this.items[i]) {
        return i;
      }
    }
    return -1;
  }

  public lastIndexOf(item: number) {
    for (let i = 0; i < this.items.length; i++) {
      if (item === this.items[i] && i === this.items.length - 1) {
        return i;
      }
    }
    return -1;
  }

  public contains(item: number) {
    for (let i = 0; i < this.items.length; i++) {
      if (item === this.items[i]) {
        return true;
      }
    }
    return false;
  }

  public print() {
    for (let i = 0; i < this.count; i++) {
      console.log(this.items[i]);
    }
    console.log("Finished");
  }
}
