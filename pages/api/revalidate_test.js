export default async function handler(req, res) {
  const localSecret = process.env.NETLIFY_WEBHOOK_SECRET;
  if (req.body["secret"] != localSecret) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
  console.log("Update Page : ", req.body["slug"]["en-US"]);
  try {
    await res.unstable_revalidate(`/${req.body["slug"]["en-US"]}`);
    return res.json({ revalidated: true, data: req.body });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send(JSON.stringify(err));
  }
}
