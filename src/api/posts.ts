import createClient from '@/lib/axios/axios'
import type { FilterTransaction } from '@type'

const client = createClient()

export async function listPost(filter: FilterTransaction){
    const url = '/post/list'
    try {
        const { data } = await client.get(url, { params: filter })
        return data
    } catch (error: any) {
        return error.response.data
    }
}

export async function listComment(filter: FilterTransaction){
    const url = '/post/list'
    try {
        const { data } = await client.get(url, { params: filter })
        console.log(data)
        return data.data
    } catch (error: any) {
        return error.response.data
    }
}