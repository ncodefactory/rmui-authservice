const asset = (req, res) => {
  res.status(200).send('Everybody can see this');
};

const assetSecret = (req, res) => {
  res.status(200).send('Only logged in people can see me');
};

export { asset, assetSecret };
