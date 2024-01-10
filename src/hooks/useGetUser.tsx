import { IUserProp } from "@/types";
import { useState } from "react"

export const useGetUsers = () => {
    const [user, setUser] = useState<IUserProp[]>([]);
    const [loading, setLoading] = useState(false);

    const getUsers = async () => {
        try {
            setLoading(true);
            const resp = await fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users");
            const response = await resp.json();
            setUser(response)
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error, "An error occured")
        }
    }
    return { user, loading, getUsers }
}

export const useGetUserDetails = () => {
    const [details, setDetails] = useState<IUserProp>();
    const [loading, setLoading] = useState(false);

    const getUsersDetails = async (id: string | string[]) => {
        try {
            setLoading(true);
            const resp = await fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`);
            const response = await resp.json();
            setDetails(response)
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error, "An error occured")
        }
    }
    return { details, loading, getUsersDetails }
}