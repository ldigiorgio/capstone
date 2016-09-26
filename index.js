
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
    case 'both':
        $experience.show(500);
  }

  $debug.text($teacherOrStudent.val())

});
