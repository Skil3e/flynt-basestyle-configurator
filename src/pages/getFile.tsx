import { useSettingsStore } from "../utils/store";
import Prism from 'prismjs';
import "../styles/app/prism-material-oceanic.css"
import { useEffect, useRef } from "preact/compat";


export const GetFile = () => {
    const text = useSettingsStore( ( state ) => state.getFormattedDataFromStore() );


    async function copyToClipboard() {
        await navigator.clipboard.writeText( text )
    }

    return (
        <div class={ "centerMaxWidthContainer" }>
            <div class={ "final-css centerContentMaxWidthLarge" }>
                <button class={ "copy-css-button" } onClick={ copyToClipboard }>
                    <span class={ "visuallyHidden" }>Copy CSS</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         class="feather feather-copy">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                </button>

                <CodeBlock code={ text }/>

            </div>
        </div>
    )
}

const CodeBlock = ( { code }: { code: string } ) => {
    const codeRef = useRef<HTMLElement>( null );
    useEffect( () => {
        if (codeRef.current) {
            codeRef.current.innerHTML = ""
            codeRef.current.innerHTML = code
        }
        Prism.highlightAll()
    }, [ code ] )
    return (
        <pre>
            <code class={ "language-css" } ref={ codeRef }>
                { code }
            </code>
        </pre>
    )
}
