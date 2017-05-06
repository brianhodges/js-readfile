fs = require('fs');
var delim = '+';
var teams = [];
filename = './top3list.csv';

var options = {  
    weekday: "long", year: "numeric", month: "short",  
    day: "numeric", hour: "2-digit", minute: "2-digit"  
}; 

var lines = fs.readFileSync(filename).toString().split('\n');
fs.stat(filename, function(err, stats){
    var mtime = new Date(stats.mtime);
    console.log("Filename: top3list.csv");
    console.log("Modified At: " + mtime.toLocaleTimeString("en-us", options));
});

for (x = 0; x < lines.length; x++) {
    a = lines[x].split(',');
    var t = {
      name: a[0].trim(),
      super_bowl_wins: parseInt(a[1])
    };
    teams.push(t);
}

console.log();
teams.forEach(function(team) {
    var row_cnt = ("| Team: " + team['name'] + " |").length - 2;
    border = '-'.repeat(row_cnt);
    console.log(delim + border + delim);
    console.log('| Team: ' + team['name'] + " |");
    whitespace = ("| Super Bowl Wins: " + team.super_bowl_wins).length;
    str = ' '.repeat(row_cnt - whitespace);
    console.log("| Super Bowl Wins: " + team['super_bowl_wins'] + str + " |");
    console.log(delim + border + delim);
    console.log();
});