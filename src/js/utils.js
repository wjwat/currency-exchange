export default function fillSelectOptions(options) {
  let retString = '';
  options.forEach(e => {
    retString += `<option value="${e[0]}">${e[0]} / ${e[1].name} / ${e[1].country}</option>\n`;
  });
  return retString;
}
