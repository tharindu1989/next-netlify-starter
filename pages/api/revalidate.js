export default async function handler(req, res) {
  const localSecret = process.env.NETLIFY_WEBHOOK_SECRET;
  if (req.body["secret"] != localSecret) {
    return res.status(401).json({
      message: "Invalid token",
      req: req.body["secret"],
      token: process.env.NETLIFY_WEBHOOK_SECRET === req.body["secret"],
    });
  }
  console.log("Update Page : ", req.body["slug"]["en-US"]);
  try {
    await res.unstable_revalidate(`/${req.body["slug"]["en-US"]}`);
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send("Error revalidating");
  }
}
