let i = 1

function addThought() {
  let textarea =  document.getElementById('textarea').value;
  console.log(textarea);
  const node = document.createElement("li");
  const textNode = document.createTextNode("New Thought " + i);
  i += 1;
  node.appendChild(textNode);
  document.getElementById('thought-list').appendChild(node);
  document.getElementById('textarea').value = ""
}