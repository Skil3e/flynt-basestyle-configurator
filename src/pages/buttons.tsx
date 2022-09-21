const ButtonsPage = () => {
    return (
        <div className="componentSpacing centerMaxWidthContainer">
            <div className="centerContentMaxWidth">
                <h1>1.2 Buttons</h1>
                <p>
                    <button type="button">A <b>&lt;button&gt;</b> element without a class should have its styles reset, so it can be used as a semantic tag on other interface elements,
                        like the arrows of a slider, a closing &times; or a burger menu.
                    </button>
                </p>
                <p>
                    <button type="button" className="button">Type Button</button>
                    { " " }
                    <button type="button" className="button button--ghost">Type Button Ghost</button>
                </p>
                <p>
                    <button type="submit" className="button">Type Submit Button</button>
                    { " " }
                    <button type="submit" className="button button--ghost">Type Submit Button Ghost</button>
                </p>
                <p>
                    <button type="reset" className="button">Type Reset Button</button>
                    { " " }
                    <button type="reset" className="button button--ghost">Type Reset Button Ghost</button>
                </p>
                <p>
                    <a class="button">Link Button</a> { " " }
                    <a class="button button--ghost">Link Button Ghost</a>
                </p>
                <p>
                    <button type="button" disabled className="button">Button Disabled</button>
                    { " " }
                    <button type="button" disabled className="button button--ghost">Button Ghost Disabled</button>
                </p>
                <p>
                    <button className="button button--small">Button Small</button>
                    { " " }
                    <button className="button button--ghost button--small">Button Ghost Small</button>
                </p>
                <p>
                    <a className="button button--link" href="">Button Link</a><br/>
                    <button className="button button--link">Type Button Link</button>
                    <br/>
                    <a className="button button--link button--small" href="">Button Link Small</a>
                </p>
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                         stroke-linejoin="round" className="feather feather-alert-circle">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <i className="feather" data-feather="alert-circle"></i> Feather Icon
                </p>
            </div>
        </div>
    )
}

export default ButtonsPage
