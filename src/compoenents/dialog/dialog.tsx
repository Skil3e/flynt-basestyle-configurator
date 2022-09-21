import { useEffect, useRef } from "preact/compat";
import { ComponentChildren } from "preact";
import classNames from "classnames";

type DialogProps = {
    className?: string
    children: ( close: () => void ) => ComponentChildren
    trigger: ( open: () => void ) => ComponentChildren
}

export const Dialog = ( { className, children, trigger }: DialogProps ) => {
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
            <dialog class={ classNames( "dialog", className ) } ref={ dialogRef }>
                { children( closeModal ) }
            </dialog>
        </>
    )
}

export const DialogContent = ( { children }: { children: ComponentChildren } ) => {
    return (
        <div class={ "dialog__content" }>
            { children }
        </div>
    )
}

export const DialogFooter = ( { children }: { children: ComponentChildren } ) => {
    return (
        <footer class={ "dialog__footer" }>
            { children }
        </footer>
    )
}
