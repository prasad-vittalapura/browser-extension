
  
  const setValueToField=(elemenet,value)=>{
    elemenet.value=value;
    let inputEvent=new Event("input",{bubbles:true});
    let changeEvent=new Event("change",{bubbles:true});
    elemenet.dispatchEvent(inputEvent);
    elemenet.dispatchEvent(changeEvent);
  }
  const fillPayPhoneData=()=>{
    setValueToField(document.getElementById(""),"");
    setValueToField(document.getElementById(""),"");
  }

  const createButton=(elemenet,flow)=>{
    const button = document.createElement('button');
    button.textContent = "Pre-fill Test Data";
    button.style.position = 'fixed';
    button.style.top = '80px';
    button.style.right = '5px';
    button.style.zIndex = 1000;
    button.style.height="35px"
    button.style.width="120px";
    button.style.backgroundColor="#7373f2";
    button.style.border="none";
    
    // Append the button to the body
    elemenet.appendChild(button);
    button.addEventListener("click",(event)=>{
        event.preventDefault();
        if(flow=="form1") fillPayPhoneData();
        if(flow=="form2") applyFormFill();
    })
}
const dApplyForm=document.getElementById("");


if(dApplyForm){
    console.log(dApplyForm)
    let payPhonePage=document.getElementById("");
    let applyPage=document.getElementById("submitButton");
    if(payPhonePage){
        createButton(dApplyForm,"");
    }
    else if(applyPage){
        createButton(dApplyForm,"");
    }
    
}





