export const fetchDataIngredients = (data) => {
  return {
    payload: data,
    type: "fetchIngredients",
  };
};

export const fetchIngredients = () => {
  return (dispatch) => {
    fetch("https://bakmigm.moonshard.cloud/admin/ingredient", {
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
        dispatch(fetchDataIngredients(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteIngredient = (id) => {
  return (dispatch) => {
    fetch("https://bakmigm.moonshard.cloud/admin/ingredient/" + id, {
      method: "DELETE",
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Something went wrong");
        dispatch(fetchIngredients());
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addIngredient = (form) => {
  return async (dispatch) => {
    await fetch("https://bakmigm.moonshard.cloud/admin/ingredient", {
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

        dispatch(fetchIngredients());
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
