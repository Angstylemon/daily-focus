import PropTypes from "prop-types";
import { Fab } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import style from "./style.module.scss";

function SwitchCategory({ cancelClicked, updateCategory, currentCategory }) {
    return (
        <div className={style.container}>
            <div className={style.listHolder}>
                <div
                    className={style.categoryOption}
                    onClick={() => updateCategory("Taylor Swift")}
                >
                    Taylor Swift
                    {currentCategory === "Taylor Swift" ? (
                        <RadioButtonCheckedIcon />
                    ) : (
                        <RadioButtonUncheckedIcon />
                    )}
                </div>
                <div className={style.categoryOption} onClick={() => updateCategory("Kanye West")}>
                    Kanye West
                    {currentCategory === "Kanye West" ? (
                        <RadioButtonCheckedIcon />
                    ) : (
                        <RadioButtonUncheckedIcon />
                    )}
                </div>
                <div
                    className={style.categoryOption}
                    onClick={() => updateCategory("Chuck Norris")}
                >
                    Chuck Norris
                    {currentCategory === "Chuck Norris" ? (
                        <RadioButtonCheckedIcon />
                    ) : (
                        <RadioButtonUncheckedIcon />
                    )}
                </div>
                <div className={style.categoryOption} onClick={() => updateCategory("Anime")}>
                    Anime ( ͡° ͜ʖ ͡°)
                    {currentCategory === "Anime" ? (
                        <RadioButtonCheckedIcon />
                    ) : (
                        <RadioButtonUncheckedIcon />
                    )}
                </div>
                <div className={style.categoryOption} onClick={() => updateCategory("Programming")}>
                    Programming
                    {currentCategory === "Programming" ? (
                        <RadioButtonCheckedIcon />
                    ) : (
                        <RadioButtonUncheckedIcon />
                    )}
                </div>
            </div>
            <div className={style.settingButtonDiv}>
                <Fab
                    className={style.settingButton}
                    color="primary"
                    size="medium"
                    onClick={() => cancelClicked()}
                >
                    <ArrowBackIcon />
                </Fab>
            </div>
        </div>
    );
}

SwitchCategory.propTypes = {
    cancelClicked: PropTypes.func.isRequired,
    updateCategory: PropTypes.func.isRequired,
    currentCategory: PropTypes.string.isRequired,
};

export default SwitchCategory;
