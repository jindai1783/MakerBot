function Student() {
  this.students = allStudents;
}

Student.prototype.hello = function() {
  var names = Object.keys(this.students);
  return names.join("\n");
};

Student.prototype.getResponse = function(args, callback) {
  if (args[0]) {
    if (this.students[args[0]]) {
      callback(null, this.students[args[0]][Math.floor(Math.random()*this.students[args[0]].length)]);
    } else {
      callback(null, "Sorry, haven't find this student, did you spell correctly?");
    }
  } else {
    callback(null, this.hello());
  }
};

module.exports = Student;

var allStudents = {
  'Andy'     : ['Hi'],                                 
  'Bibiana'  : ['Hi'],                    
  'Charles'  : ['Classic'],                    
  'Clint'    : ['Hi'],                  
  'Danielle' : ['Eh?'],                     
  'Emily'    : ['Hi'],                  
  'Gabriel'  : ['Hi'],                    
  'Gus'      : ['Hi'],                
  'Hannah'   : ['\'Merica'],                   
  'Huy'      : ['Hi'],                
  'India'    : ['Hi'],                  
  'Jack'     : ['Something, something, Portsmouth'],                 
  'Jacob'    : ['Yeah, I\'ve already done that, HA HA HA hahahahaha giggle'],                  
  'Jake'     : ['Hi'],                 
  'Jin'      : ['E = MC2'],                
  'Jonathan' : ['I\'m so depressed about not going skiing this weekend.'],                     
  'Josh'     : ['Hi'],                 
  'Kieran'   : ['Mmmmmmm, nuts'],                   
  'Luke'     : [''],                 
  'Marcin'   : [''],                  
  'Matteo'   : ['Hi'],                   
  'Oliver'   : ['I forgot my football kit'],                   
  'Ptolemy'  : ['Thats a great idea, but let me tell you why you are wrong.', 
               'When you get stuck, just think to yourself, What Would Ptolemy Do',
               'There is only one way to avoid criticism: do nothing, say nothing and be nothing - Aristolemy'],                   
  'Richard'  : ['Hi'],                    
  'Sanda'    : ['Pushup contest FTW!!'],                  
  'Steph'    : ['Hi'],
  'Sam'      : ['Pairing Pro']  
}; 