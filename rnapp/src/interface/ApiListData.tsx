export interface ApiListData {
    info:{
        page: number,
        results: number,
        seed: string,
        version: string
    },
    results:
        {
            cell: string,
            email: string,
            gender: string,
            location: {
                city: string,
                country: string
            },
            name: {
                title: string,
                first: string,
                last: string
            },
            picture: {
                large: string,
                medium: string,
                thumbnail: string
            }
        }[]
}

export interface userInteface  {
    cell: string,
    email: string,
    gender: string,
    location: {
        city: string,
        country: string
    },
    name: {
        title: string,
        first: string,
        last: string
    },
    picture: {
        large: string,
        medium: string,
        thumbnail: string
    }
}