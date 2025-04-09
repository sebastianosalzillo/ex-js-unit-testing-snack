// Creare un test che verifichi la seguente descrizione:

//👉 "La funzione getInitials restituisce le iniziali di un nome completo."

function  getInitials (nome,cognome) {

    return nome.at(0) + cognome.at(0)
}


test("la funzione 'getInitials' restituisce le di un nome completo?", () => {
    expect(getInitials("Sebastiano" ,"Salzillo")).toBe("SS")
})