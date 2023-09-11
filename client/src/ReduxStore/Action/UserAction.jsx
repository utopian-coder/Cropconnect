// userActions.js
import * as UserApi from "../Api/UserApi";

export const updateUser = (id, formData) => async (dispatch) => {
  dispatch({ type: "UPDATING_START" });
  try {
    const { data } = await UserApi.updateUser(id, formData);
    console.log("Action has been resumed : ", data);
    dispatch({ type: "UPDATING_SUCCESS", data: data });
  } catch (error) {
    dispatch({ type: "UPDATING_FAIL" });
  }
};

export const followUser = (id, data) => async (dispatch) => {
  await UserApi.followUser(id, data); // Await the API call
};

export const unfollowUser = (id, data) => async (dispatch) => {
  await UserApi.unfollowUser(id, data); // Await the API call
};
