import axios from "axios";

export async function getVideoYoutube(){
    try {
        const ytApiKey = process.env.NEXT_PUBLIC_YT_ID!
        const googleApiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY!
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${ytApiKey}&maxResults=1&order=date&type=video&key=${googleApiKey}`
        const res = await axios.get(url)
        return res.data
    } catch (error) {
        throw error
    }

}