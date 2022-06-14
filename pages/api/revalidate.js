export default async function handler(req, res) {
  if (req.body["secret"] !== process.env.NETLIFY_WEBHOOK_SECRET) {
    return res.status(401).json({ message: "Invalid token" });
  }
  console.log("Update Page : ", req.body["slug"]);
  try {
    await res.unstable_revalidate(`/${req.body["slug"]}`);
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send("Error revalidating");
  }
}
function getRawBody(req) {
  return new Promise((resolve, reject) => {
    let bodyChunks = [];
    req.on("end", () => {
      const rawBody = Buffer.concat(bodyChunks).toString("utf8");
      resolve(rawBody);
    });
    req.on("data", (chunk) => bodyChunks.push(chunk));
  });
}
