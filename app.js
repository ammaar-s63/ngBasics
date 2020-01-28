window.addEventListener('hashchange', function () {


  console.log('Hash Chnaged : ' + window.location.hash)

  if (window.location.hash === '#bookmark') {
    console.log('bookmark is selected.');
  }

});
