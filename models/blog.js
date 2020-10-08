class Blog {
  constructor(id, author, title, text, imageUrl = null) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.text = text;
    this.imageUrl = imageUrl;
  }
}

export default Blog;
