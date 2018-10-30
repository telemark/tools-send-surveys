const leasing = ``
const leasingAndPayment = ``

module.exports = data => {
  return {
    from: 'post.opplaring@t-fk.no',
    to: data.email,
    subject: 'Spørreundersøkelse elevPC - Vinn gratis leie av PC for neste skolår',
    text: data.isUnderAge ? leasing : leasingAndPayment
  }
}
