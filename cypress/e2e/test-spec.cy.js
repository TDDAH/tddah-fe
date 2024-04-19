describe('Home Component', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/api/v1/users', {
      body: {
        data: [
          {
            id: "11",
            type: "user",
            attributes: {
              name: "Florenzo Bauer",
              email: "bauerflorenzo@gmail.com"
            }
          }
        ]
      }
    }).as('getUsers');
    cy.visit('http://localhost:3000/home');
    cy.wait('@getUsers');
    cy.window().then(win => {
      win.localStorage.setItem('githubEmail', 'bauerflorenzo@gmail.com');
    });
    cy.wait(1000);
  });

  it('displays the repositories if user is made', () => {
    cy.wait(1000);
    cy.get('.repo-card').should('exist');
  });

  it('displays the navbar', () => {
    cy.get('.nav-bar').should('exist');
  });

  it('displays the achievements', () => {
    cy.get('.achievements-section').should('exist');
  });


  it('fetches the users from the API', () => {
    cy.wait('@getUsers').its('response.body').should('have.property', 'data');
  });

});

describe('AchievementsPage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/achievements');
  });

  it('displays a list of achievements', () => {
    cy.get('.repo-card').should('have.length', 4);
  });

  it('checks the first achievement card', () => {
    cy.get('.repo-card').first().within(() => {
      cy.get('article').first().should('contain', 'Achievement Name:');
      cy.get('article').eq(1).should('contain', 'Criteria:');
    });
  });

  it('checks the last achievement card', () => {
    cy.get('.repo-card').last().within(() => {
      cy.get('article').first().should('contain', 'Achievement Name:');
      cy.get('article').eq(1).should('contain', 'Criteria:');
    });
  });
});

describe('Achievements', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/home');
  });

  it('displays the repository average', () => {
    cy.get('.achievements-section').should('contain', 'Repository Average:');
  });

  it('displays the lowest achievement with criteria higher than repository average', () => {
    cy.get('.achievements-section').should('contain', 'No achievement found with criteria higher than repository average.');
  });

  it('displays the achievement name when there is a lowest achievement', () => {
    cy.get('.achievements-section').should('not.contain', 'Achievement Name:');
  });

  it('displays the achievement criteria when there is a lowest achievement', () => {
    cy.get('.achievements-section').should('not.contain', 'Criteria:');
  });

  it('does not display the achievement name when there is no lowest achievement', () => {
    cy.get('.achievements-section').should('not.contain', 'Achievement Name:');
  });

  it('does not display the achievement criteria when there is no lowest achievement', () => {
    cy.get('.achievements-section').should('not.contain', 'Criteria:');
  });
});