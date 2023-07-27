export const fetchDataCategories = (data) => {
  return {
    payload: data,
    type: "fetchCategories",
  };
};

export const fetchCategories = () => {
  return (dispatch) => {
    fetch("https://bakmigm.moonshard.cloud/admin/categories", {
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
        dispatch(fetchDataCategories(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteCategory = (id) => {
  return (dispatch) => {
    fetch("https://bakmigm.moonshard.cloud/admin/categories/" + id, {
      method: "DELETE",
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Something went wrong");
        dispatch(fetchCategories());
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addCategory = (form) => {
  return async (dispatch) => {
    await fetch("https://bakmigm.moonshard.cloud/admin/categories", {
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

        dispatch(fetchCategories());
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
