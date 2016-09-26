
var $teacherOrStudent = $('#teacher-or-student');
var $experience = $('#teacher-experience');
var $quotation = $('.quotation');
var $debug = $('#debug');

 $(document).ready(function(){
   $experience.hide();
   $quotation.hide().css({opacity: 1}).fadeIn(3000);
 })

$teacherOrStudent.change(function (evt) {

  var selectedRole = $teacherOrStudent.val();

  switch(selectedRole) {
    case 'teacher':
        $experience.show(500);
        // break;
    case 'both':
        $experience.show(500);
        // break;
    // default:
  }

  $debug.text($teacherOrStudent.val())

});

// $('.quotation1').on('hover', function() {
//    $(this).fadeIn(500)
// });
//
// $('.quotation2').on('hover', function() {
//    $(this).fadeIn(500)
// });
