const style = `
body{
  margin: 0;
}
#root{
  background-image: url('https://i.imgur.com/6GLw25uh.jpg');
  height: 100vh;
  width: 100vw;
}
main{
  margin: 1rem;
}
ul a{
  display: list-item;
  list-style-type: none;
}
TODO
onBuild
  inline
    page + utilities
`;
const content = `
<h1>wommy's website</h1>
<span>check out my</span>
<ul>
  <a href="media/">media</a>
  <a href="pages/about/index.html">about</a>
  <a href="clients/">clients</a>
  <a href="designs/">designs</a>
</ul>
`;

document.getElementById('title').innerHTML = `wommy.io`;
document.getElementById('style').innerHTML = style
document.getElementById('content').innerHTML = content