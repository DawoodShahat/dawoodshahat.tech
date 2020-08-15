export default function formatDate(date) {
  const options = { day: "numeric", month: "long", year: "numeric" }
  return new Date(date).toLocaleDateString(undefined, options)
}
