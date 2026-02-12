const fs=require("fs")
const DBV=require("./Models/model");
async function Auotodelete() {
  try {
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);

    console.log("Current time:", new Date());
    console.log("Deleting before:", fiveMinutesAgo);

    const expiredDocs = await DBV.find({
      createdAt: { $lt: fiveMinutesAgo }
    });

    console.log("Expired documents found:", expiredDocs.length);

    for (let doc of expiredDocs) {
      console.log("Deleting:", doc._id);

      if (doc.file) {
        await fs.promises.unlink(doc.file);
      }

      await DBV.findByIdAndDelete(doc._id);
    }

  } catch (err) {
    console.log(err);
  }
}
module.exports = Auotodelete;

