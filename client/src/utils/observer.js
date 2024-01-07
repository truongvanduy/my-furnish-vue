export function createOptions(options) {
  return options
}

export function createObserver(options, alternate = false) {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear')
      } else if (alternate) {
        entry.target.classList.remove('appear')
      }
    })
  }, options)

  return observer
}
