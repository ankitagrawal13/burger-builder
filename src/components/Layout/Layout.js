import React from "react";
import Aux from "../../hoc/Auxiliary";
import styles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const layout = props => {
    return (
        <Aux>
            <Toolbar />
            <SideDrawer />
            <div>Sidebar, Backdrop</div>
            <main className={styles.Main}>
                {props.children}
            </main>
        </Aux>
    );
}

export default layout;