// Creare un test che verifichi la seguente descrizione:

//👉 "La funzione getInitials restituisce le iniziali di un nome completo."

function  getInitials (nome,cognome) {

    return nome.at(0) + cognome.at(0)
}


test("la funzione 'getInitials' restituisce le di un nome completo?", () => {
    expect(getInitials("Sebastiano" ,"Salzillo")).toBe("SS")
})


//Creare un test che verifichi la seguente descrizione:

//👉 "La funzione createSlug restituisce una stringa in lowercase."


function createSlug (str) {
    return str.toLowerCase()
}

test("la funzione 'createSlug' ritorna un astringa to lowercase",() => {
    expect(createSlug("Seba")).toBe("seba")
    expect(createSlug("SEBA")).toBe("seba")
})


