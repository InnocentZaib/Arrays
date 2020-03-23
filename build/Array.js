"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomArray {
    constructor(length) {
        this.length = length;
        this.items = new Array(length);
        this.count = 0;
    }
    removeAt(index) {
        if (index < 0 || index >= this.count) {
            throw new Error("Index out of bound exception");
        }
        for (let i = index; i < this.count; i++) {
            this.items[i] = this.items[i + 1];
        }
        this.count--;
    }
    insert(item) {
        if (this.items.length === this.count) {
            let newItems = new Array(this.length * 2);
            for (let i = 0; i < this.items.length; i++) {
                newItems[i] = this.items[i];
            }
            this.items = newItems;
        }
        this.items[this.count++] = item;
    }
    indexOf(item) {
        for (let i = 0; i < this.items.length; i++) {
            if (item === this.items[i]) {
                return i;
            }
        }
        return -1;
    }
    lastIndexOf(item) {
        for (let i = 0; i < this.items.length; i++) {
            if (item === this.items[i] && i === this.items.length - 1) {
                return i;
            }
        }
        return -1;
    }
    print() {
        for (let i = 0; i < this.count; i++) {
            console.log(this.items[i]);
        }
        console.log("Finished");
    }
}
exports.CustomArray = CustomArray;
