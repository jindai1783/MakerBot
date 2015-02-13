function Student() {
  this.students = allStudents;
}

Student.prototype.hello = function() {
  var names = Object.keys(this.students);
  return names.join("\n");
};

Student.prototype.getResponse = function(args) {
  if (args[0]) {
    return this.students[args[0]][Math.floor(Math.random()*this.students[args[0]].length)];
  } else {
    return this.hello();
  }
};

module.exports = Student;

var allStudents = {
  'Andy'     : ['Hi'],                                 
  'Bibiana'  : ['Hi'],                    
  'Charles'  : ['Classic'],                    
  'Clint'    : ['Hi'],                  
  'Danielle' : ['Hi'],                     
  'Emily'    : ['Hi'],                  
  'Gabriel'  : ['Hi'],                    
  'Gus'      : ['Hi'],                
  'Hannah'   : ['\'Merica'],                   
  'Huy'      : ['Hi'],                
  'India'    : ['Hi'],                  
  'Jack'     : ['Something, something, Portsmouth'],                 
  'Jacob'    : ['So lo mo bro'],                  
  'Jake'     : ['Hi'],                 
  'Jin'      : ['E = MC2'],                
  'Jonathan' : ['I\'m so depressed about not going skiing this weekend.'],                     
  'Josh'     : ['Hi'],                 
  'Kieran'   : ['Mmmmmmm, nuts'],                   
  'Luke'     : [''],                 
  'Marcin'   : ['Fuck this, I\'m going home!'],                  
  'Matteo'   : ['Hi'],                   
  'Oliver'   : ['I forgot my football kit'],                   
  'Ptolemy'  : ['Thats a great idea, but let me tell you why you are wrong.', 
               'When you get stuck, just think to yourself, What Would Ptolemy Do',
               'There is only one way to avoid criticism: do nothing, say nothing and be nothing - Aristolemy'],                   
  'Richard'  : ['Hi'],                    
  'Sanda'    : ['Pushup contest FTW!!'],                  
  'Steph'    : ['Hi']        
}; 