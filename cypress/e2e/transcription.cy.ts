describe('transcription one video by url', () => {
  it('should be possible to access the site and add a link in the input', () => {
    cy.visit('http://localhost:3000')

    cy.get('#videoUrl').type('https://www.youtube.com/watch?v=EhlhRIJygPM')
    cy.contains('Executar').click()

    cy.get('#transcriptionText').should('not.have.text', '...')
  })
})
