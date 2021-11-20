export const indexTemplate = (content, token) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Reddit to string</title>
  <script src="/static/client.js" type="application/javascript"></script>
  <script >
  window.__token__ = '${token}'
</script>
</head>
<body>
<div id="react-root">${content}</div>
</body>
</html>
`