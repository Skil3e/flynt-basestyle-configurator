import { colorOptions } from "../../options/themes";
import { TColorsOptional, TColorVariables } from "../../types";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { PopoverPicker } from "../ColorPicker";
import { useSettingsStore } from "../../utils/store";
import { AddThemeColorDialog } from "./add-theme-color-dialog/";
import { ThemePreview } from "./ThemePreview";

type TThemeCustomizerProps = {}

export type ThemesForm = {
    themes: Array<{ name: string, colors: TColorsOptional }>
}

export const ThemeCustomizer = ( {}: TThemeCustomizerProps ) => {
    const updateThemes = useSettingsStore( ( state ) => state.updateThemes );
    const themes = useSettingsStore( ( state ) => state.themes );

    const { control, setValue, getValues, watch, handleSubmit, register } = useForm<ThemesForm>( {
        defaultValues: {
            themes: themes
        },

    } )

    const { fields, append, remove, insert } = useFieldArray( {
        control,
        name: "themes",

    } );


    const onChange: SubmitHandler<ThemesForm> = (data => {
        console.log( data )
        updateThemes( data.themes )
    })

    watch()

    function insetTheme( index: number ) {
        insert( index + 1, { name: "", colors: {} } )
        updateThemes( getValues( "themes" ) )
    }

    function appendTheme() {
        append( { name: "", colors: {} } )
        updateThemes( getValues( "themes" ) )
    }

    function removeTheme( index: number ) {
        remove( index )
        updateThemes( getValues( "themes" ) )
    }

    return (
        <form class={ "theme-customize" } onSubmit={ handleSubmit( onChange ) as any } onChange={ handleSubmit( onChange ) as any }>
            { fields.map( ( field, index ) => {
                const otherColors = themes[index]?.colors ? colorOptions?.filter( op => !Object.keys( themes[index].colors )?.includes( op ) ) : colorOptions;
                return (
                    <div key={ field.id } data-theme={ themes[index].name }>
                        <div class={ "theme-customize__display centerMaxWidthContainer" }>
                            <fieldset class={ "theme-customize__colors sticky-side" } style={ "position: sticky;" }>
                                <label htmlFor={ field.name }>
                                    <span style={ "display:block" }>Theme name</span>
                                    <input id={ field.name } type="text" { ...register( `themes.${ index }.name` ) }/>
                                </label>
                                { index > 0 && <button type={ "button" } class={ "button remove-theme" } onClick={ () => removeTheme( index ) } title={ "Remove theme" }>
                                    <span class={ "visuallyHidden" }>Remove theme</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round" className="feather feather-trash-2">
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                    </svg>
                                </button> }
                                <span>Customize Colors</span>
                                { (Object.keys( themes[index].colors ) as TColorVariables[]).map( ( key ) => {
                                    return (
                                        <label key={ key }>
                                            <PopoverPicker
                                                label={ key }
                                                color={ getValues( `themes.${ index }.colors.${ key }` ) }
                                                onChange={ ( nc ) => {
                                                    setValue( `themes.${ index }.colors.${ key }`, nc )
                                                    updateThemes( getValues( "themes" ) )
                                                } }
                                            />
                                        </label>
                                    )
                                } ) }
                                <AddThemeColorDialog field={ field } otherColors={ otherColors } onChange={ ( n ) => {
                                    setValue( `themes.${ index }.colors.${ n.variable }`, n.color )
                                    updateThemes( getValues( "themes" ) )
                                } }/>
                            </fieldset>
                            <ThemePreview field={ themes[index] }/>
                            { index > 0 && <button type={ "button" } class={ "button insert-theme" } onClick={ () => insetTheme( index ) } title={ "Insert theme" }>
                                <span class={ "visuallyHidden" }>Insert theme</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="feather feather-plus">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </button>
                            }
                        </div>
                    </div>
                )
            } ) }
            <footer class={ "theme-customize__footer" }>
                <button type={ "button" } class={ "button add-theme" } onClick={ appendTheme }>Add theme</button>
            </footer>
        </form>
    )
}




