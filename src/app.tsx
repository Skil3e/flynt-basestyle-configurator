import BaseStyle from "./pages/basestyle";
import logo from "./assets/flynt-logo-brand.svg"
import CustomizeToolbar from "./compoenents/customizeToolbar";
import Router, { Route } from 'preact-router';
import { Link } from 'preact-router/match';
import ButtonsPage from "./pages/buttons";
import { Themes } from "./pages/themes";
import { Typography } from "./pages/typography";
import { GetFile } from "./pages/getFile";
import { Home } from "./pages/home";
import { ListAndTables } from "./pages/list-tables";
import { Forms } from "./pages/forms";
import { Helpers } from "./pages/helpers";
import { useState } from "preact/compat";
import { Popover } from "react-tiny-popover";
import { useSettingsStore } from "./utils/store";
import { getFormattedData } from "./utils/utils";

useSettingsStore.getState().initLocalStorage()

export function App() {
    const values = useSettingsStore()

    return (
        <div>
            <style>
                { getFormattedData( values ) }
            </style>
            <header class={ "header app-ui" }>
                <div class={ "header__inner centerMaxWidthContainer" }>
                    <Link class={ "header__brand" } href="/">
                        <img src={ logo } alt="Flynt Logo" style={ "width: 134px" }/>
                        <span>Base Style Customizer</span>
                    </Link>
                    <Menu/>
                </div>
            </header>
            <CustomizeToolbar/>
            <main class={ "main" }>
                <Router>
                    <Route path={ "/" } component={ Home }/>
                    <Route path={ "/typography" } component={ Typography }/>
                    <Route path={ "/list-tables" } component={ ListAndTables }/>
                    <Route path={ "/buttons" } component={ ButtonsPage }/>
                    <Route path={ "/forms" } component={ Forms }/>
                    <Route path={ "/helpers" } component={ Helpers }/>
                    <Route path={ "/themes" } component={ Themes }/>
                    <Route path={ "/preview" } component={ BaseStyle }/>
                    <Route path={ "/get-file" } component={ GetFile }/>
                </Router>
            </main>

        </div>
    )
}

const Menu = () => {
    const [ isOpen, toggle ] = useState( false );
    return (
        <nav class={ "header__nav" }>
            <Popover isOpen={ isOpen }
                     onClickOutside={ () => toggle( false ) }
                     positions={ [ "bottom" ] }
                     align={ "start" }
                     padding={ 10 }
                     content={
                         <div class={ "header__nav__dropdown app-ui" }>
                             <Link onClick={ () => toggle( false ) } activeClassName={ "active" } href={ "/typography" }>Typography</Link>
                             <Link onClick={ () => toggle( false ) } activeClassName={ "active" } href={ "/list-tables" }>List & Tables</Link>
                             <Link onClick={ () => toggle( false ) } activeClassName={ "active" } href={ "/buttons" }>Buttons</Link>
                             <Link onClick={ () => toggle( false ) } activeClassName={ "active" } href={ "/forms" }>Forms</Link>
                         </div>
                     }>
                <button type={ "button" } onClick={ () => toggle( true ) }>Base</button>
            </Popover>

            <Link activeClassName={ "active" } href={ "/helpers" }>Helpers</Link>
            <Link activeClassName={ "active" } href={ "/themes" }>Themes</Link>
            <Link activeClassName={ "active" } href={ "/preview" }>Preview</Link>
            <Link activeClassName={ "active" } href={ "/get-file" }>Get the file</Link>
        </nav>
    )
}
