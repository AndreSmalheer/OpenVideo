import config from "@/config/config"

export async function getVideoInfo(videoId) {
    if (!videoId) return null;

    try {
        const url = `${config.apiUrl}/api/v1/videos/${videoId}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        return data;
    } catch (err) {
        console.error("Error fetching video:", err);
        return null;
    }
}
