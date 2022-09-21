import { memo, StateUpdater, useState } from "preact/compat";
import { SubmitHandler, useForm, UseFormRegister } from "react-hook-form";
import { defaultResponsiveSizes, defaultSizes } from "../options/sizes";
import { TResponsive, TResponsiveVariables, TSizes, TSizeVariables, TTypography, TTypographyVariables } from "../types";
import { typographyDefaults } from "../options/typography";
import { useSettingsStore } from "../utils/store";
import { ResetDialog } from "./ResetDialog";

type FlyntVariables = {
    typography: TTypography
    sizes: TSizes
    responsive: TResponsive
}

const CustomizeToolbar = () => {
    const [ open, setOpen ] = useState( false )
    const updateTypography = useSettingsStore( ( state ) => state.updateTypography );
    const state = useSettingsStore();
    const { register, handleSubmit, watch } = useForm<FlyntVariables>( {
        defaultValues: {
            typography: state.typography,
            sizes     : state.sizes,
            responsive: state.responsive
        }
    } );

    watch()

    const onChange: SubmitHandler<FlyntVariables> = (data => {
        updateTypography( data.typography )
        console.log( data );
    })

    return (
        <div class={ "customizer app-ui" } data-is-cutomizer-open={ `${ open }` }>
            <button onClick={ () => setOpen( !open ) } class={ "button customizer__toggle" }>
                <span class={ "visuallyHidden" }>Open Customizer</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     className="feather feather-settings">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path
                        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
            </button>

            <aside class={ "customizer__options" } data-is-cutomizer-open={ open }>
                <div class={ "customizer__options__scroll" }>
                    <form onChange={ handleSubmit( onChange ) as any }>
                        <TypographyAccordion register={ register }/>
                        <SizesAccordion register={ register }/>
                        <ResponsiveSizesAccordion register={ register }/>
                    </form>
                    <ResetDialog/>
                </div>
            </aside>
        </div>
    )
}

export default CustomizeToolbar

export const Accordion = memo( ( { children }: { children( isOpen: boolean, setOpen: StateUpdater<boolean> ): JSX.Element } ) => {
    const [ isOpen, setOpen ] = useState( false )
    return (
        <div class={ "accordion " }>
            { children( isOpen, setOpen ) }
        </div>
    )
} )
const TypographyAccordion = ( { register }: { register: UseFormRegister<FlyntVariables> } ) => {
    return (

        <Accordion>
            { ( isOpen, setOpen ) =>
                <fieldset class={ "typography" }>
                    <legend class={ "h3" }
                            onClick={ () => setOpen( !isOpen ) }
                            data-isopen={ isOpen }
                    >
                        Typography
                    </legend>
                    <div class={ "accordion__option centerMaxWidthContainer" } data-isopen={ isOpen }>
                        { (Object.entries( typographyDefaults ) as [ TTypographyVariables, string ][]).map( ( [ key, val ] ) => {
                            return (
                                <div>
                                    <label htmlFor={ key }>{ key }</label>
                                    <input id={ key } type={ "text" } defaultValue={ val.toString() } { ...register( `typography.${ key }` ) }/>
                                </div>
                            )
                        } ) }
                    </div>
                </fieldset>
            }
        </Accordion>
    )
}

const SizesAccordion = ( { register }: { register: UseFormRegister<FlyntVariables> } ) => {
    return (
        <Accordion>
            { ( isOpen, setOpen ) =>
                <fieldset class={ "sizes" }>
                    <legend class={ "h3" }
                            onClick={ () => setOpen( !isOpen ) }
                            data-isopen={ isOpen }
                    >
                        Sizes
                    </legend>
                    <div class={ "accordion__option centerMaxWidthContainer" } data-isopen={ isOpen }>
                        { (Object.entries( defaultSizes ) as [ TSizeVariables, string ][]).map( ( [ key, val ] ) => {
                            return (
                                <div key={ key }>
                                    <label htmlFor={ key }>{ key }</label>
                                    <input id={ key } type="text" defaultValue={ val.toString() } step={ .25 } { ...register( `sizes.${ key }` ) }/>
                                </div>
                            )
                        } ) }
                    </div>
                </fieldset>
            }
        </Accordion>
    )
}

const ResponsiveSizesAccordion = ( { register }: { register: UseFormRegister<FlyntVariables> } ) => {
    return (
        <Accordion>
            { ( isOpen, setOpen ) =>
                <fieldset class={ "responsive-sizes" }>
                    <legend class={ "h3" }
                            onClick={ () => setOpen( !isOpen ) }
                            data-isopen={ isOpen }
                    >
                        Responsive Sizes
                    </legend>
                    <div class={ "accordion__option centerMaxWidthContainer" } data-isopen={ isOpen }>
                        { (Object.keys( defaultResponsiveSizes ) as (keyof typeof defaultResponsiveSizes)[]).map( (breakPoint => {
                            return (
                                (Object.entries( defaultResponsiveSizes[breakPoint] ) as [ TResponsiveVariables, `var(${ TSizeVariables })` ][]).map( ( [ key, val ] ) =>
                                    <div key={ key }>
                                        <label htmlFor={ `${ breakPoint }${ key }` }>{ key } { breakPoint }</label>
                                        <select id={ `${ breakPoint }${ key }` }
                                                defaultValue={ val }
                                                { ...register( `responsive.${ breakPoint }.${ key }`, {} ) }
                                        >
                                            { Object.keys( defaultSizes ).map( size =>
                                                <option value={ `var(${ size })` }>{ size }</option>
                                            ) }
                                        </select>
                                    </div>
                                )
                            )
                        }) ) }
                    </div>
                </fieldset>
            }
        </Accordion>
    )
}
