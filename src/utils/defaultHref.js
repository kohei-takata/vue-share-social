const defaultHref = () => {
  return location.href.replace(location.hash, '')
}

export { defaultHref }
