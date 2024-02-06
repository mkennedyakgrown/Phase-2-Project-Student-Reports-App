function usePatch(formData, url = "http://localhost:4000/") {
  const fetchData = (formData) => {
    console.log(formData);
    const id = 0;
    const data = {};
    const patchPayload = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    // fetch(`${url}students/${id}`, patchPayload)
    //     .then(r => r.json())
    //     .then(data => console.log(data));
  };

  return [{ fetchData }];
}

export default usePatch;
