class Blog {
  constructor(id, author, authorId, title, text, imageUrl = null, tag) {
    this.id = id;
    this.author = author;
    this.authorId = authorId;
    this.title = title;
    this.text = text;
    this.imageUrl = imageUrl;
    this.tag = tag;
  }
}

export default Blog;
