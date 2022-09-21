import { Dialog, DialogContent, DialogFooter } from "./dialog/dialog";
import { useSettingsStore } from "../utils/store";

export const ResetDialog = () => {
    const resetTheme = useSettingsStore( state => state.clearLocalStorage )

    function reset() {
        resetTheme()
        close()
    }

    return (
        <Dialog trigger={ ( open ) =>
            <button class={ "button" } style={ "inline-size: 100%; margin-block-start: auto" } onClick={ open }>Reset style</button>
        }>
            { ( close ) => <>
                <DialogContent>
                    <h2>Reset Base style to default</h2>
                    <p>This will reset all the changes you have make. Are you sure?</p>
                </DialogContent>
                <DialogFooter>
                    <button class={ "button button--ghost" } onClick={ close }>Noooooo!</button>
                    <button class={ "button" } onClick={ () => {
                        resetTheme()
                        close()
                    } }>
                        Sure do it!
                    </button>
                </DialogFooter>
            </> }
        </Dialog>
    )
}
