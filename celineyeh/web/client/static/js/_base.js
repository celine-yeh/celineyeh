$(document).ready( function () {
  $('#open-sidebar').click( function () {
    $('#sidebar').css('width', '250px')
    $('#main').css('marginLeft', '250px')
  })

  $('#close-sidebar').click( function () {
    $('#sidebar').css('width', '0px')
    $('#main').css('marginLeft', '0px')
  })
})