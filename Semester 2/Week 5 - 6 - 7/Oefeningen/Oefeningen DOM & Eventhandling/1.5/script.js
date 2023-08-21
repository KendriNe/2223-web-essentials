function splitsen() {
    let emailadres = document.getElementById("mailadres").value;

    const [name, domain] = emailadres.split('@');
    const [name1, name2] = name.split('.');
    const [subdomain, extension] = domain.split('.');

    document.getElementById("naam").value = name1;
    document.getElementById("naam2").value = name2;
    document.getElementById("subdomein").value = subdomain
    document.getElementById("domein").value = extension;
}