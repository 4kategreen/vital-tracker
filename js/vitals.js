var parse = function() {
  Parse.initialize('0S7MAOMdSUPRcKolXs3BNPV4asdO4dnS7elfK53C','r3EqOgzYMfVz5wQAPAsNL8nDGp8BwSkLjmR8PMsE');


  var Vitals = Parse.Object.extend('vitals');
  var vitals = new Parse.Query(Vitals);
  vitals.find({
    success: function(results) {
      for (var r in results) {
        //$('.data').append(JSON.stringify(results[r])+'<br/>');
        //console.log(results[r]);
      }
    },
    error: function(error) {
      console.log(error);
    }
  });
};