import express from "express";
import nodeHtmlToImage from 'node-html-to-image'

const router = express.Router();

router.post(`/render`, async function (req, res) {
  const image = await nodeHtmlToImage({
    html: req.body.html,
  });
  const base64Image = new Buffer.from(image).toString('base64');
  const dataURI = 'data:image/jpeg;base64,' + base64Image
  return res.status(200).json({
    data: dataURI,
  });
});

export default router;
