import { useRef } from "react";
import H2 from "../../ui/typography/H2";
import CanvassInput from "./CanvassInput";
import CanvassButton from "./CanvassButton";
export default function CanvassForm({formAction}) {
    let firstNameRef = useRef(null);
    let lastNameRef = useRef(null);
    let phoneRef = useRef(null);
    let emailRef = useRef(null);

    function clearInputs() {
        firstNameRef.current.value = '';
        lastNameRef.current.value = '';
        emailRef.current.value = '';
        phoneRef.current.value = '';
    }
    return(
        <div className="flex flex-col">
            <H2>Add Person</H2>
            <CanvassInput className="text-slate-600 p-1" ref={firstNameRef} required placeholder="First Name" />
            <CanvassInput className="text-slate-600 p-1" ref={lastNameRef} required placeholder="Last Name" />
            <CanvassInput className="text-slate-600 p-1" ref={emailRef} required placeholder="Email Address" type="email" />
            <CanvassInput className="text-slate-600 p-1" ref={phoneRef} required placeholder="Phone Number" type="number" />
            <CanvassButton onClick={
                () => {
                    let newFirstName = firstNameRef.current.value;
                    let newLastName = lastNameRef.current.value;
                    let newPhone = phoneRef.current.value;
                    let newEmail = emailRef.current.value;
                    let entry = {
                            firstName: newFirstName.trim(),
                            lastName: newLastName.trim(),
                            phone: newPhone.trim(),
                            email: newEmail.trim(),
                        }
                    if( !newFirstName || !newLastName || !newPhone || !newEmail || newPhone.length > 10 ) return;
                    clearInputs();
                    formAction(entry)
                }
            }>Submit</CanvassButton>
        </div>)

}