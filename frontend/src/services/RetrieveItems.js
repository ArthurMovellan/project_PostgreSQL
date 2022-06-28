const RetrieveItems = {
    getItems: async (toUseFunction, customer) => {
        const json = "{\"function\": \"test\", \"customer\": \"Lily Bush\"}"

        const formData = new FormData();
        formData.append("data", json);

        const config = {
            method: "GET",
            body: formData,
        };
        const response = await fetch("http://127.0.0.1:8000/items",config);
        return response.json();
    }
}

export default RetrieveItems