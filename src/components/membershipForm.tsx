interface MembershipFormProps {
    isElementVisible: boolean
    setElementVisible: React.Dispatch<React.SetStateAction<boolean>>
    formFields:{
        email: string;
        firstName: string;
        lastName: string;
    }
    setFormFields: React.Dispatch<React.SetStateAction<{
        email: string;
        firstName: string;
        lastName: string;
    }>>
    formErrors: {
        email: string;
        firstName: string;
        lastName: string;
        status:string
    }
    setFormErrors:React.Dispatch<React.SetStateAction<{
        email: string;
        firstName: string;
        lastName: string;
        status: string;
    }>>
}
export function MembershipForm(props: MembershipFormProps){


    const validateForm = () => {
      
        if (props.formFields.email==="") {
            props.setFormErrors((prevFormFields) => ({
              ...prevFormFields,
                email: "Email is required",
            }));
        } else{
            props.setFormErrors((prevFormFields) => ({
                ...prevFormFields,
                  email: "",
              }));
        }
        if (props.formFields.firstName === "") {
            props.setFormErrors((prevFormFields) => ({
                ...prevFormFields,
                firstName: "Invalid First Name",
            }));
        }else{
            props.setFormErrors((prevFormFields) => ({
                ...prevFormFields,
                firstName: "",
            }));
        }
        if (props.formFields.lastName === "") {
            props.setFormErrors((prevFormFields) => ({
                ...prevFormFields,
                lastName: "Invalid Last Name",
            }));
        }else{
            props.setFormErrors((prevFormFields) => ({
                ...prevFormFields,
                lastName: "",
            }));
        }
        if (props.formFields.email !== "" && props.formFields.firstName !== "" && props.formFields.lastName !== ""){
            props.setFormErrors((prevFormFields) => ({
                ...prevFormFields,
                status: "Your Registration has been submitted successfully!",
            }));
        }
    };

    function handleInputChange(event : React.ChangeEvent<HTMLInputElement>) {
        props.setFormFields((prevFormFields) => ({
        ...prevFormFields,
        [event.target.name]: event.target.value,
        }));
    }
    const handleCloseButton = () =>{
        props.setElementVisible(false)
    }

    const handleSubmit = (event: React.SyntheticEvent):void =>{
        event.preventDefault()
    }

    return(
    <>
        <div className="bg-opacity-50 bg-black fixed w-full h-full">
            <div className="bg-white max-w-[600px] min-h-[300px] opacity-100 mx-auto top-[25vh] relative px-12 py-6 rounded-lg w-max">
                <p className="text-end cursor-pointer" onClick={handleCloseButton}>&#10006;</p>
                <h1 className="font-bold text-2xl">Register to Photo Club Member</h1>
                <p>Get countless benefit by joining as a member of Photo Club!</p>
                <div>
                    <form className="flex flex-col gap-2 mt-4 text-sm" onSubmit={handleSubmit}>
                        <label htmlFor="email-input" className="font-semibold">User Email</label>
                        <input type="text" placeholder="Insert your email" id ="email-input" name="email" className="border-[1px] px-2 py-1 rounded-lg" value={props.formFields.email} onChange={handleInputChange}/>        
                        <span className="text-red-500">{props.formErrors.email}</span>
                        <label htmlFor="first-name-input" className=" font-semibold">First Name</label>
                        <input type="text" placeholder="Insert your email" id ="first-name-input" name="firstName" className="border-[1px] px-2 py-1 rounded-lg" value = {props.formFields.firstName} onChange={handleInputChange}/>     
                        <span className="text-red-500">{props.formErrors.firstName}</span>
                        <label htmlFor="last-name-input" className=" font-semibold">Last Name</label>
                        <input type="text" placeholder="Insert your last name" id ="last-name-input" name="lastName" className="border-[1px] px-2 py-1 rounded-lg" value={props.formFields.lastName} onChange={handleInputChange} />
                        <span className="text-red-500">{props.formErrors.lastName}</span>
                        <button className="bg-green-600 mt-4 text-white font-semibold text-lg px-6 py-1 rounded-lg" onClick={validateForm}>
                            Register Now
                        </button>            
                    </form>
                </div>
                
            </div>
        </div>
        
    </>
    )
}