import { useState } from "preact/compat";
import { HslaStringColorPicker, HexColorInput } from "react-colorful";
import { Popover } from "react-tiny-popover";
import { useDebouncedCallback } from "use-debounce";
import { colord } from "colord";

type TColorPicker = {
    color?: string;
    onChange: ( newColor: string ) => void;
    label?: string;
}

export const PopoverPicker = ( { color, onChange, label }: TColorPicker ) => {
    const [ isOpen, toggle ] = useState( false );
    return (
        <div className="color-picker">
            <Popover isOpen={ isOpen }
                     onClickOutside={ () => toggle( false ) }
                     positions={ [ "right" ] }
                     align={ "end" }
                     padding={10}
                     content={
                         <ColorPicker color={ color } onChange={ onChange } label={ label }/>
                     }>
                <button
                    type={ "button" }
                    className="color-picker__preview"
                    style={ { backgroundColor: color } }
                    onClick={ () => toggle( true ) }
                />
            </Popover>
            { label && <span>{ label }</span> }
        </div>
    );
}

export const ColorPicker = ( { color, onChange }: TColorPicker ) => {
    const debounced = useDebouncedCallback( ( value: string ) => {
            onChange( value )
        },
        200
    )
    return (
        <div className="color-picker__picker">
            <HslaStringColorPicker color={ color?.includes( "#" ) ? colord( color ).toHslString() : color } onChange={ debounced }/>
            <HexColorInput prefixed alpha
                           color={ color && colord( color ).toHex() }
                           onChange={ ( v ) => onChange( colord( v ).toHslString() ) }
                           class={ "color-picker__picker__input" }
                           type={ "text" }
            />
        </div>
    )
}


