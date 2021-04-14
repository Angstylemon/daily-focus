import React from "react";
import PropTypes from "prop-types";
import style from "./style.module.scss";
import { Fab } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";

export default function QuoteContent({ text, author, setIsSwitchingSubject }) {
    return (
        <div>
            <p className={style.content}>{text}</p>
            <p className={style.author}>{"- " + author}</p>
            <div className={style.settingButtonDiv}>
                <Fab
                    className={style.settingButton}
                    color="primary"
                    size="medium"
                    onClick={() => setIsSwitchingSubject(true)}
                >
                    <SettingsIcon />
                </Fab>
            </div>
        </div>
    );
}

QuoteContent.propTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    setIsSwitchingSubject: PropTypes.func.isRequired,
};
