function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const review = document.getElementById("review").value;

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    if (email === "" || !email.includes("@")) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (review === "") {
        alert("Please write a review.");
        return false;
    }

    alert(`Thank you, ${name}! Your feedback has been submitted.`);
    
    return true;
}
