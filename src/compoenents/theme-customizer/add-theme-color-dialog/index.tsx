import { SubmitHandler, useForm } from "react-hook-form";
import { TColorsOptional, TColorVariables } from "../../../types";
import { ColorPicker } from "../../ColorPicker";
import { Dialog, DialogContent, DialogFooter } from "../../dialog/dialog";

type TMoreColorsDialog = {
    otherColors: string[];
    field: { name: string, colors: TColorsOptional };
    onChange: ( data: { variable: TColorVariables, color: string } ) => void;
}

export const AddThemeColorDialog = ( { otherColors, field, onChange }: TMoreColorsDialog ) => {
    const { setValue, handleSubmit, register, getValues } = useForm<{ variable: TColorVariables; color: string }>( {
        defaultValues: {
            color: "#fff"
        }
    } )

    const submit: SubmitHandler<{ variable: TColorVariables; color: string }> = (data => {
        onChange( data )
    })

    if (otherColors?.length <= 0) return null
    return (
        <Dialog class={ "more-colors-dialog app-ui" } data-theme={ field.name }
                trigger={ ( open ) =>
                    <button type={ "button" } onClick={ open } className={ "button" }>Add Theme Color</button>
                }>
            { ( close ) => (<>
                <form onSubmit={ handleSubmit( submit ) as any }>
                    <DialogContent class={ "more-colors-dialog__content" }>
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
                    </DialogContent>
                    <DialogFooter class={ "more-colors-dialog__footer" }>
                        <button onClick={ close } type={ "button" } className={ 'button button--ghost' }>Cancel</button>
                        <button className={ 'button' } onClick={ close }>Add</button>
                    </DialogFooter>
                </form>
            </>) }
        </Dialog>
    )
}
