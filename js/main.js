alert('Let’s make a story together!');

var colour = prompt('A colour (orange, indigo, etc.)');

var creature = prompt('A creature (dragon, moth, etc.)');

var adjective = prompt('An adjective (beautiful, super, etc.)');

var verb = prompt('A past tense verb (ran, burped, etc.)');

if (story === 'a') {
  document.write('After snacking on ' + adjective + ' treats, the ' + colour + ' bellied ' + creature + ' ' + verb + ' for hours.');
}

if (story === 'b') {
  document.write('Amelia ' + verb + ' through the ' + adjective + colour + ' nebula escaping the space ' + creature + '.');
}

if (story === 'c') {
  document.write('Jackson chose his ' + adjective + ', ' + creature + ' card and ' + verb + ' it to the table knowing he won.');
}
