const formular = document.querySelector("#newsletter")

formular.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = e.target.querySelector('input').value
    formular.textContent = `Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${email}`
})

// Ukol 7

const emailInput = document.querySelector("#emailInput")

emailInput.addEventListener("input", (e) => {
    if (e.target.value === "" || !e.target.value.includes("@") ) {
        e.target.classList.add("red-border")
    }
    else {
        e.target.classList.remove("red-border")
    }
    console.log(e.target.value)
})


