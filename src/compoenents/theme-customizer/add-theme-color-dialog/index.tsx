import { SubmitHandler, useForm } from "react-hook-form";
import { TColorsOptional, TColorVariables } from "../../../types";
import { useEffect, useRef } from "preact/compat";
import { ColorPicker } from "../../ColorPicker";

type TMoreColorsDialog = {
    otherColors: string[];
    field: { name: string, colors: TColorsOptional };
    onChange: ( data: { variable: TColorVariables, color: string } ) => void;
}

export const AddThemeColorDialog = ( { otherColors, field, onChange }: TMoreColorsDialog ) => {
    const dialogRef = useRef<HTMLDialogElement>( null )

    const openModal = () => {
        dialogRef.current?.showModal()
    }
    const closeModal = () => {
        dialogRef.current?.close();
    }

    function closeModalOnClickOutside( e: MouseEvent ) {
        if (e.target === dialogRef.current) {
            closeModal();
        }
    }

    useEffect( () => {
        dialogRef.current?.addEventListener( "click", closeModalOnClickOutside )
        return () => dialogRef.current?.removeEventListener( "click", closeModalOnClickOutside )
    }, [ dialogRef ] )

    const { setValue, handleSubmit, register, getValues } = useForm<{ variable: TColorVariables; color: string }>( {
        defaultValues: {
            color: "#fff"
        }
    } )

    const submit: SubmitHandler<{ variable: TColorVariables; color: string }> = (data => {
        onChange( data )
        closeModal();
    })

    if (otherColors?.length <= 0) return null
    return (
        <>
            <button type={ "button" } onClick={ openModal } class={ "button" }>Add Theme Color</button>
            <dialog class={ "more-colors-dialog app-ui" } ref={ dialogRef } data-theme={ field.name }>
                <form onSubmit={ handleSubmit( submit ) as any }>
                    <div class={ "more-colors-dialog__content" }>
                        <label htmlFor={ `add-colors-${ field.name }` }>
                            <span>Select color to add</span><br/>
                            <select id={ `add-colors-${ field.name }` } defaultValue={ otherColors[0] } { ...register( "variable" ) }>
                                { otherColors.map( option => {
                                    return (
                                        <option value={ option }>{ option }</option>
                                    )
                                } ) }
                            </select>
                        </label>
                        <ColorPicker onChange={ ( newColor ) => setValue( "color", newColor ) } color={ getValues( "color" ) }/>
                    </div>
                    <footer class={ "more-colors-dialog__footer" }>
                        <button onClick={ closeModal } type={ "button" } class={ 'button button--ghost' }>Cancel</button>
                        <button class={ 'button' }>Add</button>
                    </footer>
                </form>
            </dialog>
        </>
    )
}
