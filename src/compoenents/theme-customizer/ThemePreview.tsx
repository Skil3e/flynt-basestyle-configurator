import { CapitalizeFirstLetter } from "../../utils/utils";
import { TColorsOptional } from "../../types";

type TypeDisplayProps = {
    field: { name: string, colors: TColorsOptional };
}

export const ThemePreview = ( { field }: TypeDisplayProps ) => {
    return (
        <div className="centerContentMaxWidth">
            <section>
                <h3>{ CapitalizeFirstLetter( field.name ) } Theme</h3>
                <p>Using the <code>data-theme="{ field.name }"</code> attribute allows you to style a group of content with a light background and dark text.</p>
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                         strokeLinejoin="round" className="feather feather-alert-circle">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <i className="feather" data-feather="alert-circle"></i> Feather Icon
                </p>
                <div>
                    <a href="#">Regular link</a><br/>
                    <a className="button button--link" href="#">Button Link</a><br/><br/>
                    <button type="button" className="button">Button</button>
                    { " " }
                    <button type="button" className="button button--ghost">Button Ghost</button>
                    <br/>
                    <br/>
                    <button type="button" className="button" disabled>Button Disabled</button>
                    { " " }
                    <button type="button" className="button button--ghost" disabled>Button Ghost Disabled</button>
                    <hr/>
                    <fieldset style={ "display: flex; gap: 1rem" }>
                        <div>
                            <label htmlFor="textInput-4">Text Input</label><br/>
                            <input id="textInput-4" type="text" name="text" placeholder="Placeholder"/>
                        </div>
                        <div>
                            <label htmlFor="textInput-5">Text Input with error</label><br/>
                            <input id="textInput-5" type="text" name="text" placeholder="Placeholder" class={ "input-validation-error" }/>
                        </div>
                    </fieldset>
                    <div className="select">
                        <label className="visuallyHidden" htmlFor="selectInputLight">Select Input</label>
                        <select name="select" id="selectInputLight">
                            <option value="select-value-1">Select Option #1</option>
                            <option value="select-value-2">Select Option #2</option>
                            <option value="select-value-3">Select Option #3</option>
                        </select>
                    </div>
                    <br/>
                    <br/>
                    <fieldset>
                        <legend>Checkbox Input</legend>
                        <div>
                            <input type="checkbox" id="checkbox-light-1"/>
                            <label htmlFor="checkbox-light-1">Checkbox Label #1</label>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Radio Inputs</legend>
                        <div>
                            <input type="radio" id="radio-light-1" name="radio-group-light"/>
                            <label htmlFor="radio-light-1">Radio Label #1</label>
                            <br/>
                            <input type="radio" id="radio-light-2" name="radio-group-light"/>
                            <label htmlFor="radio-light-2">Radio Label #2</label>
                        </div>
                    </fieldset>
                </div>
                <div className="scrollableTableWrapper">
                    <table className="boxRadius">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Ingredients</th>
                            <th scope="col">Serves 12</th>
                            <th scope="col">Serves 24</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>milk</td>
                            <td>1 quart</td>
                            <td>2 quart</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>cinnamon sticks</td>
                            <td>2</td>
                            <td>1</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>

    )
}
