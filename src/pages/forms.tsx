export const Forms = () => {
    return(
        <div class={ "centerCenterMaxWidth componentSpacing" }>
            <div class={ "centerContentMaxWidth" }>
                <h1>1.3 Forms</h1>
                <form>
                    <p>Placing form elements on a page should just work without having to apply extra classes or custom wrapping elements. However,
                        a <b>&lt;fieldset&gt;</b> element provides a nice opportunity to group multiple form elements.</p>
                    <fieldset>
                        <label htmlFor="textInput-1">Text Input</label><br/>
                        <input id="textInput-1" type="text" name="text" placeholder="Placeholder"/><br/>
                        <label htmlFor="textInput-2">Text Input Disabled</label><br/>
                        <input id="textInput-2" type="text" name="text" placeholder="Placeholder" disabled/><br/>
                        <label htmlFor="textInput-3">Text Input Validation Error</label><br/>
                        <input id="textInput-3" type="text" name="text" value="Test" placeholder="Placeholder" className="input-validation-error"/><br/>
                        <label htmlFor="emailInput">Email Input</label><br/>
                        <input id="emailInput" type="email" name="email" placeholder="Placeholder"/><br/>
                        <label htmlFor="searchInput">Search Input</label><br/>
                        <input id="searchInput" type="search" name="search" placeholder="Placeholder"/><br/>
                        <label htmlFor="passwordInput">Password Input</label><br/>
                        <input id="passwordInput" type="password" name="password" placeholder="Placeholder"/><br/>
                        <label htmlFor="textarea">Your message</label><br/>
                        <textarea id="textarea" placeholder="Placeholder"></textarea><br/>
                        <p>Wrap the select element in a container with the class <code>.select</code> to make the select arrow themeable.</p>
                        <div class="select">
                            <label className="visuallyHidden" htmlFor="selectInput">Select Input</label>
                            <select name="select" id="selectInput">
                                <option value="select-value-1">Select Option #1</option>
                                <option value="select-value-2">Select Option #2</option>
                                <option value="select-value-3">Select Option #3</option>
                            </select>
                        </div>
                    </fieldset>
                    <p>The user agent stylesheet typically has a very weird <b>&lt;fieldset&gt;</b> and <b>&lt;legend&gt;</b> styling. But hey: why not customize it to our needs?!
                    </p>
                    <fieldset>
                        <legend>Checkbox Inputs</legend>
                        <div>
                            <input type="checkbox" id="checkbox-1" required checked/>
                            <label htmlFor="checkbox-1">Checkbox Label #1<sup>*</sup></label>
                            <br/>
                            <input type="checkbox" id="checkbox-2"/>
                            <label htmlFor="checkbox-2">Checkbox Label #2 <strong>Multiline</strong> Lorem ipsum dolor sit amet, <a href="src/pages/basestyle#">consectetur</a> adipisici
                                elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</label>
                            <br/>
                            <input type="checkbox" id="checkbox-3"/>
                            <label htmlFor="checkbox-3">Checkbox Label #3</label>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Radio Inputs</legend>
                        <div>
                            <input type="radio" id="radio-1" name="radio-group" checked/>
                            <label htmlFor="radio-1">Radio Label #1</label>
                            <br/>
                            <input type="radio" id="radio-2" name="radio-group"/>
                            <label htmlFor="radio-2">Radio Label #2 <strong>Multiline</strong> Lorem ipsum dolor sit amet, <a href="src/pages/basestyle#">consectetur</a> adipisici elit,
                                sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</label>
                            <br/>
                            <input type="radio" id="radio-3" name="radio-group"/>
                            <label htmlFor="radio-3">Radio Label #3</label>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>One Input Forms</legend>
                        <p>Uses screen reader visible labels.</p>
                        <p>Wrap the select element in a container with the class <code>.oneInputForm</code> to style single forms.</p>
                        <div class="oneInputForm">
                            <label className="visuallyHidden" htmlFor="searchInputSingle">Search</label>
                            <input className="oneInputForm-input" type="search" id="searchInputSingle" placeholder="Enter search term..."/>
                            <button className="button oneInputForm-button">Search</button>
                        </div>
                        <div class="oneInputForm">
                            <label className="visuallyHidden" htmlFor="emailInputSingle">Subscribe</label>
                            <input className="oneInputForm-input" type="email" id="emailInputSingle" placeholder="Email address"/>
                            <button className="button oneInputForm-button">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}
