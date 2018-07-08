window.addEventListener("load", () => {
  const button = document.getElementById("submit");
  const allInputs = document.getElementsByTagName("input");
  const input0 = document.getElementsByTagName("input")[0];
  const input2 = document.getElementsByTagName("input")[2];
  const input5 = document.getElementsByTagName("input")[5];
  const input6 = document.getElementsByTagName("input")[6];
  const input9 = document.getElementsByTagName("input")[9];
  let result = document.getElementById("result");
  let generatedName;
  console.log(allInputs)

  const wuTangMembers = ["Method Man","Rza","Gza","Big","Ghost Face Killa","Old dirty bastard","Raekwon","U-God","Masta-Killa","Inspecta-deck","Cappadonna"];
  const randomNames = ["Herbert","Sherman","Phoebe","Big Al","Sally","Suzy Q","Judy","Ralph","Not a Wu-Tang Member","James"];

  button.addEventListener("click", () => {
    for(let i = 0; i < allInputs.length; i++) {
      if(!allInputs[i].checked < 5) {
        return alert( `Answer Every Question!`);
      }else{
        if(input0.checked && input2.checked && input5.checked && input6.checked && input9.checked) {
           generatedName = wuTangMembers[Math.floor(Math.random() * (wuTangMembers.length))];
           return result.innerHTML = `Congrats! You are a member of the Wu-Tang Clan: ${generatedName}`;
        }else{
          generatedName = randomNames[Math.floor(Math.random() * (randomNames.length))];
          return result.innerHTML = `Your name is ${generatedName}`;
        }
      }
    }
  });
});
