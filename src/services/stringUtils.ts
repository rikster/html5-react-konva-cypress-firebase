export default function toTitleCase(str: string) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

// not recommended, but you can add methods to the String prototype
// String.prototype.toTitleCase = function () {
//   return this.replace(/\w\S*/g, function (txt) {
//     return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//   });
// };
