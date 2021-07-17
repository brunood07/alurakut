import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
    if(request.method === 'POST') {
        const TOKEN = '17ac7fb06fe224abe44fd4c5625ab4';
        const client = new SiteClient(TOKEN);

        const registroCriado = await client.items.create({
            itemType: "975767", // Model de comunidades criado pelo DATO
            ...request.body,
            title: "Comunidade de teste",
            imageUrl: "https://github.com/brunood07",
            creatorSlug: "brunood07"
        })

        console.log(registroCriado);

        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado
        })
        return;
    }    

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })
}