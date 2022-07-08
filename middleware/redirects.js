export default function (req, res, next) {
  const redirects = [
    {
      from: '/admin',
      to: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    }
  ]
  const redirect = redirects.find((r) => r.from === req.url)
  if (redirect) {
    res.writeHead(301, { Location: redirect.to })
    res.end()
  } else {
    next()
  }
}
