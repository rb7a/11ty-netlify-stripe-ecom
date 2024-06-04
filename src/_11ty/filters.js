module.exports = {
  convertCentsToDollars: (cents) => {
    return (cents / 100).toLocaleString("en-US", {style:"currency", currency:"GBP"})
  }
}
