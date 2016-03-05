/* global $:true */

$(() => {
// (function() {

  var start, end, time;

  function generateListWithjQuery() {
    var base = $('#accordion');
    var template = $('#item').prop('outerHTML');
    var cont = '';

    for (var i=2; i<4; i++) {
      var newItem = template.replace(/collapse-item/ig, 'collapse-item-' + i).replace(/#1/, '#' + i);
      cont = cont + newItem;
    }

    base.append(cont);
  }

  start = performance.now();

  generateListWithjQuery();

  end = performance.now();
  time = end - start;
  console.log('Execution time jQuery: ', time);

  function genereateListWithFragment() {
    var ul = document.getElementById('list-base');
    var template = document.getElementById('item');
    var docfrag = document.createDocumentFragment();

    for (var i=2; i<3; i++) {
      // var li = document.createElement('li');
      // li.className = 'list-group-item';
      // li.textContent = 'yey';
      var newItem = template.cloneNode(true);
      newItem.id = 'item' + i;
      docfrag.appendChild(newItem);
    }

    var p = document.createElement('p');
    p.textContent = 'Native javascript';
    ul.appendChild(p);
    ul.appendChild(docfrag);
  }

  start = performance.now();

  // genereateListWithFragment();

  end = performance.now();
  time = end - start;

  console.log('Execution time Native: ', time);

});
// })();
