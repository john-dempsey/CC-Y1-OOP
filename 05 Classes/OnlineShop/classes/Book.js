class Book {
    constructor(_ttl, _dscrptn, _isbn, _pgCnt, _authors, _gnrs, _pubDate, _prc, _rtng, _rvws) {
        this.title = _ttl;
        this.description = _dscrptn;
        this.isbn = _isbn;
        this.pageCount = _pgCnt;
        this.authors = _authors;
        this.genres = _gnrs;
        this.publishedDate = _pubDate;
        this.price = _prc;
        this.rating = _rtng;
        this.reviews = _rvws;
    }

    getDetails() {
        return `
        Title: ${this.title}
        Description: ${this.description}
        ISBN: ${this.isbn}
        Page count: ${this.pageCount}
        Authors: ${this.authors}
        Genres: ${this.genres}
        Published date: ${this.publishedDate}
        Price: ${this.price}
        Rating: ${this.rating}
        Reviews: ${this.reviews}
        `;
    }
}

export default Book;