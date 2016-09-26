
var $teacherOrStudent = $('#teacher-student');
var $experience = $('#teacher-experience');

var hideAllOptions = function(){
   $experience.hide();
 }

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

  $('#debug'.text($teacherOrStudent.val()))

});

$('.quotation1').on('hover', function() {
   .fadeIn(500)
});

$('.quotation2').on('hover', function() {
   .fadeIn(500)
});
