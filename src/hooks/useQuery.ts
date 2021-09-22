import React from "react"





export const useQuery = (query: string, arr: any) => {
    const filteredArr = React.useMemo(() => {
        if (query === "") {
            return arr
        } else {
            return arr.filter((item: any) => item.title.toLowerCase().includes(query.toLowerCase()))
        }
    }, [query, arr])
    return filteredArr
}