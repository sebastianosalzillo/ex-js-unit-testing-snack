// Creare un test che verifichi la seguente descrizione:

//👉 "La funzione getInitials restituisce le iniziali di un nome completo."

function getInitials(nome, cognome) {

    return nome.at(0) + cognome.at(0)
}


test("la funzione 'getInitials' restituisce le di un nome completo?", () => {
    expect(getInitials("Sebastiano", "Salzillo")).toBe("SS")
})


//Creare un test che verifichi la seguente descrizione:

//👉 "La funzione createSlug restituisce una stringa in lowercase."


function createSlug(str) {
    return str.toLowerCase()
}

test("la funzione 'createSlug' ritorna un astringa to lowercase", () => {
    expect(createSlug("Seba")).toBe("seba")
    expect(createSlug("SEBA")).toBe("seba")
})


//Creare un test che verifichi la seguente descrizione:

//👉 "La funzione average calcola la media aritmetica di un array di numeri."

function averange(arr) {
    const somma = arr.reduce((acc, c) => acc += c, 0)
    return somma / arr.length
}

test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    expect(averange([1, 2, 3])).toBe(2)
})

// Creare un test che verifichi la seguente descrizione:

//👉 "La funzione createSlug sostituisce gli spazi con -."

function createSlug2(str) {
    return str.toLowerCase().trim().replace(/\s+/g, "-");
}



test("La funzione 'createSlug' sostituisce gli spazi con -", () => {
    expect(createSlug2("ciao seba")).toBe("ciao-seba");
    expect(createSlug2("  ciao    seba bello ")).toBe("ciao-seba-bello");
    expect(createSlug2("HELLO WORLD")).toBe("hello-world");
});


// Creare un test che verifichi la seguente descrizione:

//👉 "La funzione isPalindrome verifica se una stringa è un palindromo."

function isPalindrome(str) {

    let result = str.split("").reverse().join("") === str ? true : false

    return result

}


test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
    expect(isPalindrome("ala")).toBe(true)
    expect(isPalindrome("seba")).toBe(false)
})



/// Creare un test che verifichi la seguente descrizione:

//👉 "La funzione createSlug lancia un errore se il titolo è vuoto o non valido."

function createSlug3(titolo) {
    if (titolo.trim().length > 10) {
        return true;
    } else {
        throw new Error("errore: il titolo è più corto di 10 caratteri");
    }
}

test("La funzione createSlug3 lancia un errore se il titolo è vuoto o non valido.", () => {
    expect(() => createSlug3("titolo")).toThrow();
});




// Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà id, title e slug
const posts = [
    { id: 1, title: "React Basics", slug: "react-basics" },
    { id: 2, title: "Advanced JS", slug: "advanced-js" },
    { id: 3, title: "Testing with Jest", slug: "testing-jest" }
];


function findPostById(postsArray, id) {
    if (typeof id !== 'number') throw new Error("ID deve essere un numero");
    return postsArray.find(post => post.id === id);
}

describe("Test su findPostById e struttura dati", () => {

    test("👉 La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
        const post = findPostById(posts, 2);
        expect(post).toEqual({ id: 2, title: "Advanced JS", slug: "advanced-js" });
    });

    test("❌ La funzione lancia un errore se l'id non è un numero", () => {
        expect(() => findPostById(posts, "2")).toThrow("ID deve essere un numero");
    });

    test("✅ Ogni post ha le proprietà id, title e slug", () => {
        posts.forEach(post => {
            expect(post).toHaveProperty("id");
            expect(post).toHaveProperty("title");
            expect(post).toHaveProperty("slug");
        });
    });

    test("📌 La proprietà 'id' di ogni post è un numero", () => {
        posts.forEach(post => {
            expect(typeof post.id).toBe("number");
        });
    })
})