(function() {
  Parse.initialize('0S7MAOMdSUPRcKolXs3BNPV4asdO4dnS7elfK53C','r3EqOgzYMfVz5wQAPAsNL8nDGp8BwSkLjmR8PMsE');

  var Vitals = Parse.Object.extend('vitals');
  var vitals = new Parse.Query(Vitals);
  vitals.find({
    success: function(results) {
      $('.data').append(results);
    },
    error: function(error) {
      console.log(error);
    }
  });
})();