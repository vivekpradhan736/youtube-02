import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: { hl: 'en', gl: 'US' },
    headers: {
        "X-RapidAPI-Key": '70960ec2abmsh157262bbbd8ed04p1ffd88jsn1bf249976111',
        "X-RapidAPI-Host": 'youtube138.p.rapidapi.com',
    },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};