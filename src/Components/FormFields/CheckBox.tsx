export default function CheckBox({ id, name, htmlFor, labelText }: { id?: string, name?: string, htmlFor?: string, labelText?: string }) {
    return (
        <>
            <div className='checkBox'>
                <input type='checkbox' id={id} name={name} />
                <label className='labelItem' htmlFor={htmlFor}>{labelText}</label>
            </div>
        </>
    )
}
