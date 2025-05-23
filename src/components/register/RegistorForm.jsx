import Input from "./Input"
import { useState } from "react";

function RegistorForm() {

    const [formData, setFormData]= useState(
        {
            user:null,
            email:null,
            pass:null,
            repass:null
        }
    ); 

    const updateFormData = (key, value) => {
        setFormData(
            {
                ...formData,
                [key] : value
            }
        )
    } 

    const inpArr = [
        {
            inputId: "chama", label :"User:", type : "text", cls : "bomboclass"
        },

        {
            inputId: "email", label :"Email:", type : "email", cls : "bomboclass"
        },

        {
            inputId: "pass", label :"Password:", type : "password", cls : "bomboclass"
        },

        {
            inputId: "repass", label :"Retype password:", type : "password", cls : "bomboclass"
        },
    ];


  return (
    <div>
        
        <h1>Register</h1>

            {
                inpArr.map((inp, i) => 
                {
                    return <Input key = {i}
                                  inputId = {inp.inputId}
                                  label = {inp.label}
                                  type = {inp.type} 
                                  cls = {inp.csl}
                                  update = {updateFormData}/>
                })

                //? when rendering a new array we need a distinct thing like key
            }

        <button>CumShot</button>


    </div>
  )
}

export default RegistorForm;