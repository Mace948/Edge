function saveDocument(title, body) {
  let documentTitle = title.innerHTML;
  let documentBody = body.innerHTML;
  localStorage.setItem("document", documentTitle + " " + documentBody);
}

function loadDocument(title, body) {
  if (localStorage.getItem("document") === null) {
    console.log("null");
    return;
  }
  let document = localStorage.getItem("document");
  document = document.split(" ");
  console.log(document);
  title.innerHTML = document.shift();
  body.innerHTML = document.join(" ");
}
