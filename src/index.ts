import { CustomArray } from "./Array";

const name = new CustomArray(3);
name.insert(20);
name.insert(50);
name.insert(60);
name.insert(80);
name.insert(90);
name.insert(50);
name.insert(100);
name.insert(90);
console.log(name.contains(200));
console.log(name.lastIndexOf(90));
name.print();
