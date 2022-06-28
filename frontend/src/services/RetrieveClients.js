const RetrieveClients = {
    getClients: async () => {
        const config = {method: "GET"};
        const response = await fetch("http://127.0.0.1:8000/customers",config);
        return response.json();
    }
}

export default RetrieveClients