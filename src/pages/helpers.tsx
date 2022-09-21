export const Helpers = () => {
    return (
        <div class={ "centerCenterMaxWidth componentSpacing" }>
            <div class={ "centerContentMaxWidth" }>
                <h1>2.0 Helpers</h1>
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
            </div>
        </div>
    )
}
