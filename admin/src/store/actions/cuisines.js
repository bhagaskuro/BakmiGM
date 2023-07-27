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

export const fetchCuisines = () => {
  return (dispatch) => {
    fetch("https://bakmigm.moonshard.cloud/admin/cuisines/", {
      method: "GET",
      headers: {
        access_token: localStorage.access_token,
      },
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
      headers: {
        access_token: localStorage.access_token,
      },
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

export const deleteCuisine = (id) => {
  return (dispatch) => {
    fetch("https://bakmigm.moonshard.cloud/admin/cuisines/" + id, {
      method: "DELETE",
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Something went wrong");
        dispatch(fetchCuisines());
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addCuisine = (form) => {
  return async (dispatch) => {
    await fetch("https://bakmigm.moonshard.cloud/admin/cuisines", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        access_token: localStorage.access_token,
      },
      body: JSON.stringify(form),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Something went wrong");

        dispatch(fetchCuisines());
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
