const fs = require("fs")

const readStream = fs.createReadStream("./docs/Welcome2.txt", {
  encoding: "utf-8",
})
const writeStream = fs.createWriteStream("./docs/Welcome4.txt")

readStream.on("data", (chunk) => {
  console.log("\n------New Chunk------\n")
  console.log(chunk)
  writeStream.write("\nNew Chunk\n")
  writeStream.write(chunk)
})

// pipe
readStream.pipe(writeStream)
