export const createNewTimer: Function = (
  title: String,
  time: String,
  playable: boolean,
  resetable: boolean,
  trashBtnVisible: boolean
) => {
  return {
    title,
    time,
    playable,
    resetable,
    trashBtnVisible,
  };
};
