const avatares = document.querySelectorAll('.avatar');
const personagem = document.querySelector('.personagem');
const nome = document.querySelector('.nome');
const botaoVoce = document.querySelector('.voce');

avatares.forEach(avatar => {
  avatar.addEventListener('click', () => {
    // Tira a borda de todo mundo
    avatares.forEach(a => a.classList.remove('selecionado'));
    botaoVoce.classList.remove('selecionado');

    // Coloca só em quem clicou
    avatar.classList.add('selecionado');
    personagem.classList.remove('foto-voce');
    personagem.src = avatar.src;

    if (avatar.src.includes('lucia')) {
      nome.textContent = 'lucia';
    } else if (avatar.src.includes('jason')) {
      nome.textContent = 'jason';
    } else if (avatar.src.includes('cj')) {
      nome.textContent = 'cj';
    }
  });
});

botaoVoce.addEventListener('click', () => {
  console.log('clicou no botão você');

  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.style.display = 'none';
  document.body.appendChild(input);
  input.click();

  input.onchange = () => {
    const arquivo = input.files[0];
    if (!arquivo) {
      input.remove();
      return;
    }

    const foto = URL.createObjectURL(arquivo);
    personagem.src = foto;
    nome.textContent = 'você';
    personagem.classList.add('foto-voce');

    avatares.forEach(a => a.classList.remove('selecionado'));
    botaoVoce.classList.add('selecionado');

    input.remove();
  };
});