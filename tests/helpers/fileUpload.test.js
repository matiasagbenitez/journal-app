import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
    cloud_name: 'drvyc6yyn',
    api_key: '148976646438218',
    api_secret: 'isU3PLNVx3t9ivpH5SszSmpSuso',
    secure: true
});

describe('Pruebas en fileUpload', () => {
    test('debe de subir un archivo correctamente a cloudinary', async () => {
        // const imageUrl = 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png';
        // const resp = await fetch(imageUrl);
        // const blob = await resp.blob();
        // const file = new File([blob], 'foto.jpg');
        // const url = await fileUpload(file);
        // expect(typeof url).toBe('string');

        // // Borrar imagen por ID
        // const segments = url.split('/');
        // const imageId = segments[segments.length - 1].replace('.png', '');
        // const cloudResp = await cloudinary.api.delete_resources(['journal/' + imageId], {
        //     resource_type: 'image'
        // });
        
    })

    test('debe de retornar null', async () => {
        const file = new File([], 'foto.jpg');
        const url = await fileUpload(file);
        expect(url).toBe(null);

    })
})