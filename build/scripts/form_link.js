var formLinks = document.getElementById("create_link");
formLinks.addEventListener("submit", event => {
  const title_item = document.getElementById("title").value;
  const link_item = document.getElementById("link").value;
});
function saveLinks(title, link) {
  var link_json = `{"title": ${title}, "link": ${link}},`;
}