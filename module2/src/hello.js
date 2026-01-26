console.log("Hello, World!");
console.log(
  "Šodienas datums:",
  new Date().toLocaleString("lv-LV", { timeZone: "Europe/Riga" }),
);
console.log("Node.js versija:", process.version);
console.log("operētājsistēmas nosaukums:", process.platform);
