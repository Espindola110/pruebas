describe('Issue 1',function() {
    it('Navegar por ', function() {
    cy.visit('http://practica2-v.herokuapp.com/')
    })
   it('Búsqueda de Telefono', function() { 
   cy.get('thead > tr > :nth-child(4)').contains('Teléfono')
   })
   it('Campo Telefono y funcion de interfaces', function() { 
      cy.get(':nth-child(1) > :nth-child(5) > .btn-primary > .fa').click() 
   cy.get(':nth-child(2) > .col-md-11 > .form-control')
   cy.get(':nth-child(2) > .col-md-11 > .form-control').clear()
   cy.get(':nth-child(2) > .col-md-11 > .form-control').type('plataforma')
   cy.get('.modal-footer > .btn-primary').click()
   cy.visit('http://practica2-v.herokuapp.com/')

   })
   it('Eliminar Campo', function() { 
      cy.get(':nth-child(1) > :nth-child(5) > .btn-danger').click() 
   })
   })