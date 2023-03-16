var searchIndex = [  { title: "The EUR/USD 4H Chart", url: "posts/EURUSD.html" },  { title: "Major Pairs", url: "posts/major-pairs.html" },  { title: "Exotic Pairs", url: "posts/exotic-pairs.html" }];

document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  var query = document.querySelector('#search-box').value;
  var results = search(query);
  displayResults(results);
});

function search(query) {
  var results = [];
  for (var i = 0; i < searchIndex.length; i++) {
    var title = searchIndex[i].title.toLowerCase();
    var url = searchIndex[i].url.toLowerCase();
    if (title.indexOf(query.toLowerCase()) !== -1 || url.indexOf(query.toLowerCase()) !== -1) {
      results.push(searchIndex[i]);
    }
  }
  return results;
}

function displayResults(results) {
  var resultContainer = document.createElement('div');
  for (var i = 0; i < results.length; i++) {
    var post = results[i];
    var postElement = document.createElement('div');
    var postLink = document.createElement('a');
    postLink.textContent = post.title;
    postLink.href = post.url;
    postElement.appendChild(postLink);
    resultContainer.appendChild(postElement);
  }
  document.querySelector('#search-results').innerHTML = '';
  document.querySelector('#search-results').appendChild(resultContainer);
}
