export const openModalAction = (details) => ({
  type: 'OPEN_MODAL',
  payload: { details },
});

export const closeModalAction = () => ({
  type: 'CLOSE_MODAL',
});
