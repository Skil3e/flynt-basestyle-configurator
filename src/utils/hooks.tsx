import { useEffect } from "preact/compat";


export function useAddStyleToHead( styles: string, id: string, ) {
    useEffect( () => {
        let styleElement = document.getElementById( id );
        if (!styleElement) return;
        styleElement.innerHTML = `${ styles }`;
    }, [ styles ] )
}

export function printArrayFromVariables( selector: string, variables: { [key: string]: string | number }, mediaQuery?: string ) {
    const addSpaceForMediaQuery = mediaQuery ? "  " : ""
    const result = `${ addSpaceForMediaQuery }${ selector } {\n` + Object.entries( variables ).map( ( [ key, val ] ) => {
        return `${ addSpaceForMediaQuery }  ${ key }: ${ val }; \n`
    } )
        .join( "," )
        .replaceAll( `,${ addSpaceForMediaQuery }  --`, `${ addSpaceForMediaQuery }  --` ) + `${ addSpaceForMediaQuery }}\n`
    return mediaQuery ? `${ mediaQuery } { \n  ${ result }} \n\n ` : `${ result }\n`

}
