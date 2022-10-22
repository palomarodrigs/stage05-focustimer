// ES6 Modules
// default import
import Controls from "./controls.js";
import Timer from "./timer.js";
import Sound from "./sounds.js";
import Events from "./events.js";
import {
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonSoundOff,
  buttonSoundOn,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js";

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
});

const sound = Sound();

Events({ controls, timer, sound });
