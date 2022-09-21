const BaseStyle = () => {
    return (
        <>
            <div class="componentSpacing centerMaxWidthContainer">
                <div class="centerContentMaxWidth">
                    <section>
                        <h1>Base Style</h1>
                        <p>This style guide exemplifies the base styles.</p>
                    </section>
                    <section>
                        <p class="h4">Creating a well thought out base style for a new website is one of the most critical parts to ensure an overall successful project progression.</p>
                        <p>The base style should contain all those basic HTML elements and their variations that will be needed within the website. May it be in standard formatted text, or within
                            custom
                            styled layout components.</p>
                        <p>The goal is to abstract the element designs just to the right level, so that they can be used in any context without further modifications, but to keep them flexible
                            enough
                            for
                            custom adjustments when needed, without having to overwrite many CSS attributes.</p>
                        <p>The following markup is a best practice starting point to help you focus on what's important. It does not include <em>all</em> HTML elements, but as the theme is
                            using <code>modern-normalize.css</code>, elements will still be recoginzably styled, only without further customization.</p>
                        <hr/>
                        <h2>1.0 Typography</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation <a
                                href="https://www.google.com/search?q=ullamco+laboris" target="_blank">ullamco laboris</a> nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore <strong>magna aliqua</strong>. Ut enim ad minim veniam, quis
                            nostrud
                            exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit <em>esse cillum</em> dolore eu fugiat nulla
                            pariatur.
                            Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <figure>
                            <img src="https://via.placeholder.com/770x513?text=3:2%20ratio" width="770" height="513" alt="Placeholder"/>
                            <figcaption>A caption for this image</figcaption>
                        </figure>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <blockquote><p>Base styling is done, when this page has a custom look and is visually structured so that all elements, their relationships, meanings and hierarchy are
                            recognizable.</p></blockquote>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <h2 class="h1">Headline H1 is a very common element</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <h2>Headline H2 is a very common element</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <h3>Headline H3 will also be used all over the website</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <h4>Headline H4 is nice for alternative smaller styles</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <h5>Headline H5 is unloved, but can be powerfull as a helper class</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <h6>Headline H6 is very rare but might be a small alternative</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <h1>Heading 1</h1>
                        <h2>Heading 2</h2>
                        <h3>Heading 3</h3>
                        <h4>Heading 4</h4>
                        <h5>Heading 5</h5>
                        <h6>Heading 6</h6>
                        <hr/>
                        <h2>1.1 Lists &amp; Tables</h2>
                        <p>Make sure you're not resetting all list elements, because that might come in handy for styling other layout elements, but remain their purpose for formatted
                            text.</p>
                        <h3>What you need to consider</h3>
                        <ul>
                            <li>What's the margin and padding of the list?</li>
                            <li>Which list style is the default?</li>
                            <li>Will there be custom list style icons like:
                                <ol>
                                    <li>stars</li>
                                    <li>checkmarks</li>
                                    <li>colored bullets or list numbers</li>
                                </ol>
                            </li>
                            <li>Nested list styles should have a different look.
                                <ul>
                                    <li>The user agent stylesheet does that already.</li>
                                    <li>So custom styled lists should consider it as well.</li>
                                    <li>An option might be to only specifically style the top level list style icon to keep the browser defaults for nesting.</li>
                                </ul>
                            </li>
                            <li>Also remember to test multiline list items like the one above.</li>
                        </ul>
                        <p>It's also important to see those lists within the content flow, so margins and paddings fit with surrounding text. And of course, also consider <strong>ordered
                            lists</strong> like the following.</p>
                        <ol>
                            <li>It's basically the same</li>
                            <li>But different</li>
                            <li>And they may also nest other lists:
                                <ol>
                                    <li>may it be another ordered list,</li>
                                    <li>or an unoredered list.</li>
                                </ol>
                            </li>
                            <li>The best part is:
                                <ul>
                                    <li>this boring text ends here!</li>
                                    <li>Because I <em>really</em> don't know what else to write here.</li>
                                    <li>Hope it'll still be more helpful than lorem ipsum.</li>
                                </ul>
                            </li>
                            <li><strong>But don't stop here!</strong></li>
                        </ol>
                        <h3>Icon Lists</h3>
                        <ul class="iconList iconList--checkCircle">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" class="feather feather-check-circle">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                                The <code>.iconList</code> class is a global helper
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" class="feather feather-check-circle">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                                It allows you to add custom icon styles to lists
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" class="feather feather-check-circle">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                                This will make content more engaging (hopefully)
                            </li>
                        </ul>
                        <h3>Tables</h3>
                        <div class="scrollableTableWrapper">
                            <table class="boxRadius">
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
                                <tr>
                                    <th scope="row">3</th>
                                    <td>cloves</td>
                                    <td>5</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>egg yolks</td>
                                    <td>12</td>
                                    <td>24</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>cups sugar</td>
                                    <td>1 &frac12; cups</td>
                                    <td>3 cups</td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>dark rum</td>
                                    <td>1 &frac12; cups</td>
                                    <td>3 cups</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <hr/>
                        <h2>1.2 Buttons</h2>
                        <p>
                            <button type="button">A <b>&lt;button&gt;</b> element without a class should have its styles reset, so it can be used as a semantic tag on other interface elements,
                                like the arrows of a slider, a closing &times; or a burger menu.
                            </button>
                        </p>
                        <p>
                            <button type="button" class="button">Type Button</button>
                            { " " }
                            <button type="button" class="button button--ghost">Type Button Ghost</button>
                        </p>
                        <p>
                            <button type="submit" class="button">Type Submit Button</button>
                            { " " }
                            <button type="submit" class="button button--ghost">Type Submit Button Ghost</button>
                        </p>
                        <p>
                            <button type="reset" class="button">Type Reset Button</button>
                            { " " }
                            <button type="reset" class="button button--ghost">Type Reset Button Ghost</button>
                        </p>
                        <p>
                            <a class="button">Link Button</a> { " " }
                            <a class="button button--ghost">Link Button Ghost</a>
                        </p>
                        <p>
                            <button type="button" disabled class="button">Button Disabled</button>
                            { " " }
                            <button type="button" disabled class="button button--ghost">Button Ghost Disabled</button>
                        </p>
                        <p>
                            <button class="button button--small">Button Small</button>
                            { " " }
                            <button class="button button--ghost button--small">Button Ghost Small</button>
                        </p>
                        <p>
                            <a class="button button--link" href="src/pages/basestyle">Button Link</a><br/>
                            <button class="button button--link">Type Button Link</button>
                            <br/>
                            <a class="button button--link button--small" href="src/pages/basestyle">Button Link Small</a>
                        </p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" class="feather feather-alert-circle">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                <line x1="12" y1="16" x2="12.01" y2="16"></line>
                            </svg>
                            <i class="feather" data-feather="alert-circle"></i> Feather Icon
                        </p>
                        <hr/>
                        <h2>1.3 Forms</h2>
                        <form>
                            <p>Placing form elements on a page should just work without having to apply extra classes or custom wrapping elements. However,
                                a <b>&lt;fieldset&gt;</b> element provides a nice opportunity to group multiple form elements.</p>
                            <fieldset>
                                <label htmlFor="textInput-1">Text Input</label><br/>
                                <input id="textInput-1" type="text" name="text" placeholder="Placeholder"/><br/>
                                <label htmlFor="textInput-2">Text Input Disabled</label><br/>
                                <input id="textInput-2" type="text" name="text" placeholder="Placeholder" disabled/><br/>
                                <label htmlFor="textInput-3">Text Input Validation Error</label><br/>
                                <input id="textInput-3" type="text" name="text" value="Test" placeholder="Placeholder" class="input-validation-error"/><br/>
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
                                    <label class="visuallyHidden" htmlFor="selectInput">Select Input</label>
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
                                    <label class="visuallyHidden" htmlFor="searchInputSingle">Search</label>
                                    <input class="oneInputForm-input" type="search" id="searchInputSingle" placeholder="Enter search term..."/>
                                    <button class="button oneInputForm-button">Search</button>
                                </div>
                                <div class="oneInputForm">
                                    <label class="visuallyHidden" htmlFor="emailInputSingle">Subscribe</label>
                                    <input class="oneInputForm-input" type="email" id="emailInputSingle" placeholder="Email address"/>
                                    <button class="button oneInputForm-button">Subscribe</button>
                                </div>
                            </fieldset>
                        </form>
                        <hr/>
                        <h2>2.0 Helpers</h2>
                        <p>The BaseStyle includes some global CSS layout classes which help ensure a consistent appearance across components:</p>
                        <ul>
                            <li><code>.flyntComponent</code><br/>Wraps a component.</li>
                            <li><code>.componentSpacing</code><br/>Ensures consistent component top and bottom spacing.</li>
                            <li><code>.centerMaxWidthContainer</code><br/>Ensures consistent left and right padding and website max width.</li>
                            <li><code>.centerContentMaxWidth</code><br/>Ensures text content doesn't flow wider than 60 characters per line.</li>
                            <li><code>.centerContentMaxWidthLarge</code><br/>Ensures text content doesn't flow wider than 80 characters per line.</li>
                            <li><code>.preContent</code><br/>Ensures consistent positioning of content preceding the main section of a component.</li>
                            <li><code>.postContent</code><br/>Ensures consistent positioning of content following the main section of a component.</li>
                            <li><code>.scrollableTableWrapper</code><br/>Wrapping a table with a container element with this class makes the table scrollable on smaller screen sizes.
                            </li>
                            <li><code>.visuallyHidden</code><br/>Visually hides text in a way that screen readers will still read it.</li>
                        </ul>
                        <p>Other helper classes are:</p>
                        <div class="boxPadding boxShadow boxRadius">
                            <h3>Box Helpers</h3>
                            <p>Box helper classes can be used alone or in combination to ensure consistent styling across components.</p>
                            <ul>
                                <li>Using the <code>.boxPadding</code> class allows you to consistently style any content container as a responsive padding box.</li>
                                <li>Using the <code>.boxShadow</code> class allows you to give elements a box shadow with consistent appearance.</li>
                                <li>Using the <code>.boxRadius</code> class allows you to give elements a border radius.</li>
                            </ul>
                        </div>
                        <h2>2.1 Sizes</h2>
                        <p>Sizes are predefined css variables that can be used to add consistent spacing between elements.</p>
                        <div class={ "size-example-wrapper" }>
                            <div class={ "size-example" } style={ "width:var(--size-xs);" } title={ "--size-xs" }></div>
                            <div class={ "size-example" } style={ "width:var(--size-sm);" } title={ "--size-sm" }></div>
                            <div class={ "size-example" } style={ "width:var(--size-base);" } title={ "--size-base" }></div>
                            <div class={ "size-example" } style={ "width:var(--size-md);" } title={ "--size-md" }></div>
                            <div class={ "size-example" } style={ "width:var(--size-lg);" } title={ "--size-lg" }></div>
                            <div class={ "size-example" } style={ "width:var(--size-xl);" } title={ "--size-xl" }></div>
                            <div class={ "size-example" } style={ "width:var(--size-2xl);" } title={ "--size-2xl" }></div>
                            <div class={ "size-example" } style={ "width:var(--size-3xl);" } title={ "--size-3xl" }></div>
                            <div class={ "size-example" } style={ "width:var(--size-huge);" } title={ "--size-huge" }></div>
                        </div>
                        <hr/>
                        <h2>3.0 Themes</h2>
                    </section>
                </div>
            </div>
            <div data-theme="light">
                <br/><br/>
                <div class="centerMaxWidthContainer">
                    <div class="centerContentMaxWidth">
                        <section>
                            <h3>Light Theme</h3>
                            <p>Using the <code>data-theme="light"</code> attribute allows you to style a group of content with a light background and dark text.</p>
                            <p>
                                <i class="feather" data-feather="alert-circle"></i> Feather Icon
                            </p>
                            <div>
                                <a href="#">Regular link</a><br/>
                                <a class="button button--link" href="#">Button Link</a><br/><br/>
                                <button type="button" class="button">Button</button>
                                <button type="button" class="button button--ghost">Button Ghost</button>
                                <br/><br/>
                                <button type="button" class="button" disabled>Button Disabled</button>
                                <button type="button" class="button button--ghost" disabled>Button Ghost Disabled</button>
                                <hr/>
                                <label htmlFor="textInput-4">Text Input</label><br/>
                                <input id="textInput-4" type="text" name="text" placeholder="Placeholder"/>
                                <br/>
                                <div class="select">
                                    <label class="visuallyHidden" htmlFor="selectInputLight">Select Input</label>
                                    <select name="select" id="selectInputLight">
                                        <option value="select-value-1">Select Option #1</option>
                                        <option value="select-value-2">Select Option #2</option>
                                        <option value="select-value-3">Select Option #3</option>
                                    </select>
                                </div>
                                <br/><br/>
                                <fieldset>
                                    <legend>Checkbox Input</legend>
                                    <div>
                                        <input type="checkbox" id="checkbox-light-1" required/>
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
                            <div class="scrollableTableWrapper">
                                <table class="boxRadius">
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
                </div>
                <br/><br/>
            </div>
            <div data-theme="dark">
                <br/><br/>
                <div class="centerMaxWidthContainer">
                    <div class="centerContentMaxWidth">
                        <section>
                            <h3>Dark Theme</h3>
                            <p>Using the <code>data-theme="dark"</code> attribute allows you a group of content with a dark background and light text.</p>
                            <p>
                                <i class="feather" data-feather="alert-circle"></i> Feather Icon
                            </p>
                            <div>
                                <a href="#">Regular link</a><br/>
                                <a class="button button--link" href="#">Button Link</a><br/><br/>
                                <button type="button" class="button">Button</button>
                                <button type="button" class="button button--ghost">Button Ghost</button>
                                <br/><br/>
                                <button type="button" class="button" disabled>Button Disabled</button>
                                <button type="button" class="button button--ghost" disabled>Button Ghost Disabled</button>
                                <hr/>
                                <label htmlFor="textInput-5">Text Input</label><br/>
                                <input id="textInput-5" type="text" name="text" placeholder="Placeholder"/>
                                <br/>
                                <div class="select">
                                    <label class="visuallyHidden" htmlFor="selectInputDark">Select Input</label>
                                    <select name="select" id="selectInputDark">
                                        <option value="select-value-1">Select Option #1</option>
                                        <option value="select-value-2">Select Option #2</option>
                                        <option value="select-value-3">Select Option #3</option>
                                    </select>
                                </div>
                                <br/><br/>
                                <fieldset>
                                    <legend>Checkbox Input</legend>
                                    <div>
                                        <input type="checkbox" id="checkbox-dark-1" required/>
                                        <label htmlFor="checkbox-dark-1">Checkbox Label #1</label>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend>Radio Inputs</legend>
                                    <div>
                                        <input type="radio" id="radio-dark-1" name="radio-group-dark"/>
                                        <label htmlFor="radio-dark-1">Radio Label #1</label>
                                        <br/>
                                        <input type="radio" id="radio-dark-2" name="radio-group-dark"/>
                                        <label htmlFor="radio-dark-2">Radio Label #2</label>
                                    </div>
                                </fieldset>
                            </div>
                            <div class="scrollableTableWrapper">
                                <table class="boxRadius">
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
                </div>
                <br/><br/>
            </div>
            <div data-theme="hero">
                <br/><br/>
                <div class="centerMaxWidthContainer">
                    <div class="centerContentMaxWidth">
                        <section>
                            <h3>Hero Theme</h3>
                            <p>Using the <code>data-theme="hero"</code> attribute allows you a group of content with a hero background and dark text.</p>
                            <p>
                                <i class="feather" data-feather="alert-circle"></i> Feather Icon
                            </p>
                            <div>
                                <a href="#">Regular link</a><br/>
                                <a class="button button--link" href="#">Button Link</a><br/><br/>
                                <button type="button" class="button">Button</button>
                                <button type="button" class="button button--ghost">Button Ghost</button>
                                <br/><br/>
                                <button type="button" class="button" disabled>Button Disabled</button>
                                <button type="button" class="button button--ghost" disabled>Button Ghost Disabled</button>
                                <hr/>
                                <label htmlFor="textInput-6">Text Input</label><br/>
                                <input id="textInput-6" type="text" name="text" placeholder="Placeholder"/>
                                <br/>
                                <div class="select">
                                    <label class="visuallyHidden" htmlFor="selectInputHero">Select Input</label>
                                    <select name="select" id="selectInputHero">
                                        <option value="select-value-1">Select Option #1</option>
                                        <option value="select-value-2">Select Option #2</option>
                                        <option value="select-value-3">Select Option #3</option>
                                    </select>
                                </div>
                                <br/><br/>
                                <fieldset>
                                    <legend>Checkbox Input</legend>
                                    <div>
                                        <input type="checkbox" id="checkbox-hero-1" required/>
                                        <label htmlFor="checkbox-hero-1">Checkbox Label #1</label>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend>Radio Inputs</legend>
                                    <div>
                                        <input type="radio" id="radio-hero-1" name="radio-group-hero"/>
                                        <label htmlFor="radio-hero-1">Radio Label #1</label>
                                        <br/>
                                        <input type="radio" id="radio-hero-2" name="radio-group-hero"/>
                                        <label htmlFor="radio-hero-2">Radio Label #2</label>
                                    </div>
                                </fieldset>
                            </div>
                            <div class="scrollableTableWrapper">
                                <table class="boxRadius">
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
                </div>
                <br/>
            </div>
            <div data-theme="hero">
                <br/>
                <div class="centerMaxWidthContainer">
                    <div class="centerContentMaxWidth">
                        <section>
                            <div class="boxPadding boxRadius" data-theme="reset">
                                <h3>Reset Theme</h3>
                                <p>Using the <code>data-theme="reset"</code> class allows you to revert the styles of a parent theme back to the inital styles.</p>
                                <p>
                                    <i class="feather" data-feather="alert-circle"></i> Feather Icon
                                </p>
                                <div>
                                    <a href="#">Regular link</a><br/>
                                    <a class="button button--link" href="#">Button Link</a><br/><br/>
                                    <button type="button" class="button">Button</button>
                                    <button type="button" class="button button--ghost">Button Ghost</button>
                                    <br/><br/>
                                    <button type="button" class="button" disabled>Button Disabled</button>
                                    <button type="button" class="button button--ghost" disabled>Button Ghost Disabled</button>
                                    <hr/>
                                    <label htmlFor="textInput-7">Text Input</label><br/>
                                    <input id="textInput-7" type="text" name="text" placeholder="Placeholder"/>
                                    <br/>
                                    <div class="select">
                                        <label class="visuallyHidden" htmlFor="selectInputReset">Select Input</label>
                                        <select name="select" id="selectInputReset">
                                            <option value="select-value-1">Select Option #1</option>
                                            <option value="select-value-2">Select Option #2</option>
                                            <option value="select-value-3">Select Option #3</option>
                                        </select>
                                    </div>
                                    <br/><br/>
                                    <fieldset>
                                        <legend>Checkbox Input</legend>
                                        <div>
                                            <input type="checkbox" id="checkbox-reset-1" required/>
                                            <label htmlFor="checkbox-reset-1">Checkbox Label #1</label>
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <legend>Radio Inputs</legend>
                                        <div>
                                            <input type="radio" id="radio-reset-1" name="radio-group-reset"/>
                                            <label htmlFor="radio-reset-1">Radio Label #1</label>
                                            <br/>
                                            <input type="radio" id="radio-reset-2" name="radio-group-reset"/>
                                            <label htmlFor="radio-reset-2">Radio Label #2</label>
                                        </div>
                                    </fieldset>
                                </div>
                                <div class="scrollableTableWrapper">
                                    <table class="boxRadius">
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
                            </div>
                        </section>
                    </div>
                </div>
                <br/><br/>
            </div>

        </>
    )
}

export default BaseStyle
