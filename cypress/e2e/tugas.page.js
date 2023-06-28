const URL = 'http://zero.webappsecurity.com/feedback.html';
const USERNAME = '#name';
const EMAIL = '#email';
const SUBJECT = '#subject';
const COMMENT = '#comment';
const SENDMESSAGE = 'Send Message';

class tugaspage {
    static visit() {
        cy.visit(URL);
    }

    static fillName(name) {
        cy.get('#name').type('azki');
    }

    static fillEmail(email) {
        cy.get('#email').type('azkirh@gmail.com');
    }

    static fillSubject(subject) {
        cy.get('#subject').type('Give the feedback');
    }

    static fillComment(comment) {
        cy.get('#comment').type('this is some feedback');
    }
    
    static submit123() {
       // cy.get('.btn-signin.btn.btn-primary').contains('Send Message').click();
        cy.get('[class="btn-signin btn btn-primary"]').contains(SENDMESSAGE).click();
    }
}

export default tugaspage;