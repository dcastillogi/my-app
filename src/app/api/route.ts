export const GET = () => {
    return new Response("Hello World!", {
        status: 200,
        headers: {
            "Content-Type": "text/plain"
        }
    })
}