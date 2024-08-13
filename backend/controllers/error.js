export function get404(req, res) {
  res.status(404).send(`Page not found`);
}
