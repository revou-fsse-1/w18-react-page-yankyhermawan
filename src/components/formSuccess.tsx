interface FormSuccessProps {
    formErrors:{
        email: string;
        firstName: string;
        lastName: string;
        status:string
    }
}

export function FormSuccess(props: FormSuccessProps){
    console.log(props.formErrors)
    return (
        <div className="mx-auto fixed bottom-4">
                {props.formErrors.status && <span className="text-white bg-green-600 px-12 py-2 rounded-xl">{props.formErrors.status}</span>}
        </div>
    )
}