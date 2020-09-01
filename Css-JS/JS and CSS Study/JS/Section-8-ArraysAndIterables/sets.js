const ids = new Set([1, 2, 3]);
if (ids.has(2)) {
    console.log("deleted");
    ids.delete(2)
}
console.log(ids);

const iterableEntries = ids.entries();
for (const entry of iterableEntries) {
    console.log(entry)
}

const values = ids.values();
for (const value of values) {
    console.log(value)
}