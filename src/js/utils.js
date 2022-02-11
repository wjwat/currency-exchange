export default function fillSelectOptions(options, selected) {
  let retString = '';
  options.forEach(e => {
    let t = '';
    if (e[0] === selected) {
      t = 'selected ';
    }
    retString += `<option ${t}value="${e[0]}">${e[0]} / ${e[1].name} / ${e[1].country}</option>\n`;
  });
  return retString;
}
