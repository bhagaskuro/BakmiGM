export const fetchDataCuisines = (data) => {
  return {
    payload: data,
    type: "fetchCuisines",
  };
};

export const fetchDataCuisine = (data) => {
  return {
    payload: data,
    type: "fetchCuisine",
  };
};

export const fetchCuisines = (data) => {
  return (dispatch) => {
    fetch("https://bakmigm.moonshard.cloud/client/cuisines/", {
      method: "GET",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Something went wrong");
        return res.json();
      })
      .then((data) => {
        dispatch(fetchDataCuisines(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchCuisine = (id) => {
  return (dispatch) => {
    fetch("https://bakmigm.moonshard.cloud/client/cuisines/" + id, {
      method: "GET",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Something went wrong");
        return res.json();
      })
      .then((data) => {
        dispatch(fetchDataCuisine(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
