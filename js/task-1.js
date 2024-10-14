function slugify(title) {
  const slug = title.toLowerCase().split(" ").join("-");
  return slug;
}

console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));
console.log(slugify("The Quick Brown Fox Jumps Over The Lazy Dog"));
console.log(slugify("10 Tips for Better Sleep"));
console.log(slugify("JavaScript Best Practices"));
