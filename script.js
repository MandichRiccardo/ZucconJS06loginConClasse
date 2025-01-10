class Utente {
    constructor(cognome, nome, email, comune_residenza, password) {
        this.cognome = cognome;
        this.nome = nome;
        this.email = email;
        this.comune_residenza = comune_residenza;
        this.password = password;
    }

    toString() {
        return `Cognome: ${this.cognome}, Nome: ${this.nome}, Email: ${this.email}, Comune di Residenza: ${this.comune_residenza}`;
    }
}

function inputDati() {
    let cognome = document.querySelector('input[name="cognome"]').value;
    let nome = document.querySelector('input[name="nome"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let comune_residenza = document.querySelector('input[name="comune_residenza"]').value;
    let password = document.querySelector('input[name="password"]').value;

    let utente = new Utente(cognome, nome, email, comune_residenza, password);
    let datiAnagrafici = utente.toString();

    let outputDiv = document.createElement('div');
    outputDiv.textContent = datiAnagrafici;
    document.body.appendChild(outputDiv);
}
