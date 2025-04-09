import {
  duoLayer,
  FromAndToKeyCode,
  hyperLayer,
  // conditions
  ifApp,
  ifDevice,
  ifDeviceExists,
  ifEventChanged,
  ifInputSource,
  ifKeyboardType,
  ifVar,
  KeyAlias,
  layer,
  LetterKeyCode,
  // from / map()
  map,
  mapConsumerKey,
  mapDoubleTap,
  mapPointingButton,
  mapSimultaneous,
  ModifierKeyAlias,
  modifierKeyAliases,
  ModifierKeyCode,
  modifierLayer,
  ModifierParam,
  mouseMotionToScroll,
  MultiModifierAlias,
  multiModifierAliases,
  // rule and layers
  rule,
  simlayer,
  to$,
  toApp,
  toCgEventDoubleClick,
  toConsumerKey,
  toHyper,
  toInputSource,
  // to
  toKey,
  ToKeyParam,
  toMeh,
  toMouseCursorPosition,
  toMouseKey,
  toNone,
  toNotificationMessage,
  toPaste,
  toPointingButton,
  toRemoveNotificationMessage,
  toSetVar,
  toSleepSystem,
  toStickyModifier,
  toSuperHyper,
  toTypeSequence,
  toUnsetVar,
  // utils
  withCondition,
  withMapper,
  withModifier,
  writeToProfile,
} from "karabiner.ts";

let mapKeyToModifier = (key: FromAndToKeyCode, modifier: ModifierKeyCode) => {
  return map(key, "optionalAny")
    .toIfAlone(key, undefined, { halt: true })
    .toIfHeldDown(modifier, undefined, {})
    .toDelayedAction([], { key_code: key })
    .parameters({
      "basic.to_delayed_action_delay_milliseconds": 150,
      "basic.to_if_held_down_threshold_milliseconds": 150,
    });
};

// ! Change '--dry-run' to your Karabiner-Elements Profile name.
// (--dry-run print the config json into console)
// + Create a new profile if needed.

writeToProfile("Default profile", [
  rule("Hyper Key Configuration").manipulators([
    // caps-lock as hyper key
    map("caps_lock").toHyper().toIfAlone("escape"),
  ]),
  rule("Home Row Modifiers").manipulators([
    // -- left side
    mapKeyToModifier("a", "left_command"),
    mapKeyToModifier("s", "left_option"),
    mapKeyToModifier("d", "left_shift"),
    mapKeyToModifier("f", "left_control"),
    // -- right side
    mapKeyToModifier("semicolon", "left_command"),
    mapKeyToModifier("l", "left_option"),
    mapKeyToModifier("k", "left_shift"),
    mapKeyToModifier("j", "left_control"),
  ]),
]);
