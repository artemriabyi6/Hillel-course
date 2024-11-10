import { StopWatch } from "./stopwatch-logic.js";
import {StopWatchUi} from "./stopwatch-ui.js";

const initialTime = {hours: 0, minutes: 0, seconds: 0};
const ui = new StopWatchUi(initialTime);
const onTick = (time) => ui.setTime(time);
const stopwatch = new StopWatch(onTick);

ui.addStartBtnListener(e => stopwatch.start());
ui.addPauseBtnListener(e => stopwatch.pause());
ui.addResetBtnListener(e => stopwatch.reset());

ui.appEnd()
// ui.createDisplay()
// ui.createStartBtn()
// ui.createPauseBtn()
// ui.createResetBtn()




