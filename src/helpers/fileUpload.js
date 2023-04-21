export const fileUpload = async (file) => {
    if (!file) return null;
    const cloudUrl = 'https://api.cloudinary.com/v1_1/drvyc6yyn/upload';
    const formData = new FormData();
    formData.append('upload_preset', 'journal-APP');
    formData.append('file', file);

    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });
        if (!resp.ok) throw Error('No se pudo subir el archivo.');
        const cloudResp = await resp.json();
        return cloudResp.secure_url;
    }
    catch (error) {
        return null;
        // throw new Error(error.message);
    }
}