function FA() {
  return { type: "CHANGE_TO_FARSI" };
}

function EN() {
  return { type: "CHANGE_TO_ENGLISH" };
}

export const languageAction = { FA, EN };