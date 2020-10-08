class Blog {
  constructor(id, author, authorId, title, text, imageUrl = null) {
    this.id = id;
    this.author = author;
    this.authorId = authorId;
    this.title = title;
    this.text = text;
    this.imageUrl = imageUrl;
  }
}

export default Blog;
