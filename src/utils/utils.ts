import { useEffect } from "preact/compat";
import { printArrayFromVariables } from "./hooks";
import { TSettings } from "./store";

export function CapitalizeFirstLetter( s: string ) {
    return s.charAt( 0 ).toUpperCase() + s.slice( 1 );
}

export function labelFromCSSVariable( variable: string ) {
    const removeSpaces = variable
        .replaceAll( "--", "" )
        .replaceAll( "-", " " )
    const arr = removeSpaces.split( " " );
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt( 0 ).toUpperCase() + arr[i].slice( 1 );
    }
    return arr.join( " " )

}

export const useClickOutside = ( ref: any, handler: ( event: Event ) => void ) => {
    useEffect( () => {
        let startedInside = false;
        let startedWhenMounted = false;

        const listener = ( event: Event ) => {
            // Do nothing if `mousedown` or `touchstart` started inside ref element
            if (startedInside || !startedWhenMounted) return;
            // Do nothing if clicking ref's element or descendent elements
            if (!ref.current || ref.current.contains( event.target )) return;

            handler( event );
        };

        const validateEventStart = ( event: Event ) => {
            startedWhenMounted = ref.current;
            startedInside = ref.current && ref.current.contains( event.target );
        };

        document.addEventListener( "mousedown", validateEventStart );
        document.addEventListener( "touchstart", validateEventStart );
        document.addEventListener( "click", listener );

        return () => {
            document.removeEventListener( "mousedown", validateEventStart );
            document.removeEventListener( "touchstart", validateEventStart );
            document.removeEventListener( "click", listener );
        };
    }, [ ref, handler ] );
};


export function getFormattedData( state: TSettings, app?: boolean ) {
    const addDataCustomizeWhenApp = app ? ":root[data-customize] " : ":root";
    const allRoot = printArrayFromVariables( addDataCustomizeWhenApp, { ...state.typography, ...state.sizes } )
    const themes = state.themes.map( theme =>
        printArrayFromVariables( `${ app ? ":root[data-customize] " : "" }${ theme.name === "reset" ? ":root, " : "" }[data-theme=${ theme.name }]`, theme.colors ?? { "": "" } )
    ).toString().replaceAll( app ? ",:" : ",[", app ? ":" : "[" )
    const tables = printArrayFromVariables( addDataCustomizeWhenApp, state.responsive.tablet, "@media (min-width : 768px)" )
    const desktop = printArrayFromVariables( addDataCustomizeWhenApp, state.responsive.desktop, "@media (min-width : 1280px)" )
    return themes + allRoot + tables + desktop
}
