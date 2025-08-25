export async function GET() {
    const filmes = [
        {image: '/img/f-emalta-1.jpeg', numero: "/1.png", id: 1},
        {image: '/img/f-emalta-2.jpeg', numero: "/2.png", id: 1},
        {image: '/img/f-emalta-3.jpeg', numero: "/3.png", id: 1},
        {image: '/img/f-emalta-4.jpeg', numero: "/4.png", id: 1},
        {image: '/img/f-emalta-5.jpeg', numero: "/5.png", id: 1},
    ];

    return Response.json({filmes})
}
