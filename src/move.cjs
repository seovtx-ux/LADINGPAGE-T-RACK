const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

const startMarker = `      {/* Product Lines Section */}`;
const endMarker = `      {/* Specifications */}`;

const startIndex = content.indexOf(startMarker);
if (startIndex === -1) {
  console.log("Start marker not found");
  process.exit(1);
}

const endIndex = content.indexOf(endMarker, startIndex);
if (endIndex === -1) {
  console.log("End marker not found");
  process.exit(1);
}

const productSection = content.substring(startIndex, endIndex);

content = content.substring(0, startIndex) + content.substring(endIndex);

const insertMarker = `      {/* Brands / Social Proof */}`;
const insertIndex = content.indexOf(insertMarker);
if (insertIndex === -1) {
    console.log("Insert marker not found");
    process.exit(1);
}

content = content.substring(0, insertIndex) + productSection + content.substring(insertIndex);

fs.writeFileSync('src/App.tsx', content);
console.log("Done");
