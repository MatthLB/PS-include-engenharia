
// ======================== responsivo ======================

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));










// botão Tema

const themeToggleButton = document.getElementById("theme-toggle");

// Verifique se o tema está salvo no armazenamento local
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
}

// Alterna o tema e salva a preferência no armazenamento local
themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Salva o tema selecionado
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});



// add posts

// Função para adicionar um post

// Função para abrir o modal
function openModal() {
    document.getElementById("post-modal").style.display = "flex";
}

// Função para fechar o modal
function closeModal() {
    document.getElementById("post-modal").style.display = "none";
}

// Função para adicionar um post
function addPost() {
    const postTitle = document.getElementById("post-title").value;
    const postImage = document.getElementById("post-image").value;
    const postDescription = document.getElementById("post-description").value;
    const postContainer = document.getElementById("post-container");

    // Verifica se os campos obrigatórios estão preenchidos
    if (postTitle.trim() === "" || postDescription.trim() === "") {
        alert("Por favor, preencha o título e a descrição do post.");
        return;
    }

    // Cria a div para a imagem
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("post-image");
    
    if (postImage.trim() !== "") {
        const imageElement = document.createElement("img");
        imageElement.src = postImage;
        imageElement.alt = postTitle;
        imageDiv.appendChild(imageElement);
    }

    // Cria a div para o conteúdo (título e descrição)
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("post-content");

    const titleElement = document.createElement("h2");
    titleElement.textContent = postTitle;

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = postDescription;

    // Botão de excluir
    const deleteBtn = document.createElement("span");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Excluir";
    deleteBtn.onclick = () => {
        imageDiv.remove();
        contentDiv.remove();
    };

    // Adiciona o botão de excluir, título e descrição ao conteúdo
    contentDiv.appendChild(deleteBtn);
    contentDiv.appendChild(titleElement);
    contentDiv.appendChild(descriptionElement);

    // Adiciona as divs de imagem e conteúdo ao postContainer
    postContainer.appendChild(imageDiv);
    postContainer.appendChild(contentDiv);

    // Limpa os campos e fecha o modal
    document.getElementById("post-title").value = "";
    document.getElementById("post-image").value = "";
    document.getElementById("post-description").value = "";
    closeModal();
}

