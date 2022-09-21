import { useEffect, useRef } from "preact/compat";
import { ComponentChildren, FunctionalComponent } from "preact";
import { JSXInternal } from "preact/src/jsx";
import classNames from "classnames";


interface DialogProps extends Omit<JSXInternal.HTMLAttributes, "children"> {
    children: ( close: () => void ) => ComponentChildren
    trigger: ( open: () => void ) => ComponentChildren

}

export const Dialog: FunctionalComponent<DialogProps> = ( { children, trigger, ...rest } ) => {
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
    return (
        <>
            { trigger( openModal ) }
            <dialog { ...rest } class={ classNames( "dialog", rest.class ) } ref={ dialogRef }>
                { children( closeModal ) }
            </dialog>
        </>
    )
}

interface IDialogRest extends JSXInternal.HTMLAttributes {
}

export const DialogContent: FunctionalComponent<IDialogRest> = ( { children, ...rest } ) => {
    return (
        <div { ...rest } class={ classNames( "dialog__content", rest.class ) }>
            { children }
        </div>
    )
}

export const DialogFooter: FunctionalComponent<IDialogRest> = ( { children, ...rest } ) => {
    return (
        <footer { ...rest } class={ classNames( "dialog__footer", rest.class ) }>
            { children }
        </footer>
    )
}
