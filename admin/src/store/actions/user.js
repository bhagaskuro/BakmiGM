export const reqLogin = (form) => {
  return async () => {
    console.log(form);
    await fetch("https://bakmigm.moonshard.cloud/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Something went wrong");
        return res.json();
      })
      .then((data) => {
        localStorage.access_token = data.access_token;
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const register = (form) => {
  return async () => {
    console.log(form);
    await fetch("https://bakmigm.moonshard.cloud/admin/register", {
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

        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
