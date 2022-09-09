// https://stackoverflow.com/a/66629455
export default function (to, from, savedPosition) {
  if (to.hash) {
    return {
      selector: to.hash,
      behavior: 'smooth',
    }
  }
  return { x: 0, y: 0, behavior: 'smooth' }
}
