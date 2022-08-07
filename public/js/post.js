// const userName = 
const postTitleInputEl =  $('titlepost-name-input');
const postBodyInputEl = $('post-body-input');
const postTypeInputEl = $('post-type-input');
const postDisplayEl = $('post-display');
const postFormEl = $('project-form');

function printPostInfo (title, body, type) {
    var postRow = $('<tr>');
    var postTitleEl = $('<td>').addClass('p-2').text(title);
    var postBodyEl = $('<td>').addClass('p-2').text(body);
    var postTypeEl = $('<td>').addClass('p-2').text(type);

postRow.append(
    postTitleEl,
    postBodyEl,
    postTypeEl
);

postDisplayEl.append(postRow);
}

function handlePostFormSubmit(event) {
    event.preventDefault();
  
    var postTitle = postTitleInputEl.val().trim();
    var postBody = postBodyInputEl.val().trim();
    var postType = postTypeInputEl.val().trim();

  
    printPostInfo(postTitle, postBody, postType);
  
    postFormEl[0].reset();
  }

  postFormEl.on('submit', handlePostFormSubmit);