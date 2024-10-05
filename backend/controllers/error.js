/** default 404 error page for backend, handles page not found errors */
export default function get404(req, res) {
  res.status(404).send(`Page not found`);
}
