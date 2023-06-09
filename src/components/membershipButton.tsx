import { useState } from "react";
import { MembershipForm } from "./membershipForm";
import { FormSuccess } from "./formSuccess";

export function MembershipButton() {
  const [isElementVisible, setElementVisible] = useState<boolean>(false);

  const [formFields, setFormFields] = useState({
    email: "",
    firstName: "",
    lastName: "",
});

const [formErrors, setFormErrors] = useState({
    email: "",
    firstName: "",
    lastName: "",
    status:""
});

  const handleButtonClick = () => {
    setElementVisible(!isElementVisible);
  };

  return (
    <>
      <div className="mx-auto mt-6">
        <button
          className="text-black w-max bg-white px-6 py-3 text-md rounded-xl hover:scale-110 duration-200"
          onClick={handleButtonClick}
        >
          Join Photo Club Membership
        </button>
      </div>
      {isElementVisible && <MembershipForm isElementVisible={isElementVisible} setElementVisible={setElementVisible} formFields={formFields} setFormFields={setFormFields} formErrors={formErrors} setFormErrors={setFormErrors}/>}
      <FormSuccess formErrors={formErrors}/>
    </>
  );
}
