const leasing = `
Hei!  

Før skolestart fikk du tilsendt en pc-avtale som du skulle signere digitalt. Vi i Telemark fylkeskommune jobber med å forbedre tjenestene våre. Vi ønsker gjerne å høre hva brukerne av våre tjenester syns om dem.  

Spørreundersøkelsen tar i underkant av 3 minutter å svare på og du kan vinne et års gratis leie for elev-pc ved å delta. Vi trekker ut to elever i spørreundersøkelsen om digital signering. Du kan ikke vinne to ganger.  

Hvis du vinner, kontakter vi deg på epostadressen du har oppgitt. Husk derfor å sjekke at du skriver riktig epostadresse.  

Send en epost til post.opplaring@t-fk.no hvis du har spørsmål om spørreundersøkelsen.  

Spørreundersøkelsen om digital signering finner du her: https://forms.office.com/Pages/ResponsePage.aspx?id=y92dzHB3oEqGb1_iyG6xA7bboiHxJ4hFrcMEp4xzHJhUQTlJSFUyNTNMUzVPTzhETFgzSFJYWlFaUi4u
`
const leasingAndPayment = `
Hei!  

I løpet av høsten har du fått tilsendt en pc-avtale som du skulle signere digitalt og en faktura i digitalt format. Vi i Telemark fylkeskommune ønsker å forbedre tjenestene våre. Vi vil gjerne høre hvordan brukerne oppfatter våre tjenester.  

Hver av spørreundersøkelsene tar omtrent 3 minutter å svare på. Du kan vinne et års gratis leie for elev-pc ved å delta. Vi trekker ut tre personer som får sponset neste års leie for elev-pc. Deltar du i begge spørreundersøkelsene øker du vinnersjansene dine. Du kan ikke vinne to ganger.  

Hvis du vinner, kontakter vi deg på epostadressen du har oppgitt. Husk derfor å sjekke at du skriver riktig epostadresse.  

Send en epost til post.opplaring@t-fk.no hvis du har spørsmål om spørreundersøkelsen.  

Spørreundersøkelsen om faktura finner du her: https://forms.office.com/Pages/ResponsePage.aspx?id=y92dzHB3oEqGb1_iyG6xA7bboiHxJ4hFrcMEp4xzHJhUQURWQlhFNkdaSFo2Q1MxSEg0NVEwMTcxNS4u

Spørreundersøkelsen om digital signering finner du her: https://forms.office.com/Pages/ResponsePage.aspx?id=y92dzHB3oEqGb1_iyG6xA7bboiHxJ4hFrcMEp4xzHJhUQTlJSFUyNTNMUzVPTzhETFgzSFJYWlFaUi4u
`

module.exports = data => {
  return {
    from: 'post.opplaring@t-fk.no',
    to: data.email,
    subject: 'Din mening er viktig. Vinn gratis leie av elev-PC.',
    text: data.isUnderAge ? leasing : leasingAndPayment
  }
}
