
let mds = {
    textField: function(){
        let array = this.lables;
        let inputArr = this.inputs;
        for (let i = 0; i < inputArr.length; i++) {
           const element = inputArr[i];
           element.addEventListener('focus', function(){
               array[i].className = "mds-text-field__lable--selected";
           });
           element.addEventListener('blur', function(){
               array[i].className = "mds-text-field__lable"
               if(element.value !== ""){
                   array[i].className = "mds-text-field__lable--selected"
               }
           })
        }

    },
    switch: function(){},
    checkBox: function(){},
    radio: function(){},
    lables: document.querySelectorAll(".mds-text-field__lable"),
    inputs: document.querySelectorAll(".mds-text-field__input"),
}
mds.textField();

