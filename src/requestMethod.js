import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDc5N2YwZTlhZWNmNDkyMjgwYmFhYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDc5NzI1OSwiZXhwIjoxNjQ1MDU2NDU5fQ.Gy80ys0CJnPYcoksSJgQ6EGq8-1TDlPeWJ7K1rs4XBw";
export const publicRequest =axios.create({
    baseURL:BASE_URL,
});
export const userRequest =axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${token}`}
});