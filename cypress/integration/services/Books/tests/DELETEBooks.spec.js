import * as DELETEBooks from "../requests/DELETEBooks_request";
import * as GETBooks from "../requests/GETBooks_request";

describe("DELETE Book", () => {
  it("Deletar um livro", () => {
    GETBooks.allBooks().then((resAllBooks) => {
      cy.log();
      DELETEBooks.deleteBook(resAllBooks.body[0].id).should((resDeleteBook) => {
        expect(resDeleteBook.status).to.eq(200);
      });
    
    });
  });
});
