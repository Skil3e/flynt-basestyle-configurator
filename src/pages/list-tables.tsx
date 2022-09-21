export const ListAndTables = () => {
    return(
        <div class={ "centerCenterMaxWidth componentSpacing" }>
            <div class={ "centerContentMaxWidth" }>
                <h1>1.1 Lists & Tables</h1>
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                             strokeLinejoin="round" className="feather feather-check-circle">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        The <code>.iconList</code> class is a global helper
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                             strokeLinejoin="round" className="feather feather-check-circle">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        It allows you to add custom icon styles to lists
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                             strokeLinejoin="round" className="feather feather-check-circle">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        This will make content more engaging (hopefully)
                    </li>
                </ul>
                <h3>Tables</h3>
                <div class="scrollableTableWrapper">
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
                            <td>soy milk</td>
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
                            <td>flax egg</td>
                            <td>12</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>brown sugar</td>
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
            </div>
        </div>
    )
}
